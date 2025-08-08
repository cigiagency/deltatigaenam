import { MessageSquare, FileCheck2, Presentation, Award } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Konsultasi", desc: "Pahami kebutuhan Anda." },
  { icon: FileCheck2, title: "Penawaran", desc: "Rencana & jadwal jelas." },
  { icon: Presentation, title: "Pelaksanaan", desc: "Pelatihan/asesmen efektif." },
  { icon: Award, title: "Sertifikasi", desc: "Hasil terukur & diakui." },
];

const Delivery = () => {
  return (
    <section id="delivery" className="py-16 border-t">
      <div className="container">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold">Alur Layanan</h2>
        </header>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <article key={title} className="rounded-lg border p-6 bg-card shadow-sm hover-scale text-center">
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border bg-background">
                <Icon className="text-primary" />
              </div>
              <div className="text-xs text-muted-foreground">Langkah {idx + 1}</div>
              <h3 className="font-semibold mt-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivery;
