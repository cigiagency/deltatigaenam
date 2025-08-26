import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
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
  CheckCircle,
  Users,
  Trophy,
  Clock,
  Star
} from "lucide-react";

const icons = [ShieldCheck, GraduationCap, ClipboardList, ListChecks, Briefcase, Building2];

const features = [
  {
    icon: Users,
    title: "Instruktur Berpengalaman",
    desc: "Tim pengajar bersertifikat dengan pengalaman industri minimal 10 tahun"
  },
  {
    icon: Trophy,
    title: "Sertifikasi Resmi",
    desc: "Sertifikat yang diakui industri dan pemerintah sesuai standar SKKNI"
  },
  {
    icon: Clock,
    title: "Jadwal Fleksibel",
    desc: "Pilihan waktu pelatihan yang dapat disesuaikan dengan kebutuhan perusahaan"
  },
  {
    icon: Star,
    title: "Kualitas Terjamin",
    desc: "Tingkat kepuasan peserta 95% dengan metode pembelajaran terkini"
  }
];

const Services = () => {
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;

  return (
    <main>
      <Helmet>
        <title>Layanan Pelatihan & Sertifikasi | PT. Delta Tiga Enam</title>
        <meta name="description" content="Layanan lengkap sertifikasi tenaga kerja, pelatihan kompetensi, konsultasi manajemen, dan penempatan SDM. Tingkatkan kompetensi tim Anda bersama PT. Delta Tiga Enam." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Layanan Pelatihan dan Sertifikasi',
          provider: {
            '@type': 'Organization',
            name: 'PT. Delta Tiga Enam'
          },
          description: 'Layanan pelatihan profesional dan sertifikasi tenaga kerja',
          areaServed: 'Indonesia'
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Layanan Pelatihan & Sertifikasi Profesional
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tingkatkan kompetensi SDM perusahaan Anda dengan program pelatihan dan sertifikasi
              yang dirancang khusus sesuai kebutuhan industri
            </p>
            <Button size="lg" asChild>
              <a href="#services">Jelajahi Layanan Kami</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Komitmen kami untuk memberikan pelayanan terbaik dalam pengembangan SDM
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Lengkap Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solusi komprehensif untuk semua kebutuhan pengembangan SDM perusahaan Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = icons[i % icons.length];
              return (
                <article key={service.title} className="group bg-card rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <AspectRatio ratio={16 / 10}>
                      <img
                        src="/placeholder.svg"
                        alt={`${service.title} - Layanan PT. Delta Tiga Enam`}
                        loading="lazy"
                        className="h-full w-full object-cover bg-muted group-hover:scale-105 transition-transform duration-300"
                      />
                    </AspectRatio>
                    <div className="absolute top-4 left-4 p-3 bg-primary rounded-lg text-primary-foreground shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-primary">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>Tersertifikasi & Berstandar Nasional</span>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm font-medium text-primary">
                          Mulai dari konsultasi gratis
                        </span>
                        {service.cta && (
                          <Button size="sm" asChild className="group/btn">
                            <a href={service.cta.href}>
                              {service.cta.label}
                              <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Meningkatkan Kompetensi Tim Anda?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Konsultasikan kebutuhan pelatihan perusahaan Anda dengan tim ahli kami.
              Dapatkan solusi yang tepat untuk mengembangkan SDM berkualitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/agenda">Lihat Jadwal Pelatihan</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="#">Konsultasi Gratis</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;