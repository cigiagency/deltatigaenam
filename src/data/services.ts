export type ServiceItem = {
  title: string;
  desc: string;
  cta?: { label: string; href: string };
};

export const services: ServiceItem[] = [
  {
    title: "Sertifikasi Tenaga Kerja",
    desc:
      "Skema sertifikasi berbasis kompetensi yang diakui industri untuk berbagai jabatan/keahlian.",
    cta: { label: "Lihat agenda", href: "/agenda" },
  },
  {
    title: "Pelatihan Kompetensi",
    desc:
      "Program pelatihan praktis dan aplikatif untuk meningkatkan keterampilan teknis dan soft skills.",
    cta: { label: "Jadwal pelatihan", href: "/agenda" },
  },
  {
    title: "Konsultasi Manajemen",
    desc:
      "Pendampingan implementasi sistem manajemen, kepatuhan, dan pengembangan SDM.",
  },
  {
    title: "Penyeleksian & Assessment",
    desc:
      "Asesmen komprehensif berbasis kompetensi untuk seleksi kandidat dan pemetaan talenta.",
  },
  {
    title: "Penempatan Tenaga Kerja",
    desc:
      "Penempatan tenaga kerja sesuai kebutuhan perusahaan melalui jaringan mitra kami.",
  },
  {
    title: "Inhouse Training",
    desc:
      "Pelatihan yang disesuaikan dengan konteks perusahaan Anda, fleksibel dan berdampak.",
  },
];
