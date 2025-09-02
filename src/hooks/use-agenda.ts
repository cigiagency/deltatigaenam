import { useState, useEffect } from "react";
import { getAgendaItems } from "@/lib/agenda";
import { AgendaItem } from "@/data/agenda";
import { useLoading } from "@/hooks/use-loading";

export const useAgenda = () => {
	const [agenda, setAgenda] = useState<AgendaItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const { showLoading } = useLoading(loading, {
		minLoadingTime: 600,
		delay: 200,
	});

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

	return { agenda, loading: showLoading, error };
};
