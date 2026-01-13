import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Anti-inflamatório Prediderm Comprimidos",
    rating: 4.7,
    originalPrice: 20.9,
    salePrice: 13.59,
    discount: 35,
    weight: "5 mg",
  },
  {
    id: 2,
    name: "Petisco Cremoso True Creamy Sabores Variados para Gatos",
    rating: 4.9,
    originalPrice: 96.6,
    salePrice: 72.45,
    clubPrice: 64.72,
    discount: 33,
    weight: "4 Pacotes (20 Unidades)",
  },
  {
    id: 3,
    name: "Ração Natural True para Gatos Adultos Castrados",
    rating: 4.8,
    originalPrice: 80.9,
    salePrice: 64.72,
    clubPrice: 56.63,
    discount: 30,
    weight: "1 Kg",
  },
  {
    id: 4,
    name: "Ração Úmida Royal Canin Veterinary Diet Gastrointestinal Low...",
    rating: 4.8,
    originalPrice: 44.84,
    salePrice: 38.12,
    clubPrice: 38.12,
    discount: 15,
    weight: "420 g",
  },
  {
    id: 5,
    name: "Ração Seca PremieR Pet Golden Salmão para Gatos Adultos...",
    rating: 4.8,
    originalPrice: 33.5,
    salePrice: 28.48,
    clubPrice: 28.48,
    discount: 15,
    weight: "1 Kg",
  },
];

const FavoriteProducts = () => {
  return (
    <section className="py-8 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-brand-navy font-display title-brand">
            Favoritos com até 50% OFF
          </h2>
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

export default FavoriteProducts;
