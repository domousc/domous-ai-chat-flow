import { Target, Zap, TrendingUp, BarChart3, Clock, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Nunca mais perder leads",
    description: "Sistema inteligente de follow-up e lembretes automáticos garantem que nenhuma oportunidade seja esquecida."
  },
  {
    icon: Zap,
    title: "Atendimento rápido e escalável",
    description: "IA responde instantaneamente e distribui conversas para sua equipe de forma inteligente."
  },
  {
    icon: TrendingUp,
    title: "Mais conversões sem aumentar equipe",
    description: "Automação e inteligência artificial fazem o trabalho pesado, aumentando resultados com o mesmo time."
  },
  {
    icon: BarChart3,
    title: "Clareza total sobre oportunidades",
    description: "Dashboard visual mostra exatamente onde estão seus leads e quanto cada um vale."
  },
  {
    icon: Clock,
    title: "Crescimento previsível com estratégia",
    description: "Relatórios detalhados te ajudam a tomar decisões baseadas em dados reais."
  },
  {
    icon: DollarSign,
    title: "Economia de tempo e redução de custos",
    description: "Automatize processos manuais e reduza custos operacionais significativamente."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-domous-dark mb-6">
            Transforme seu negócio com <span className="text-domous-gradient">resultados reais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Veja como o Domous CRM pode revolucionar sua operação comercial e acelerar seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-domous rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-domous-dark mb-1">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;