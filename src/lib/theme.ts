/**
 * Nobre Matilha - Design System
 *
 * Este arquivo centraliza todas as cores e tokens de design da marca.
 * Para alterar a identidade visual, modifique os valores aqui.
 */

export const brandColors = {
  // === CORES PRINCIPAIS DA MARCA ===

  // Azul Marinho - Cor principal do texto e elementos escuros
  navy: {
    DEFAULT: "#1a2744",
    50: "#f0f4f8",
    100: "#d9e2ec",
    200: "#bcccdc",
    300: "#9fb3c8",
    400: "#829ab1",
    500: "#627d98",
    600: "#486581",
    700: "#334e68",
    800: "#243b53",
    900: "#1a2744",
    950: "#102a43",
  },

  // Dourado - Cor de destaque, botões e elementos premium
  gold: {
    DEFAULT: "#D4A853",
    50: "#fefcf3",
    100: "#fdf6e3",
    200: "#faecc6",
    300: "#f5dc9e",
    400: "#edc86f",
    500: "#D4A853",
    600: "#c49a45",
    700: "#a37d35",
    800: "#866530",
    900: "#6e532a",
    950: "#3d2c14",
  },

  // Cores dos Animais (para ilustrações e elementos temáticos)
  animals: {
    huskyWhite: "#F5F7FA",
    huskyGray: "#E8ECF0",
    labrador: "#DEB841",
    labradorDark: "#C9A227",
    huskyBrown: "#A67C00",
    huskyBrownDark: "#8B6914",
    catGray: "#A8B2C0",
    catGrayDark: "#8B95A5",
    blackDog: "#2d3548",
    blackDogDark: "#1a1f2e",
  },

  // Cores de suporte
  cream: "#FAF8F5",
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
} as const;

// Espaçamentos padrão
export const spacing = {
  container: "1200px",
  sectionY: "4rem",
  cardPadding: "1.5rem",
} as const;

// Tipografia
export const typography = {
  fontFamily: {
    sans: ["Nunito", "sans-serif"],
    display: ["Outfit", "sans-serif"],
  },
  fontSize: {
    hero: "3rem",
    h1: "2.25rem",
    h2: "1.875rem",
    h3: "1.5rem",
    h4: "1.25rem",
    body: "1rem",
    small: "0.875rem",
    tiny: "0.75rem",
  },
} as const;

// Sombras
export const shadows = {
  card: "0 1px 3px rgba(26, 39, 68, 0.1), 0 1px 2px rgba(26, 39, 68, 0.06)",
  cardHover:
    "0 10px 15px -3px rgba(26, 39, 68, 0.1), 0 4px 6px -2px rgba(26, 39, 68, 0.05)",
  button: "0 4px 6px -1px rgba(212, 168, 83, 0.3)",
} as const;

// Bordas
export const borders = {
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
} as const;
