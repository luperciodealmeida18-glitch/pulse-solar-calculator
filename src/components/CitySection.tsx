import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ponteSjc from "@/assets/ponte-sjc.jpg";

const CitySection = () => {
  return (
    <section id="regiao" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ponteSjc})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossa Região</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Atuamos em </span>
            <span className="text-gradient">São José dos Campos</span>
            <span className="text-foreground"> e região! 📍</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            A <span className="text-primary font-semibold">Pulse Energia Solar</span> é especializada em 
            atender <span className="font-semibold">São José dos Campos</span>, Vale do Paraíba e toda a região. 
            Nossa equipe conhece profundamente as condições climáticas e regulatórias locais para garantir 
            a melhor solução para você! ☀️
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🏢</span>
              </div>
              <span className="text-foreground font-medium">Residencial e Comercial</span>
            </div>
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🚗</span>
              </div>
              <span className="text-foreground font-medium">Atendimento Local</span>
            </div>
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-lg">⚡</span>
              </div>
              <span className="text-foreground font-medium">Instalação Rápida</span>
            </div>
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🛡️</span>
              </div>
              <span className="text-foreground font-medium">Suporte Técnico</span>
            </div>
          </div>

          {/* CTA */}
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 glow-green animate-slide-up"
            style={{ animationDelay: "0.4s" }}
            onClick={() => window.open("https://wa.me/551298155559?text=Olá Leonardo! Sou de São José dos Campos e vi o site da Pulse Energia Solar. Gostaria de solicitar um orçamento. Pode me ajudar?", "_blank")}
          >
            📞 Solicitar Orçamento em SJC
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CitySection;
