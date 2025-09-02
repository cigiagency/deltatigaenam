import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts";

const About = () => {
	const { t, language } = useLanguage();

	return (
		<section id="tentang" className="py-16 border-t bg-muted/30">
			<div className="container grid md:grid-cols-2 gap-12 items-center">
				<div className="order-2 md:order-1 space-y-8 max-w-2xl w-full mx-auto md:mx-0">
					<header className="mb-2">
						<h2 className="text-3xl font-semibold">
							{t("about.title")}
						</h2>
					</header>
					<div className="space-y-4 text-muted-foreground leading-relaxed">
						<p>{t("about.description")}</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						<div className="space-y-3">
							<h3 className="text-2xl font-semibold">
								{t("about.vision")}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{t("about.visionText")}
							</p>
						</div>
						<div className="lg:col-span-2 space-y-3">
							<h3 className="text-2xl font-semibold">
								{t("about.mission")}
							</h3>
							<ul className="space-y-2 text-muted-foreground">
								{[
									t("about.mission1"),
									t("about.mission2"),
									t("about.mission3"),
								].map((item) => (
									<li
										key={item}
										className="flex items-start gap-3"
									>
										<CheckCircle className="text-primary mt-0.5 shrink-0" />
										<span className="text-sm leading-relaxed">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-2xl font-semibold">
							{t("about.values")}
						</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{[
								{
									title: t("about.value1.title"),
									desc: t("about.value1.desc"),
								},
								{
									title: t("about.value2.title"),
									desc: t("about.value2.desc"),
								},
								{
									title: t("about.value3.title"),
									desc: t("about.value3.desc"),
								},
							].map((v) => (
								<div
									key={v.title}
									className="p-4 rounded-lg border bg-card"
								>
									<div className="flex items-start gap-2 mb-1">
										<CheckCircle className="text-primary mt-0.5 shrink-0" />
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
							alt={
								language === "id"
									? "Kegiatan pelatihan dan sertifikasi PT Delta Tiga Enam"
									: "Training and certification activities of PT Delta Tiga Enam"
							}
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
