"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "text";
}

const Logo = ({
  className = "",
  showText = true,
  size = "md",
  variant = "full",
}: LogoProps) => {
  const sizes = {
    sm: { width: 100, height: 55, text: "text-sm", sub: "text-[7px]" },
    md: { width: 140, height: 76, text: "text-base", sub: "text-[8px]" },
    lg: { width: 200, height: 109, text: "text-lg", sub: "text-[9px]" },
    xl: { width: 260, height: 142, text: "text-xl", sub: "text-[10px]" },
  };

  const { width, height, text: textSize, sub: subSize } = sizes[size];

//   const LogoIcon = () => (
//     <Image
//       src="/logo-nobre-matilha 1.svg"
//       alt="Nobre Matilha - Premium Pet Boutique"
//       width={width}
//       height={height}
//       className="shrink-0 object-contain"
//       priority
//     />
//   );

  const LogoText = () => (
    <div className="flex flex-col leading-none">
      <span
        className={`font-display font-bold tracking-tight text-brand-navy ${textSize}`}
      >
        NOBRE MATILHA
      </span>
      <span
        className={`tracking-[0.2em] text-brand-navy/60 font-medium uppercase ${subSize}`}
      >
        Premium Pet Boutique
      </span>
    </div>
  );

  if (variant === "icon") {
    return (
      <div className={className}>
        {/* <LogoIcon /> */}
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className={className}>
        <LogoText />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* <LogoIcon /> */}
      {showText && <LogoText />}
    </div>
  );
};

export default Logo;
