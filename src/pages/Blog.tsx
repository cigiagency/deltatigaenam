import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { useMediumPosts } from "@/hooks/use-medium-posts";
import { SkeletonLoader } from "@/components/ui/skeleton-loader";

const Blog = () => {
	const location = useLocation();
	const canonical = `${window.location.origin}${location.pathname}`;
	const { posts, loading, error } = useMediumPosts();

	if (loading) {
		return (
			<main className="container py-12">
				<h1 className="text-3xl font-bold mb-6">Blog</h1>
				<div className="grid gap-6 md:grid-cols-3">
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
				<h1 className="text-3xl font-bold mb-6">Blog</h1>
				<div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
					<p className="text-destructive">
						Error loading posts: {error}
					</p>
				</div>
			</main>
		);
	}

	return (
		<main className="container py-12">
			<Helmet>
				<title>Blog | PT. Delta Tiga Enam</title>
				<meta
					name="description"
					content="Latest articles and insights from our team."
				/>
				<link rel="canonical" href={canonical} />
			</Helmet>
			<h1 className="text-3xl font-bold mb-6">Blog</h1>
			<section className="grid gap-6 md:grid-cols-3">
				{posts.map((p, index) => (
					<article
						key={p.slug}
						className="rounded-lg border p-6 bg-card shadow-sm hover:shadow-md transition-shadow animate-fade-in"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						<span className="text-xs text-primary font-medium">
							{p.category}
						</span>
						<h2 className="mt-2 font-semibold mb-1">
							<Link to={`/blog/${p.slug}`}>{p.title}</Link>
						</h2>
						<p
							className="text-sm text-muted-foreground mb-4"
							dangerouslySetInnerHTML={{ __html: p.excerpt }}
						/>
						<Link
							className="story-link text-sm"
							to={`/blog/${p.slug}`}
						>
							Read more
						</Link>
					</article>
				))}
			</section>
		</main>
	);
};

export default Blog;
