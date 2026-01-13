const dogCategories = [
  { name: "Rações", colors: ["#FF6B6B", "#4ECDC4", "#FFE66D"] },
  { name: "Higiene e limpeza", colors: ["#7C3AED", "#F59E0B", "#10B981"] },
  { name: "Medicina e saúde", colors: ["#EF4444", "#3B82F6", "#10B981"] },
  {
    name: "Acessórios de alimentação",
    colors: ["#8B5CF6", "#F97316", "#22C55E"],
  },
];

const catCategories = [
  { name: "Rações", colors: ["#EF4444", "#8B5CF6", "#F59E0B"] },
  {
    name: "Caixa de areia e limpeza",
    colors: ["#7C3AED", "#10B981", "#F59E0B"],
  },
  { name: "Medicina e saúde", colors: ["#3B82F6", "#EF4444", "#10B981"] },
  {
    name: "Acessórios de alimentação",
    colors: ["#F97316", "#7C3AED", "#22C55E"],
  },
];

const CategoryIcon = ({ colors }: { colors: string[] }) => (
  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
    <div
      className="absolute inset-2 rounded-full"
      style={{
        background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
      }}
    />
    <div className="absolute inset-3 bg-muted rounded-full" />
    <div
      className="relative w-8 h-8 rounded-lg"
      style={{
        background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
      }}
    />
  </div>
);

const CategoryHighlights = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Dogs */}
        <div>
          <h2 className="text-xl font-bold text-brand-navy font-display title-brand text-center mb-6">
            Destaques para cachorro
          </h2>
          <div className="flex justify-center gap-5">
            {dogCategories.map((category) => (
              <button
                key={category.name}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <CategoryIcon colors={category.colors} />
                <span className="text-xs font-semibold text-foreground text-center max-w-[80px] leading-tight">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cats */}
        <div>
          <h2 className="text-xl font-bold text-brand-navy font-display title-brand text-center mb-6">
            Destaques para gato
          </h2>
          <div className="flex justify-center gap-5">
            {catCategories.map((category) => (
              <button
                key={category.name}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <CategoryIcon colors={category.colors} />
                <span className="text-xs font-semibold text-foreground text-center max-w-[80px] leading-tight">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;
