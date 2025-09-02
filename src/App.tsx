import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/site/LoadingScreen";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import CSChat from "./components/site/CSChat";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Agenda from "./pages/Agenda";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Show loading screen for a short time to demonstrate the animation
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	const handleLoadingComplete = () => {
		setIsLoading(false);
	};

	if (isLoading) {
		return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<TooltipProvider>
					<Toaster />
					<Sonner />
					<BrowserRouter>
						<Header />
						<Routes>
							<Route path="/" element={<Index />} />
							<Route path="/layanan" element={<Services />} />
							<Route path="/agenda" element={<Agenda />} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/blog/:slug" element={<BlogPost />} />
							{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
							<Route path="*" element={<NotFound />} />
						</Routes>
						<Footer />
						<CSChat />
					</BrowserRouter>
				</TooltipProvider>
			</HelmetProvider>
		</QueryClientProvider>
	);
};

export default App;
