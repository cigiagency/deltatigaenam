import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section id="layanan" className="py-12">
      <div className="container">
        <header className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Layanan Kami</h2>
          <a className="story-link" href="/agenda">Lihat agenda</a>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="rounded-lg border p-6 bg-card shadow-sm animate-fade-in">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              {s.cta && (
                <Button variant="link" asChild>
                  <a href={s.cta.href}>{s.cta.label}</a>
                </Button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
