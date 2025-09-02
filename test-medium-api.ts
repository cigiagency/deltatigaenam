import { getMediumPosts } from "./src/lib/medium";

// Helper function to generate URL-friendly slugs (copied from use-medium-posts.ts)
const generateSlug = (title: string): string => {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
};

async function testMediumAPI() {
	try {
		console.log("Fetching Medium posts...");
		const posts = await getMediumPosts();
		console.log(`Found ${posts.length} posts`);

		// Display the first few posts with their generated slugs
		for (let i = 0; i < Math.min(posts.length, 3); i++) {
			const post = posts[i];
			const slug = generateSlug(post.title);
			console.log(`\nPost ${i + 1}:`);
			console.log(`  Title: ${post.title}`);
			console.log(`  Generated slug: ${slug}`);
			console.log(`  Published: ${post.pubDate}`);
			console.log(`  Link: ${post.link}`);
		}
	} catch (error) {
		console.error("Error fetching Medium posts:", error);
	}
}

testMediumAPI();
