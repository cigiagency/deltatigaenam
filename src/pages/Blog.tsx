import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useMediumPosts } from "@/hooks/use-medium-posts";
import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import { useLanguage } from "@/contexts";

const Blog = () => {
	const location = useLocation();
	const canonical = `${window.location.origin}${location.pathname}`;
	const { posts, loading, error } = useMediumPosts();
	const { t, language } = useLanguage();

	if (loading) {
		return (
			<main className="container py-12">
				<h1 className="text-3xl font-bold mb-6">{t("blog.title")}</h1>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{[1, 2, 3, 4, 5, 6].map((item) => (
						<div
							key={item}
							className="rounded-lg border p-6 bg-card shadow-sm"
						>
							<SkeletonLoader
								variant="text"
								className="h-4 w-1/3 mb-3"
							/>
							<SkeletonLoader
								variant="text"
								className="h-6 w-4/5 mb-3"
							/>
							<SkeletonLoader
								variant="text"
								className="h-4 w-full mb-1"
							/>
							<SkeletonLoader
								variant="text"
								className="h-4 w-3/4 mb-4"
							/>
							<SkeletonLoader
								variant="text"
								className="h-4 w-24"
							/>
						</div>
					))}
				</div>
			</main>
		);
	}

	if (error) {
		return (
			<main className="container py-12">
				<h1 className="text-3xl font-bold mb-6">{t("blog.title")}</h1>
				<div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
					<p className="text-destructive">
						{language === "id"
							? `Error memuat artikel: ${error}`
							: `Error loading posts: ${error}`}
					</p>
				</div>
			</main>
		);
	}

	return (
		<main className="container py-12">
			<Helmet>
				<title>
					{language === "id"
						? "Blog | PT. Delta Tiga Enam"
						: "Blog | PT. Delta Tiga Enam"}
				</title>
				<meta
					name="description"
					content={
						language === "id"
							? "Artikel dan wawasan terbaru dari tim kami."
							: "Latest articles and insights from our team."
					}
				/>
				<link rel="canonical" href={canonical} />
			</Helmet>
			<h1 className="text-3xl font-bold mb-6">{t("blog.title")}</h1>
			<section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{posts.map((p, index) => (
					<article
						key={p.guid}
						className="rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
					>
						{p.thumbnail && (
							<div className="w-full h-48 overflow-hidden">
								<img
									src={p.thumbnail}
									alt={p.title}
									className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
								/>
							</div>
						)}
						<div className="p-5 flex flex-col flex-grow">
							<h2 className="font-semibold mb-2 line-clamp-2">
								<a
									href={p.link}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-primary transition-colors"
								>
									{p.title}
								</a>
							</h2>
							<p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
								{p.description.replace(/<[^>]*>/g, "")}
							</p>
							<div className="mt-auto">
								<a
									className="inline-flex items-center text-sm font-medium text-primary hover:underline"
									href={p.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("blog.readMore")}
									<svg
										className="ml-1 h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
								</a>
							</div>
						</div>
					</article>
				))}
			</section>
		</main>
	);
};

export default Blog;
