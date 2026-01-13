import { Star } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  rating: number;
  originalPrice: number;
  salePrice: number;
  clubPrice?: number;
  discount?: number;
  weight?: string;
  imageUrl?: string;
}

const ProductCard = ({
  id,
  name,
  rating,
  originalPrice,
  salePrice,
  clubPrice,
  discount,
  weight,
  imageUrl,
}: ProductCardProps) => {
  return (
    <Link href={`/produto/${id}`}>
      <div className="bg-white rounded-xl p-3 border border-border hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer h-full flex flex-col">
        {/* Imagem com rating */}
        <div className="relative mb-2">
          {/* Rating no canto superior */}
          <div className="absolute top-1 left-1 flex items-center gap-0.5 bg-white rounded px-1 text-[10px] z-10 shadow-sm">
            <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
            <span className="font-semibold text-foreground">{rating}</span>
          </div>

          {/* Imagem */}
          <div className="h-20 flex items-center justify-center bg-secondary/30 rounded-lg">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="h-16 object-contain" />
            ) : (
              <span className="text-3xl opacity-60">🦴</span>
            )}
          </div>
        </div>

        {/* Nome com altura fixa */}
        <h3 className="text-[11px] font-medium text-foreground line-clamp-2 mb-1.5 min-h-[28px] leading-tight">
          {name}
        </h3>

        {/* Badge de peso */}
        {weight && (
          <span className="inline-block bg-gray-100 text-brand-navy text-[10px] font-medium px-1.5 py-0.5 rounded mb-1.5">
            {weight}
          </span>
        )}

        {/* Preços - empurra para o final */}
        <div className="mt-auto">
          <p className="text-[10px] text-muted-foreground line-through mb-0.5">
            R$ {originalPrice.toFixed(2).replace(".", ",")}
          </p>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-sm font-bold text-foreground">
              R$ {salePrice.toFixed(2).replace(".", ",")}
            </span>
            {discount && (
              <span className="bg-brand-gold text-white text-[9px] font-bold px-1 rounded">
                -{discount}%
              </span>
            )}
          </div>
          {clubPrice && (
            <p className="text-[10px] text-brand-gold font-semibold">
              👑 R$ {clubPrice.toFixed(2).replace(".", ",")}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
