import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow-green">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-foreground">Pulse</span>
              <span className="text-xs text-muted-foreground -mt-1">Energia Solar</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("beneficios")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection("calculadora")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Calculadora
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("calculadora")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-green"
            >
              Simular Economia
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("inicio")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection("beneficios")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection("calculadora")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Calculadora
              </button>
              <button 
                onClick={() => scrollToSection("contato")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection("calculadora")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2 w-full"
              >
                Simular Economia
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
