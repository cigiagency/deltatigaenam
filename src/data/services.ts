export type ServiceItem = {
	title: string;
	desc: string;
	cta?: { label: string; href: string };
};

export const services: ServiceItem[] = [
	{
		title: "Konsultasi Manajemen",
		desc: "Solusi komprehensif untuk merumuskan strategi, meningkatkan efisiensi operasional, mengoptimalkan sumber daya, mengelola perubahan, dan memitigasi risiko bisnis.",
		cta: { label: "Konsultasi sekarang", href: "#" },
	},
	{
		title: "Konsultasi Manajemen Human Capital",
		desc: "Pendekatan strategis untuk strategi HC, pengembangan organisasi, manajemen kinerja, talent & succession, serta kompensasi dan benefit yang kompetitif.",
		cta: { label: "Pelajari lebih lanjut", href: "#" },
	},
	{
		title: "Headhunter",
		desc: "Layanan end-to-end: perumusan profil jabatan, sourcing & screening berbasis data, asesmen & wawancara behavioral, negosiasi penawaran, hingga onboarding.",
		cta: { label: "Cari talenta", href: "#" },
	},
	{
		title: "Pelatihan Karyawan",
		desc: "Program fleksibel: soft skills & leadership, teknis & spesialisasi, digital & teknologi, program kustom, serta coaching & mentoring untuk kinerja optimal.",
		cta: { label: "Jadwal pelatihan", href: "/agenda" },
	},
	{
		title: "Sertifikasi Kompetensi",
		desc: "Sertifikasi komprehensif: persiapan uji, pendampingan & asesmen, upgrade/re-sertifikasi, sertifikasi BNSP RI, dan sertifikasi internasional.",
		cta: { label: "Lihat agenda", href: "/agenda" },
	},
];
