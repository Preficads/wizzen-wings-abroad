import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919876543210"; // Replace with actual WhatsApp number
    const message = "Hi Wizzen Overseas! I'm interested in your immigration services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
      
      {/* Floating tooltip */}
      <div className="absolute bottom-16 right-0 bg-background border border-border rounded-lg p-2 shadow-soft opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span className="text-sm text-foreground">Chat with us on WhatsApp</span>
      </div>
    </div>
  );
}