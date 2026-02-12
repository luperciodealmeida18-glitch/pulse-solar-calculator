import { Sun, Zap, Cable, Plug, Package, ShieldCheck, MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem, counterVariants } from "./AnimatedSection";
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
    "https://wa.me/5512991855559?text=Olá Leonardo! Tenho interesse no Kit Solar 3,72kWp. Gostaria de mais informações.";

  return (
    <section id="kits" className="py-20 relative overflow-hidden">
      {/* Glow background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
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
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Hero image + price */}
          <AnimatedSection direction="left" className="flex flex-col items-center">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-card rounded-2xl p-8 border border-border/50 w-full max-w-md mx-auto"
            >
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
              >
                MAIS VENDIDO
              </motion.div>
              <motion.img
                src={kitSolarHero}
                alt="Kit Energia Solar On-Grid SAJ + Sunova 620W"
                className="w-full h-auto object-contain max-h-[400px] mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                  3,72 kWp • 500 kWh/mês
                </p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                  className="flex items-baseline justify-center gap-2"
                >
                  <span className="text-3xl md:text-4xl font-bold text-primary font-display">
                    R$ 10.046,43
                  </span>
                </motion.div>
                <p className="text-sm text-muted-foreground">
                  no <strong className="text-foreground">PIX</strong> à vista
                </p>
              </div>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <MessageCircle className="w-5 h-5" />
                Quero esse Kit
              </motion.a>
            </motion.div>

            {/* Note */}
            <p className="mt-4 text-xs text-muted-foreground text-center max-w-sm">
              <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-primary" />
              Estrutura de fixação não inclusa. Consulte opções para seu tipo de telhado.
            </p>
          </AnimatedSection>

          {/* Right - Components list */}
          <AnimatedSection direction="right">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              O que vem no Kit Solar
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Componentes inclusos na sua compra
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="space-y-3"
            >
              {kitComponents.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ x: 6, borderColor: "hsl(var(--primary) / 0.4)" }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/80 border border-border/40 transition-colors duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
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
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Ficha Técnica */}
            <AnimatedSection delay={0.4}>
              <div className="mt-6 p-4 rounded-xl bg-secondary/30 border border-border/40">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Ficha Técnica
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  Kit Energia Solar On-Grid 500kWh/Mês — 3,72kWp — 6× Painel Bifacial Sunova 620W — Inversor SAJ 3kW 220V 1MPPT
                </p>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>

        {/* Produção Estimada por Região */}
        <div className="mt-20">
          <AnimatedSection className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Produção Estimada por <span className="text-gradient">Região</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Valores médios mensais de geração de energia
            </p>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {[
              { region: "Sul", value: 468 },
              { region: "Sudeste", value: 502 },
              { region: "Centro-Oeste", value: 580 },
              { region: "Norte", value: 502 },
              { region: "Nordeste", value: 624 },
            ].map((item) => (
              <motion.div
                key={item.region}
                variants={counterVariants}
                whileHover={{ y: -6, borderColor: "hsl(var(--primary) / 0.5)" }}
                className="relative group p-5 rounded-2xl bg-card/80 border border-border/40 transition-all duration-300 text-center"
              >
                <MapPin className="w-4 h-4 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground mb-1">{item.region}</p>
                <p className="text-3xl font-bold text-primary font-display">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">kWh/mês</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolarKitsSection;
