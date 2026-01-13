"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Heart,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Logo from "./Logo";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-2.5">
          <div className="flex items-center justify-between gap-3">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo size="sm" />
            </Link>

            {/* CEP */}
            <button className="hidden md:flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Informar CEP</span>
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-sm relative hidden sm:block">
              <input
                type="text"
                placeholder="O que seu pet precisa?"
                className="w-full pl-4 pr-10 py-2 text-sm rounded-lg border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
            </div>

            {/* Right Navigation */}
            <div className="flex items-center gap-3 lg:gap-4">
              <button className="hidden lg:flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Heart className="w-4 h-4" />
                <span className="font-medium">Favoritos</span>
              </button>
              <button className="relative text-muted-foreground hover:text-primary transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-gold text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </button>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-1 text-brand-navy font-semibold text-sm hover:text-brand-gold transition-colors"
              >
                <span className="hidden sm:inline">Entrar | Cadastrar</span>
                <span className="sm:hidden">Entrar</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Search - visible on small screens */}
          <div className="sm:hidden mt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="O que seu pet precisa?"
                className="w-full pl-4 pr-10 py-2 text-sm rounded-lg border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm w-full">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Informar CEP</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm w-full">
                <Heart className="w-4 h-4" />
                <span className="font-medium">Favoritos</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Header;
