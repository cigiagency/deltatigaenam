import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts";

const Header = () => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { language, setLanguage } = useLanguage();

	// Flag components
	const FlagID = () => (
		<svg
			className="w-5 h-auto rounded-[2px] shadow-sm border border-black/5"
			viewBox="0 0 3 2"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="3" height="1" fill="#ed1c24" />
			<rect width="3" height="1" y="1" fill="#fff" />
		</svg>
	);

	const FlagEN = () => (
		<svg
			className="w-5 h-auto rounded-[2px] shadow-sm border border-black/5"
			viewBox="0 0 60 30"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0,0 v30 h60 v-30 z" fill="#012169" />
			<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
			<path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
			<path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
			<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
		</svg>
	);

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
			className={`border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 sticky top-10 z-40 transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"
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
								`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isActive
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
								`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isActive
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
								`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isActive
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
								`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isActive
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
						<div className="ml-2 pl-2 border-l flex items-center gap-1.5">
							<button
								onClick={() => setLanguage("id")}
								className={`flex items-center gap-1 px-1.5 py-1 rounded-md transition-all duration-200 ${language === "id"
										? "bg-primary/10 ring-1 ring-primary/20"
										: "opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
									}`}
								title="Bahasa Indonesia"
							>
								<FlagID />
								<span className="text-[10px] font-bold">ID</span>
							</button>
							<button
								onClick={() => setLanguage("en")}
								className={`flex items-center gap-1 px-1.5 py-1 rounded-md transition-all duration-200 ${language === "en"
										? "bg-primary/10 ring-1 ring-primary/20"
										: "opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
									}`}
								title="English"
							>
								<FlagEN />
								<span className="text-[10px] font-bold">EN</span>
							</button>
						</div>
					</nav>

					{/* Mobile Controls */}
					<div className="flex items-center gap-2 md:hidden">
						<div className="flex items-center gap-1 bg-accent/30 p-1 rounded-lg">
							<button
								onClick={() => setLanguage("id")}
								className={`p-1.5 rounded-md transition-all ${language === "id"
										? "bg-background shadow-sm scale-110"
										: "opacity-40 grayscale"
									}`}
							>
								<FlagID />
							</button>
							<button
								onClick={() => setLanguage("en")}
								className={`p-1.5 rounded-md transition-all ${language === "en"
										? "bg-background shadow-sm scale-110"
										: "opacity-40 grayscale"
									}`}
							>
								<FlagEN />
							</button>
						</div>
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
								`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
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
								`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
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
								`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
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
								`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
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
