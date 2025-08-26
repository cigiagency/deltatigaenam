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
              <div className="relative h-[80vh] lg:h-[90vh] flex items-center">
                <div className="absolute inset-0">
                  <img
                    src="/src/assets/hero-delta36.jpg"
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading={slide.id === 1 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-hero" />
                </div>
                <div className="container relative z-10 text-center text-white px-4">
                  <div className="animate-fade-in">
                    <p className="text-sm md:text-lg font-semibold tracking-wider mb-6 opacity-95 uppercase">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto" asChild>
                        <a href={slide.cta.href}>{slide.cta.label}</a>
                      </Button>
                      <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white text-lg px-8 py-4 h-auto backdrop-blur-sm" asChild>
                        <a href={slide.cta2.href}>{slide.cta2.label}</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 disabled:opacity-50 shadow-lg"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 disabled:opacity-50 shadow-lg"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? "bg-white shadow-lg scale-125" 
                : "bg-white/40 hover:bg-white/70 hover:scale-110"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
