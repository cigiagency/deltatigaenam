import { AgendaItem } from "@/data/agenda";

export async function getAgendaItems(): Promise<AgendaItem[]> {
	try {
		const response = await fetch(
			"https://api.jsonbin.net/0qym5ltwomg3zl7q"
		);

		if (!response.ok) {
			// Return user-friendly error instead of technical details
			throw new Error(
				"Unable to load agenda data"
			);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw error;
		}
		throw new Error(
			"Unable to load agenda data"
		);
	}
}