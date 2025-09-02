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