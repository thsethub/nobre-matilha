"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ToyBrick, Shirt, ShoppingBag, Sparkles } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 right-0 w-full h-24"
          viewBox="0 0 1440 100"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z"
            className="fill-brand-cream-dark"
          />
        </svg>
        <div className="absolute top-[60px] bottom-0 left-0 right-0 bg-brand-cream-dark" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 pt-8">
        <h2 className="text-xl font-bold text-center mb-8 font-display text-brand-navy">
          Nossos <span className="text-brand-gold">destaques</span>
        </h2>

        <div className="bg-brand-navy rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 md:p-8 text-white flex-1">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold mb-4">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                Curadoria premium Nobre Matilha
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-display title-brand text-white mb-3">
                Brinquedos, Roupas e Acessórios para o seu pet
              </h3>

              <p className="text-sm opacity-90 mb-5">
                Seleção completa para o dia a dia: diversão, conforto e estilo
                com qualidade e acabamento premium.
              </p>

              {/* Categorias */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <Link
                  href="/brinquedos"
                  className="group rounded-xl bg-white/10 border border-white/15 p-4 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-brand-gold/15 border border-brand-gold/20">
                      <ToyBrick className="w-5 h-5 text-brand-gold" />
                    </span>
                    <div>
                      <p className="font-semibold text-sm">Brinquedos</p>
                      <p className="text-xs text-white/70">
                        Interativos e resistentes
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/roupas"
                  className="group rounded-xl bg-white/10 border border-white/15 p-4 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-brand-gold/15 border border-brand-gold/20">
                      <Shirt className="w-5 h-5 text-brand-gold" />
                    </span>
                    <div>
                      <p className="font-semibold text-sm">Roupas</p>
                      <p className="text-xs text-white/70">Conforto e estilo</p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/acessorios"
                  className="group rounded-xl bg-white/10 border border-white/15 p-4 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-brand-gold/15 border border-brand-gold/20">
                      <ShoppingBag className="w-5 h-5 text-brand-gold" />
                    </span>
                    <div>
                      <p className="font-semibold text-sm">Acessórios</p>
                      <p className="text-xs text-white/70">
                        Coleiras, guias e mais
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/categorias"
                  className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy px-6 py-2.5 rounded-xl font-semibold transition-colors"
                >
                  Ver todas as categorias
                </Link>

                <Link
                  href="/ofertas"
                  className="bg-white/10 hover:bg-white/15 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors border border-white/15"
                >
                  Ver ofertas
                </Link>
              </div>
            </div>

            {/* Lado direito decorativo */}
            <div className="hidden md:flex items-center justify-center bg-primary/80 p-6 w-48">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="grid place-items-center w-20 h-20 rounded-2xl bg-white/10 border border-white/15"
              >
                <ToyBrick className="w-10 h-10 text-brand-gold" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
