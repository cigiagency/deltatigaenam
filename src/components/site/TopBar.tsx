import { Instagram, Mail, Phone } from "lucide-react";

const TopBar = () => {
	return (
		<div className="border-b bg-gradient-to-r from-background via-background/95 to-background backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 shadow-sm">
			<div className="container">
				<div className="flex h-10 items-center justify-between">
					{/* Contact info */}
					<div className="flex items-center gap-3 md:gap-4 text-xs text-muted-foreground">
						<a
							href="mailto:info@deltatigaenam.com"
							className="hidden md:flex items-center gap-1.5 hover:text-foreground transition-colors"
						>
							<Mail className="w-3.5 h-3.5" />
							<span className="hidden lg:inline">
								info@deltatigaenam.com
							</span>
						</a>
						<span className="hidden md:block text-border">|</span>
						<a
							href="tel:+6281316690036"
							className="hidden md:flex items-center gap-1.5 hover:text-foreground transition-colors"
						>
							<Phone className="w-3.5 h-3.5" />
							<span className="hidden lg:inline">
								+62 813-1669-0036
							</span>
						</a>
						<a
							href="https://instagram.com/deltatigaenam"
							className="hidden md:flex items-center gap-1.5 hover:text-foreground transition-colors"
						>
							<Instagram className="w-3.5 h-3.5" />
							<span className="hidden lg:inline">Instagram</span>
						</a>
					</div>

					{/* Social media */}
					<div className="ml-auto flex items-center gap-2">
						<a
							href="https://www.instagram.com/deltatigaenam/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors rounded-md hover:bg-accent md:hidden"
							aria-label="Instagram PT Delta Tiga Enam"
						>
							<Instagram className="w-4 h-4" />
						</a>
						<a
							href="https://wa.me/6281316690036"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors rounded-md hover:bg-accent md:hidden"
							aria-label="WhatsApp PT Delta Tiga Enam"
						>
							<Phone className="w-4 h-4" />
						</a>
						<a
							href="mailto:info@deltatigaenam.com"
							className="flex items-center gap-1.5 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors rounded-md hover:bg-accent md:hidden"
							aria-label="Email PT Delta Tiga Enam"
						>
							<Mail className="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
