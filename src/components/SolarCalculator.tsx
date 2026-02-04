import { useState, useMemo } from "react";
import { 
  Sun, 
  Zap, 
  MapPin, 
  Calculator, 
  DollarSign,
  Leaf,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Radiação solar média por estado (HSP - Horas de Sol Pico)
const solarRadiation: Record<string, { hsp: number; cities: string[] }> = {
  "AC": { hsp: 4.5, cities: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"] },
  "AL": { hsp: 5.4, cities: ["Maceió", "Arapiraca", "Palmeira dos Índios"] },
  "AP": { hsp: 4.8, cities: ["Macapá", "Santana", "Laranjal do Jari"] },
  "AM": { hsp: 4.4, cities: ["Manaus", "Parintins", "Itacoatiara"] },
  "BA": { hsp: 5.5, cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Juazeiro"] },
  "CE": { hsp: 5.8, cities: ["Fortaleza", "Juazeiro do Norte", "Sobral", "Caucaia"] },
  "DF": { hsp: 5.2, cities: ["Brasília", "Taguatinga", "Ceilândia"] },
  "ES": { hsp: 5.0, cities: ["Vitória", "Vila Velha", "Serra", "Cariacica"] },
  "GO": { hsp: 5.3, cities: ["Goiânia", "Aparecida de Goiânia", "Anápolis"] },
  "MA": { hsp: 5.3, cities: ["São Luís", "Imperatriz", "Caxias"] },
  "MT": { hsp: 5.1, cities: ["Cuiabá", "Várzea Grande", "Rondonópolis"] },
  "MS": { hsp: 5.2, cities: ["Campo Grande", "Dourados", "Três Lagoas"] },
  "MG": { hsp: 5.4, cities: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"] },
  "PA": { hsp: 4.6, cities: ["Belém", "Ananindeua", "Santarém", "Marabá"] },
  "PB": { hsp: 5.7, cities: ["João Pessoa", "Campina Grande", "Santa Rita"] },
  "PR": { hsp: 4.8, cities: ["Curitiba", "Londrina", "Maringá", "Foz do Iguaçu"] },
  "PE": { hsp: 5.6, cities: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Petrolina"] },
  "PI": { hsp: 5.9, cities: ["Teresina", "Parnaíba", "Picos"] },
  "RJ": { hsp: 4.9, cities: ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu"] },
  "RN": { hsp: 5.8, cities: ["Natal", "Mossoró", "Parnamirim", "Caicó"] },
  "RS": { hsp: 4.5, cities: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas"] },
  "RO": { hsp: 4.7, cities: ["Porto Velho", "Ji-Paraná", "Ariquemes"] },
  "RR": { hsp: 4.8, cities: ["Boa Vista", "Rorainópolis", "Caracaraí"] },
  "SC": { hsp: 4.4, cities: ["Florianópolis", "Joinville", "Blumenau", "Balneário Camboriú"] },
  "SP": { hsp: 4.9, cities: ["São Paulo", "São José dos Campos", "Campinas", "Santos", "Ribeirão Preto", "Sorocaba", "Jacareí", "Taubaté", "Guaratinguetá"] },
  "SE": { hsp: 5.5, cities: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"] },
  "TO": { hsp: 5.4, cities: ["Palmas", "Araguaína", "Gurupi"] }
};

const estados = Object.keys(solarRadiation).sort();

const SolarCalculator = () => {
  const [consumo, setConsumo] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [showResult, setShowResult] = useState(false);

  const cities = useMemo(() => {
    return estado ? solarRadiation[estado]?.cities || [] : [];
  }, [estado]);

  const calculation = useMemo(() => {
    if (!consumo || !estado) return null;

    const E = parseFloat(consumo); // kWh
    const HSP = solarRadiation[estado]?.hsp || 5.0;
    const efficiency = 0.80; // 80% eficiência

    // P = E / (HSP × 30 × η)
    const potenciakWp = E / (HSP * 30 * efficiency);
    
    // Estimativas
    const custoMedioKwp = 4500; // R$ por kWp instalado
    const custoTotal = potenciakWp * custoMedioKwp;
    const economiaAnual = E * 12 * 0.75; // Média de R$0.75 por kWh
    const retornoAnos = custoTotal / economiaAnual;
    const co2Evitado = E * 12 * 0.084; // kg CO2 por kWh

    return {
      potenciakWp: potenciakWp.toFixed(2),
      paineis: Math.ceil(potenciakWp / 0.55), // ~550W por painel
      custoEstimado: custoTotal.toFixed(0),
      economiaAnual: economiaAnual.toFixed(0),
      retornoAnos: retornoAnos.toFixed(1),
      co2Evitado: co2Evitado.toFixed(0),
      hsp: HSP
    };
  }, [consumo, estado]);

  const handleCalculate = () => {
    if (consumo && estado) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setShowResult(false);
  };

  return (
    <section id="calculadora" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Calculadora Solar</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Descubra quanto você pode </span>
            <span className="text-gradient">economizar</span>
            <span className="text-foreground"> ⚡</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insira seus dados e veja em segundos o tamanho do sistema ideal e a economia projetada ☀️
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-10 shadow-2xl">
            
            {!showResult ? (
              <div className="space-y-8">
                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Consumo */}
                  <div className="space-y-3">
                    <Label htmlFor="consumo" className="text-foreground font-semibold flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Consumo Mensal (kWh)
                    </Label>
                    <Input
                      id="consumo"
                      type="number"
                      placeholder="Ex: 350"
                      value={consumo}
                      onChange={(e) => setConsumo(e.target.value)}
                      className="h-14 bg-muted border-border text-lg text-foreground placeholder:text-muted-foreground"
                    />
                    <p className="text-xs text-muted-foreground">
                      Encontre na sua conta de luz ⚡
                    </p>
                  </div>

                  {/* Estado */}
                  <div className="space-y-3">
                    <Label htmlFor="estado" className="text-foreground font-semibold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Estado
                    </Label>
                    <Select 
                      value={estado} 
                      onValueChange={(value) => {
                        setEstado(value);
                        setCidade("");
                      }}
                    >
                      <SelectTrigger className="h-14 bg-muted border-border text-lg text-foreground">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {estados.map((uf) => (
                          <SelectItem key={uf} value={uf} className="text-foreground">
                            {uf}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Cidade */}
                  <div className="space-y-3">
                    <Label htmlFor="cidade" className="text-foreground font-semibold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Cidade
                    </Label>
                    <Select value={cidade} onValueChange={setCidade} disabled={!estado}>
                      <SelectTrigger className="h-14 bg-muted border-border text-lg text-foreground">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {cities.map((city) => (
                          <SelectItem key={city} value={city} className="text-foreground">
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Calculate Button */}
                <Button 
                  onClick={handleCalculate}
                  disabled={!consumo || !estado}
                  size="lg"
                  className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg glow-green disabled:opacity-50"
                >
                  <Sun className="w-6 h-6 mr-3" />
                  Calcular Minha Economia ☀️
                </Button>
              </div>
            ) : (
              <div className="space-y-8 animate-scale-in">
                {/* Result Header */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Resultado da sua simulação! 🎉
                  </h3>
                  <p className="text-muted-foreground">
                    {cidade && `${cidade}, `}{estado} • Radiação solar: {calculation?.hsp} HSP
                  </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted/50 rounded-2xl p-5 text-center border border-border/50 animate-fade-in">
                    <Sun className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{calculation?.potenciakWp}</div>
                    <div className="text-sm text-muted-foreground">kWp necessário</div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-2xl p-5 text-center border border-border/50 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{calculation?.paineis}</div>
                    <div className="text-sm text-muted-foreground">painéis solares</div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-2xl p-5 text-center border border-border/50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      R$ {parseInt(calculation?.economiaAnual || "0").toLocaleString("pt-BR")}
                    </div>
                    <div className="text-sm text-muted-foreground">economia/ano</div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-2xl p-5 text-center border border-border/50 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                    <Leaf className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{calculation?.co2Evitado} kg</div>
                    <div className="text-sm text-muted-foreground">CO₂ evitado/ano</div>
                  </div>
                </div>

                {/* Mystery Investment Box */}
                <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-dashed border-primary/50 rounded-2xl p-6 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="text-4xl mb-3">🤔💰❓</div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    E o investimento? Quanto custa?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Para saber o valor exato do seu sistema, fale com um de nossos especialistas. 
                    <span className="text-primary font-semibold"> Orçamento gratuito e sem compromisso!</span>
                  </p>
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold glow-green animate-pulse"
                    onClick={() => window.open("https://wa.me/551298155559?text=Olá Leonardo! Fiz uma simulação no site da Pulse Energia Solar e gostaria de saber o valor do investimento para meu sistema de " + calculation?.potenciakWp + " kWp. Pode me ajudar?", "_blank")}
                  >
                    💬 Descobrir o Valor do Investimento
                  </Button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="flex-1 h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold glow-green"
                    onClick={() => window.open("https://wa.me/551298155559?text=Olá Leonardo! Fiz uma simulação no site da Pulse Energia Solar e gostaria de solicitar um orçamento. Pode me ajudar?", "_blank")}
                  >
                    💬 Solicitar Orçamento Grátis
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="h-14 border-border hover:border-primary/50 text-foreground font-semibold"
                    onClick={handleReset}
                  >
                    🔄 Nova Simulação
                  </Button>
                </div>

                {/* Disclaimer */}
                <div className="bg-muted/30 border border-border/50 rounded-xl p-4 animate-fade-in">
                  <p className="text-center text-sm text-muted-foreground">
                    ⚠️ <span className="font-semibold">Atenção:</span> Esta é uma <span className="text-primary font-semibold">estimativa inicial</span> baseada em dados médios. 
                    Os valores podem variar de acordo com as características específicas de cada instalação, 
                    como tipo de telhado, sombreamento, orientação e outros fatores técnicos. 
                    <span className="font-semibold"> Solicite uma análise personalizada para valores precisos.</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;
