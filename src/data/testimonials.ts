type Testimonial = {
	name: string;
	role: { id: string; en: string };
	quote: { id: string; en: string };
};

export const testimonials: Testimonial[] = [
	{
		name: "Budi Santoso",
		role: {
			id: "HR Manager, Industri Manufaktur",
			en: "HR Manager, Manufacturing Industry",
		},
		quote: {
			id: "Program pelatihannya sangat aplikatif dan instruktur menyampaikan materi dengan jelas. Dampaknya langsung terasa di tim kami.",
			en: "The training program is very practical and the instructors deliver the material clearly. The impact is immediately felt in our team.",
		},
	},
	{
		name: "Siti Rahma",
		role: {
			id: "Quality Lead, Layanan Kesehatan",
			en: "Quality Lead, Healthcare Services",
		},
		quote: {
			id: "Proses sertifikasi dibantu dari awal hingga akhir, dokumentasi rapi dan sesuai standar. Sangat direkomendasikan.",
			en: "The certification process is assisted from start to finish, with neat documentation and standards compliant. Highly recommended.",
		},
	},
	{
		name: "Andi Pratama",
		role: {
			id: "Supervisor Operasional, Energi",
			en: "Operational Supervisor, Energy",
		},
		quote: {
			id: "Assessment kompetensi membantu kami memetakan kebutuhan pelatihan dan promosi internal dengan lebih objektif.",
			en: "Competency assessment helps us map training needs and internal promotions more objectively.",
		},
	},
];
