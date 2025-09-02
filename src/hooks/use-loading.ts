import { useState, useEffect } from "react";

interface UseLoadingOptions {
	minLoadingTime?: number; // Minimum time to show loading state (ms)
	delay?: number; // Delay before showing loading state (ms)
}

export const useLoading = (
	loading: boolean,
	options: UseLoadingOptions = {}
) => {
	const { minLoadingTime = 500, delay = 300 } = options;
	const [showLoading, setShowLoading] = useState(false);
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		let delayTimer: NodeJS.Timeout | null = null;
		let minTimer: NodeJS.Timeout | null = null;

		if (loading) {
			// When loading starts
			delayTimer = setTimeout(() => {
				setShowLoading(true);
				setShouldRender(true);
			}, delay);

			// Set minimum loading time
			minTimer = setTimeout(() => {
				// This will be cleared if loading finishes before minLoadingTime
			}, minLoadingTime);
		} else {
			// When loading finishes
			if (delayTimer) clearTimeout(delayTimer);

			// If we've shown the loading state, ensure it shows for minimum time
			if (showLoading) {
				minTimer = setTimeout(() => {
					setShowLoading(false);
				}, minLoadingTime);
			} else {
				// If we haven't shown loading yet, don't show it at all
				setShowLoading(false);
			}

			// Set a small delay before completely removing the component
			setTimeout(() => {
				setShouldRender(showLoading);
			}, minLoadingTime + 100);
		}

		return () => {
			if (delayTimer) clearTimeout(delayTimer);
			if (minTimer) clearTimeout(minTimer);
		};
	}, [loading, delay, minLoadingTime, showLoading]);

	return { showLoading, shouldRender };
};
