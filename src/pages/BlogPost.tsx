import { Helmet } from "react-helmet-async";
import { useLocation, useParams, Link, Navigate } from "react-router-dom";
import { useMediumPosts } from "@/hooks/use-medium-posts";
import { SkeletonLoader } from "@/components/ui/skeleton-loader";

const BlogPost = () => {
	const { slug } = useParams();
	const location = useLocation();
	const canonical = `${window.location.origin}${location.pathname}`;
	const { posts, loading, error } = useMediumPosts();

	const post = posts.find((p) => p.slug === slug);

	if (loading) {
		return (
			<main className="container py-12 max-w-3xl">
				<SkeletonLoader variant="text" className="h-4 w-24 mb-6" />
				<SkeletonLoader variant="text" className="h-10 w-3/4 mb-4" />
				<SkeletonLoader variant="text" className="h-4 w-1/2 mb-8" />
				<div className="space-y-4">
					<SkeletonLoader variant="text" className="h-4 w-full" />
					<SkeletonLoader variant="text" className="h-4 w-5/6" />
					<SkeletonLoader variant="text" className="h-4 w-4/5" />
					<SkeletonLoader variant="text" className="h-4 w-full" />
					<SkeletonLoader variant="text" className="h-4 w-3/4" />
					<SkeletonLoader
						variant="text"
						className="h-4 w-full mt-4"
					/>
					<SkeletonLoader variant="text" className="h-4 w-2/3" />
				</div>
			</main>
		);
	}

	if (error) {
		return (
			<main className="container py-12 max-w-3xl">
				<div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
					<p className="text-destructive">
						Error loading post: {error}
					</p>
				</div>
			</main>
		);
	}

	if (!post) return <Navigate to="/blog" replace />;

	return (
		<main className="container py-12 max-w-3xl animate-fade-in">
			<p className="text-xs text-muted-foreground mb-2">
				<Link className="story-link" to="/blog">
					Kembali ke Blog
				</Link>
			</p>
			<h1 className="text-3xl font-bold mb-2">{post.title}</h1>
			<p className="text-sm text-muted-foreground mb-6">
				{new Date(post.date).toLocaleDateString("id-ID", {
					dateStyle: "long",
				})}{" "}
				• {post.category}
			</p>
			<article className="text-base leading-relaxed">
				<div dangerouslySetInnerHTML={{ __html: post.content }} />
			</article>
		</main>
	);
};

export default BlogPost;
