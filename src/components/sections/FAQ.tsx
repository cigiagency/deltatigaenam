import { faq } from "@/data/faq";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
	return (
		<section id="faq" className="py-10 border-t">
			<div className="container">
				<header className="mb-6 text-center md:text-left">
					<h2 className="text-xl md:text-2xl font-semibold">FAQ</h2>
				</header>
				<Accordion type="single" collapsible className="w-full">
					{faq.map((f, idx) => (
						<AccordionItem
							key={f.q}
							value={`faq-${idx}`}
							className="border-b"
						>
							<AccordionTrigger className="text-left text-sm md:text-base leading-relaxed">
								{f.q}
							</AccordionTrigger>
							<AccordionContent>
								<p className="text-sm md:text-base text-muted-foreground leading-relaxed">
									{f.a}
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
