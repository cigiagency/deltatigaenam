# Agenda Feature Design: API Integration

## Overview

This document outlines the design for replacing the static agenda data with data fetched from an external JSON API endpoint. The current implementation uses hardcoded data in `/src/data/agenda.ts`, but we want to fetch this data dynamically from `https://api.jsonbin.net/0qym5ltwomg3zl7q`.

The agenda data is displayed in two places:

1. The dedicated Agenda page (`/src/pages/Agenda.tsx`)
2. A preview section on the Index page (`/src/pages/Index.tsx`)

## Architecture

The solution will follow the existing pattern used for blog posts in the application:

1. Create an API service function to fetch agenda data from the JSON endpoint
2. Create a custom React hook to manage the data fetching logic
3. Update both the Agenda page component and Index page component to use the new hook

## Data Models

The API returns an array of agenda items with the following structure:

```typescript
interface AgendaItem {
	id: string;
	title: string;
	date: string; // ISO date format
	location: string;
	description: string;
	link: string;
}
```

This matches the existing `AgendaItem` type defined in `/src/data/agenda.ts`.

## API Service Implementation

Create a new file `/src/lib/agenda.ts` that will contain the API fetching logic:

```typescript
// /src/lib/agenda.ts
import { AgendaItem } from "@/data/agenda";

export async function getAgendaItems(): Promise<AgendaItem[]> {
	try {
		const response = await fetch(
			"https://api.jsonbin.net/0qym5ltwomg3zl7q"
		);

		if (!response.ok) {
			throw new Error(
				`Failed to fetch agenda items: ${response.status} ${response.statusText}`
			);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw error;
		}
		throw new Error(
			"An unknown error occurred while fetching agenda items"
		);
	}
}
```

## Custom Hook Implementation

Create a new file `/src/hooks/use-agenda.ts` that will manage the agenda data state:

```typescript
// /src/hooks/use-agenda.ts
import { useState, useEffect } from "react";
import { getAgendaItems } from "@/lib/agenda";
import { AgendaItem } from "@/data/agenda";

export const useAgenda = () => {
	const [agenda, setAgenda] = useState<AgendaItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAgenda = async () => {
			try {
				setLoading(true);
				const agendaItems = await getAgendaItems();
				setAgenda(agendaItems);
			} catch (err) {
				setError(
					err instanceof Error
						? err.message
						: "Failed to fetch agenda"
				);
			} finally {
				setLoading(false);
			}
		};

		fetchAgenda();
	}, []);

	return { agenda, loading, error };
};
```

## Component Updates

### Agenda Page Component

Update `/src/pages/Agenda.tsx` to use the new hook:

```typescript
// /src/pages/Agenda.tsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useAgenda } from "@/hooks/use-agenda";

const Agenda = () => {
	const location = useLocation();
	const canonical = `${window.location.origin}${location.pathname}`;
	const { agenda, loading, error } = useAgenda();

	const sortedAgenda = [...agenda].sort((a, b) =>
		a.date.localeCompare(b.date)
	);

	if (loading) {
		return (
			<main className="container py-12">
				<h1 className="text-3xl font-bold mb-6">Agenda Mendatang</h1>
				<p>Loading agenda...</p>
			</main>
		);
	}

	if (error) {
		return (
			<main className="container py-12">
				<h1 className="text-3xl font-bold mb-6">Agenda Mendatang</h1>
				<p>Error loading agenda: {error}</p>
			</main>
		);
	}

	return (
		<main className="container py-12">
			<Helmet>
				<title>
					Agenda Pelatihan & Sertifikasi | PT. Delta Tiga Enam
				</title>
				<meta
					name="description"
					content="Jadwal agenda pelatihan dan sertifikasi mendatang dari PT. Delta Tiga Enam."
				/>
				<link rel="canonical" href={canonical} />
			</Helmet>
			<h1 className="text-3xl font-bold mb-6">Agenda Mendatang</h1>
			<section className="grid gap-6 md:grid-cols-2">
				{sortedAgenda.map((a) => (
					<article
						key={a.id}
						className="rounded-lg border p-6 bg-card shadow-sm"
					>
						<header className="mb-2">
							<time className="text-sm text-muted-foreground">
								{new Date(a.date).toLocaleString("id-ID", {
									dateStyle: "full",
									timeStyle: "short",
								})}
							</time>
							<h2 className="text-xl font-semibold">{a.title}</h2>
						</header>
						<p className="text-sm text-muted-foreground mb-3">
							{a.location}
						</p>
						<p className="text-sm">{a.description}</p>
					</article>
				))}
			</section>
		</main>
	);
};

export default Agenda;
```

### Index Page Component

Update the agenda section in `/src/pages/Index.tsx` to use the new hook:

```
// In /src/pages/Index.tsx, replace the static agenda import and usage
// Replace the existing agenda import:
// import { agenda } from "@/data/agenda";
// With:
import { useAgenda } from "@/hooks/use-agenda";

// Replace the static agenda data usage:
// const upcoming = [...agenda]
//   .sort((a, b) => a.date.localeCompare(b.date))
//   .slice(0, 3);
// With:
const { agenda: upcoming } = useAgenda();
// Note: The Index page only needs the first 3 items, which we'll handle in the rendering
```

In the JSX section of the Index component, update the agenda rendering:

``jsx

<section className="py-12 border-t">
  <div className="container">
    <header className="flex items-end justify-between mb-6">
      <h2 className="text-2xl font-semibold">Agenda Mendatang</h2>
      <a className="story-link" href="/agenda">Lihat semua</a>
    </header>
    {/* Timeline style */}
    {upcoming.length > 0 ? (
      <ul className="relative border-l pl-4 md:pl-6 border-border">
        {upcoming
          .sort((a, b) => a.date.localeCompare(b.date))
          .slice(0, 3)
          .map((a) => (
            <li key={a.id} className="mb-6 last:mb-0 relative">
              <span className="absolute -left-2 md:-left-2.5 top-2 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-primary border-2 border-background shadow" />
              <div className="rounded-lg bg-card/80 backdrop-blur border shadow-sm p-4 md:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <time className="text-xs text-primary font-medium">
                    {new Date(a.date).toLocaleDateString("id-ID", {
                      weekday: "long",
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] bg-primary/10 text-primary">
                    {a.location}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-semibold">{a.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                  {a.description}
                </p>
                <div className="mt-3">
                  <Button size="sm" className="h-8 px-3" asChild>
                    <a href="/agenda">Daftar</a>
                  </Button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    ) : (
      <p>No upcoming events at the moment.</p>
    )}
  </div>
</section>
```

## Error Handling

The implementation includes proper error handling:

1. Network errors are caught and displayed to the user
2. HTTP errors are properly handled with descriptive messages
3. Loading states provide feedback during data fetching

## Testing

Unit tests should be implemented for:

1. The `getAgendaItems` function to verify API response handling
2. The `useAgenda` hook to verify state management
3. The Agenda component to verify proper rendering of loading, error, and success states

Example test for the API service:

```
// /src/lib/agenda.test.ts
import { getAgendaItems } from "./agenda";

global.fetch = jest.fn();

describe("getAgendaItems", () => {
	beforeEach(() => {
		(fetch as jest.Mock).mockClear();
	});

	it("should fetch and return agenda items", async () => {
		const mockData = [
			{
				id: "test",
				title: "Test Event",
				date: "2025-09-05T09:00:00+07:00",
				location: "Jakarta",
				description: "Test event description",
				link: "https://example.com/test",
			},
		];

		(fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockData),
		});

		const result = await getAgendaItems();
		expect(result).toEqual(mockData);
	});

	it("should throw an error when fetch fails", async () => {
		(fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

		await expect(getAgendaItems()).rejects.toThrow("Network error");
	});
});
```

## Migration Plan

1. Create the new API service file (`/src/lib/agenda.ts`)
2. Create the new custom hook (`/src/hooks/use-agenda.ts`)
3. Update the Agenda page component to use the new hook
4. Update the Index page component to use the new hook for the agenda preview
5. Remove the static data from `/src/data/agenda.ts` (after confirming the new implementation works)
6. Add unit tests for the new components and services
