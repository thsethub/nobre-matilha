import { ChevronLeft, ChevronRight } from "lucide-react";

const promos = [
  {
    title: "Compre 3, leve 4",
    subtitle: "petiscos Purina",
    bgColor: "bg-card",
    border: true,
  },
  {
    title: "Petiscos deliciosos com até",
    highlight: "50% OFF",
    bgColor: "bg-primary",
    textWhite: true,
  },
  {
    title: "25% OFF",
    subtitle: "em Premier Nattu",
    bgColor: "bg-card",
    badge: true,
  },
  {
    title: "50% OFF",
    subtitle: "na 2ª unidade do Petisco Avert LongCare",
    bgColor: "bg-primary",
    textWhite: true,
  },
];

const PromoBanner = () => {
  return (
    <section className="py-6 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3">
          <button className="flex-shrink-0 w-9 h-9 bg-card rounded-full border border-border hover:border-primary transition-colors flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-primary" />
          </button>

          <div className="flex gap-3 flex-1 overflow-hidden">
            {promos.map((promo, index) => (
              <div
                key={index}
                className={`flex-1 min-w-[150px] ${promo.bgColor} ${
                  promo.border ? "border border-border" : ""
                } rounded-xl p-4 text-center ${
                  promo.textWhite ? "text-white" : "text-foreground"
                }`}
              >
                {promo.badge && (
                  <span className="inline-block bg-brand-gold text-brand-navy text-[10px] px-2 py-0.5 rounded-full font-semibold mb-1">
                    👑 Clube Nobre
                  </span>
                )}
                <h3
                  className={`font-bold text-lg ${
                    promo.highlight ? "text-sm" : ""
                  }`}
                >
                  {promo.title}
                </h3>
                {promo.highlight && (
                  <p className="text-2xl font-bold">{promo.highlight}</p>
                )}
                {promo.subtitle && (
                  <p
                    className={`text-xs ${
                      promo.textWhite ? "opacity-80" : "text-muted-foreground"
                    }`}
                  >
                    {promo.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>

          <button className="flex-shrink-0 w-9 h-9 bg-primary rounded-full text-primary-foreground flex items-center justify-center">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
