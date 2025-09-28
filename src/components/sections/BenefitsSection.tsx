import { CheckCircle, TrendingUp, Clock, Users, BarChart, Target } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Nunca mais perder leads",
    description: "Sistema inteligente que captura e organiza cada oportunidade automaticamente",
    stat: "0% de leads perdidos"
  },
  {
    icon: Clock,
    title: "Atendimento rápido e escalável",
    description: "IA responde instantaneamente e sua equipe foca apenas nos leads qualificados",
    stat: "Resposta em segundos"
  },
  {
    icon: TrendingUp,
    title: "Mais conversões sem aumentar equipe",
    description: "Automatização inteligente que trabalha 24/7 para maximizar resultados",
    stat: "+47% conversões médias"
  },
  {
    icon: BarChart,
    title: "Clareza total sobre oportunidades",
    description: "Dashboard visual que mostra exatamente onde estão suas vendas",
    stat: "100% de visibilidade"
  },
  {
    icon: Users,
    title: "Crescimento previsível com estratégia",
    description: "Relatórios precisos para planejar expansão baseada em dados reais",
    stat: "Crescimento sustentável"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
            Transforme seu negócio com <span className="text-domous-gradient">resultados reais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Veja como o Domous CRM pode revolucionar sua operação comercial e acelerar seus resultados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Benefits List */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-6 group fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-domous rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-domous-dark mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center text-domous-accent-1 font-semibold">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      {benefit.stat}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Results */}
          <div className="space-y-6">
            <div className="card-domous p-8 text-center">
              <div className="text-4xl font-bold text-domous-gradient mb-2">3.2x</div>
              <div className="text-lg font-semibold text-domous-dark mb-2">Aumento médio em conversões</div>
              <div className="text-muted-foreground">nos primeiros 90 dias</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-domous p-6 text-center">
                <div className="text-2xl font-bold text-domous-purple mb-1">87%</div>
                <div className="text-sm text-muted-foreground">Redução no tempo de resposta</div>
              </div>
              <div className="card-domous p-6 text-center">
                <div className="text-2xl font-bold text-domous-green mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Atendimento automatizado</div>
              </div>
            </div>

            <div className="card-domous p-8 bg-gradient-domous text-white text-center">
              <div className="text-3xl font-bold mb-2">ROI 450%</div>
              <div className="text-lg opacity-90">Retorno médio sobre investimento</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-8 py-4 rounded-2xl text-lg font-semibold">
            <CheckCircle className="h-6 w-6" />
            <span>Resultados comprovados por centenas de clientes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;