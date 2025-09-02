import { useState, useEffect } from "react";
import { getAgendaItems } from "@/lib/agenda";
import { AgendaItem } from "@/data/agenda";
import { useLoading } from "@/hooks/use-loading";
import { useLanguage } from "@/contexts";

export const useAgenda = () => {
	const [agenda, setAgenda] = useState<AgendaItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const { language } = useLanguage();

	const { showLoading } = useLoading(loading, {
		minLoadingTime: 600,
		delay: 200,
	});

	useEffect(() => {
		const fetchAgenda = async () => {
			try {
				setLoading(true);
				const agendaItems = await getAgendaItems();

				// Transform agenda items to match the bilingual structure
				const transformedAgenda: AgendaItem[] = agendaItems.map(
					(item: any) => ({
						id: item.id,
						title: { id: item.title, en: item.title }, // For now, we'll use the same title for both languages
						date: item.date,
						location: { id: item.location, en: item.location }, // For now, we'll use the same location for both languages
						description: {
							id: item.description,
							en: item.description,
						}, // For now, we'll use the same description for both languages
						link: item.link,
					})
				);

				setAgenda(transformedAgenda);
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
	}, [language]);

	return { agenda, loading: showLoading, error };
};
