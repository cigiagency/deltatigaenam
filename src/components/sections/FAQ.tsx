import { faq } from "@/data/faq";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts";

const FAQSection = () => {
	const { t, language } = useLanguage();

	return (
		<section id="faq" className="py-10 border-t">
			<div className="container">
				<header className="mb-6 text-center md:text-left">
					<h2 className="text-xl md:text-2xl font-semibold">
						{t("faq.title")}
					</h2>
				</header>
				<Accordion type="single" collapsible className="w-full">
					{faq.map((f, idx) => (
						<AccordionItem
							key={language === "id" ? f.q.id : f.q.en}
							value={`faq-${idx}`}
							className="border-b"
						>
							<AccordionTrigger className="text-left text-sm md:text-base leading-relaxed">
								{language === "id" ? f.q.id : f.q.en}
							</AccordionTrigger>
							<AccordionContent>
								<p className="text-sm md:text-base text-muted-foreground leading-relaxed">
									{language === "id" ? f.a.id : f.a.en}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};

export default FAQSection;
