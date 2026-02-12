import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, counterVariants } from "./AnimatedSection";

import projeto1 from "@/assets/projects/projeto-1.webp";
import projeto2 from "@/assets/projects/projeto-2.webp";
import projeto3 from "@/assets/projects/projeto-3.webp";
import projeto4 from "@/assets/projects/projeto-4.webp";
import projeto5 from "@/assets/projects/projeto-5.webp";
import projeto6 from "@/assets/projects/projeto-6.webp";
import projeto7 from "@/assets/projects/projeto-7.webp";
import projeto8 from "@/assets/projects/projeto-8.webp";
import projeto9 from "@/assets/projects/projeto-9.webp";
import projeto10 from "@/assets/projects/projeto-10.webp";

const projects = [
  { id: 1, image: projeto1, title: "Residência Alto Padrão", location: "São José dos Campos", power: "12.5 kWp" },
  { id: 2, image: projeto2, title: "Instalação Comercial", location: "Jacareí", power: "8.2 kWp" },
  { id: 3, image: projeto3, title: "Casa de Campo", location: "Taubaté", power: "6.4 kWp" },
  { id: 4, image: projeto4, title: "Residência com Vista", location: "Caraguatatuba", power: "15.8 kWp" },
  { id: 5, image: projeto5, title: "Galpão Industrial", location: "Caçapava", power: "45.0 kWp" },
  { id: 6, image: projeto6, title: "Casa Moderna", location: "São José dos Campos", power: "10.2 kWp" },
  { id: 7, image: projeto7, title: "Residência Colonial", location: "Pindamonhangaba", power: "8.8 kWp" },
  { id: 8, image: projeto8, title: "Condomínio Residencial", location: "São José dos Campos", power: "22.5 kWp" },
  { id: 9, image: projeto9, title: "Vista para o Mar", location: "Ubatuba", power: "9.6 kWp" },
  { id: 10, image: projeto10, title: "Residência Premium", location: "São José dos Campos", power: "14.2 kWp" },
];

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="projetos" className="py-20 md:py-32 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Sun className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossos Projetos</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Trabalhos </span>
            <span className="text-gradient">Realizados</span>
            <span className="text-foreground"> ☀️</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos projetos de energia solar instalados na região do Vale do Paraíba
          </p>
        </AnimatedSection>

        {/* Main Carousel */}
        <AnimatedSection>
          <div className="relative max-w-5xl mx-auto">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/10] group">
              <div 
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="min-w-full h-full relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay with project info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold">{project.power}</span>
                      </div>
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/80 flex items-center gap-1">
                        📍 {project.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex 
                      ? "ring-2 ring-primary scale-105 shadow-lg shadow-primary/30" 
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Dots indicator (mobile) */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
        >
          {[
            { value: "150+", label: "Projetos Realizados" },
            { value: "500kWp+", label: "Potência Instalada" },
            { value: "100%", label: "Clientes Satisfeitos" },
            { value: "5 anos", label: "Experiência" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={counterVariants}
              whileHover={{ y: -4 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" delay={0.2}>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 glow-green"
            onClick={() => window.open("https://wa.me/5512991855559?text=Olá Leonardo! Vi os projetos no site da Pulse Energia Solar e gostaria de solicitar um orçamento. Pode me ajudar?", "_blank")}
          >
            ☀️ Quero Meu Projeto Solar
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
