import { MessageSquare, FileCheck2, Presentation, Award } from "lucide-react";
import { useLanguage } from "@/contexts";

const steps = [
	{
		icon: MessageSquare,
		titleKey: "delivery.steps.consultation.title",
		descKey: "delivery.steps.consultation.desc",
	},
	{
		icon: FileCheck2,
		titleKey: "delivery.steps.offer.title",
		descKey: "delivery.steps.offer.desc",
	},
	{
		icon: Presentation,
		titleKey: "delivery.steps.implementation.title",
		descKey: "delivery.steps.implementation.desc",
	},
	{
		icon: Award,
		titleKey: "delivery.steps.certification.title",
		descKey: "delivery.steps.certification.desc",
	},
];

const Delivery = () => {
	const { t } = useLanguage();

	return (
		<section id="delivery" className="py-16 border-t">
			<div className="container">
				<header className="mb-8">
					<h2 className="text-3xl font-semibold">
						{t("delivery.title")}
					</h2>
				</header>
				<div className="grid md:grid-cols-4 gap-6">
					{steps.map(({ icon: Icon, titleKey, descKey }, idx) => (
						<article
							key={titleKey}
							className="rounded-lg border p-6 bg-card shadow-sm hover-scale text-center"
						>
							<div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border bg-background">
								<Icon className="text-primary" />
							</div>
							<div className="text-xs text-muted-foreground">
								{t("delivery.step")} {idx + 1}
							</div>
							<h3 className="font-semibold mt-1">
								{t(titleKey)}
							</h3>
							<p className="text-sm text-muted-foreground">
								{t(descKey)}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Delivery;
