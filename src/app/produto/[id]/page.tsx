"use client";

import {
  useState,
  useMemo,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ChevronRight,
  ChevronLeft,
  Home,
  Heart,
  Share2,
  Star,
  ThumbsDown,
  Minus,
  Plus,
  ShoppingCart,
  RefreshCw,
  MapPin,
  Check,
  ChevronDown,
  Info,
  Lightbulb,
  FileText,
  GitCompare,
  MessageSquare,
  HelpCircle,
  Package,
} from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { UrlObject } from "url";

// Banco de dados de produtos mock
const productsDatabase: { [key: string]: any } = {
  "1": {
    id: 1,
    name: "Petisco Natural True Meats Tiras de Frango para Cães",
    rating: 5.0,
    reviewCount: 7,
    questionCount: 0,
    badge: "Nobre Recomenda",
    category: "Cachorro",
    description:
      "Inspirada no amor que sentimos por eles, a True foi desenvolvida para oferecer a melhor alimentação para os nossos pets. E por isso, não poderia faltar aquele petisco para deixar essa rotina ainda mais divertida, saudável e saborosa.",
    sizes: [
      { label: "100 g", price: 23.92 },
      { label: "5 Unidades", price: 21.52 },
      { label: "10 Unidades", price: 18.57, badge: "best" },
    ],
    flavors: [{ name: "Tiras de Frango" }, { name: "Tiras de Pato" }],
    images: [1, 2, 3, 4, 5],
    originalPrice: 29.9,
    salePrice: 23.92,
    clubPrice: 22.43,
    clubDiscount: 25,
    normalDiscount: 20,
    breadcrumb: [
      { label: "Cachorro", href: "/cachorro" },
      { label: "Petiscos e Ossos", href: "/cachorro" },
      { label: "Petisco Natural", href: "/cachorro" },
      { label: "True", href: "/cachorro" },
    ],
  },
  "2": {
    id: 2,
    name: "Petisco Cremoso True Creamy Sabores Variados para Gatos",
    rating: 4.9,
    reviewCount: 15,
    questionCount: 2,
    badge: "Mais Vendido",
    category: "Gatos",
    description:
      "O True Creamy é um petisco cremoso irresistível para gatos. Formulado com ingredientes naturais e sem corantes artificiais, proporciona momentos de prazer e fortalece o vínculo com seu felino.",
    sizes: [
      { label: "4 Pacotes (20 Un)", price: 72.45, badge: "best" },
      { label: "2 Pacotes (10 Un)", price: 38.5 },
      { label: "1 Pacote (5 Un)", price: 19.9 },
    ],
    flavors: [{ name: "Frango" }, { name: "Atum" }, { name: "Salmão" }],
    images: [1, 2, 3],
    originalPrice: 96.6,
    salePrice: 72.45,
    clubPrice: 64.72,
    clubDiscount: 33,
    normalDiscount: 25,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Petiscos", href: "/gatos" },
      { label: "Petisco Cremoso", href: "/gatos" },
      { label: "True", href: "/gatos" },
    ],
  },
  "3": {
    id: 3,
    name: "Ração Natural True para Gatos Adultos Castrados",
    rating: 4.8,
    reviewCount: 23,
    questionCount: 5,
    badge: "Nobre Recomenda",
    category: "Gatos",
    description:
      "Ração natural completa e balanceada, especialmente desenvolvida para gatos adultos castrados. Formulada com ingredientes naturais, auxilia no controle de peso e saúde urinária.",
    sizes: [
      { label: "1 Kg", price: 64.72 },
      { label: "3 Kg", price: 156.9, badge: "best" },
      { label: "7 Kg", price: 329.9 },
    ],
    flavors: [{ name: "Frango" }, { name: "Salmão" }],
    images: [1, 2, 3, 4],
    originalPrice: 80.9,
    salePrice: 64.72,
    clubPrice: 56.63,
    clubDiscount: 30,
    normalDiscount: 20,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Ração", href: "/gatos" },
      { label: "Ração Seca", href: "/gatos" },
      { label: "True", href: "/gatos" },
    ],
  },
  "4": {
    id: 4,
    name: "Ração Úmida Royal Canin Veterinary Diet Gastrointestinal Low Fat",
    rating: 4.8,
    reviewCount: 12,
    questionCount: 3,
    badge: "Veterinário",
    category: "Gatos",
    description:
      "Alimento dietético completo desenvolvido especialmente para gatos com distúrbios gastrointestinais. Fórmula com baixo teor de gordura e alta digestibilidade.",
    sizes: [
      { label: "420 g (Lata)", price: 38.12, badge: "best" },
      { label: "Pack 12 Latas", price: 425.0 },
    ],
    flavors: [{ name: "Sabor Único" }],
    images: [1, 2],
    originalPrice: 44.84,
    salePrice: 38.12,
    clubPrice: 38.12,
    clubDiscount: 15,
    normalDiscount: 15,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Ração Veterinária", href: "/gatos" },
      { label: "Royal Canin", href: "/gatos" },
    ],
  },
  "5": {
    id: 5,
    name: "Ração Seca PremieR Pet Golden Salmão para Gatos Adultos",
    rating: 4.8,
    reviewCount: 34,
    questionCount: 8,
    badge: "Melhor Custo-Benefício",
    category: "Gatos",
    description:
      "Ração super premium desenvolvida para gatos adultos. Enriquecida com ômega 3 e 6, proporciona pelagem brilhante e saúde da pele. Fórmula com salmão de alta qualidade.",
    sizes: [
      { label: "1 Kg", price: 28.48 },
      { label: "3 Kg", price: 76.9, badge: "best" },
      { label: "10.1 Kg", price: 219.9 },
    ],
    flavors: [{ name: "Salmão" }, { name: "Frango" }],
    images: [1, 2, 3],
    originalPrice: 33.5,
    salePrice: 28.48,
    clubPrice: 28.48,
    clubDiscount: 15,
    normalDiscount: 15,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Ração", href: "/gatos" },
      { label: "Ração Seca", href: "/gatos" },
      { label: "PremieR", href: "/gatos" },
    ],
  },
  "6": {
    id: 6,
    name: "Ração Úmida True Mixer Carne, Batata Doce e Ervilha para Cães",
    rating: 4.9,
    reviewCount: 18,
    questionCount: 1,
    badge: "Nobre Recomenda",
    category: "Cachorro",
    description:
      "Complemento alimentar úmido natural para cães. Feito com ingredientes selecionados como carne, batata doce e ervilha. Ideal para misturar com ração seca.",
    sizes: [
      { label: "320 g", price: 17.91 },
      { label: "Pack 6 Un", price: 89.9, badge: "best" },
    ],
    flavors: [
      { name: "Carne com Batata Doce" },
      { name: "Frango com Abóbora" },
    ],
    images: [1, 2],
    originalPrice: 19.9,
    salePrice: 17.91,
    clubPrice: 14.93,
    clubDiscount: 25,
    normalDiscount: 10,
    breadcrumb: [
      { label: "Cachorro", href: "/cachorro" },
      { label: "Ração Úmida", href: "/cachorro" },
      { label: "True", href: "/cachorro" },
    ],
  },
  "7": {
    id: 7,
    name: "Ração Úmida Suprema Atum ao Molho para Gatos Adultos",
    rating: 4.5,
    reviewCount: 42,
    questionCount: 6,
    badge: "Econômico",
    category: "Gatos",
    description:
      "Alimento úmido completo para gatos adultos. Pedaços de atum ao molho saboroso. Fonte de proteínas e ômega 3 para saúde cardiovascular.",
    sizes: [
      { label: "85 g (Sachê)", price: 2.96 },
      { label: "Pack 12 Sachês", price: 29.9, badge: "best" },
      { label: "Pack 24 Sachês", price: 54.9 },
    ],
    flavors: [{ name: "Atum" }, { name: "Frango" }, { name: "Sardinha" }],
    images: [1],
    originalPrice: 3.29,
    salePrice: 2.96,
    clubPrice: 2.47,
    clubDiscount: 25,
    normalDiscount: 10,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Ração Úmida", href: "/gatos" },
      { label: "Suprema", href: "/gatos" },
    ],
  },
  "8": {
    id: 8,
    name: "Ração Liva Natural Frango e Goiaba para Gatos Castrados",
    rating: 4.3,
    reviewCount: 9,
    questionCount: 2,
    badge: "Sabor Único",
    category: "Gatos",
    description:
      "Ração natural com ingredientes frescos e selecionados. Combinação inovadora de frango com goiaba. Especialmente formulada para gatos castrados.",
    sizes: [
      { label: "1.5 Kg", price: 45.9 },
      { label: "3 Kg", price: 79.9 },
      { label: "7.5 Kg", price: 136.43, badge: "best" },
    ],
    flavors: [{ name: "Frango e Goiaba" }, { name: "Salmão e Cranberry" }],
    images: [1, 2],
    originalPrice: 181.9,
    salePrice: 136.43,
    clubPrice: 127.32,
    clubDiscount: 30,
    normalDiscount: 25,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Ração Natural", href: "/gatos" },
      { label: "Liva", href: "/gatos" },
    ],
  },
  "9": {
    id: 9,
    name: "Areia Higiênica Meau Biodegradável Grãos Médios para Gatos",
    rating: 4.6,
    reviewCount: 27,
    questionCount: 4,
    badge: "Sustentável",
    category: "Gatos",
    description:
      "Areia higiênica biodegradável feita de fibras vegetais. Absorção superior e controle de odores. Grãos médios com baixo nível de poeira.",
    sizes: [
      { label: "2 Kg", price: 32.9 },
      { label: "4 Kg", price: 56.36, badge: "best" },
      { label: "8 Kg", price: 98.9 },
    ],
    flavors: [{ name: "Natural" }],
    images: [1, 2],
    originalPrice: 67.9,
    salePrice: 56.36,
    clubPrice: 50.92,
    clubDiscount: 25,
    normalDiscount: 17,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Higiene", href: "/gatos" },
      { label: "Areia Higiênica", href: "/gatos" },
      { label: "Meau", href: "/gatos" },
    ],
  },
};

// Produtos de gatos (da página /gatos)
const catsProducts: { [key: string]: any } = {
  "101": {
    id: 101,
    name: "Ração Seca Premier Gatos Castrados Frango - 10,1Kg",
    rating: 4.8,
    reviewCount: 56,
    questionCount: 12,
    badge: "Nobre Recomenda",
    category: "Gatos",
    description:
      "Ração completa e balanceada para gatos adultos castrados. Fórmula especial com baixo teor de gordura e magnésio, ideal para prevenir problemas urinários e controlar o peso.",
    sizes: [
      { label: "1 Kg", price: 24.9 },
      { label: "3 Kg", price: 64.9 },
      { label: "10,1 Kg", price: 161.42, badge: "best" },
    ],
    flavors: [{ name: "Frango" }, { name: "Salmão" }],
    images: [1, 2, 3],
    originalPrice: 189.9,
    salePrice: 161.42,
    clubPrice: 153.35,
    clubDiscount: 19,
    normalDiscount: 15,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Ração", href: "/gatos" },
      { label: "Ração Seca", href: "/gatos" },
      { label: "Premier", href: "/gatos" },
    ],
  },
  "102": {
    id: 102,
    name: "Areia Higiênica Pipicat Classic para Gatos - 12Kg",
    rating: 4.5,
    reviewCount: 89,
    questionCount: 15,
    category: "Gatos",
    description:
      "Areia higiênica 100% natural de argila expandida. Excelente absorção e controle de odores. Grãos médios que não grudam nas patinhas.",
    sizes: [
      { label: "4 Kg", price: 18.9 },
      { label: "12 Kg", price: 39.92, badge: "best" },
    ],
    flavors: [{ name: "Sem Perfume" }, { name: "Lavanda" }],
    images: [1, 2],
    originalPrice: 49.9,
    salePrice: 39.92,
    clubPrice: 37.43,
    clubDiscount: 25,
    normalDiscount: 20,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Higiene", href: "/gatos" },
      { label: "Areia Higiênica", href: "/gatos" },
      { label: "Pipicat", href: "/gatos" },
    ],
  },
  "103": {
    id: 103,
    name: "Petisco Dreamies Sabor Frango para Gatos - 40g",
    rating: 4.9,
    reviewCount: 124,
    questionCount: 3,
    badge: "Nobre Recomenda",
    category: "Gatos",
    description:
      "Petisco crocante por fora e cremoso por dentro. Irresistível para os gatos! Perfeito para recompensar ou apenas mimar seu felino.",
    sizes: [
      { label: "40 g", price: 10.32, badge: "best" },
      { label: "Pack 3x40g", price: 27.9 },
    ],
    flavors: [{ name: "Frango" }, { name: "Salmão" }, { name: "Queijo" }],
    images: [1],
    originalPrice: 12.9,
    salePrice: 10.32,
    clubPrice: 9.68,
    clubDiscount: 25,
    normalDiscount: 20,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Petiscos", href: "/gatos" },
      { label: "Dreamies", href: "/gatos" },
    ],
  },
  "104": {
    id: 104,
    name: "Ração Úmida Whiskas Sachê Carne ao Molho para Gatos - 85g",
    rating: 4.3,
    reviewCount: 203,
    questionCount: 8,
    category: "Gatos",
    description:
      "Alimento úmido completo e balanceado para gatos adultos. Pedaços suculentos de carne ao molho saboroso. Rico em proteínas e nutrientes essenciais.",
    sizes: [
      { label: "85 g (Sachê)", price: 3.82 },
      { label: "Pack 12 Sachês", price: 42.9, badge: "best" },
    ],
    flavors: [{ name: "Carne" }, { name: "Frango" }, { name: "Peixe" }],
    images: [1],
    originalPrice: 4.5,
    salePrice: 3.82,
    clubPrice: 3.6,
    clubDiscount: 20,
    normalDiscount: 15,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Ração Úmida", href: "/gatos" },
      { label: "Whiskas", href: "/gatos" },
    ],
  },
  "105": {
    id: 105,
    name: "Arranhador Torre para Gatos com Bolinha",
    rating: 4.6,
    reviewCount: 45,
    questionCount: 7,
    category: "Gatos",
    description:
      "Torre arranhador completa com plataformas, toca e brinquedo. Estrutura resistente revestida em sisal natural. Perfeito para gatos arranharem e se divertirem.",
    sizes: [{ label: "Único", price: 71.92, badge: "best" }],
    flavors: [{ name: "Bege" }, { name: "Cinza" }],
    images: [1, 2],
    originalPrice: 89.9,
    salePrice: 71.92,
    clubPrice: 67.43,
    clubDiscount: 25,
    normalDiscount: 20,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Brinquedos", href: "/gatos" },
      { label: "Arranhadores", href: "/gatos" },
    ],
  },
  "106": {
    id: 106,
    name: "Antipulgas Frontline Top Spot para Gatos",
    rating: 4.8,
    reviewCount: 78,
    questionCount: 11,
    category: "Gatos",
    description:
      "Proteção completa contra pulgas, carrapatos e piolhos. Ação rápida e duradoura por 30 dias. Aplicação tópica fácil e segura.",
    sizes: [
      { label: "1 pipeta", price: 55.92, badge: "best" },
      { label: "3 pipetas", price: 149.9 },
    ],
    flavors: [{ name: "Único" }],
    images: [1],
    originalPrice: 69.9,
    salePrice: 55.92,
    clubPrice: 52.43,
    clubDiscount: 25,
    normalDiscount: 20,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Saúde", href: "/gatos" },
      { label: "Antipulgas", href: "/gatos" },
      { label: "Frontline", href: "/gatos" },
    ],
  },
  "107": {
    id: 107,
    name: "Caixa de Areia Fechada para Gatos - Banheiro Higiênico",
    rating: 4.4,
    reviewCount: 67,
    questionCount: 9,
    category: "Gatos",
    description:
      "Caixa de areia fechada com tampa e porta. Sistema de ventilação que reduz odores. Fácil de limpar com bandeja removível e pá inclusos.",
    sizes: [{ label: "Grande", price: 103.92, badge: "best" }],
    flavors: [{ name: "Azul" }, { name: "Rosa" }, { name: "Cinza" }],
    images: [1, 2],
    originalPrice: 129.9,
    salePrice: 103.92,
    clubPrice: 97.43,
    clubDiscount: 25,
    normalDiscount: 20,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Higiene", href: "/gatos" },
      { label: "Caixa de Areia", href: "/gatos" },
    ],
  },
  "108": {
    id: 108,
    name: "Fonte Bebedouro para Gatos 2L",
    rating: 4.7,
    reviewCount: 92,
    questionCount: 6,
    category: "Gatos",
    description:
      "Fonte bebedouro com água corrente que estimula o gato a beber mais água. Filtro de carvão ativado que purifica a água. Funcionamento silencioso e baixo consumo de energia.",
    sizes: [
      { label: "2 Litros", price: 127.92, badge: "best" },
      { label: "3 Litros", price: 159.9 },
    ],
    flavors: [{ name: "Branco" }],
    images: [1, 2, 3],
    originalPrice: 159.9,
    salePrice: 127.92,
    clubPrice: 119.93,
    clubDiscount: 25,
    normalDiscount: 20,
    breadcrumb: [
      { label: "Gatos", href: "/gatos" },
      { label: "Acessórios", href: "/gatos" },
      { label: "Bebedouros", href: "/gatos" },
    ],
  },
};

// Combinar todos os produtos
const allProducts = { ...productsDatabase, ...catsProducts };

const suggestedProducts = [
  {
    id: 2,
    name: "Petisco Natural True Meats Cubos de Frango para Cães",
    rating: 5.0,
    originalPrice: 24.9,
    clubPrice: 18.68,
  },
  {
    id: 3,
    name: "Petisco Mastigável Liva Natural Traqueia Bovina para Cães",
    rating: 4.8,
    originalPrice: 22.9,
    clubPrice: 16.03,
  },
];

const similarProducts = [
  {
    id: 4,
    name: "Petisco Natural True Meats Cubos de Frango para Cães",
    rating: 5.0,
    originalPrice: 24.9,
    salePrice: 19.92,
    clubPrice: 18.68,
    discount: 25,
    weight: "80 g",
  },
  {
    id: 5,
    name: "Kit Petisco Lambisco Experiência Sabores para Cães",
    rating: 4.9,
    originalPrice: 99.9,
    salePrice: 99.9,
    weight: "KIT",
  },
  {
    id: 6,
    name: "Bifinho Pet Nutrition Vie para Cães Sabor Carnes e Especiarias",
    rating: 5.0,
    originalPrice: 11.95,
    salePrice: 10.16,
    clubPrice: 9.65,
    discount: 15,
    weight: "50 g",
  },
  {
    id: 7,
    name: "Petisco Cremoso True Creamy sabor Frango para Cães",
    rating: 5.0,
    originalPrice: 24.9,
    salePrice: 19.92,
    clubPrice: 17.43,
    discount: 30,
    weight: "5 Unidades",
  },
  {
    id: 8,
    name: "Petisco Wow Quipocá Hello Kity para Cães sabor Frango",
    rating: 4.8,
    originalPrice: 21.9,
    salePrice: 18.62,
    clubPrice: 17.69,
    discount: 15,
    weight: "30 g",
  },
];

const tabs = [
  { id: "info", label: "Informações", icon: Info },
  { id: "tips", label: "Dicas", icon: Lightbulb },
  { id: "specs", label: "Especificações", icon: FileText },
  { id: "compare", label: "Comparar", icon: GitCompare },
  { id: "reviews", label: "Avaliações", icon: Star },
  { id: "questions", label: "Perguntas", icon: MessageSquare },
];

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;

  // Buscar produto do banco de dados
  const productData = useMemo(() => {
    return allProducts[productId] || null;
  }, [productId]);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [purchaseOption, setPurchaseOption] = useState<"club" | "normal">(
    "normal"
  );
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("info");
  const [expandedSections, setExpandedSections] = useState<string[]>(["info"]);
  const [selectedSuggestions, setSelectedSuggestions] = useState<number[]>([
    2, 3,
  ]);

  // Se produto não encontrado, mostrar 404
  if (!productData) {
    return (
      <div className="min-h-screen bg-brand-cream-dark/30">
        <Header />
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-brand-navy mb-4">
            Produto não encontrado
          </h1>
          <p className="text-muted-foreground mb-8">
            O produto que você procura não está disponível.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-full font-medium hover:bg-brand-navy/90"
          >
            <Home className="w-4 h-4" />
            Voltar para a página inicial
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const product = productData;

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const toggleSuggestion = (id: number) => {
    setSelectedSuggestions((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let total = product.clubPrice;
    suggestedProducts.forEach((p) => {
      if (selectedSuggestions.includes(p.id)) total += p.clubPrice;
    });
    return total;
  };

  return (
    <div className="min-h-screen bg-brand-cream-dark/30">
      <Header />
      <Navigation />

      {/* Banner Promocional */}
      <div className="bg-brand-navy py-2.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3">
          <span className="text-xl">🐾</span>
          <span className="text-white font-bold">10% OFF</span>
          <span className="text-white/80 text-sm hidden sm:inline">
            para novos membros{" "}
            <span className="text-brand-gold font-semibold">Nobre Matilha</span>
          </span>
          {/* <Link
            href="#"
            className="text-brand-gold text-sm font-medium hover:underline ml-2"
          >
            Consulte as condições
          </Link>
          <span className="text-xl hidden sm:block">🐕</span> */}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-brand-gold">
              <Home className="w-4 h-4" />
            </Link>
            {product.breadcrumb.map(
              (
                item: {
                  href: string | UrlObject;
                  label:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactPortal
                        | ReactElement<
                            unknown,
                            string | JSXElementConstructor<any>
                          >
                        | Iterable<ReactNode>
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                },
                i: Key | null | undefined
              ) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <Link href={item.href} className="hover:text-brand-gold">
                    {item.label}
                  </Link>
                </span>
              )
            )}
          </nav>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Coluna Principal */}
          <div className="flex-1 min-w-0">
            {/* Card do Produto */}
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 p-6">
                {/* Galeria de Imagens */}
                <div className="flex flex-col gap-4 md:w-[400px] flex-shrink-0">
                  {/* Imagem Principal */}
                  <div className="relative group">
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200">
                      {product.category === "Gatos" ? (
                        <span className="text-9xl opacity-60">🐱</span>
                      ) : (
                        <span className="text-9xl opacity-60">🐕</span>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={`w-11 h-11 rounded-full border-2 backdrop-blur-sm flex items-center justify-center transition-all shadow-lg ${
                          isFavorite
                            ? "bg-red-500 border-red-400 text-white"
                            : "bg-white/90 border-white text-gray-600 hover:text-red-500 hover:border-red-200"
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            isFavorite ? "fill-current" : ""
                          }`}
                        />
                      </button>
                      <button className="w-11 h-11 rounded-full border-2 border-white bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-brand-gold transition-all shadow-lg">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-2 justify-center">
                    {product.images.map((_: any, i: number) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(i)}
                        className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 transition-all ${
                          selectedImage === i
                            ? "border-brand-navy shadow-md scale-105"
                            : "border-gray-200 hover:border-brand-gold hover:scale-105"
                        }`}
                      >
                        {product.category === "Gatos" ? (
                          <span className="text-2xl opacity-60">🐱</span>
                        ) : (
                          <span className="text-2xl opacity-60">🐕</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info do Produto */}
                <div className="flex-1 min-w-0">
                  {/* Categoria Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-brand-cream-dark text-brand-navy text-xs font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="inline-block bg-brand-navy text-white text-xs font-medium px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Nome do Produto */}
                  <h1 className="text-2xl font-bold text-brand-navy mb-3 leading-tight">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-brand-gold text-brand-gold"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-sm text-brand-navy">
                        {product.rating}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        ({product.reviewCount} avaliações)
                      </span>
                    </div>
                    {product.questionCount > 0 && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm">
                          {product.questionCount} perguntas
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Descrição */}
                  <div className="mb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {showFullDescription
                        ? product.description
                        : product.description.length > 180
                        ? product.description.slice(0, 180) + "..."
                        : product.description}
                    </p>
                    {product.description.length > 180 && (
                      <button
                        onClick={() =>
                          setShowFullDescription(!showFullDescription)
                        }
                        className="text-brand-gold text-sm font-medium hover:underline mt-1"
                      >
                        {showFullDescription ? "Ver menos" : "Continuar lendo"}
                      </button>
                    )}
                  </div>

                  {/* Tamanhos */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-brand-navy text-sm mb-3">
                      Selecione o Tamanho
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map(
                        (
                          size: {
                            badge: string;
                            label:
                              | string
                              | number
                              | bigint
                              | boolean
                              | ReactElement<
                                  unknown,
                                  string | JSXElementConstructor<any>
                                >
                              | Iterable<ReactNode>
                              | ReactPortal
                              | Promise<
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | ReactPortal
                                  | ReactElement<
                                      unknown,
                                      string | JSXElementConstructor<any>
                                    >
                                  | Iterable<ReactNode>
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined;
                            price: number;
                          },
                          i: number
                        ) => (
                          <button
                            key={i}
                            onClick={() => setSelectedSize(i)}
                            className={`relative px-4 py-3 rounded-xl border-2 transition-all text-center min-w-[110px] hover:shadow-md ${
                              selectedSize === i
                                ? "border-brand-navy bg-brand-navy/5 shadow-md"
                                : "border-gray-200 hover:border-brand-gold"
                            }`}
                          >
                            {size.badge === "best" && (
                              <div className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                Melhor
                              </div>
                            )}
                            <span className="block font-semibold text-brand-navy text-sm mb-1">
                              {size.label}
                            </span>
                            <span className="text-xs text-brand-gold font-bold">
                              R$ {size.price.toFixed(2).replace(".", ",")}
                            </span>
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Sabores */}
                  <div className="mb-5">
                    <h3 className="font-semibold text-brand-navy text-sm mb-3">
                      Sabor:{" "}
                      <span className="font-normal text-brand-gold">
                        {product.flavors[selectedFlavor].name}
                      </span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.flavors.map(
                        (
                          flavor: {
                            name:
                              | string
                              | number
                              | bigint
                              | boolean
                              | ReactElement<
                                  unknown,
                                  string | JSXElementConstructor<any>
                                >
                              | Iterable<ReactNode>
                              | ReactPortal
                              | Promise<
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | ReactPortal
                                  | ReactElement<
                                      unknown,
                                      string | JSXElementConstructor<any>
                                    >
                                  | Iterable<ReactNode>
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined;
                          },
                          i: number
                        ) => (
                          <button
                            key={i}
                            onClick={() => setSelectedFlavor(i)}
                            className={`px-4 py-2 rounded-xl border-2 transition-all hover:shadow-md ${
                              selectedFlavor === i
                                ? "border-brand-navy bg-brand-navy/5 shadow-md"
                                : "border-gray-200 hover:border-brand-gold"
                            }`}
                          >
                            <span className="text-sm font-medium text-brand-navy">
                              {flavor.name}
                            </span>
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Entrega */}
            <div className="bg-white rounded-2xl border border-border p-5 mb-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-brand-navy">Entrega</h3>
                <button className="text-brand-gold text-sm font-medium hover:underline">
                  Simular frete
                </button>
              </div>
              <p className="text-muted-foreground text-sm mb-2">
                Política de{" "}
                <span className="text-brand-gold font-semibold">
                  frete grátis
                </span>
                . Confira as regras!
              </p>
              <button className="flex items-center gap-1.5 text-brand-gold text-sm font-medium hover:underline">
                <HelpCircle className="w-4 h-4" />
                Saiba como funciona
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "border-brand-navy bg-brand-navy/5 text-brand-navy"
                      : "border-gray-200 text-muted-foreground hover:border-gray-300"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sugestões Carrinho */}
            <div className="bg-white rounded-2xl border border-border p-5 mb-5">
              <h3 className="font-semibold text-brand-navy mb-4">
                Sugestões para você completar o seu carrinho
              </h3>
              <div className="flex items-center gap-4">
                {/* Produto atual */}
                <div className="w-28 text-center flex-shrink-0">
                  <div className="relative w-16 h-16 mx-auto bg-gray-50 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-3xl opacity-60">🦴</span>
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-brand-navy text-white text-[9px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      Este item
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-navy font-medium line-clamp-2 mb-1">
                    {product.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                  </p>
                  <p className="text-sm font-bold text-brand-gold">
                    R$ {product.clubPrice.toFixed(2).replace(".", ",")}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    só com o Clube
                  </p>
                </div>

                <span className="text-xl text-gray-300">+</span>

                {/* Sugestões */}
                {suggestedProducts.map((item) => (
                  <div
                    key={item.id}
                    className="w-28 text-center flex-shrink-0 relative"
                  >
                    <button
                      onClick={() => toggleSuggestion(item.id)}
                      className={`absolute -top-1 -right-1 w-5 h-5 rounded flex items-center justify-center z-10 ${
                        selectedSuggestions.includes(item.id)
                          ? "bg-brand-gold text-white"
                          : "bg-white border border-gray-300"
                      }`}
                    >
                      {selectedSuggestions.includes(item.id) && (
                        <Check className="w-3 h-3" />
                      )}
                    </button>
                    <div className="relative w-16 h-16 mx-auto bg-gray-50 rounded-lg flex items-center justify-center mb-2">
                      {item.rating && (
                        <div className="absolute top-0.5 left-0.5 flex items-center gap-0.5 bg-white rounded px-1 text-[9px]">
                          <Star className="w-2.5 h-2.5 fill-brand-gold text-brand-gold" />
                          <span className="font-semibold">{item.rating}</span>
                        </div>
                      )}
                      <span className="text-3xl opacity-60">🦴</span>
                    </div>
                    <p className="text-[11px] text-brand-navy font-medium line-clamp-2 mb-1">
                      {item.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground line-through">
                      R$ {item.originalPrice.toFixed(2).replace(".", ",")}
                    </p>
                    <p className="text-sm font-bold text-brand-gold">
                      R$ {item.clubPrice.toFixed(2).replace(".", ",")}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      só com o Clube
                    </p>
                  </div>
                ))}

                {/* Total */}
                <div className="pl-4 border-l border-gray-200 flex-shrink-0">
                  <p className="text-lg font-bold text-brand-gold">
                    R$ {calculateTotal().toFixed(2).replace(".", ",")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    👑 só com o Clube
                  </p>
                  <p className="text-sm text-brand-navy mt-1">
                    R$ {(calculateTotal() * 1.1).toFixed(2).replace(".", ",")}
                  </p>
                  <p className="text-[10px] text-muted-foreground mb-3">
                    comprando uma vez
                  </p>
                  <button className="bg-brand-gold text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Adicionar
                  </button>
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-3 mb-5">
              <div className="bg-white rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => toggleSection("info")}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-muted-foreground" />
                    <span className="font-semibold text-brand-navy">
                      Informações
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedSections.includes("info") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSections.includes("info") && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground">
                    <h4 className="font-semibold text-brand-navy mb-1">
                      Benefícios
                    </h4>
                    <ul className="list-disc list-inside space-y-0.5 mb-3">
                      <li>100% Natural</li>
                      <li>Sem conservantes artificiais</li>
                      <li>Sem corantes</li>
                      <li>Rico em proteínas</li>
                      <li>Auxilia na saúde dental</li>
                    </ul>
                    <h4 className="font-semibold text-brand-navy mb-1">
                      Composição
                    </h4>
                    <p>Peito de frango desidratado.</p>
                  </div>
                )}
              </div>
              <div className="bg-brand-cream-dark rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleSection("tips")}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-brand-gold" />
                    <span className="font-semibold text-brand-navy">
                      Dicas Nobre Matilha
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedSections.includes("tips") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSections.includes("tips") && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground">
                    <p>
                      Ofereça o petisco como recompensa durante o treinamento ou
                      como agrado especial.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Produtos Similares */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-brand-navy">
                  Produtos similares que podem te interessar
                </h2>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-brand-navy text-white flex items-center justify-center">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {similarProducts.map((item) => (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    rating={item.rating}
                    originalPrice={item.originalPrice}
                    salePrice={item.salePrice}
                    clubPrice={item.clubPrice}
                    discount={item.discount}
                    weight={item.weight}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Compra */}
          {/* Sidebar Compra */}
          <div className="w-[340px] flex-shrink-0 hidden lg:block">
            <div className="sticky top-4 space-y-4">
              {/* Card Comprar (única opção) */}
              <div className="rounded-2xl border-2 overflow-hidden shadow-lg border-brand-navy/30 bg-white">
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <ShoppingCart className="w-5 h-5 text-brand-navy" />
                        <span className="font-bold text-brand-navy">
                          Comprar
                        </span>
                      </div>

                      {/* Preço */}
                      <p className="text-sm text-muted-foreground line-through mb-1">
                        R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                      </p>

                      <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold text-brand-navy">
                          R$ {product.salePrice.toFixed(2).replace(".", ",")}
                        </span>

                        {/* Badge desconto */}
                        {product.normalDiscount ? (
                          <span className="mb-1 inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1">
                            -{product.normalDiscount}%
                          </span>
                        ) : null}
                      </div>

                      <p className="text-xs text-muted-foreground mt-2">
                        Melhor preço já aplicado no produto.
                      </p>
                    </div>

                    {/* Indicador selecionado (visual) */}
                    <div className="w-6 h-6 rounded-full border-2 border-brand-navy bg-brand-navy shadow-md flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Quantidade */}
                  <div className="mt-4 bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-center justify-between">
                    <span className="font-semibold text-brand-navy">
                      Quantidade
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-9 h-9 rounded-lg border-2 border-brand-navy/20 flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="font-bold text-xl w-8 text-center text-brand-navy">
                        {quantity}
                      </span>

                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-9 h-9 rounded-lg border-2 border-brand-navy/20 flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Botões */}
                  <div className="mt-4 space-y-3">
                    <button className="w-full bg-white border-2 border-brand-navy text-brand-navy py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-navy hover:text-white transition-all shadow-md">
                      <ShoppingCart className="w-5 h-5" />
                      Adicionar ao carrinho
                    </button>

                    <button className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-navy/90 transition-all shadow-md">
                      <ChevronRight className="w-5 h-5" />
                      Comprar agora
                    </button>
                  </div>

                  {/* Observação */}
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Descontos não cumulativos. O maior desconto elegível será
                    aplicado no carrinho.
                  </p>
                </div>
              </div>

              {/* Estoque */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="font-semibold text-brand-navy mb-3">
                  Estoque das lojas físicas
                </h3>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-cream-dark hover:bg-brand-cream-dark/80 transition-colors">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                  <span className="font-medium text-brand-navy">
                    Consultar estoque
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
