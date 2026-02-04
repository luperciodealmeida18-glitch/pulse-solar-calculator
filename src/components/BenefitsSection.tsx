import { 
  Wallet, 
  Home, 
  Leaf, 
  Shield, 
  Clock, 
  TrendingUp,
  Sun,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Wallet,
    title: "Economia Real",
    description: "Reduza até 95% da sua conta de energia elétrica e veja o retorno do investimento em poucos anos.",
    emoji: "💰"
  },
  {
    icon: Home,
    title: "Valorização do Imóvel",
    description: "Imóveis com energia solar valorizam até 8% mais no mercado imobiliário.",
    emoji: "🏠"
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Contribua para o meio ambiente gerando sua própria energia limpa e renovável.",
    emoji: "🌱"
  },
  {
    icon: Shield,
    title: "Garantia de 25 Anos",
    description: "Painéis solares com garantia estendida e vida útil superior a 25 anos.",
    emoji: "🛡️"
  },
  {
    icon: Clock,
    title: "Instalação Rápida",
    description: "Processo ágil e sem burocracia. Da aprovação à instalação em poucos dias.",
    emoji: "⚡"
  },
  {
    icon: TrendingUp,
    title: "Financiamento em 60x",
    description: "Parcelas que cabem no seu bolso, muitas vezes menores que sua conta atual.",
    emoji: "📈"
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Sun className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Por que escolher energia solar?</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Vantagens que </span>
            <span className="text-gradient">transformam</span>
            <br />
            <span className="text-foreground">sua relação com energia</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como a energia solar pode revolucionar sua vida e seu bolso ☀️
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-gradient-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    {benefit.title}
                    <span className="text-lg">{benefit.emoji}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-card border border-border/50 rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-muted-foreground">
              Mais de <span className="text-primary font-semibold">1.000 famílias</span> já economizam com a Pulse
            </span>
          </div>
          
          <div>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 glow-green"
              onClick={() => window.open("https://wa.me/551298155559?text=Olá Leonardo! Vi o site da Pulse Energia Solar e gostaria de solicitar um orçamento. Pode me ajudar?", "_blank")}
            >
              ⚡ Solicitar Orçamento Gratuito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
