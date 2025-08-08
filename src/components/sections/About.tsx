import heroImage from "@/assets/hero-delta36.jpg";

const About = () => {
  return (
    <section id="tentang" className="py-12 border-t">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <header className="mb-4">
            <h2 className="text-2xl font-semibold">Tentang PT. Delta Tiga Enam</h2>
          </header>
          <article className="text-muted-foreground space-y-3">
            <p>
              PT. Delta Tiga Enam adalah perusahaan yang berdedikasi pada layanan
              sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di
              Indonesia. Kami mendampingi individu dan organisasi untuk mencapai
              standar kompetensi terbaik yang diakui industri.
            </p>
            <p>
              Didukung tenaga ahli berpengalaman, pendekatan kami berorientasi hasil,
              mengutamakan kualitas, kepatuhan, dan keterukuran, sehingga program
              yang diterima relevan dengan kebutuhan bisnis terkini.
            </p>
          </article>
        </div>
        <div>
          <img
            src={heroImage}
            alt="PT Delta Tiga Enam - training & certification provider"
            loading="lazy"
            className="w-full rounded-lg border shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
