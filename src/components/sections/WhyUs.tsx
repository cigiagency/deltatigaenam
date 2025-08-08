import { ShieldCheck, Award, Users, CheckCircle } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Legal & Kredibel", desc: "Berkomitmen pada kepatuhan dan standar mutu industri." },
  { icon: Award, title: "Instruktur Berpengalaman", desc: "Praktisi berpengalaman dengan materi aplikatif." },
  { icon: Users, title: "Jaringan Luas", desc: "Kemitraan dengan lembaga dan perusahaan lintas sektor." },
  { icon: CheckCircle, title: "End-to-End Service", desc: "Sertifikasi, pelatihan, seleksi, hingga penempatan." },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-12 border-t">
      <div className="container">
        <header className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Mengapa Memilih Kami</h2>
        </header>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-lg border p-6 bg-card shadow-sm hover-scale">
              <Icon className="text-primary" />
              <h3 className="font-semibold mt-3 mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
