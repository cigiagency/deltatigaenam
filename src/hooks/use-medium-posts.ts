import { useState, useEffect } from "react";
import { getMediumPosts } from "@/lib/medium";
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

export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	date: string;
	category: string;
}

export const useMediumPosts = () => {
	const [posts, setPosts] = useState<BlogPost[]>([]);
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
				const mediumPosts = await getMediumPosts();

				// Transform Medium posts to match existing BlogPost structure
				const transformedPosts: BlogPost[] = mediumPosts.map(
					(post: MediumPost) => ({
						slug: generateSlug(post.title),
						title: post.title,
						excerpt: post.description,
						content: post.content,
						date: post.pubDate,
						category: post.categories[0] || "Uncategorized",
					})
				);

				setPosts(transformedPosts);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "Failed to fetch posts"
				);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	// Helper function to generate URL-friendly slugs
	const generateSlug = (title: string): string => {
		return title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/^-+|-+$/g, "");
	};

	return { posts, loading: showLoading, error };
};
