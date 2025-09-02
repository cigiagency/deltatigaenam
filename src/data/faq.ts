import { useLanguage } from "@/contexts";

type FAQItem = {
	q: { id: string; en: string };
	a: { id: string; en: string };
};

export const faq: FAQItem[] = [
	{
		q: {
			id: "Bagaimana cara mendaftar pelatihan atau sertifikasi?",
			en: "How to register for training or certification?",
		},
		a: {
			id: "Kunjungi halaman Agenda, pilih kegiatan yang tersedia, lalu klik Daftar. Anda juga bisa menghubungi kami melalui WhatsApp untuk bantuan pendaftaran.",
			en: "Visit the Agenda page, select an available event, then click Register. You can also contact us via WhatsApp for registration assistance.",
		},
	},
	{
		q: {
			id: "Apakah sertifikasi diakui oleh industri?",
			en: "Is the certification recognized by the industry?",
		},
		a: {
			id: "Ya, skema sertifikasi berbasis kompetensi dan mengikuti standar yang diakui oleh industri terkait.",
			en: "Yes, the certification scheme is competency-based and follows standards recognized by the relevant industry.",
		},
	},
	{
		q: {
			id: "Apakah tersedia pelatihan inhouse?",
			en: "Is in-house training available?",
		},
		a: {
			id: "Tersedia. Kami dapat menyesuaikan kurikulum dan jadwal sesuai kebutuhan perusahaan Anda.",
			en: "Available. We can customize the curriculum and schedule according to your company's needs.",
		},
	},
	{
		q: {
			id: "Metode pembelajaran seperti apa yang digunakan?",
			en: "What learning methods are used?",
		},
		a: {
			id: "Kombinasi teori, studi kasus, dan praktik langsung agar peserta mendapatkan pemahaman yang aplikatif.",
			en: "A combination of theory, case studies, and hands-on practice so participants gain practical understanding.",
		},
	},
	{
		q: {
			id: "Bagaimana menghubungi Customer Service (CS)?",
			en: "How to contact Customer Service (CS)?",
		},
		a: {
			id: "Silakan klik tombol WhatsApp di kanan bawah untuk terhubung langsung dengan CS kami.",
			en: "Please click the WhatsApp button at the bottom right to connect directly with our CS.",
		},
	},
];
