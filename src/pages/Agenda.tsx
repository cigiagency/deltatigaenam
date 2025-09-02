import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useAgenda } from "@/hooks/use-agenda";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SkeletonLoader } from "@/components/ui/skeleton-loader";

const Agenda = () => {
	const location = useLocation();
	const canonical = `${window.location.origin}${location.pathname}`;
	const { agenda, loading, error } = useAgenda();

	const sortedAgenda = [...agenda].sort((a, b) =>
		a.date.localeCompare(b.date)
	);

	if (loading) {
		return (
			<main className="container py-12">
				<h1 className="text-3xl font-bold mb-6">Agenda Mendatang</h1>
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
				<h1 className="text-3xl font-bold mb-6">Agenda Mendatang</h1>
				<div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
					<p className="text-destructive">
						Error loading agenda: {error}
					</p>
				</div>
			</main>
		);
	}

	return (
		<main className="container py-12">
			<Helmet>
				<title>
					Agenda Pelatihan & Sertifikasi | PT. Delta Tiga Enam
				</title>
				<meta
					name="description"
					content="Jadwal agenda pelatihan dan sertifikasi mendatang dari PT. Delta Tiga Enam."
				/>
				<link rel="canonical" href={canonical} />
			</Helmet>
			<h1 className="text-3xl font-bold mb-6">Agenda Mendatang</h1>
			<section className="grid gap-6 md:grid-cols-2">
				{sortedAgenda.map((a, index) => (
					<article
						key={a.id}
						className="rounded-lg border p-6 bg-card shadow-sm hover:shadow-md transition-shadow animate-fade-in"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						<header className="mb-2">
							<time className="text-sm text-muted-foreground">
								{new Date(a.date).toLocaleString("id-ID", {
									dateStyle: "full",
									timeStyle: "short",
								})}
							</time>
							<h2 className="text-xl font-semibold">{a.title}</h2>
						</header>
						<p className="text-sm text-muted-foreground mb-3">
							{a.location}
						</p>
						<p className="text-sm mb-4">{a.description}</p>
						{a.link && (
							<Button asChild>
								<a
									href={a.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									Daftar Sekarang
									<ArrowRight className="ml-2 w-4 h-4" />
								</a>
							</Button>
						)}
					</article>
				))}
			</section>
		</main>
	);
};

export default Agenda;
