import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MessageSquare, Phone, Mail } from "lucide-react";

const CSChat = () => {
	const [open, setOpen] = useState(false);
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<div className="fixed z-50 right-4 bottom-4 md:right-6 md:bottom-6">
					<Button
						variant="secondary"
						className="rounded-full shadow-lg h-12 px-3 md:px-4 gap-2"
						aria-label="Buka Hubungi Kami"
					>
						<MessageSquare className="size-5" />
						<span className="hidden md:inline">Hubungi Kami</span>
					</Button>
				</div>
			</SheetTrigger>
			<SheetContent side="right" className="sm:max-w-md">
				<SheetHeader>
					<SheetTitle>Terhubung dengan Kami</SheetTitle>
					<SheetDescription>
						Kami online di jam kerja (Senin–Jumat, 09.00–17.00 WIB).
					</SheetDescription>
				</SheetHeader>
				<div className="mt-6 grid gap-3">
					<Button className="justify-start gap-2" asChild>
						<a
							href="https://wa.me/6285269698966?text=Halo+PT.+Delta+Tiga+Enam"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MessageSquare className="size-4" /> Chat via
							WhatsApp
						</a>
					</Button>
					<Button
						variant="ghost"
						className="justify-start gap-2"
						asChild
					>
						<a href="mailto:cs@deltatigaenam.com">
							<Mail className="size-4" /> Kirim Email
						</a>
					</Button>
					<div className="mt-2 text-xs text-muted-foreground">
						Atau kunjungi halaman{" "}
						<a className="story-link" href="/layanan">
							Layanan
						</a>{" "}
						untuk solusi lengkap.
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default CSChat;
