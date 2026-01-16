import { ArrowDown, Sun, Zap, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

const HeroSection = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculadora");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sun className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Energia Limpa e Renovável</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Reduza até </span>
            <span className="text-gradient">95%</span>
            <br />
            <span className="text-foreground">da sua conta de luz</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Com a <span className="text-primary font-semibold">Pulse Energia Solar</span> você encontra uma solução fotovoltaica 
            <span className="font-semibold"> garantida</span> e muito <span className="font-semibold">lucrativa</span> ☀️
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group">
              <TrendingDown className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">Economia na conta</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-foreground">25+</div>
              <div className="text-sm text-muted-foreground">Anos de garantia</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group">
              <Sun className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-foreground">60x</div>
              <div className="text-sm text-muted-foreground">Financiamento facilitado</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              onClick={scrollToCalculator}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 glow-green"
            >
              ⚡ Calcular Minha Economia
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-border hover:border-primary/50 hover:bg-primary/5 text-foreground font-semibold text-lg px-8 py-6"
              onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
            >
              💬 Falar com Especialista
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
