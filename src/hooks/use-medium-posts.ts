import { useState, useEffect } from "react";
import { useLoading } from "@/hooks/use-loading";

export interface MediumPost {
	title: string;
	pubDate: string;
	link: string;
	guid: string;
	author: string;
	thumbnail: string;
	description: string;
	content: string;
	enclosure: any;
	categories: string[];
}

export const useMediumPosts = () => {
	const [posts, setPosts] = useState<MediumPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const { showLoading } = useLoading(loading, {
		minLoadingTime: 600,
		delay: 200,
	});

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setLoading(true);
				// Hardcoded credentials as specified
				const username = "deltatigaenam";
				const apiKey = "feyvp3rgk8qno7pgf0iwgby5rglyicevz4jdrnrg";

				// Construct the RSS URL
				const rssUrl = `https://medium.com/feed/@${username}`;
				const encodedRssUrl = encodeURIComponent(rssUrl);

				// Construct the full API URL
				const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodedRssUrl}&api_key=${apiKey}&count=10&include=content,thumbnail&order_by=pubDate&order_dir=desc`;

				const response = await fetch(apiUrl);

				if (!response.ok) {
					const error = new Error(
						`Medium API error: ${response.status} ${response.statusText}`
					);
					(error as any).status = response.status;
					(error as any).statusText = response.statusText;
					throw error;
				}

				const data = await response.json();

				if (data.status !== "ok") {
					const error = new Error(
						data.message || "Failed to fetch articles"
					);
					(error as any).data = data;
					throw error;
				}

				setPosts(data.items || []);
			} catch (err) {
				console.error("Error fetching Medium posts:", err);
				setError(
					err instanceof Error ? err.message : "Failed to fetch posts"
				);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	return { posts, loading: showLoading, error };
};
