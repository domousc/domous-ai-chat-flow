import { Star, Quote, TrendingUp, Users, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    company: "Imobiliária Premium",
    role: "Diretor Comercial",
    content: "Aumentamos 65% as conversões em 3 meses. A IA do Domous qualifica os leads perfeitamente e nossa equipe foca apenas no que realmente vale a pena.",
    rating: 5,
    results: "+65% conversões"
  },
  {
    name: "Ana Costa",
    company: "Consultoria Empresarial",
    role: "CEO",
    content: "Nunca mais perdemos um lead. O sistema captura tudo automaticamente e a IA faz follow-up sem a gente precisar lembrar. Simplesmente fantástico!",
    rating: 5,
    results: "0 leads perdidos"
  },
  {
    name: "Roberto Mendes",
    company: "E-commerce Fashion",
    role: "Gerente de Vendas",
    content: "O funil visual mudou nossa forma de trabalhar. Agora sabemos exatamente onde cada cliente está e quais ações tomar. ROI de 380% no primeiro ano.",
    rating: 5,
    results: "ROI 380%"
  }
];

const stats = [
  {
    icon: Users,
    value: "2.847",
    label: "Empresas atendidas",
    suffix: "+"
  },
  {
    icon: MessageCircle,
    value: "1.2M",
    label: "Mensagens processadas/mês",
    suffix: ""
  },
  {
    icon: TrendingUp,
    value: "47%",
    label: "Aumento médio em conversões",
    suffix: "+"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Avaliação média dos clientes",
    suffix: "/5"
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
            Resultados que <span className="text-domous-gradient">comprovam</span> a eficácia
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Milhares de empresas já transformaram suas vendas com o Domous CRM
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="card-domous text-center group hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-domous rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-domous-dark mb-2">
                    {stat.value}<span className="text-domous-accent-1">{stat.suffix}</span>
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-domous-dark mb-12">
            O que nossos clientes estão dizendo
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-domous relative group hover:shadow-glow"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-domous rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Quote className="h-4 w-4 text-white" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-domous-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-domous-accent-1">
                      {testimonial.results}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-lg font-semibold text-domous-dark mb-8">
            Empresas de todos os segmentos confiam no Domous
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Imobiliárias", "E-commerce", "Consultorias", "Cursos Online", "Serviços", "Saúde"].map((segment, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-100 rounded-xl text-sm font-medium text-gray-600"
              >
                {segment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;