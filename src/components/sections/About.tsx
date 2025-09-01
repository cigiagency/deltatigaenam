import { CheckCircle2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
	return (
		<section id="tentang" className="py-16 border-t bg-muted/30">
			<div className="container grid md:grid-cols-2 gap-12 items-center">
				<div className="order-2 md:order-1 space-y-8 max-w-2xl w-full mx-auto md:mx-0">
					<header className="mb-2">
						<h2 className="text-3xl font-semibold">About Us</h2>
					</header>
					<div className="space-y-4 text-muted-foreground leading-relaxed">
						<p>
							Delta Tiga Enam adalah lembaga pelatihan dan
							penyelenggara sertifikasi profesi. Kami membantu
							perusahaan dan individu meningkatkan kompetensi
							melalui pelatihan, konsultasi manajemen, pengelolaan
							human capital, dan layanan headhunter yang
							terintegrasi.
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						<div className="space-y-3">
							<h3 className="text-2xl font-semibold">Vision</h3>
							<p className="text-muted-foreground leading-relaxed">
								Menjadi mitra strategis dalam transformasi human
								capital berkelanjutan.
							</p>
						</div>
						<div className="lg:col-span-2 space-y-3">
							<h3 className="text-2xl font-semibold">Mission</h3>
							<ul className="space-y-2 text-muted-foreground">
								{[
									"Solusi human capital komprehensif yang disesuaikan kebutuhan klien.",
									"Program pelatihan inovatif selaras tren industri.",
									"Layanan headhunter efektif untuk menghadirkan talenta terbaik.",
								].map((item) => (
									<li
										key={item}
										className="flex items-start gap-3"
									>
										<CheckCircle2 className="text-primary mt-0.5 shrink-0" />
										<span className="text-sm leading-relaxed">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-2xl font-semibold">Our Values</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{[
								{
									title: "Dynamic",
									desc: "Selalu adaptif terhadap perubahan dan inovasi dalam dunia kerja.",
								},
								{
									title: "Excellence",
									desc: "Unggul dalam setiap layanan yang diberikan.",
								},
								{
									title: "Leading",
									desc: "Pionir dalam pengembangan solusi human capital yang inovatif.",
								},
							].map((v) => (
								<div
									key={v.title}
									className="p-4 rounded-lg border bg-card"
								>
									<div className="flex items-start gap-2 mb-1">
										<CheckCircle2 className="text-primary mt-0.5 shrink-0" />
										<h4 className="font-semibold">
											{v.title}
										</h4>
									</div>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{v.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="order-1 md:order-2 max-w-xl w-full mx-auto md:mx-0">
					<AspectRatio ratio={16 / 9}>
						<img
							src="/about.png"
							alt="Kegiatan pelatihan dan sertifikasi PT Delta Tiga Enam"
							loading="lazy"
							className="h-full w-full rounded-xl border object-cover bg-muted shadow-sm"
						/>
					</AspectRatio>
				</div>
			</div>
		</section>
	);
};

export default About;
