import { ChevronLeft, ChevronRight, Heart, Shield } from "lucide-react";

const plans = [
  {
    name: "Leve",
    highlight: "O mais em conta",
    price: "14,90",
    featured: false,
  },
  {
    name: "Tranquilo",
    highlight: "Para cuidados de rotina",
    price: "34,90",
    featured: true,
  },
  {
    name: "Ideal",
    highlight: "Melhor custo benefício",
    price: "94,90",
    featured: false,
  },
];

const HealthPlans = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-24 bg-background" />
        <svg
          className="absolute top-12 left-0 right-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 720,0 1440,60 L1440,120 L0,120 Z"
            className="fill-brand-cream-dark"
          />
        </svg>
        <div className="absolute top-[108px] bottom-0 left-0 right-0 bg-brand-cream-dark" />
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z"
            className="fill-brand-gold"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-xl font-bold text-brand-navy font-display title-brand text-center mb-8">
          Plano de saúde para cuidar do seu pet
        </h2>

        <div className="flex items-center justify-center gap-4">
          <button className="hidden md:flex items-center justify-center w-10 h-10 bg-card rounded-full shadow-md hover:shadow-lg transition-shadow">
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>

          <div className="flex gap-4 flex-wrap justify-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-card rounded-2xl p-5 w-56 shadow-lg ${
                  plan.featured ? "ring-2 ring-brand-gold scale-105" : ""
                }`}
              >
                <div className="text-center">
                  <p className="text-muted-foreground text-xs font-medium mb-0.5">
                    Nobre Matilha
                  </p>
                  <h3 className="text-2xl font-bold text-brand-navy font-display title-brand mb-2">
                    {plan.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 bg-secondary rounded-full px-3 py-1 mb-3">
                    {plan.featured ? (
                      <Heart className="w-3.5 h-3.5 text-brand-gold" />
                    ) : (
                      <Shield className="w-3.5 h-3.5 text-brand-navy" />
                    )}
                    <span className="text-[11px] font-medium text-foreground">
                      {plan.highlight}
                    </span>
                  </div>
                  <div className="mb-1">
                    <span className="text-2xl font-bold text-brand-navy">
                      R$ {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">/mês</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mb-4">
                    em São Paulo e região
                  </p>
                  <button className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-navy py-2 rounded-xl text-sm font-semibold transition-colors mb-2">
                    Conferir cobertura
                  </button>
                  <button className="text-xs text-brand-navy font-semibold hover:underline">
                    Contratar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden md:flex items-center justify-center w-10 h-10 bg-card rounded-full shadow-md hover:shadow-lg transition-shadow">
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthPlans;
