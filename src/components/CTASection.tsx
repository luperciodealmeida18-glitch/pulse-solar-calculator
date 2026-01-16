import { Phone, MessageCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Pronto para começar a </span>
              <span className="text-gradient">economizar</span>
              <span className="text-foreground">? ☀️</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fale agora com um especialista da <span className="text-primary font-semibold">Pulse Energia Solar</span> e 
              receba um orçamento personalizado para sua residência ou empresa.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Resposta rápida</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>Atendimento personalizado</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 glow-green animate-pulse"
                onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para energia solar.", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento via WhatsApp
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 hover:bg-primary/5 text-foreground font-semibold text-lg px-8 py-6"
                onClick={() => window.open("tel:+5511999999999", "_blank")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              💡 Atendimento especial para <span className="text-primary font-semibold">São José dos Campos</span> e região
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
