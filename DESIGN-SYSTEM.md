# 🐾 Nobre Matilha - Sistema de Design

Este documento descreve o sistema de design e identidade visual da aplicação Nobre Matilha Premium Pet Boutique.

## 📁 Arquivos de Configuração

| Arquivo | Descrição |
|---------|-----------|
| `src/lib/theme.ts` | Configuração centralizada do tema (tokens de design) |
| `tailwind.config.ts` | Configuração do Tailwind CSS com cores da marca |
| `src/app/globals.css` | Variáveis CSS e classes utilitárias |

---

## 🎨 Paleta de Cores

### Cores Principais

| Nome | Classe Tailwind | Hex | Uso |
|------|-----------------|-----|-----|
| **Navy** | `bg-brand-navy` / `text-brand-navy` | `#1a2744` | Cor primária, títulos, textos importantes |
| **Navy Light** | `bg-brand-navy-700` | `#334e68` | Hover states, elementos secundários |
| **Gold** | `bg-brand-gold` / `text-brand-gold` | `#D4A853` | Destaques, CTAs, elementos premium |
| **Gold Dark** | `bg-brand-gold-dark` | `#c49a45` | Hover states do dourado |
| **Cream** | `bg-brand-cream` | `#FAF8F5` | Fundos suaves |

### Escala Completa

#### Navy (Azul Marinho)
```
brand-navy-50:  #f0f4f8
brand-navy-100: #d9e2ec
brand-navy-200: #bcccdc
brand-navy-300: #9fb3c8
brand-navy-400: #829ab1
brand-navy-500: #627d98
brand-navy-600: #486581
brand-navy-700: #334e68
brand-navy-800: #243b53
brand-navy-900: #1a2744 (DEFAULT)
brand-navy-950: #0f1729
```

#### Gold (Dourado)
```
brand-gold-50:  #fefcf3
brand-gold-100: #fcf6e0
brand-gold-200: #f8ebc1
brand-gold-300: #f3db97
brand-gold-400: #e5c17a
brand-gold-500: #D4A853 (DEFAULT)
brand-gold-600: #c49a45
brand-gold-700: #a37d35
brand-gold-800: #856530
brand-gold-900: #6d5228
brand-gold-950: #3d2d14
```

---

## 🔤 Tipografia

### Fontes

| Fonte | Uso | Classe |
|-------|-----|--------|
| **Nunito** | Texto geral, corpo | `font-sans` (padrão) |
| **Outfit** | Títulos, display | `font-display` |

### Exemplo de uso
```jsx
<h1 className="font-display font-bold text-brand-navy">Título Principal</h1>
<p className="font-sans text-foreground">Texto do corpo</p>
```

---

## 🧩 Classes Utilitárias

### Gradientes
```css
.brand-gradient       /* Gradiente dourado */
.brand-gradient-navy  /* Gradiente azul marinho */
.brand-gradient-cream /* Gradiente creme suave */
```

### Botões
```css
.btn-brand           /* Botão dourado primário */
.btn-brand-outline   /* Botão dourado com borda */
.btn-brand-navy      /* Botão azul marinho */
```

### Cards
```css
.card-brand          /* Card com estilo da marca */
```

### Inputs
```css
.input-brand         /* Campo de entrada estilizado */
```

### Badges
```css
.badge-gold          /* Badge dourado */
```

### Títulos
```css
.title-brand         /* Título com estilo da marca */
```

---

## 📱 Uso nos Componentes

### Exemplo de botão primário
```jsx
<button className="btn-brand">
  Comprar Agora
</button>
```

### Exemplo de botão outline
```jsx
<button className="btn-brand-outline">
  Ver Detalhes
</button>
```

### Exemplo de input
```jsx
<input className="input-brand" placeholder="Digite aqui..." />
```

### Exemplo de card
```jsx
<div className="card-brand">
  <h3 className="title-brand">Título do Card</h3>
  <p>Conteúdo...</p>
</div>
```

---

## 🐕 Cores dos Animais (Logo)

Cores específicas usadas no logo para os animais:

| Animal | Classe | Hex |
|--------|--------|-----|
| Husky Branco | `animal-husky` | `#f5f5f5` |
| Labrador | `animal-labrador` | `#d4a853` |
| Husky Marrom | `animal-brown` | `#8B4513` |
| Gato Cinza | `animal-cat` | `#808080` |
| Cachorro Preto | `animal-black` | `#1a1a1a` |

---

## ✏️ Como Editar as Cores

### 1. Alterar cor principal
Edite `tailwind.config.ts` na seção `colors.brand`:

```typescript
brand: {
  navy: {
    DEFAULT: "#1a2744", // Altere aqui
    // ...
  },
  gold: {
    DEFAULT: "#D4A853", // Altere aqui
    // ...
  },
}
```

### 2. Atualizar variáveis CSS
Edite `src/app/globals.css` na seção `@theme`:

```css
@theme {
  --color-brand-navy: #1a2744;
  --color-brand-gold: #D4A853;
  /* ... */
}
```

### 3. Atualizar tema centralizado
Edite `src/lib/theme.ts`:

```typescript
export const brandColors = {
  navy: {
    DEFAULT: "#1a2744",
    // ...
  },
  // ...
};
```

---

## 🎯 Boas Práticas

1. **Use classes da marca** em vez de cores hardcoded
   - ✅ `text-brand-navy`
   - ❌ `text-[#1a2744]`

2. **Use classes utilitárias** para elementos recorrentes
   - ✅ `className="btn-brand"`
   - ❌ `className="bg-brand-gold text-white px-6 py-2.5 rounded-lg..."`

3. **Mantenha consistência** usando as variáveis do tema

4. **Documente alterações** neste arquivo ao modificar o sistema de design

---

## 📋 Checklist de Componentes

- [x] Logo (`src/components/Logo.tsx`)
- [x] Header (`src/components/Header.tsx`)
- [x] AuthModal (`src/components/AuthModal.tsx`)
- [x] Admin Layout (`src/app/admin/layout.tsx`)
- [x] Admin Dashboard (`src/app/admin/page.tsx`)
- [x] Admin Products (`src/app/admin/products/page.tsx`)
- [x] Admin Categories (`src/app/admin/categories/page.tsx`)
- [x] Admin Orders (`src/app/admin/orders/page.tsx`)
- [x] Admin Inventory (`src/app/admin/inventory/page.tsx`)
- [x] Admin Reports (`src/app/admin/reports/page.tsx`)
- [x] Admin Settings (`src/app/admin/settings/page.tsx`)
