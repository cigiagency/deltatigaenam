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
        <div className="fixed bottom-6 left-6 z-50">
          <Button variant="secondary" className="rounded-full shadow-lg" aria-label="Buka CS Chat">
            <MessageSquare className="mr-2" /> CS
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Customer Service</SheetTitle>
          <SheetDescription>
            Butuh bantuan? Pilih salah satu kanal di bawah untuk terhubung dengan tim kami.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 grid gap-3">
          <Button asChild>
            <a
              href="https://wa.me/6285269698966?text=Halo+PT.+Delta+Tiga+Enam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2" /> Chat via WhatsApp
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="tel:+6285269698966">
              <Phone className="mr-2" /> Telepon CS
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="mailto:cs@deltatigaenam.com">
              <Mail className="mr-2" /> Kirim Email
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CSChat;
