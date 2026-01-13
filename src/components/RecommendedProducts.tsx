import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 6,
    name: "Ração Úmida True Mixer Carne, Batata Doce e Ervilha para...",
    rating: 4.9,
    originalPrice: 19.9,
    salePrice: 17.91,
    clubPrice: 14.93,
    discount: 25,
    weight: "320 g",
  },
  {
    id: 7,
    name: "Ração Úmida Suprema Atum ao Molho para Gatos Adultos",
    rating: 4.5,
    originalPrice: 3.29,
    salePrice: 2.96,
    clubPrice: 2.47,
    discount: 25,
    weight: "85 g",
  },
  {
    id: 8,
    name: "Ração Liva Natural Frango e Goiaba para Gatos Castrados",
    rating: 4.3,
    originalPrice: 181.9,
    salePrice: 136.43,
    clubPrice: 127.32,
    discount: 30,
    weight: "7.5 kg",
  },
  {
    id: 1,
    name: "Petisco Natural True Meats Tiras de Frango para Cães",
    rating: 5.0,
    originalPrice: 29.9,
    salePrice: 23.92,
    clubPrice: 22.43,
    discount: 25,
    weight: "100 g",
  },
  {
    id: 9,
    name: "Areia Higiênica Meau Biodegradável Grãos Médios para Gatos",
    rating: 4.6,
    originalPrice: 67.9,
    salePrice: 56.36,
    clubPrice: 50.92,
    discount: 25,
    weight: "4 Kg",
  },
];

const RecommendedProducts = () => {
  return (
    <section className="py-8 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-brand-navy font-display title-brand">
              Queridinhos que a Nobre Matilha recomenda
            </h2>
            <Heart className="w-6 h-6 fill-brand-gold text-brand-gold" />
          </div>
          <div className="flex gap-1.5">
            <button className="flex items-center justify-center w-9 h-9 bg-card rounded-full border border-border hover:border-primary transition-colors">
              <ChevronLeft className="w-4 h-4 text-primary" />
            </button>
            <button className="flex items-center justify-center w-9 h-9 bg-primary rounded-full text-primary-foreground">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
