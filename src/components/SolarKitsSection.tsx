import { Sun, Zap, Cable, Plug, Package, ShieldCheck, MessageCircle, MapPin } from "lucide-react";
import kitSolarHero from "@/assets/kit-solar-hero.png";
import inversorSaj from "@/assets/inversor-saj.png";
import painelSunova from "@/assets/painel-sunova.png";
import cabosConectores from "@/assets/cabos-conectores.jpeg";

const kitComponents = [
  {
    icon: Zap,
    name: "Inversor SAJ 3kW",
    description: "R5-3K-S1-15 | Monofásico | 1 MPPT",
    quantity: "1 un",
    image: inversorSaj,
  },
  {
    icon: Sun,
    name: "Painéis Solares SUNOVA 620W Bifacial",
    description: "N-Type | Vidro Duplo | Total: 3.720W",
    quantity: "6 un",
    image: painelSunova,
  },
  {
    icon: Cable,
    name: "Cabo Solar Preto Premium",
    description: "4mm² | Proteção UV | 1.8kV",
    quantity: "25m",
    image: cabosConectores,
  },
  {
    icon: Cable,
    name: "Cabo Solar Vermelho Premium",
    description: "4mm² | Proteção UV | 1.8kV",
    quantity: "25m",
    image: null,
  },
  {
    icon: Plug,
    name: "Conectores MC4",
    description: "Kit Macho/Fêmea IP68",
    quantity: "2 pares",
    image: null,
  },
];

const SolarKitsSection = () => {
  const whatsappLink =
    "https://wa.me/5512991537700?text=Olá! Tenho interesse no Kit Solar 3,72kWp. Gostaria de mais informações.";

  return (
    <section id="kits" className="py-20 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Package className="w-4 h-4" />
            Kit Pronto para Instalar
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kit Energia Solar{" "}
            <span className="text-gradient">On-Grid</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo o que você precisa para gerar até <strong className="text-foreground">500 kWh/mês</strong> — economia real na sua conta de luz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Hero image + price */}
          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-card rounded-2xl p-8 border border-border/50 w-full max-w-md mx-auto">
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                MAIS VENDIDO
              </div>
              <img
                src={kitSolarHero}
                alt="Kit Energia Solar On-Grid SAJ + Sunova 620W"
                className="w-full h-auto object-contain max-h-[400px] mx-auto"
              />
              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                  3,72 kWp • 500 kWh/mês
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-primary font-display">
                    R$ 10.046,43
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  no <strong className="text-foreground">PIX</strong> à vista
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
              >
                <MessageCircle className="w-5 h-5" />
                Quero esse Kit
              </a>
            </div>

            {/* Note */}
            <p className="mt-4 text-xs text-muted-foreground text-center max-w-sm">
              <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-primary" />
              Estrutura de fixação não inclusa. Consulte opções para seu tipo de telhado.
            </p>
          </div>

          {/* Right - Components list */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              O que vem no Kit Solar
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Componentes inclusos na sua compra
            </p>

            <div className="space-y-3">
              {kitComponents.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/80 border border-border/40 hover:border-primary/30 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm leading-tight">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Ficha Técnica */}
            <div className="mt-6 p-4 rounded-xl bg-secondary/30 border border-border/40">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Ficha Técnica
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                Kit Energia Solar On-Grid 500kWh/Mês — 3,72kWp — 6× Painel Bifacial Sunova 620W — Inversor SAJ 3kW 220V 1MPPT
              </p>
            </div>
          </div>
        </div>

        {/* Produção Estimada por Região */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Produção Estimada por <span className="text-gradient">Região</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Valores médios mensais de geração de energia
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { region: "Sul", value: 468 },
              { region: "Sudeste", value: 502 },
              { region: "Centro-Oeste", value: 580 },
              { region: "Norte", value: 502 },
              { region: "Nordeste", value: 624 },
            ].map((item) => (
              <div
                key={item.region}
                className="relative group p-5 rounded-2xl bg-card/80 border border-border/40 hover:border-primary/40 transition-all duration-300 text-center"
              >
                <MapPin className="w-4 h-4 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground mb-1">{item.region}</p>
                <p className="text-3xl font-bold text-primary font-display">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">kWh/mês</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarKitsSection;
