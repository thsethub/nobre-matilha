import { Package, Store, Heart, Users, RefreshCw } from "lucide-react";

const benefits = [
  { icon: Package, label: "Nossas entregas", active: true },
  { icon: Store, label: "Nossas lojas", active: false },
  { icon: Heart, label: "Clube Nobre", active: false },
  { icon: Users, label: "Indique e ganhe", active: false },
  { icon: RefreshCw, label: "Repet", active: false },
];

const benefitCards = [
  {
    title: "Frete grátis, entrega rápida, retire pertinho e mais",
    subtitle: "Várias opções de entrega",
    buttonText: "Consulte as políticas",
    bgColor: "bg-brand-cream-dark",
    accentColor: "text-brand-navy",
  },
  {
    title: "O cantinho pra curtir e cuidar do seu pet",
    subtitle: "Nossas lojas",
    buttonText: "Confira nossas lojas",
    bgColor: "bg-brand-gold/10",
    accentColor: "text-brand-gold-dark",
  },
  {
    title: "De 15% a 25% OFF em toooodos os produtos*",
    subtitle: "Clube Nobre",
    buttonText: "Quero economizar",
    bgColor: "bg-brand-navy/5",
    accentColor: "text-brand-navy",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-10 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-bold text-brand-navy font-display title-brand text-center mb-8">
          Benefícios pra você
        </h2>

        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          {benefits.map((benefit) => (
            <button
              key={benefit.label}
              className={`flex flex-col items-center gap-2 group ${
                benefit.active ? "scale-105" : ""
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                  benefit.active
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-card text-primary border border-border group-hover:border-primary"
                }`}
              >
                <benefit.icon className="w-6 h-6" />
              </div>
              <span
                className={`text-xs font-semibold text-center max-w-[70px] leading-tight ${
                  benefit.active ? "text-primary" : "text-foreground"
                }`}
              >
                {benefit.label}
              </span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {benefitCards.map((card) => (
            <div
              key={card.title}
              className={`${card.bgColor} rounded-2xl p-5 flex flex-col min-h-[160px]`}
            >
              <p className={`text-xs font-semibold ${card.accentColor} mb-1`}>
                {card.subtitle}
              </p>
              <h3 className="text-base font-bold text-brand-navy font-display leading-tight mb-auto">
                {card.title}
              </h3>
              <button className="bg-brand-gold text-brand-navy px-4 py-2 rounded-xl text-sm font-semibold hover:bg-brand-gold-dark transition-colors self-start mt-3">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
