import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
	{
		id: 1,
		title: "Mitra Tepercaya Untuk Sertifikasi & Pelatihan Profesional",
		subtitle: "SOLUSI PELATIHAN TERINTEGRASI",
		description:
			"PT. Delta Tiga Enam berdedikasi memberikan layanan terbaik di bidang sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia.",
		cta: { label: "Lihat Agenda", href: "/agenda" },
	},
	{
		id: 2,
		title: "Tingkatkan Kompetensi SDM Perusahaan Anda",
		subtitle: "PELATIHAN BERBASIS KOMPETENSI",
		description:
			"Program pelatihan yang disesuaikan dengan kebutuhan industri untuk mengembangkan keterampilan teknis dan soft skills karyawan.",
		cta: { label: "Konsultasi Gratis", href: "#layanan" },
	},
	{
		id: 3,
		title: "Sertifikasi Tenaga Kerja Berstandar Nasional",
		subtitle: "KOMPETENSI YANG DIAKUI INDUSTRI",
		description:
			"Skema sertifikasi berbasis kompetensi yang diakui industri untuk berbagai jabatan dan keahlian sesuai SKKNI.",
		cta: { label: "Daftar Sekarang", href: "/agenda" },
	},
];

const Hero = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi]
	);
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi]
	);
	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
		setCanScrollPrev(emblaApi.canScrollPrev());
		setCanScrollNext(emblaApi.canScrollNext());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
	}, [emblaApi, onSelect]);

	// Auto-play
	useEffect(() => {
		if (!emblaApi) return;
		const interval = setInterval(() => {
			emblaApi.scrollNext();
		}, 5000);
		return () => clearInterval(interval);
	}, [emblaApi]);

	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-500 to-indigo-600">
			{/* Animated background elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
				<div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
			</div>

			<div className="embla" ref={emblaRef}>
				<div className="embla__container flex">
					{slides.map((slide, index) => (
						<div
							key={slide.id}
							className="embla__slide flex-[0_0_100%] relative"
						>
							<div className="relative min-h-[80vh] md:min-h-[100vh] flex items-center pt-16 pb-14 md:pt-0 md:pb-0">
								{/* Modern overlay with gradient */}
								<div
									className={`absolute inset-0 bg-gradient-to-r from-white/100 via-white/80 to-transparent`}
								></div>

								{/* Content */}
								<div className="container relative z-10 px-4 lg:px-8">
									<div className="grid lg:grid-cols-2 gap-12 items-center">
										{/* Text content */}
										<div className="text-left">
											<div className="animate-fade-in">
												<div
													className={`inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6`}
												>
													<div
														className={`w-2 h-2 bg-blue-500 rounded-full animate-pulse`}
													></div>
													<span
														className={`text-blue-700 text-sm font-medium tracking-wider uppercase`}
													>
														{slide.subtitle}
													</span>
												</div>

												<h1
													className={`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight text-slate-900`}
												>
													<span className={``}>
														{slide.title}
													</span>
												</h1>

												<p
													className={`text-base md:text-2xl text-slate-700 mb-8 md:mb-10 leading-relaxed max-w-2xl`}
												>
													{slide.description}
												</p>

												<div className="flex flex-col sm:flex-row gap-3 md:gap-4">
													<Button
														size="lg"
														className={`w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-0`}
														asChild
													>
														<a
															href={
																slide.cta.href
															}
														>
															{slide.cta.label}
														</a>
													</Button>
												</div>
											</div>
										</div>

										{/* Visual element */}
										<div className="relative hidden lg:block">
											<div className="relative">
												<div
													className={`absolute inset-0 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-3xl blur-3xl opacity-30 animate-pulse`}
												></div>
												<div
													className={`relative bg-white border border-slate-200 backdrop-blur-sm rounded-3xl p-8`}
												>
													<div className="space-y-6">
														<div className="flex items-center gap-4">
															<div
																className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center`}
															>
																<svg
																	className={`text-white w-6 h-6`}
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth={
																			2
																		}
																		d={`${
																			index ===
																			0
																				? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
																				: index ===
																				  1
																				? "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L4.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
																				: "M3 7h18M3 12h18M3 17h18"
																		}`}
																	/>
																</svg>
															</div>
															<div>
																<div
																	className={`bg-slate-200 h-3 rounded-full w-32 mb-2`}
																></div>
																<div
																	className={`bg-slate-100 h-2 rounded-full w-24`}
																></div>
															</div>
														</div>
														<div className="flex items-center gap-4">
															<div
																className={`w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center`}
															>
																<svg
																	className="w-6 h-6 text-white"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth={
																			2
																		}
																		d={`${
																			index ===
																			0
																				? "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
																				: index ===
																				  1
																				? "M12 4v16m8-8H4"
																				: "M3 10h11M9 21V3m12 8h-8"
																		}`}
																	/>
																</svg>
															</div>
															<div>
																<div
																	className={`bg-slate-200 h-3 rounded-full w-40 mb-2`}
																></div>
																<div
																	className={`bg-slate-100 h-2 rounded-full w-28`}
																></div>
															</div>
														</div>
														<div className="flex items-center gap-4">
															<div
																className={`w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center`}
															>
																<svg
																	className="w-6 h-6 text-white"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth={
																			2
																		}
																		d={`${
																			index ===
																			0
																				? "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
																				: index ===
																				  1
																				? "M12 8c-1.657 0-3 1.343-3 3v5h6v-5c0-1.657-1.343-3-3-3zm0-5a3 3 0 013 3v1H9V6a3 3 0 013-3z"
																				: "M12 2l3 7h7l-5.5 4 2 7-6.5-4-6.5 4 2-7L2 9h7z"
																		}`}
																	/>
																</svg>
															</div>
															<div>
																<div
																	className={`bg-slate-200 h-3 rounded-full w-36 mb-2`}
																></div>
																<div
																	className={`bg-slate-100 h-2 rounded-full w-20`}
																></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Navigation arrows removed per request */}

			{/* Modern Dots Navigation */}
			<div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3 bg-black/20 backdrop-blur-xl rounded-full px-4 md:px-6 py-2.5 md:py-3 border border-white/20">
				{slides.map((_, index) => (
					<button
						key={index}
						className={`relative transition-all duration-300 rounded-full ${
							index === selectedIndex
								? "w-10 md:w-12 h-5 md:h-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"
								: "w-5 md:w-4 h-5 md:h-4 bg-white/50 hover:bg-white/70 hover:scale-110"
						}`}
						onClick={() => scrollTo(index)}
						aria-label={`Go to slide ${index + 1}`}
					>
						{index === selectedIndex && (
							<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"></div>
						)}
					</button>
				))}
			</div>
		</section>
	);
};

export default Hero;
