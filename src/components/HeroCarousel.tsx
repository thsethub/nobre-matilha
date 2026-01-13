"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Gift,
  ShoppingBag,
  Tag,
  Shirt,
  ToyBrick,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";

interface Slide {
  id: number;
  type: "welcome" | "accessories" | "toys";
}

const slides: Slide[] = [
  { id: 1, type: "welcome" },
  { id: 2, type: "accessories" },
  { id: 3, type: "toys" },
];

const slideVariants = {
  enter: { opacity: 0, x: 30, filter: "blur(6px)" },
  center: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -30, filter: "blur(6px)" },
};

// const TopChips = ({
//   active,
//   onSelect,
// }: {
//   active: number;
//   onSelect: (idx: number) => void;
// }) => {
//   const chips = [
//     { label: "Recomendados", icon: Sparkles },
//     { label: "Acessórios", icon: Shirt },
//     { label: "Brinquedos", icon: ToyBrick },
//   ];

//   return (
//     <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
//       {chips.map((c, idx) => {
//         const Icon = c.icon;
//         const isActive = idx === active;
//         return (
//           <button
//             key={c.label}
//             onClick={() => onSelect(idx)}
//             className={[
//               "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all",
//               "border backdrop-blur-md",
//               isActive
//                 ? "bg-white text-brand-navy border-white shadow-lg"
//                 : "bg-white/70 text-brand-navy/80 border-white/60 hover:bg-white hover:text-brand-navy shadow-sm",
//               "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
//             ].join(" ")}
//             aria-label={`Ir para: ${c.label}`}
//           >
//             <span
//               className={[
//                 "grid place-items-center rounded-full w-7 h-7 transition-all",
//                 isActive
//                   ? "bg-brand-gold/20 text-brand-gold"
//                   : "bg-brand-navy/5 text-brand-navy/70 group-hover:text-brand-navy",
//               ].join(" ")}
//             >
//               <Icon className="w-4 h-4" />
//             </span>
//             {c.label}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// Slide 1: Boas-vindas com 10% OFF
const WelcomeSlide = () => (
  <div className="relative h-full bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-light overflow-hidden">
    {/* Glow + textura leve */}
    <div className="absolute inset-0 opacity-15">
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-brand-gold rounded-full blur-3xl" />
      <div className="absolute -bottom-28 -left-28 w-[420px] h-[420px] bg-brand-gold rounded-full blur-3xl" />
    </div>
    <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:22px_22px]" />

    <div className="relative flex items-center justify-center h-full p-7 sm:p-10 md:p-12">
      <div className="flex-1 max-w-lg lg:max-w-xl lg:pl-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 text-xs font-semibold border border-white/15 backdrop-blur">
            <Gift className="w-4 h-4 text-brand-gold" />
            Oferta Exclusiva
          </span>

          <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-gold/15 text-brand-gold px-3 py-1 text-xs font-semibold border border-brand-gold/20">
            <Tag className="w-4 h-4" />
            BEMVINDO10
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
          Sua primeira compra com
          <span className="block text-brand-gold drop-shadow-sm">
            10% de desconto
          </span>
        </h2>

        <p className="text-white/70 text-sm md:text-base mb-6 max-w-md">
          Bem-vindo à Nobre Matilha! Cadastre-se e aproveite desconto especial
          em todo o site na sua primeira compra.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/cadastro"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-brand-gold/20 hover:bg-brand-gold-dark transition-all hover:scale-[1.02] active:scale-[0.99]"
          >
            Criar minha conta
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-full font-semibold border border-white/15 hover:bg-white/15 transition-all"
          >
            Já tenho conta
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center">
        <div className="relative">
          <div className="w-44 h-44 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-[32px] rotate-3 flex items-center justify-center shadow-2xl shadow-brand-gold/25 border border-white/30">
            <div className="text-center -rotate-3">
              <span className="block text-5xl font-black text-brand-navy">
                10%
              </span>
              <span className="text-brand-navy font-extrabold text-xs uppercase tracking-[0.25em]">
                OFF
              </span>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-brand-gold/20">
            <Sparkles className="w-7 h-7 text-brand-gold" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Slide 2: Acessórios e Roupas
const AccessoriesSlide = () => (
  <div className="relative px-6 h-full bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
    {/* Geometrias */}
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-brand-gold/25 rounded-full" />
      <div className="absolute top-20 left-24 w-10 h-10 border-2 border-brand-gold/20 rounded-full" />
      <div className="absolute bottom-10 right-20 w-32 h-32 border-2 border-brand-navy/10 rounded-full" />
      <div className="absolute top-1/2 right-1/3 w-7 h-7 bg-brand-gold/25 rounded-full blur-[1px]" />
    </div>

    <div className="relative flex items-center h-full p-7 sm:p-10 md:p-12">
      <div className="flex-1 max-w-xl">
        {/* <span className="inline-flex items-center gap-2 bg-brand-navy text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide shadow">
          <Shirt className="w-4 h-4" />
          Nova Coleção
        </span> */}

        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight mb-3">
          Acessórios e Roupas
          <span className="block text-brand-gold">para o seu pet</span>
        </h2>

        <p className="text-brand-navy/70 text-sm md:text-base mb-6 max-w-md">
          Coleiras, guias, roupinhas e muito mais. Deixe seu companheiro ainda
          mais estiloso com nossa linha exclusiva.
        </p>

        <Link
          href="/cachorro"
          className="inline-flex items-center gap-2 bg-brand-navy text-white px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-brand-navy/15 hover:bg-brand-navy-light transition-all hover:scale-[1.02] active:scale-[0.99]"
        >
          <ShoppingBag className="w-5 h-5" />
          Ver coleção
        </Link>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-end">
        <div className="flex gap-4">
          <div className="bg-white rounded-3xl p-4 shadow-xl w-36 border border-black/5 transform -rotate-6">
            <div className="h-20 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl mb-2 flex items-center justify-center">
              <span className="text-3xl font-light text-rose-400">C</span>
            </div>
            <p className="text-xs font-semibold text-brand-navy">
              Coleira Premium
            </p>
            <p className="text-xs text-brand-gold font-extrabold">R$ 89,90</p>
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-xl w-36 border border-black/5 transform rotate-3 mt-7">
            <div className="h-20 bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl mb-2 flex items-center justify-center">
              <span className="text-3xl font-light text-sky-400">R</span>
            </div>
            <p className="text-xs font-semibold text-brand-navy">
              Roupinha Inverno
            </p>
            <p className="text-xs text-brand-gold font-extrabold">R$ 129,90</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Slide 3: Brinquedos
const ToysSlide = () => (
  <div className="relative h-full px-6 bg-gradient-to-br from-brand-gold via-brand-gold to-amber-400 overflow-hidden">
    {/* Shapes + linhas */}
    <div className="absolute inset-0">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-44 h-44 bg-brand-navy/10 rounded-full translate-y-1/2" />
      <div className="absolute top-1/3 left-10 w-4 h-4 bg-white/35 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white/25 rounded-full" />
    </div>

    <div className="absolute inset-0 overflow-hidden opacity-70">
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white/25 via-white/10 to-transparent transform -rotate-12 origin-top" />
      <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent transform -rotate-12 origin-top" />
    </div>

    <div className="relative flex items-center h-full p-7 sm:p-10 md:p-12">
      <div className="flex-1 max-w-xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-navy/90 text-white px-3 py-1 text-xs font-semibold shadow">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            Diversão garantida
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight mb-3">
          Brinquedos que seu pet
          <span className="block text-white drop-shadow-sm">vai amar</span>
        </h2>

        <p className="text-brand-navy/80 text-sm md:text-base mb-6 max-w-md">
          De mordedores a bolas interativas, temos tudo para manter seu amigo
          entretido e feliz. Qualidade e segurança em primeiro lugar.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/cachorro"
            className="inline-flex items-center gap-2 bg-brand-navy text-white px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-brand-navy/15 hover:bg-brand-navy-light transition-all hover:scale-[1.02] active:scale-[0.99]"
          >
            Explorar brinquedos
          </Link>

          <div className="hidden sm:block">
            <p className="text-brand-navy text-xs font-semibold">A partir de</p>
            <p className="text-brand-navy text-2xl font-black">R$ 19,90</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 bg-brand-navy rounded-[30px] transform rotate-6 shadow-2xl" />
          <div className="absolute inset-0 bg-white rounded-[30px] flex items-center justify-center border border-black/5">
            <div className="text-center">
              <div className="flex justify-center gap-2 mb-2">
                <div className="w-11 h-11 bg-rose-400 rounded-full" />
                <div className="w-11 h-11 bg-sky-400 rounded-2xl" />
              </div>
              <div className="flex justify-center gap-2">
                <div className="w-11 h-11 bg-emerald-400 rounded-xl rotate-45" />
                <div className="w-11 h-11 bg-violet-400 rounded-full" />
              </div>
              <p className="text-brand-navy font-extrabold text-xs mt-3">
                +50 opções
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const reducedMotion = useReducedMotion();
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-play com pausa no hover
  useEffect(() => {
    if (isHovering) return;

    intervalRef.current = window.setInterval(nextSlide, 6500);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  const renderSlide = (type: Slide["type"]) => {
    switch (type) {
      case "welcome":
        return <WelcomeSlide />;
      case "accessories":
        return <AccessoriesSlide />;
      case "toys":
        return <ToysSlide />;
      default:
        return <WelcomeSlide />;
    }
  };

  const motionTransition = useMemo(
    () => ({
      duration: reducedMotion ? 0 : 0.55,
      ease: [0.4, 0, 0.2, 1] as const,
    }),
    [reducedMotion]
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Chips topo (como no print) */}
      <div className="mb-4">
        {/* <TopChips active={currentSlide} onSelect={setCurrentSlide} /> */}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Container com “glass” + borda */}
        <div className="relative h-[320px] sm:h-[340px] md:h-[360px] rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(16,24,40,0.12)] border border-black/5 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={motionTransition}
              className="absolute inset-0"
            >
              {renderSlide(slides[currentSlide].type)}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className={[
              "absolute left-4 top-1/2 -translate-y-1/2 z-10",
              "rounded-full p-2.5",
              "bg-white/85 hover:bg-white shadow-lg border border-black/5 backdrop-blur",
              "transition-all duration-300 hover:scale-110 active:scale-95",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
            ].join(" ")}
          >
            <ChevronLeft className="w-5 h-5 text-brand-navy" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo slide"
            className={[
              "absolute right-4 top-1/2 -translate-y-1/2 z-10",
              "rounded-full p-2.5",
              "bg-white/85 hover:bg-white shadow-lg border border-black/5 backdrop-blur",
              "transition-all duration-300 hover:scale-110 active:scale-95",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
            ].join(" ")}
          >
            <ChevronRight className="w-5 h-5 text-brand-navy" />
          </button>
        </div>

        {/* Dots (mais “premium”) */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para o slide ${index + 1}`}
              className={[
                "h-2.5 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "bg-brand-gold w-10 shadow-sm"
                  : "bg-brand-navy/15 w-2.5 hover:bg-brand-navy/30",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
