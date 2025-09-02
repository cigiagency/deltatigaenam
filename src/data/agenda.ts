export type AgendaItem = {
	id: string;
	title: { id: string; en: string };
	date: string; // ISO
	location: { id: string; en: string };
	description: { id: string; en: string };
	link: string;
};

export const agenda: AgendaItem[] = [];
