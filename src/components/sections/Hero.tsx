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
    cta: { label: "Lihat Agenda", href: "/agenda" },
    cta2: { label: "Layanan Kami", href: "#layanan" }
  },
  {
    id: 2,
    title: "Tingkatkan Kompetensi SDM Perusahaan Anda",
    subtitle: "PELATIHAN BERBASIS KOMPETENSI",
    description: "Program pelatihan yang disesuaikan dengan kebutuhan industri untuk mengembangkan keterampilan teknis dan soft skills karyawan.",
    cta: { label: "Konsultasi Gratis", href: "#layanan" },
    cta2: { label: "Lihat Program", href: "/agenda" }
  },
  {
    id: 3,
    title: "Sertifikasi Tenaga Kerja Berstandar Nasional",
    subtitle: "KOMPETENSI YANG DIAKUI INDUSTRI", 
    description: "Skema sertifikasi berbasis kompetensi yang diakui industri untuk berbagai jabatan dan keahlian sesuai SKKNI.",
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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] relative">
              <div className="relative min-h-[100vh] flex items-center">
                {/* Modern overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/70 to-transparent"></div>
                
                {/* Content */}
                <div className="container relative z-10 px-4 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div className="text-left">
                      <div className="animate-fade-in">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-blue-100 text-sm font-medium tracking-wider uppercase">
                            {slide.subtitle}
                          </span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight">
                          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            {slide.title}
                          </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-blue-100/90 mb-10 leading-relaxed max-w-2xl">
                          {slide.description}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button 
                            size="lg" 
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-0" 
                            asChild
                          >
                            <a href={slide.cta.href}>{slide.cta.label}</a>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="lg" 
                            className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300" 
                            asChild
                          >
                            <a href={slide.cta2.href}>{slide.cta2.label}</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Visual element */}
                    <div className="relative hidden lg:block">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                          <div className="space-y-6">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <div className="h-3 bg-white/20 rounded-full w-32 mb-2"></div>
                                <div className="h-2 bg-white/10 rounded-full w-24"></div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                              </div>
                              <div>
                                <div className="h-3 bg-white/20 rounded-full w-40 mb-2"></div>
                                <div className="h-2 bg-white/10 rounded-full w-28"></div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              </div>
                              <div>
                                <div className="h-3 bg-white/20 rounded-full w-36 mb-2"></div>
                                <div className="h-2 bg-white/10 rounded-full w-20"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Navigation Arrows */}
      <button
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white hover:from-blue-600/50 hover:to-indigo-600/50 hover:scale-110 transition-all duration-300 disabled:opacity-30 shadow-2xl border border-white/20"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white hover:from-blue-600/50 hover:to-indigo-600/50 hover:scale-110 transition-all duration-300 disabled:opacity-30 shadow-2xl border border-white/20"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Modern Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 bg-black/20 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`relative transition-all duration-300 rounded-full ${
              index === selectedIndex 
                ? "w-12 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg" 
                : "w-4 h-4 bg-white/40 hover:bg-white/70 hover:scale-110"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === selectedIndex && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
