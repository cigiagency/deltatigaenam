import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section id="testimoni" className="py-12 border-t">
      <div className="container">
        <header className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Apa Kata Klien</h2>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article key={t.name} className="rounded-lg border p-6 bg-card shadow-sm">
              <Quote className="text-primary" />
              <p className="text-sm text-muted-foreground mt-3">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
