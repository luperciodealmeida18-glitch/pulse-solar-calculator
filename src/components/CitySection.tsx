import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "./AnimatedSection";
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
          <AnimatedSection direction="left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nossa Região</span>
            </div>
          </AnimatedSection>

          {/* Heading */}
          <AnimatedSection direction="left" delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Atuamos em </span>
              <span className="text-gradient">São José dos Campos</span>
              <span className="text-foreground"> e região! 📍</span>
            </h2>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection direction="left" delay={0.2}>
            <p className="text-lg text-muted-foreground mb-8">
              A <span className="text-primary font-semibold">Pulse Energia Solar</span> é especializada em 
              atender <span className="font-semibold">São José dos Campos</span>, Vale do Paraíba e toda a região. 
              Nossa equipe conhece profundamente as condições climáticas e regulatórias locais para garantir 
              a melhor solução para você! ☀️
            </p>
          </AnimatedSection>

          {/* Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          >
            {[
              { emoji: "🏢", label: "Residencial e Comercial" },
              { emoji: "🚗", label: "Atendimento Local" },
              { emoji: "⚡", label: "Instalação Rápida" },
              { emoji: "🛡️", label: "Suporte Técnico" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ x: 6 }}
                onClick={() => window.open("https://wa.me/5512991855559?text=Olá Leonardo! Vi o site da Pulse Energia Solar e gostaria de saber mais sobre: " + encodeURIComponent(feature.label) + ". Pode me ajudar?", "_blank")}
                className="flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">{feature.emoji}</span>
                </div>
                <span className="text-foreground font-medium">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <AnimatedSection direction="left" delay={0.4}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 glow-green"
              onClick={() => window.open("https://wa.me/5512991855559?text=Olá Leonardo! Sou de São José dos Campos e vi o site da Pulse Energia Solar. Gostaria de solicitar um orçamento. Pode me ajudar?", "_blank")}
            >
              📞 Solicitar Orçamento em SJC
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CitySection;
