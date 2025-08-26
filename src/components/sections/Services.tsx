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
  ArrowRight,
  CheckCircle
} from "lucide-react";

const icons = [ShieldCheck, GraduationCap, ClipboardList, ListChecks, Briefcase, Building2];

const Services = () => {
  return (
    <section id="layanan" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Unggulan Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap pengembangan SDM yang terpercaya untuk kemajuan perusahaan Anda
          </p>
          <Button asChild className="mt-6">
            <a href="/layanan">Lihat Semua Layanan <ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article key={service.title} className="group card-gradient rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-scale border-0">
                <div className="relative">
                  <AspectRatio ratio={16 / 10}>
                    <img
                      src="/placeholder.svg"
                      alt={`${service.title} - PT. Delta Tiga Enam`}
                      loading="lazy"
                      className="h-full w-full object-cover bg-muted group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                  <div className="absolute top-4 left-4 p-3 bg-hero rounded-xl text-primary-foreground shadow-lg backdrop-blur-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-primary">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span>Tersertifikasi</span>
                    </div>
                    {service.cta && (
                      <Button variant="ghost" size="sm" asChild className="group/btn">
                        <a href={service.cta.href}>
                          {service.cta.label}
                          <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Butuh solusi khusus untuk perusahaan Anda?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="#" className="group">
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
