import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts";

const NotFound = () => {
	const location = useLocation();
	const { t, language } = useLanguage();

	useEffect(() => {
		console.error(
			"404 Error: User attempted to access non-existent route:",
			location.pathname
		);
	}, [location.pathname]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-background animate-fade-in">
			<div className="text-center">
				<h1 className="text-5xl font-bold mb-3">404</h1>
				<p className="text-lg text-muted-foreground mb-6">
					{t("notFound.message")}
				</p>
				<a href="/" className="story-link text-primary">
					{t("notFound.back")}
				</a>
			</div>
		</div>
	);
};

export default NotFound;
