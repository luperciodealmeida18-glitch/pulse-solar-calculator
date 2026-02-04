import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppFloat = () => {
  const [showBalloon, setShowBalloon] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const whatsappMessage = "Olá Leonardo! Vi o site da Pulse Energia Solar e gostaria de tirar algumas dúvidas sobre energia fotovoltaica. Pode me ajudar?";
  const whatsappNumber = "551298155559";

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Show balloon after 3 seconds
    const balloonTimer = setTimeout(() => {
      setShowBalloon(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(balloonTimer);
    };
  }, []);

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  const closeBalloon = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBalloon(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-in">
      {/* Chat Balloon */}
      {showBalloon && (
        <div className="relative bg-card border border-border/50 rounded-2xl rounded-br-md p-4 shadow-2xl max-w-[280px] animate-scale-in">
          <button
            onClick={closeBalloon}
            className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <X className="w-3 h-3 text-muted-foreground" />
          </button>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="relative">
                <span className="text-lg">👨‍🔧</span>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card animate-pulse" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                Leonardo está online
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </p>
              <p className="text-xs text-muted-foreground">
                Técnico especialista pronto para atender você! Tire suas dúvidas agora mesmo ☀️
              </p>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
