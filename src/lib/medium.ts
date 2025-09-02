export async function getMediumPosts() {
	try {
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
			const error = new Error(data.message || "Failed to fetch articles");
			(error as any).data = data;
			throw error;
		}

		return data.items || [];
	} catch (error) {
		if (error instanceof Error) {
			throw error;
		}
		throw new Error(
			"An unknown error occurred while fetching Medium posts"
		);
	}
}