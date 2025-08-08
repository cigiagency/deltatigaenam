import { ShieldCheck, Award, Users, CheckCircle } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Legal & Kredibel", desc: "Kepatuhan dan standar mutu." },
  { icon: Award, title: "Instruktur Praktisi", desc: "Berpengalaman di industri." },
  { icon: Users, title: "Jaringan Mitra", desc: "Kolaborasi lintas sektor." },
  { icon: CheckCircle, title: "Layanan Lengkap", desc: "End-to-end, efisien." },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 border-t">
      <div className="container">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold">Mengapa Memilih Kami</h2>
        </header>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-lg border p-6 bg-card shadow-sm hover-scale text-center">
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border bg-background">
                <Icon className="text-primary" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
