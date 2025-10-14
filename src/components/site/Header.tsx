import { Link, NavLink } from "react-router-dom";
import { Menu, Languages, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts";

const Header = () => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { language, setLanguage } = useLanguage();

	const toggleLanguage = () => {
		setLanguage(language === "id" ? "en" : "id");
	};

	// Detect scroll for shadow effect
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [open]);

	return (
		<header
			className={`border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 sticky top-10 z-40 transition-all duration-300 ${
				scrolled ? "shadow-lg" : "shadow-sm"
			}`}
		>
			<div className="container">
				<div className="flex h-16 lg:h-18 items-center justify-between">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-2.5 group">
						<div className="relative">
							<img
								src="/logo.png"
								alt="PT. Delta Tiga Enam"
								className="h-9 lg:h-10 w-auto transition-transform duration-200 group-hover:scale-105"
								loading="eager"
							/>
						</div>
						<span className="font-semibold text-sm lg:text-base hidden sm:inline-block group-hover:text-primary transition-colors">
							PT. Delta Tiga Enam
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-1 lg:gap-2">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
									isActive
										? "text-foreground bg-accent"
										: "text-muted-foreground hover:text-foreground hover:bg-accent/50"
								}`
							}
						>
							{({ isActive }) => (
								<>
									{language === "id" ? "Beranda" : "Home"}
									{isActive && (
										<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
									)}
								</>
							)}
						</NavLink>
						<NavLink
							to="/layanan"
							className={({ isActive }) =>
								`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
									isActive
										? "text-foreground bg-accent"
										: "text-muted-foreground hover:text-foreground hover:bg-accent/50"
								}`
							}
						>
							{({ isActive }) => (
								<>
									{language === "id" ? "Layanan" : "Services"}
									{isActive && (
										<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
									)}
								</>
							)}
						</NavLink>
						<NavLink
							to="/agenda"
							className={({ isActive }) =>
								`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
									isActive
										? "text-foreground bg-accent"
										: "text-muted-foreground hover:text-foreground hover:bg-accent/50"
								}`
							}
						>
							{({ isActive }) => (
								<>
									{language === "id" ? "Agenda" : "Agenda"}
									{isActive && (
										<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
									)}
								</>
							)}
						</NavLink>
						<NavLink
							to="/blog"
							className={({ isActive }) =>
								`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
									isActive
										? "text-foreground bg-accent"
										: "text-muted-foreground hover:text-foreground hover:bg-accent/50"
								}`
							}
						>
							{({ isActive }) => (
								<>
									{language === "id" ? "Blog" : "Blog"}
									{isActive && (
										<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
									)}
								</>
							)}
						</NavLink>

						{/* Language Switcher */}
						<div className="ml-2 pl-2 border-l">
							<button
								onClick={toggleLanguage}
								className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
								title={
									language === "id"
										? "Switch to English"
										: "Ganti ke Bahasa Indonesia"
								}
							>
								<Languages className="w-4 h-4" />
								<span className="font-semibold">
									{language === "id" ? "EN" : "ID"}
								</span>
							</button>
						</div>
					</nav>

					{/* Mobile Controls */}
					<div className="flex items-center gap-2 md:hidden">
						<button
							onClick={toggleLanguage}
							className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all duration-200"
							title={
								language === "id"
									? "Switch to English"
									: "Ganti ke Bahasa Indonesia"
							}
						>
							<Languages className="w-4 h-4" />
							<span className="text-xs font-semibold">
								{language === "id" ? "EN" : "ID"}
							</span>
						</button>
						<button
							className="p-2 hover:bg-accent rounded-md transition-colors"
							aria-label="Toggle menu"
							onClick={() => setOpen((v) => !v)}
						>
							{open ? (
								<X className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{open && (
				<div className="md:hidden border-t bg-background/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
					<nav className="container py-4 flex flex-col gap-1">
						<NavLink
							to="/"
							onClick={() => setOpen(false)}
							className={({ isActive }) =>
								`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
									isActive
										? "text-foreground bg-accent"
										: "text-muted-foreground hover:text-foreground hover:bg-accent/50"
								}`
							}
						>
							{language === "id" ? "Beranda" : "Home"}
						</NavLink>
						<NavLink
							to="/layanan"
							onClick={() => setOpen(false)}
							className={({ isActive }) =>
								`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
									isActive
										? "text-foreground bg-accent"
										: "text-muted-foreground hover:text-foreground hover:bg-accent/50"
								}`
							}
						>
							{language === "id" ? "Layanan" : "Services"}
						</NavLink>
						<NavLink
							to="/agenda"
							onClick={() => setOpen(false)}
							className={({ isActive }) =>
								`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
									isActive
										? "text-foreground bg-accent"
										: "text-muted-foreground hover:text-foreground hover:bg-accent/50"
								}`
							}
						>
							{language === "id" ? "Agenda" : "Agenda"}
						</NavLink>
						<NavLink
							to="/blog"
							onClick={() => setOpen(false)}
							className={({ isActive }) =>
								`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
									isActive
										? "text-foreground bg-accent"
										: "text-muted-foreground hover:text-foreground hover:bg-accent/50"
								}`
							}
						>
							{language === "id" ? "Blog" : "Blog"}
						</NavLink>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
