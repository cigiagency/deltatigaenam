export type ServiceItem = {
	title: { id: string; en: string };
	desc: { id: string; en: string };
	cta?: { label: { id: string; en: string }; href: string };
};

export const services: ServiceItem[] = [
	{
		title: {
			id: "Konsultasi Manajemen",
			en: "Management Consulting",
		},
		desc: {
			id: "Solusi komprehensif untuk merumuskan strategi, meningkatkan efisiensi operasional, mengoptimalkan sumber daya, mengelola perubahan, dan memitigasi risiko bisnis.",
			en: "Comprehensive solutions for formulating strategy, improving operational efficiency, optimizing resources, managing change, and mitigating business risks.",
		},
		cta: {
			label: {
				id: "Konsultasi sekarang",
				en: "Consult now",
			},
			href: "#",
		},
	},
	{
		title: {
			id: "Konsultasi Manajemen Human Capital",
			en: "Human Capital Management Consulting",
		},
		desc: {
			id: "Pendekatan strategis untuk strategi HC, pengembangan organisasi, manajemen kinerja, talent & succession, serta kompensasi dan benefit yang kompetitif.",
			en: "Strategic approach to HC strategy, organizational development, performance management, talent & succession, as well as competitive compensation and benefits.",
		},
		cta: {
			label: {
				id: "Pelajari lebih lanjut",
				en: "Learn more",
			},
			href: "#",
		},
	},
	{
		title: {
			id: "Headhunter",
			en: "Headhunter",
		},
		desc: {
			id: "Layanan end-to-end: perumusan profil jabatan, sourcing & screening berbasis data, asesmen & wawancara behavioral, negosiasi penawaran, hingga onboarding.",
			en: "End-to-end service: job profiling, data-based sourcing & screening, assessment & behavioral interviews, offer negotiation, to onboarding.",
		},
		cta: {
			label: {
				id: "Cari talenta",
				en: "Find talent",
			},
			href: "#",
		},
	},
	{
		title: {
			id: "Pelatihan Karyawan",
			en: "Employee Training",
		},
		desc: {
			id: "Program fleksibel: soft skills & leadership, teknis & spesialisasi, digital & teknologi, program kustom, serta coaching & mentoring untuk kinerja optimal.",
			en: "Flexible programs: soft skills & leadership, technical & specialization, digital & technology, custom programs, as well as coaching & mentoring for optimal performance.",
		},
		cta: {
			label: {
				id: "Jadwal pelatihan",
				en: "Training schedule",
			},
			href: "/agenda",
		},
	},
	{
		title: {
			id: "Sertifikasi Kompetensi",
			en: "Competency Certification",
		},
		desc: {
			id: "Sertifikasi komprehensif: persiapan uji, pendampingan & asesmen, upgrade/re-sertifikasi, sertifikasi BNSP RI, dan sertifikasi internasional.",
			en: "Comprehensive certification: test preparation, accompaniment & assessment, upgrade/re-certification, BNSP RI certification, and international certification.",
		},
		cta: {
			label: {
				id: "Lihat agenda",
				en: "View agenda",
			},
			href: "/agenda",
		},
	},
];
