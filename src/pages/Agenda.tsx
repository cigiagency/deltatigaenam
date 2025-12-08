import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useAgenda } from "@/hooks/use-agenda";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import { useLanguage } from "@/contexts";

const Agenda = () => {
	const location = useLocation();
	const canonical = `${window.location.origin}${location.pathname}`;
	const { agenda, loading, error } = useAgenda();
	const { t, language } = useLanguage();

	const sortedAgenda = [...agenda].sort((a, b) =>
		a.date.localeCompare(b.date)
	);

	if (loading) {
		return (
			<main className="container py-12">
				<h1 className="text-3xl font-bold mb-6">{t("agenda.title")}</h1>
				<div className="grid gap-6 md:grid-cols-2">
					{[1, 2, 3, 4].map((item) => (
						<div
							key={item}
							className="rounded-lg border p-6 bg-card shadow-sm"
						>
							<div className="mb-4">
								<SkeletonLoader
									variant="text"
									className="h-4 w-1/3 mb-2"
								/>
								<SkeletonLoader
									variant="text"
									className="h-6 w-3/4"
								/>
							</div>
							<SkeletonLoader
								variant="text"
								className="h-4 w-1/2 mb-4"
							/>
							<SkeletonLoader
								variant="text"
								className="h-4 w-full mb-1"
							/>
							<SkeletonLoader
								variant="text"
								className="h-4 w-4/5 mb-4"
							/>
							<SkeletonLoader
								variant="text"
								className="h-10 w-32"
							/>
						</div>
					))}
				</div>
			</main>
		);
	}

	if (error) {
		return (
			<main className="container py-12">
				<h1 className="text-3xl font-bold mb-6">{t("agenda.title")}</h1>
				<div className="bg-muted/50 border rounded-lg p-8 text-center">
					<p className="text-muted-foreground text-lg">
						{language === "id"
							? "Maaf, saat ini belum ada agenda yang tersedia. Silakan cek kembali nanti."
							: "Sorry, there are no agendas available at the moment. Please check back later."}
					</p>
				</div>
			</main>
		);
	}

	return (
		<main className="container py-12">
			<Helmet>
				<title>
					{language === "id"
						? "Agenda Pelatihan & Sertifikasi | PT. Delta Tiga Enam"
						: "Training & Certification Agenda | PT. Delta Tiga Enam"}
				</title>
				<meta
					name="description"
					content={
						language === "id"
							? "Jadwal agenda pelatihan dan sertifikasi mendatang dari PT. Delta Tiga Enam."
							: "Upcoming training and certification agenda schedule from PT. Delta Tiga Enam."
					}
				/>
				<link rel="canonical" href={canonical} />
			</Helmet>
			<h1 className="text-3xl font-bold mb-6">{t("agenda.title")}</h1>
			{sortedAgenda.length === 0 ? (
				<div className="bg-muted/50 border rounded-lg p-8 text-center">
					<p className="text-muted-foreground text-lg">
						{language === "id"
							? "Tidak ada agenda yang tersedia saat ini. Silakan cek kembali nanti."
							: "No agendas available at this time. Please check back later."}
					</p>
				</div>
			) : (
				<section className="grid gap-6 md:grid-cols-2">
					{sortedAgenda.map((a, index) => (
						<article
							key={a.id}
							className="rounded-lg border p-6 bg-card shadow-sm hover:shadow-md transition-shadow animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<header className="mb-2">
								<time className="text-sm text-muted-foreground">
									{new Date(a.date).toLocaleString(
										language === "id" ? "id-ID" : "en-US",
										{
											dateStyle: "full",
											timeStyle: "short",
										}
									)}
								</time>
								<h2 className="text-xl font-semibold">
									{language === "id" ? a.title.id : a.title.en}
								</h2>
							</header>
							<p className="text-sm text-muted-foreground mb-3">
								{language === "id" ? a.location.id : a.location.en}
							</p>
							<p className="text-sm mb-4">
								{language === "id"
									? a.description.id
									: a.description.en}
							</p>
							{a.link && (
								<Button asChild>
									<a
										href={a.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("agenda.register")}
										<ArrowRight className="ml-2 w-4 h-4" />
									</a>
								</Button>
							)}
						</article>
					))}
				</section>
			)}
		</main>
	);
};

export default Agenda;
