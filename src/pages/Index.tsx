import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQ";
import { faq } from "@/data/faq";
import { useMediumPosts } from "@/hooks/use-medium-posts";
import { Button } from "@/components/ui/button";
import { useAgenda } from "@/hooks/use-agenda";

const Index = () => {
	const location = useLocation();
	const { agenda: upcoming } = useAgenda();
	const { posts: latestPosts } = useMediumPosts();
	const latest = [...latestPosts].slice(0, 3);

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
								className="relative p-3 rounded-lg border bg-card animate-fade-in"
								style={{ animationDelay: `${s.n * 0.1}s` }}
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
					{upcoming.length > 0 ? (
						<ul className="relative border-l pl-4 md:pl-6 border-border">
							{upcoming
								.sort((a, b) => a.date.localeCompare(b.date))
								.slice(0, 3)
								.map((a, index) => (
									<li
										key={a.id}
										className="mb-6 last:mb-0 relative animate-fade-in"
										style={{
											animationDelay: `${
												index * 0.2 + 0.3
											}s`,
										}}
									>
										<span className="absolute -left-2 md:-left-2.5 top-2 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-primary border-2 border-background shadow" />
										<div className="rounded-lg bg-card/80 backdrop-blur border shadow-sm p-4 md:p-5">
											<div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
												<time className="text-xs text-primary font-medium">
													{new Date(
														a.date
													).toLocaleDateString(
														"id-ID",
														{
															weekday: "long",
															day: "2-digit",
															month: "long",
															year: "numeric",
														}
													)}
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
											{a.link && (
												<div className="mt-3">
													<Button
														size="sm"
														className="h-8 px-3"
														asChild
													>
														<a
															href={a.link}
															target="_blank"
															rel="noopener noreferrer"
														>
															Daftar
														</a>
													</Button>
												</div>
											)}
										</div>
									</li>
								))}
						</ul>
					) : (
						<p>No upcoming events at the moment.</p>
					)}
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
						{latest.map((p, index) => (
							<article
								key={p.slug}
								className="group overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow animate-fade-in"
								style={{
									animationDelay: `${index * 0.2 + 0.5}s`,
								}}
							>
								<div className="p-4">
									<h3 className="text-sm md:text-base font-semibold leading-snug group-hover:text-primary transition-colors">
										{p.title}
									</h3>
									<p
										className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2"
										dangerouslySetInnerHTML={{
											__html: p.excerpt,
										}}
									/>
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
