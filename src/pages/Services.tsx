import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import {
	ShieldCheck,
	GraduationCap,
	ClipboardList,
	ListChecks,
	Briefcase,
	Building2,
	ArrowRight,
	CheckCircle,
	Users,
	Trophy,
	Clock,
	Star,
	MessageSquare,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useCSChat, useLanguage } from "@/contexts";

const icons = [
	ShieldCheck,
	GraduationCap,
	ClipboardList,
	ListChecks,
	Briefcase,
	Building2,
];

const features = [
	{
		icon: Users,
		title: "Instruktur Berpengalaman",
		desc: "Tim pengajar bersertifikat dengan pengalaman industri minimal 10 tahun",
	},
	{
		icon: Trophy,
		title: "Sertifikasi Resmi",
		desc: "Sertifikat yang diakui industri dan pemerintah sesuai standar SKKNI",
	},
	{
		icon: Clock,
		title: "Jadwal Fleksibel",
		desc: "Pilihan waktu pelatihan yang dapat disesuaikan dengan kebutuhan perusahaan",
	},
	{
		icon: Star,
		title: "Kualitas Terjamin",
		desc: "Tingkat kepuasan peserta 95% dengan metode pembelajaran terkini",
	},
];

const Services = () => {
	const location = useLocation();
	const canonical = `${window.location.origin}${location.pathname}`;
	const { openChat } = useCSChat();
	const { t, language } = useLanguage();

	// Simulate loading state for the page
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate page loading for better UX
		const timer = setTimeout(() => {
			setLoading(false);
		}, 600);

		return () => clearTimeout(timer);
	}, []);

	// Function to handle CTA clicks that should open CSChat
	const handleCTAClick = (e: React.MouseEvent, ctaLabel: string) => {
		if (
			ctaLabel.includes("Konsultasi") ||
			ctaLabel.includes("Gratis") ||
			ctaLabel.includes("Pelajari lebih lanjut") ||
			ctaLabel.includes("Cari talenta") ||
			ctaLabel.includes("Consult") ||
			ctaLabel.includes("Learn more") ||
			ctaLabel.includes("Find talent")
		) {
			e.preventDefault();
			// Open the CSChat directly
			openChat();
		}
	};

	if (loading) {
		return (
			<main>
				{/* Hero Section Skeleton */}
				<section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
					<div className="container">
						<div className="max-w-3xl mx-auto text-center">
							<SkeletonLoader
								variant="text"
								className="h-12 w-3/4 mx-auto mb-6"
							/>
							<SkeletonLoader
								variant="text"
								className="h-6 w-1/2 mx-auto mb-8"
							/>
							<SkeletonLoader
								variant="text"
								className="h-12 w-48 mx-auto"
							/>
						</div>
					</div>
				</section>

				{/* Services Grid Skeleton */}
				<section className="py-20 bg-muted/30">
					<div className="container">
						<div className="text-center mb-16">
							<SkeletonLoader
								variant="text"
								className="h-10 w-1/2 mx-auto mb-4"
							/>
							<SkeletonLoader
								variant="text"
								className="h-6 w-1/3 mx-auto"
							/>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{[1, 2, 3, 4, 5, 6].map((item) => (
								<div
									key={item}
									className="bg-card rounded-xl shadow-sm border overflow-hidden"
								>
									<SkeletonLoader
										variant="image"
										className="w-full h-48"
									/>
									<div className="p-6">
										<SkeletonLoader
											variant="text"
											className="h-6 w-3/4 mb-3"
										/>
										<SkeletonLoader
											variant="text"
											className="h-4 w-full mb-2"
										/>
										<SkeletonLoader
											variant="text"
											className="h-4 w-5/6 mb-6"
										/>
										<div className="space-y-4">
											<div className="flex items-center">
												<SkeletonLoader
													variant="text"
													className="h-4 w-3/4"
												/>
											</div>
											<div className="flex items-center justify-between pt-4 border-t">
												<SkeletonLoader
													variant="text"
													className="h-4 w-1/2"
												/>
												<SkeletonLoader
													variant="text"
													className="h-10 w-24"
												/>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section Skeleton */}
				<section className="py-20 bg-primary text-primary-foreground">
					<div className="container">
						<div className="max-w-3xl mx-auto text-center">
							<SkeletonLoader
								variant="text"
								className="h-10 w-3/4 mx-auto mb-6"
							/>
							<SkeletonLoader
								variant="text"
								className="h-6 w-1/2 mx-auto mb-8"
							/>
							<div className="flex justify-center">
								<SkeletonLoader
									variant="text"
									className="h-12 w-48"
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}

	return (
		<main>
			<Helmet>
				<title>
					{language === "id"
						? "Layanan Pelatihan & Sertifikasi | PT. Delta Tiga Enam"
						: "Training & Certification Services | PT. Delta Tiga Enam"}
				</title>
				<meta
					name="description"
					content={
						language === "id"
							? "Layanan lengkap sertifikasi tenaga kerja, pelatihan kompetensi, konsultasi manajemen, dan penempatan SDM. Tingkatkan kompetensi tim Anda bersama PT. Delta Tiga Enam."
							: "Complete workforce certification services, competency training, management consulting, and HR placement. Enhance your team's competencies with PT. Delta Tiga Enam."
					}
				/>
				<link rel="canonical" href={canonical} />
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Service",
						name:
							language === "id"
								? "Layanan Pelatihan dan Sertifikasi"
								: "Training and Certification Services",
						provider: {
							"@type": "Organization",
							name: "PT. Delta Tiga Enam",
						},
						description:
							language === "id"
								? "Layanan pelatihan profesional dan sertifikasi tenaga kerja"
								: "Professional training and workforce certification services",
						areaServed: "Indonesia",
					})}
				</script>
			</Helmet>

			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background animate-fade-in">
				<div className="container">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							{t("services.title")}
						</h1>
						<p className="text-xl text-muted-foreground mb-8">
							{t("services.description")}
						</p>
						<Button size="lg" asChild>
							<a href="#services">{t("services.all")}</a>
						</Button>
					</div>
				</div>
			</section>

			{/* Features Section removed per request */}

			{/* Services Grid */}
			<section id="services" className="py-20 bg-muted/30">
				<div className="container">
					<div
						className="text-center mb-16 animate-fade-in"
						style={{ animationDelay: "0.2s" }}
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							{t("services.title")}
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							{t("services.description")}
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, i) => {
							const Icon = icons[i % icons.length];
							return (
								<article
									key={i}
									className="group bg-card rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
									style={{
										animationDelay: `${
											(i + 1) * 0.1 + 0.2
										}s`,
									}}
								>
									<div className="relative">
										<AspectRatio ratio={16 / 10}>
											<img
												src={`/layanan/${i + 1}.jpg`}
												alt={
													language === "id"
														? `${service.title.id} - Layanan PT. Delta Tiga Enam`
														: `${service.title.en} - Services PT. Delta Tiga Enam`
												}
												loading="lazy"
												onError={(e) => {
													const img =
														e.currentTarget as HTMLImageElement;
													if (
														img.src.endsWith(`.jpg`)
													) {
														img.src =
															img.src.replace(
																`.jpg`,
																`.png`
															);
													} else if (
														!img.src.includes(
															`/placeholder.svg`
														)
													) {
														img.src = `/placeholder.svg`;
													}
												}}
												className="h-full w-full object-cover bg-muted group-hover:scale-105 transition-transform duration-300"
											/>
										</AspectRatio>
										<div className="absolute top-4 left-4 p-3 bg-primary rounded-lg text-primary-foreground shadow-lg">
											<Icon className="w-6 h-6" />
										</div>
									</div>

									<div className="p-6">
										<h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
											{language === "id"
												? service.title.id
												: service.title.en}
										</h3>
										<p className="text-muted-foreground mb-6 leading-relaxed">
											{language === "id"
												? service.desc.id
												: service.desc.en}
										</p>

										<div className="space-y-4">
											<div className="flex items-center text-sm text-primary">
												<CheckCircle className="w-4 h-4 mr-2" />
												<span>
													{t("service.verified")}
												</span>
											</div>

											<div className="flex items-center justify-between pt-4 border-t">
												<span className="text-sm font-medium text-primary">
													{language === "id"
														? "Mulai dari konsultasi gratis"
														: "Starting from free consultation"}
												</span>
												{service.cta && (
													<Button
														size="sm"
														asChild
														className="group/btn"
													>
														<a
															href={
																service.cta.href
															}
															onClick={(e) =>
																handleCTAClick(
																	e,
																	language ===
																		"id"
																		? service.cta!
																				.label
																				.id
																		: service.cta!
																				.label
																				.en
																)
															}
														>
															{language === "id"
																? service.cta
																		.label
																		.id
																: service.cta
																		.label
																		.en}
															<ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
														</a>
													</Button>
												)}
											</div>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section
				className="py-20 bg-primary text-primary-foreground animate-fade-in"
				style={{ animationDelay: "0.8s" }}
			>
				<div className="container">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							{language === "id"
								? "Siap Meningkatkan Kompetensi Tim Anda?"
								: "Ready to Enhance Your Team's Competency?"}
						</h2>
						<p className="text-xl mb-8 opacity-90">
							{language === "id"
								? "Konsultasikan kebutuhan pelatihan perusahaan Anda dengan tim ahli kami. Dapatkan solusi yang tepat untuk mengembangkan SDM berkualitas."
								: "Consult your company's training needs with our expert team. Get the right solution to develop quality human resources."}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								variant="secondary"
								onClick={(e) =>
									handleCTAClick(
										e,
										language === "id"
											? "Konsultasi Gratis"
											: "Free Consultation"
									)
								}
							>
								{t("cta.button")}
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Services;
