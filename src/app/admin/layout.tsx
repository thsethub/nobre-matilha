"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Tags,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
// import Logo from "@/components/Logo";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: Package,
    label: "Produtos",
    href: "/admin/products",
  },
  {
    icon: Tags,
    label: "Categorias & Tags",
    href: "/admin/categories",
  },
  {
    icon: ShoppingBag,
    label: "Pedidos",
    href: "/admin/orders",
  },
  {
    icon: BarChart3,
    label: "Estoque",
    href: "/admin/inventory",
  },
  {
    icon: TrendingUp,
    label: "Relatórios",
    href: "/admin/reports",
  },
  {
    icon: Settings,
    label: "Configurações",
    href: "/admin/settings",
  },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-brand-navy transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-brand-navy-700">
            <Link href="/admin" className="flex items-center gap-2">
              {/* <Logo size="sm" showText={false} /> */}
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-lg">
                  Nobre Matilha
                </span>
                <span className="text-brand-gold text-xs">Painel Admin</span>
              </div>
            </Link>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-brand-gold text-white"
                      : "text-gray-300 hover:bg-brand-navy-700 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-brand-navy-700">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-brand-navy-700 hover:text-white rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Voltar à Loja</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              className="lg:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-brand-navy">
                  Administrador
                </p>
                <p className="text-xs text-gray-500">admin@nobrematilha.com</p>
              </div>
              <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
