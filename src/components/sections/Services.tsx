import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	ShieldCheck,
	GraduationCap,
	ClipboardList,
	ListChecks,
	Briefcase,
	Building2,
	ArrowRight,
	CheckCircle,
	MessageSquare,
} from "lucide-react";
import { useCSChat, useLanguage } from "@/contexts";

const icons = [
	ShieldCheck,
	GraduationCap,
	ClipboardList,
	ListChecks,
	Briefcase,
	Building2,
];

const Services = () => {
	const { openChat } = useCSChat();
	const { t } = useLanguage();

	// Function to handle CTA clicks that should open CSChat
	const handleCTAClick = (e: React.MouseEvent, ctaLabel: string) => {
		if (
			ctaLabel.includes("Konsultasi") ||
			ctaLabel.includes("Gratis") ||
			ctaLabel.includes("Pelajari lebih lanjut") ||
			ctaLabel.includes("Cari talenta") ||
			ctaLabel.includes("Consult") ||
			ctaLabel.includes("Learn more") ||
			ctaLabel.includes("Find talent") ||
			ctaLabel.includes("Free")
		) {
			e.preventDefault();
			// Open the CSChat directly
			openChat();
		}
	};

	// Service data mapped to translations
	const serviceItems = [
		{
			title: t("service1.title"),
			desc: t("service1.desc"),
			cta: { label: t("service1.cta"), href: "#" },
		},
		{
			title: t("service2.title"),
			desc: t("service2.desc"),
			cta: { label: t("service2.cta"), href: "#" },
		},
		{
			title: t("service3.title"),
			desc: t("service3.desc"),
			cta: { label: t("service3.cta"), href: "#" },
		},
		{
			title: t("service4.title"),
			desc: t("service4.desc"),
			cta: { label: t("service4.cta"), href: "/agenda" },
		},
		{
			title: t("service5.title"),
			desc: t("service5.desc"),
			cta: { label: t("service5.cta"), href: "/agenda" },
		},
	];

	return (
		<section id="layanan" className="py-20 bg-muted/30">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t("services.title")}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{t("services.description")}
					</p>
					<Button asChild className="mt-6">
						<a href="/layanan">
							{t("services.all")}{" "}
							<ArrowRight className="ml-2 w-4 h-4" />
						</a>
					</Button>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{serviceItems.slice(0, 6).map((service, i) => {
						const Icon = icons[i % icons.length];
						return (
							<article
								key={i}
								className="group card-gradient rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-scale border-0"
							>
								<div className="relative">
									<AspectRatio ratio={16 / 10}>
										<img
											src={`/layanan/${i + 1}.jpg`}
											alt={`${service.title} - PT. Delta Tiga Enam`}
											loading="lazy"
											onError={(e) => {
												const img =
													e.currentTarget as HTMLImageElement;
												if (img.src.endsWith(".jpg")) {
													img.src = img.src.replace(
														".jpg",
														".png"
													);
												} else if (
													!img.src.includes(
														"/placeholder.svg"
													)
												) {
													img.src =
														"/placeholder.svg";
												}
											}}
											className="h-full w-full object-cover bg-muted group-hover:scale-105 transition-transform duration-300"
										/>
									</AspectRatio>
									<div className="absolute top-4 left-4 p-3 bg-hero rounded-xl text-primary-foreground shadow-lg backdrop-blur-sm">
										<Icon className="w-6 h-6" />
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
										{service.title}
									</h3>
									<p className="text-muted-foreground mb-4 leading-relaxed">
										{service.desc}
									</p>

									<div className="flex items-center justify-between">
										<div className="flex items-center text-sm text-primary">
											<CheckCircle className="w-4 h-4 mr-1" />
											<span>
												{t("service.verified") ||
													"Tersertifikasi"}
											</span>
										</div>
										{service.cta && (
											<Button
												variant="ghost"
												size="sm"
												asChild
												className="group/btn"
											>
												<a
													href={service.cta.href}
													onClick={(e) =>
														handleCTAClick(
															e,
															service.cta!.label
														)
													}
												>
													{service.cta.label}
													<ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
												</a>
											</Button>
										)}
									</div>
								</div>
							</article>
						);
					})}
				</div>

				<div className="text-center mt-12">
					<p className="text-muted-foreground mb-4">
						{t("cta.title")}
					</p>
					<Button
						variant="outline"
						size="lg"
						onClick={(e) => handleCTAClick(e, t("cta.button"))}
						className="group"
					>
						{t("cta.button")}
						<MessageSquare className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Services;
