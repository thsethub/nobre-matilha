import { Heart, Stethoscope, Percent, ArrowUpRight } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    iconBg: "bg-brand-gold",
    title: "Conheça o Clube Nobre",
    description:
      "Economize até R$ 300/mês + frete grátis + Stix em dobro + brindes exclusivos",
  },
  {
    icon: Stethoscope,
    iconBg: "bg-brand-navy",
    title: "E os planos de saúde pet?",
    description: "Uma vida mais longa e saudável para o seu pet",
  },
  {
    icon: Percent,
    iconBg: "bg-brand-gold-dark",
    title: "Que tal 20%OFF em serviços pro seu pet?",
    description: "Economize em banho, creche, fisioterapia, acupuntura e mais",
  },
];

const BenefitsBanner = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-3">
      <div className="flex gap-3 justify-center flex-wrap">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-brand-cream-dark rounded-2xl px-4 py-3 cursor-pointer hover:shadow-md transition-all group flex-1 min-w-[280px] max-w-[340px]"
          >
            <div
              className={`${benefit.iconBg} p-2.5 rounded-full flex-shrink-0`}
            >
              <benefit.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-brand-navy text-sm leading-tight">
                {benefit.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-tight mt-0.5 line-clamp-2">
                {benefit.description}
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsBanner;
