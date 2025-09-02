import { ShieldCheck, Award, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts";

const items = [
	{
		icon: ShieldCheck,
		titleKey: "whyUs.legal.title",
		descKey: "whyUs.legal.desc",
	},
	{
		icon: Award,
		titleKey: "whyUs.instructor.title",
		descKey: "whyUs.instructor.desc",
	},
	{
		icon: Users,
		titleKey: "whyUs.network.title",
		descKey: "whyUs.network.desc",
	},
	{
		icon: CheckCircle,
		titleKey: "whyUs.service.title",
		descKey: "whyUs.service.desc",
	},
];

const WhyUs = () => {
	const { t } = useLanguage();

	return (
		<section id="why-us" className="py-16 border-t bg-muted/30">
			<div className="container">
				<header className="mb-10 text-center">
					<h2 className="text-3xl font-semibold">
						{t("whyUs.title")}
					</h2>
					<p className="text-muted-foreground mt-2">
						{t("whyUs.description")}
					</p>
				</header>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{items.map(({ icon: Icon, titleKey, descKey }) => (
						<article
							key={titleKey}
							className="rounded-xl border bg-gradient-to-br from-card to-card/70 p-6 shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
						>
							<div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
								<Icon />
							</div>
							<h3 className="font-semibold">{t(titleKey)}</h3>
							<p className="text-sm text-muted-foreground mt-1 leading-relaxed">
								{t(descKey)}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
