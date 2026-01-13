import { Percent, Truck, Crown, Shirt } from "lucide-react";

const items = [
  { icon: Percent, text: "10% OFF NA PRIMEIRA COMPRA" },
  { icon: Shirt, text: "ACESSÓRIOS" },
  { icon: Crown, text: "PRODUTOS PREMIUM" },
];

const MarqueeBanner = () => {
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className="relative bg-brand-navy border-y border-white/10 overflow-hidden">
      {/* Fade lateral */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-navy to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-navy to-transparent z-10" />

      <div className="py-2">
        <div
          className="
            flex w-max whitespace-nowrap
            animate-marquee
            hover:[animation-play-state:paused]
            motion-reduce:animate-none
          "
        >
          {loop.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-3 px-8"
                aria-hidden={index >= items.length}
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/15">
                  <Icon className="w-3.5 h-3.5 text-brand-gold" />
                </span>

                <span className="text-white/90 font-semibold text-xs sm:text-sm tracking-wide uppercase">
                  {item.text}
                </span>

                {/* separador */}
                <span className="ml-4 w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
