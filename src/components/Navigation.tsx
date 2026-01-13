import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  badge?: string;
}

const navItems: NavItem[] = [
  { label: "Cachorro", hasSubmenu: true, href: "/cachorro" },
  { label: "Gatos", hasSubmenu: true, href: "/gatos" },
  { label: "Outros pets", hasSubmenu: true, href: "/outros-pets" },
  { label: "Outlet", href: "/outlet" },
  { label: "Serviços", hasSubmenu: true, href: "/servicos" },
  { label: "Mais", hasSubmenu: true, href: "#" },
];

const Navigation = () => {
  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex items-center justify-center gap-0.5 py-1 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 px-3 py-1.5 text-sm font-semibold text-foreground hover:text-brand-gold transition-colors whitespace-nowrap"
              >
                {item.label}
                {item.badge && (
                  <span className="bg-brand-gold text-brand-navy text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-1">
                    {item.badge}
                  </span>
                )}
                {item.hasSubmenu && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
