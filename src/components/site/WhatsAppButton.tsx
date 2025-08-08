import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const href = "https://wa.me/6285269698966?text=Halo+PT.+Delta+Tiga+Enam";
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button variant="hero" size="lg" asChild className="rounded-full shadow-lg">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp PT. Delta Tiga Enam"
        >
          Chat WhatsApp
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
