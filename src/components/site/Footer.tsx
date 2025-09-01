const Footer = () => {
	return (
		<footer className="border-t mt-16">
			<div className="container py-10 grid gap-8 md:grid-cols-4">
				<div>
					<div className="flex items-center gap-2 mb-3">
						<img
							src="/logo.png"
							alt="PT. Delta Tiga Enam"
							className="h-8 w-auto"
							loading="lazy"
						/>
						<span className="font-semibold tracking-wider">
							DELTA TIGA ENAM
						</span>
					</div>
					<p className="text-sm text-muted-foreground">
						Sertifikasi, pelatihan, penyeleksian, dan penempatan
						tenaga kerja di Indonesia.
					</p>
					<div className="mt-3 space-y-1 text-sm">
						<a
							className="story-link"
							href="https://www.deltatigaenam.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							www.deltatigaenam.com
						</a>
						<div>
							<a
								className="story-link"
								href="mailto:info@deltatigaenam.com"
							>
								info@deltatigaenam.com
							</a>
						</div>
						<a
							className="story-link"
							href="https://www.linkedin.com/company/deltatigaenam"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</div>
				</div>
				<div>
					<h3 className="text-sm font-semibold mb-3">Head Office</h3>
					<ul className="space-y-2 text-sm text-muted-foreground">
						<li>
							Gedung Bursa Efek Indonesia Tower 1 Level 3, Unit
							304
						</li>
						<li>
							Jalan Jendral Sudirman Kav. 52-53, SCBD Senayan,
						</li>
						<li>Kebayoran Baru, Jakarta Selatan, DKI Jakarta</li>
						<li className="text-foreground">
							PH. 021-5890 5002, 0818 834 766
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-sm font-semibold mb-3">
						Marketing Office
					</h3>
					<ul className="space-y-2 text-sm text-muted-foreground">
						<li>Cikarang Technopark, Jalan Inti I Blok C1 No. 7</li>
						<li>Cibatu, Cikarang Selatan, Kabupaten Bekasi</li>
						<li>Jawa Barat 17530</li>
						<li className="text-foreground">PH. 021-8988 1110</li>
					</ul>
				</div>
				<div>
					<h3 className="text-sm font-semibold mb-3">
						Operational Office
					</h3>
					<ul className="space-y-2 text-sm text-muted-foreground">
						<li>Taman Widya Asri Blok GG No. 18, Serang</li>
						<li>Kota Serang, Banten 46111</li>
						<li className="text-foreground">PH. 0817 018 6104</li>
					</ul>
				</div>
			</div>
			<div className="border-t">
				<div className="container py-6 text-xs text-muted-foreground">
					© {new Date().getFullYear()} PT. Delta Tiga Enam. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
