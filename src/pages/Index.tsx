import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQ";
import { faq } from "@/data/faq";
import { agenda } from "@/data/agenda";
import { posts } from "@/data/blogs";
import { Button } from "@/components/ui/button";

const Index = () => {
	const location = useLocation();
	const upcoming = [...agenda]
		.sort((a, b) => a.date.localeCompare(b.date))
		.slice(0, 3);
	const latest = [...posts].slice(0, 3);

	const canonical = `${window.location.origin}${location.pathname}`;

	return (
		<main>
			<Helmet>
				<title>
					PT. Delta Tiga Enam | Training & Certification Provider
				</title>
				<meta
					name="description"
					content="Perusahaan penyedia sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia."
				/>
				<link rel="canonical" href={canonical} />
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "PT. Delta Tiga Enam",
						url: window.location.origin,
						description:
							"Sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia",
						sameAs: [],
					})}
				</script>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: faq.map((q) => ({
							"@type": "Question",
							name: q.q,
							acceptedAnswer: { "@type": "Answer", text: q.a },
						})),
					})}
				</script>
			</Helmet>

			<Hero />

			<About />
			<WhyUs />

			<Services />

			{/* Alur Layanan (compact stepper) */}
			<section className="py-10 border-t">
				<div className="container">
					<h2 className="text-xl font-semibold mb-6 text-center">
						Alur Layanan
					</h2>
					<ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
						{[
							{ n: 1, t: "Konsultasi", d: "Pahami kebutuhan" },
							{ n: 2, t: "Penawaran", d: "Rencana & jadwal" },
							{ n: 3, t: "Kesepakatan", d: "Scope disepakati" },
							{ n: 4, t: "Pelaksanaan", d: "Eksekusi program" },
							{
								n: 5,
								t: "Evaluasi",
								d: "Laporan & tindak lanjut",
							},
						].map((s) => (
							<li
								key={s.n}
								className="relative p-3 rounded-lg border bg-card"
							>
								<div className="flex items-center gap-3">
									<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
										{s.n}
									</span>
									<div className="min-w-0">
										<div className="text-sm font-medium truncate">
											{s.t}
										</div>
										<div className="hidden sm:block text-xs text-muted-foreground truncate">
											{s.d}
										</div>
									</div>
									{s.n < 5 && (
										<div className="hidden md:flex items-center ml-auto">
											<div className="w-10 h-0.5 bg-border" />
										</div>
									)}
								</div>
							</li>
						))}
					</ol>

					<div className="mt-6 text-center">
						<Button size="sm" asChild>
							<a href="#layanan">Mulai Konsultasi</a>
						</Button>
					</div>
				</div>
			</section>

			<Testimonials />

			<FAQSection />

			<section className="py-12 border-t">
				<div className="container">
					<header className="flex items-end justify-between mb-6">
						<h2 className="text-2xl font-semibold">
							Agenda Mendatang
						</h2>
						<a className="story-link" href="/agenda">
							Lihat semua
						</a>
					</header>
					{/* Timeline style */}
					<ul className="relative border-l pl-4 md:pl-6 border-border">
						{upcoming.map((a) => (
							<li key={a.id} className="mb-6 last:mb-0 relative">
								<span className="absolute -left-2 md:-left-2.5 top-2 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-primary border-2 border-background shadow" />
								<div className="rounded-lg bg-card/80 backdrop-blur border shadow-sm p-4 md:p-5">
									<div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
										<time className="text-xs text-primary font-medium">
											{new Date(
												a.date
											).toLocaleDateString("id-ID", {
												weekday: "long",
												day: "2-digit",
												month: "long",
												year: "numeric",
											})}
										</time>
										<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] bg-primary/10 text-primary">
											{a.location}
										</span>
									</div>
									<h3 className="text-sm md:text-base font-semibold">
										{a.title}
									</h3>
									<p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
										{a.description}
									</p>
									<div className="mt-3">
										<Button
											size="sm"
											className="h-8 px-3"
											asChild
										>
											<a href="/agenda">Daftar</a>
										</Button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="py-12 border-t">
				<div className="container">
					<header className="flex items-end justify-between mb-6">
						<h2 className="text-2xl font-semibold">
							Artikel Terbaru
						</h2>
						<a className="story-link" href="/blog">
							Lihat semua
						</a>
					</header>
					{/* Media cards style */}
					<div className="grid gap-4 md:grid-cols-3">
						{latest.map((p) => (
							<article
								key={p.slug}
								className="group overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="relative aspect-[16/10] bg-muted">
									<img
										src="/placeholder.svg"
										alt={p.title}
										loading="lazy"
										className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
									/>
									<span className="absolute left-2.5 top-2.5 inline-flex items-center px-2 py-0.5 rounded-md text-[10px] bg-background/90 border text-muted-foreground">
										{p.category}
									</span>
								</div>
								<div className="p-4">
									<h3 className="text-sm md:text-base font-semibold leading-snug group-hover:text-primary transition-colors">
										{p.title}
									</h3>
									<p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
										{p.excerpt}
									</p>
									<div className="mt-3">
										<a
											className="story-link text-sm"
											href={`/blog/${p.slug}`}
										>
											Baca selengkapnya
										</a>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Index;
