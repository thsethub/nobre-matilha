import {
  Stethoscope,
  Heart,
  Scissors,
  Gift,
  Store,
  ShoppingBag,
  Newspaper,
  ArrowRight,
} from "lucide-react";

const categories = [
  { icon: Stethoscope, label: "Brinquedos" },
  { icon: Heart, label: "Acessórios" },
  { icon: Scissors, label: "Roupas" },
  { icon: Gift, label: "Recomendados" },
  // { icon: Store, label: "Lojas" },
  // { icon: ShoppingBag, label: "Marcas exclusivas" },
  // { icon: Gift, label: "Benefícios" },
  // { icon: Newspaper, label: "Blog" },
];

const QuickCategories = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-2">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.label}
            className="flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2 hover:border-primary hover:shadow-sm transition-all text-sm"
          >
            <category.icon className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground">
              {category.label}
            </span>
          </button>
        ))}
        <button className="flex items-center justify-center w-9 h-9 bg-card border border-border rounded-full hover:border-primary hover:shadow-sm transition-all">
          <ArrowRight className="w-4 h-4 text-primary" />
        </button>
      </div>
    </div>
  );
};

export default QuickCategories;
