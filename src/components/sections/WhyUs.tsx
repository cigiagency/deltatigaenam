import { ShieldCheck, Award, Users, CheckCircle } from "lucide-react";

const items = [
	{
		icon: ShieldCheck,
		title: "Legal & Kredibel",
		desc: "Kepatuhan dan standar mutu.",
	},
	{
		icon: Award,
		title: "Instruktur Praktisi",
		desc: "Berpengalaman di industri.",
	},
	{ icon: Users, title: "Jaringan Mitra", desc: "Kolaborasi lintas sektor." },
	{
		icon: CheckCircle,
		title: "Layanan Lengkap",
		desc: "End-to-end, efisien.",
	},
];

const WhyUs = () => {
	return (
		<section id="why-us" className="py-16 border-t bg-muted/30">
			<div className="container">
				<header className="mb-10 text-center">
					<h2 className="text-3xl font-semibold">
						Mengapa Memilih Kami
					</h2>
					<p className="text-muted-foreground mt-2">
						Keunggulan yang membuat kami berbeda
					</p>
				</header>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{items.map(({ icon: Icon, title, desc }) => (
						<article
							key={title}
							className="rounded-xl border bg-gradient-to-br from-card to-card/70 p-6 shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
						>
							<div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
								<Icon />
							</div>
							<h3 className="font-semibold">{title}</h3>
							<p className="text-sm text-muted-foreground mt-1 leading-relaxed">
								{desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
