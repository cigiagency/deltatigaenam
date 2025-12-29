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
import { useCSChat, useLanguage } from "@/contexts";

const CSChat = () => {
	const { isOpen, openChat, closeChat, toggleChat } = useCSChat();
	const { t, language } = useLanguage();

	return (
		<Sheet open={isOpen} onOpenChange={(open) => !open && closeChat()}>
			<SheetTrigger asChild>
				<div className="fixed z-50 right-4 bottom-4 md:right-6 md:bottom-6">
					<Button
						variant="secondary"
						className="rounded-full shadow-lg h-12 px-3 md:px-4 gap-2"
						aria-label={
							language === "id"
								? "Buka Hubungi Kami"
								: "Open Contact Us"
						}
						onClick={toggleChat}
					>
						<MessageSquare className="size-5" />
						<span className="hidden md:inline">
							{t("cschat.button")}
						</span>
					</Button>
				</div>
			</SheetTrigger>
			<SheetContent side="right" className="sm:max-w-md">
				<SheetHeader>
					<SheetTitle>{t("cschat.title")}</SheetTitle>
					<SheetDescription>
						{t("cschat.description")}
					</SheetDescription>
				</SheetHeader>
				<div className="mt-6 grid gap-3">
					<Button className="justify-start gap-2" asChild>
						<a
							href="https://api.whatsapp.com/send/?phone=62818834766&text=Halo+PT.+Delta+Tiga+Enam&type=phone_number&app_absent=0"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MessageSquare className="size-4" />{" "}
							{t("cschat.whatsapp")}
						</a>
					</Button>
					<Button
						className="justify-start gap-2"
						asChild
					>
						<a href="mailto:info@deltatigaenam.com">
							<Mail className="size-4" /> {t("cschat.email")}
						</a>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default CSChat;
