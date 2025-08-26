import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Mitra Tepercaya Untuk Sertifikasi & Pelatihan Profesional",
    subtitle: "SOLUSI PELATIHAN TERINTEGRASI",
    description: "PT. Delta Tiga Enam berdedikasi memberikan layanan terbaik di bidang sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia.",
    image: "/placeholder.svg",
    cta: { label: "Lihat Agenda", href: "/agenda" },
    cta2: { label: "Layanan Kami", href: "#layanan" }
  },
  {
    id: 2,
    title: "Tingkatkan Kompetensi SDM Perusahaan Anda",
    subtitle: "PELATIHAN BERBASIS KOMPETENSI",
    description: "Program pelatihan yang disesuaikan dengan kebutuhan industri untuk mengembangkan keterampilan teknis dan soft skills karyawan.",
    image: "/placeholder.svg",
    cta: { label: "Konsultasi Gratis", href: "#layanan" },
    cta2: { label: "Lihat Program", href: "/agenda" }
  },
  {
    id: 3,
    title: "Sertifikasi Tenaga Kerja Berstandar Nasional",
    subtitle: "KOMPETENSI YANG DIAKUI INDUSTRI",
    description: "Skema sertifikasi berbasis kompetensi yang diakui industri untuk berbagai jabatan dan keahlian sesuai SKKNI.",
    image: "/placeholder.svg",
    cta: { label: "Daftar Sekarang", href: "/agenda" },
    cta2: { label: "Info Sertifikasi", href: "#layanan" }
  }
];

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] relative">
              <div className="relative h-[70vh] lg:h-[80vh] flex items-center">
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/60" />
                </div>
                <div className="container relative z-10 text-center text-white">
                  <p className="text-sm md:text-base font-medium tracking-wider mb-4 opacity-90">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" asChild>
                      <a href={slide.cta.href}>{slide.cta.label}</a>
                    </Button>
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                      <a href={slide.cta2.href}>{slide.cta2.label}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors disabled:opacity-50"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors disabled:opacity-50"
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
