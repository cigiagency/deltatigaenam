export type AgendaItem = {
	id: string;
	title: string;
	date: string; // ISO
	location: string;
	description: string;
	link: string;
};

export const agenda: AgendaItem[] = [];
