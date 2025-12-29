import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts";

const Footer = () => {
	const { t, language } = useLanguage();

	return (
		<footer className="border-t mt-16">
			<div className="container py-10 grid gap-8 md:grid-cols-4">
				<div>
					<div className="flex items-center gap-2 mb-3">
						<img
							src="/logo.png"
							alt={
								language === "id"
									? "PT. Delta Tiga Enam"
									: "PT. Delta Tiga Enam"
							}
							className="h-8 w-auto"
							loading="lazy"
						/>
						<span className="font-semibold tracking-wider">
							DELTA TIGA ENAM
						</span>
					</div>
					<p className="text-sm text-muted-foreground">
						{t("footer.description")}
					</p>
					<div className="mt-3 space-y-1 text-sm">
						<a
							className="story-link"
							href="https://www.deltatigaenam.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							www.deltatigaenam.com
						</a>
						<div>
							<a
								className="story-link"
								href="mailto:info@deltatigaenam.com"
							>
								info@deltatigaenam.com
							</a>
						</div>
						<a
							className="story-link"
							href="https://www.linkedin.com/company/deltatigaenam"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</div>
				</div>
				<div>
					<h3 className="text-sm font-semibold mb-3">
						{t("footer.headOffice")}
					</h3>
					<ul className="space-y-2 text-sm text-muted-foreground">
						<li>{t("footer.headOffice.address1")}</li>
						<li>{t("footer.headOffice.address2")}</li>
						<li>{t("footer.headOffice.address3")}</li>
						<li className="text-foreground">
							PH. <a href="tel:02158905002" className="hover:text-primary transition-colors">021-5890 5002</a>, <a href="https://api.whatsapp.com/send/?phone=62818834766&text=Halo+PT.+Delta+Tiga+Enam&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">0818 834 766</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-sm font-semibold mb-3">
						{t("footer.marketingOffice")}
					</h3>
					<ul className="space-y-2 text-sm text-muted-foreground">
						<li>{t("footer.marketingOffice.address1")}</li>
						<li>{t("footer.marketingOffice.address2")}</li>
						<li>{t("footer.marketingOffice.address3")}</li>
						<li className="text-foreground">
							PH. <a href="tel:02189881110" className="hover:text-primary transition-colors">021-8988 1110</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-sm font-semibold mb-3">
						{t("footer.operationalOffice")}
					</h3>
					<ul className="space-y-2 text-sm text-muted-foreground">
						<li>{t("footer.operationalOffice.address1")}</li>
						<li>{t("footer.operationalOffice.address2")}</li>
						<li className="text-foreground">
							PH. <a href="https://wa.me/628170186104" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">0817 018 6104</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="border-t">
				<div className="container py-6 text-xs text-muted-foreground">
					{t("footer.copyright").replace(
						"{year}",
						new Date().getFullYear().toString()
					)}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
