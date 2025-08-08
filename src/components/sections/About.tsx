import { CheckCircle2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <section id="tentang" className="py-16 border-t">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <header className="mb-4">
            <h2 className="text-3xl font-semibold">Tentang PT. Delta Tiga Enam</h2>
          </header>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Fokus pada sertifikasi, pelatihan, seleksi, dan penempatan.",
              "Instruktur berpengalaman, materi aplikatif.",
              "Layanan ringkas, berdampak, dan tepat sasaran.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-0.5" />
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <AspectRatio ratio={16 / 9}>
            <img
              src="/placeholder.svg"
              alt="Mockup aktivitas pelatihan dan sertifikasi PT Delta Tiga Enam"
              loading="lazy"
              className="h-full w-full rounded-lg border object-cover bg-muted"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default About;
