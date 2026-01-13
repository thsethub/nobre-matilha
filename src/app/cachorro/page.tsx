"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Home,
  MapPin,
  Star,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Dados mockados de produtos
const products = [
  {
    id: 1,
    name: "Petisco Natural True Meats Tiras de Frango para Cães - 100 g",
    rating: 5.0,
    originalPrice: 29.9,
    salePrice: 23.92,
    clubPrice: 22.43,
    discount: 25,
    weight: "100 g",
    imageUrl: "/products/petisco-frango.jpg",
    badge: "Nobre Recomenda",
  },
  {
    id: 2,
    name: "Petisco Natural True Meats Filé de Pato para Cães - 100 g",
    rating: 4.7,
    originalPrice: 29.9,
    salePrice: 23.92,
    clubPrice: 22.43,
    discount: 25,
    weight: "100 g",
    imageUrl: "/products/petisco-pato.jpg",
    badge: "Nobre Recomenda",
  },
  {
    id: 3,
    name: "Ração Seca PremieR Pet Golden Special Cães Adultos Frango e Carne - 20Kg",
    rating: 4.6,
    originalPrice: 204.9,
    salePrice: 174.17,
    clubPrice: 165.46,
    discount: 15,
    weight: "20 Kg",
    imageUrl: "/products/racao-golden.jpg",
  },
  {
    id: 4,
    name: "Petisco Natural True Meats Cubos de Frango para Cães - 80 g",
    rating: 5.0,
    originalPrice: 24.9,
    salePrice: 19.92,
    clubPrice: 18.68,
    discount: 25,
    weight: "80 g",
    imageUrl: "/products/petisco-cubos.jpg",
    badge: "Nobre Recomenda",
  },
  {
    id: 5,
    name: "Ração Seca Premier Nattu Cães Adultos Mandioca - 12Kg",
    rating: 4.8,
    originalPrice: 189.9,
    salePrice: 161.42,
    clubPrice: 153.35,
    discount: 15,
    weight: "12 Kg",
    imageUrl: "/products/racao-nattu.jpg",
  },
  {
    id: 6,
    name: "Snack Dental DentaStix para Cães Raças Médias - 7 unidades",
    rating: 4.5,
    originalPrice: 32.9,
    salePrice: 26.32,
    clubPrice: 24.68,
    discount: 20,
    weight: "180 g",
    imageUrl: "/products/dentastix.jpg",
  },
  {
    id: 7,
    name: "Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos - 100g",
    rating: 4.3,
    originalPrice: 4.5,
    salePrice: 3.82,
    clubPrice: 3.6,
    discount: 15,
    weight: "100 g",
    imageUrl: "/products/sache-pedigree.jpg",
  },
  {
    id: 8,
    name: "Brinquedo Kong Classic para Cães - Tamanho M",
    rating: 4.9,
    originalPrice: 89.9,
    salePrice: 76.42,
    clubPrice: 72.6,
    discount: 15,
    weight: "Médio",
    imageUrl: "/products/kong.jpg",
  },
];

const categories = [
  {
    name: "Rações",
    open: true,
    items: [
      "Ração Seca",
      "Ração Natural",
      "Ração Úmida",
      "Ração Medicamentosa",
    ],
  },
  {
    name: "Alimentação Natural",
    open: false,
    items: ["Alimentação Natural Fresca", "Alimentação Natural Congelada"],
  },
  {
    name: "Petiscos e Ossos",
    open: false,
    items: [
      "Cuidado Oral",
      "Petisco Natural",
      "Bifinhos",
      "Biscoitos e Snacks",
    ],
  },
  {
    name: "Brinquedos",
    open: false,
    items: ["Bolas", "Mordedores", "Pelúcias", "Interativos"],
  },
  {
    name: "Higiene e Limpeza",
    open: false,
    items: ["Shampoos", "Condicionadores", "Perfumes", "Lenços Umedecidos"],
  },
];

const sortOptions = [
  "Relevância",
  "Menor Preço",
  "Maior Preço",
  "Mais Vendidos",
  "Melhores Avaliados",
];

export default function CachorroPage() {
  const [openCategories, setOpenCategories] = useState<string[]>(["Rações"]);
  const [sortBy, setSortBy] = useState("Relevância");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleCategory = (name: string) => {
    setOpenCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner Hero */}
      <div className="relative bg-brand-navy h-48 md:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-1/2 md:w-2/5">
          <div className="h-full w-full bg-gradient-to-l from-brand-navy/20 to-brand-navy" />
          {/* Imagem do cachorro - placeholder */}
          <div className="absolute inset-0 flex items-end justify-end">
            <div className="w-full h-full bg-[url('/banner-cachorro.jpg')] bg-cover bg-center opacity-80" />
          </div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-gold font-medium">Cachorro</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Cachorro
          </h1>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar - Filtros (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            {/* CEP */}
            <div className="bg-card rounded-xl p-4 border border-border mb-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Entregar em:</span>
              </div>
              <input
                type="text"
                placeholder="Informe seu CEP"
                className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
              />
            </div>

            {/* Categorias */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="border-b border-border last:border-b-0"
                >
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground text-sm">
                      {category.name}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform ${
                        openCategories.includes(category.name)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                  {openCategories.includes(category.name) && (
                    <div className="px-4 pb-4 space-y-2">
                      {category.items.map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="block text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Área Principal */}
          <main className="flex-1">
            {/* Header da Lista */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Todos os produtos para Cachorro
                </h2>
                <p className="text-sm text-muted-foreground">
                  ({products.length * 1856} produtos)
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Botão Filtros Mobile */}
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filtros
                </button>

                {/* Ordenar */}
                <div className="relative">
                  <button
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm"
                  >
                    <span className="text-muted-foreground">Ordenar por:</span>
                    <span className="font-medium">{sortBy}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showSortDropdown && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
                      {sortOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSortBy(option);
                            setShowSortDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary/50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                            sortBy === option
                              ? "text-brand-gold font-medium"
                              : "text-foreground"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Grid de Produtos */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <Link href={`/produto/${product.id}`} key={product.id}>
                  <div className="bg-card rounded-xl p-3 border border-border hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer h-full">
                    {/* Rating */}
                    <div className="flex items-center gap-0.5 mb-2">
                      <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                      <span className="text-xs font-semibold text-foreground">
                        {product.rating}
                      </span>
                    </div>

                    {/* Imagem */}
                    <div className="h-28 flex items-center justify-center mb-3 bg-secondary/30 rounded-lg">
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-cream-dark to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-3xl">🦴</span>
                      </div>
                    </div>

                    {/* Badge */}
                    {product.badge && (
                      <span className="inline-block bg-brand-navy text-white text-[10px] font-semibold px-2 py-1 rounded-full mb-2">
                        {product.badge}
                      </span>
                    )}

                    {/* Nome */}
                    <h3 className="text-xs font-semibold text-foreground line-clamp-2 mb-2 min-h-[32px] leading-tight">
                      {product.name}
                    </h3>

                    {/* Peso */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block bg-brand-cream-dark text-brand-navy text-[10px] font-medium px-2 py-0.5 rounded-full">
                        {product.weight}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        +opções
                      </span>
                    </div>

                    {/* Preços */}
                    <div className="space-y-0.5">
                      <p className="text-[11px] text-muted-foreground line-through">
                        R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-bold text-foreground">
                          R$ {product.salePrice.toFixed(2).replace(".", ",")}
                        </p>
                        {product.discount && (
                          <span className="bg-brand-gold text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                            -{product.discount}%
                          </span>
                        )}
                      </div>
                      {product.clubPrice && (
                        <div className="flex items-center gap-1 text-brand-gold">
                          <span className="text-xs">👑</span>
                          <span className="text-xs font-semibold">
                            R$ {product.clubPrice.toFixed(2).replace(".", ",")}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            só com o Clube
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Paginação */}
            <div className="flex justify-center gap-2 mt-8">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    page === 1
                      ? "bg-brand-navy text-white"
                      : "bg-card border border-border text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 h-10 rounded-lg text-sm font-medium bg-card border border-border text-foreground hover:bg-secondary/50">
                Próxima
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* Modal Filtros Mobile */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-background shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-bold text-lg">Filtros</h3>
              <button onClick={() => setShowMobileFilters(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* CEP */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Entregar em:</span>
              </div>
              <input
                type="text"
                placeholder="Informe seu CEP"
                className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
              />
            </div>

            {/* Categorias */}
            {categories.map((category) => (
              <div key={category.name} className="border-b border-border">
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground text-sm">
                    {category.name}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform ${
                      openCategories.includes(category.name) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openCategories.includes(category.name) && (
                  <div className="px-4 pb-4 space-y-2">
                    {category.items.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="p-4">
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-full bg-brand-gold text-white py-3 rounded-lg font-semibold"
              >
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
