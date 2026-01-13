"use client";

import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

const ClubeNobre = () => {
  return (
    <section className="py-10 bg-secondary/40">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-1.5 mb-3">
          <span className="text-2xl">👑</span>
          <span className="text-xl font-bold font-display">
            <span className="text-brand-gold">Clube</span> Nobre
          </span>
        </div>

        <h2 className="text-xl font-bold text-brand-navy font-display title-brand mb-6">
          Quer frete grátis, descontos exclusivos e brindes?
        </h2>

        <div className="flex items-center justify-center gap-6 relative">
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="hidden md:block text-3xl"
          >
            🐾
          </motion.span>

          <div className="bg-card rounded-2xl shadow-xl max-w-xs relative overflow-hidden">
            <div className="bg-brand-gold text-brand-navy py-1.5 text-xs font-semibold flex items-center justify-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5" />A melhor escolha
            </div>

            <div className="p-5">
              <h3 className="text-3xl font-bold text-brand-navy font-display title-brand mb-2">
                Anual
              </h3>
              <p className="text-muted-foreground text-sm mb-1">12x de</p>
              <p className="text-4xl font-bold text-brand-gold mb-1">R$ 9,99</p>
              <p className="text-xs text-muted-foreground mb-4">
                ou R$ 119,88 à vista
              </p>

              <button className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-navy py-2.5 rounded-xl font-semibold transition-colors">
                Quero contratar
              </button>
            </div>
          </div>

          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="hidden md:block text-3xl"
          >
            🐾
          </motion.span>
        </div>

        <div className="flex justify-center gap-3 mt-5">
          <button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy px-5 py-2 rounded-xl text-sm font-semibold transition-colors">
            Conferir benefícios
          </button>
          <button className="border border-border hover:border-brand-gold px-5 py-2 rounded-xl text-sm font-semibold transition-colors">
            Calcular economia
          </button>
        </div>

        <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">
          Esses são os planos disponíveis para as áreas atendidas. Verifique a
          disponibilidade do Clube na sua região.
        </p>
      </div>
    </section>
  );
};

export default ClubeNobre;
