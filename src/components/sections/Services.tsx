import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  ShieldCheck,
  GraduationCap,
  ClipboardList,
  ListChecks,
  Briefcase,
  Building2,
} from "lucide-react";

const icons = [ShieldCheck, GraduationCap, ClipboardList, ListChecks, Briefcase, Building2];

const Services = () => {
  return (
    <section id="layanan" className="py-16">
      <div className="container">
        <header className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-semibold">Layanan Kami</h2>
          <a className="story-link" href="/agenda">Lihat agenda</a>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article key={s.title} className="rounded-lg border bg-card shadow-sm overflow-hidden animate-fade-in">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="/placeholder.svg"
                    alt={`Mockup layanan ${s.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover bg-muted"
                  />
                </AspectRatio>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-primary" />
                    <h3 className="font-semibold">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  {s.cta && (
                    <Button variant="link" asChild>
                      <a href={s.cta.href}>{s.cta.label}</a>
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
