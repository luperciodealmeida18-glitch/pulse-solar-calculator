import { Zap, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-foreground">Pulse</span>
                <span className="text-xs text-muted-foreground -mt-1">Energia Solar</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformando a energia do sol em economia real para sua casa ou empresa. 
              Soluções fotovoltaicas completas e garantidas. ☀️
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#calculadora" className="text-muted-foreground hover:text-primary transition-colors">
                  Calculadora
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">contato@pulseenergia.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 Pulse Energia Solar. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Feito com 💚 para um futuro mais sustentável
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
