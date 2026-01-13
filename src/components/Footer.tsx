import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* <div>
            <h4 className="font-bold text-sm mb-3">Institucional</h4>
            <ul className="space-y-1.5 text-xs opacity-80">
              <li>
                <Link href="#" className="hover:opacity-100">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">
                  Trabalhe conosco
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">
                  Sustentabilidade
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h4 className="font-bold text-sm mb-3">Ajuda</h4>
            <ul className="space-y-1.5 text-xs opacity-80">
              <li>
                <Link href="#" className="hover:opacity-100">
                  Central de ajuda
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">
                  Trocas e devoluções
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">
                  Fale conosco
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">
                  Formas de pagamento
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h4 className="font-bold text-sm mb-3">Serviços</h4>
            <ul className="space-y-1.5 text-xs opacity-80">
              <li>
                <Link href="#" className="hover:opacity-100">
                  Plano de saúde
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">
                  Clube Nobre
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">
                  Assinatura
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">
                  Nossas lojas
                </Link>
              </li>
            </ul>
          </div> */}
          {/* <div>
            <h4 className="font-bold text-sm mb-3">Baixe nosso app</h4>
            <div className="space-y-2">
              <button className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-xs flex items-center gap-2 w-full">
                <span className="text-lg">📱</span>
                <div className="text-left">
                  <p className="text-[10px] opacity-70">Disponível na</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </button>
              <button className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-xs flex items-center gap-2 w-full">
                <span className="text-lg">🤖</span>
                <div className="text-left">
                  <p className="text-[10px] opacity-70">Disponível no</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div> */}
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold font-display">
                Nobre Matilha
              </span>
              <span className="text-brand-gold text-xl">👑</span>
            </div>
            <div className="flex gap-3">
              {/* <Link
                href="#"
                className="hover:text-brand-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link> */}
              <Link
                href="https://www.instagram.com/nobre_matilha.pet"
                className="hover:text-brand-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              {/* <Link
                href="#"
                className="hover:text-brand-gold transition-colors"
              >
                <Whatsapp className="w-5 h-5" />
              </Link> */}
              {/* <Link
                href="#"
                className="hover:text-brand-gold transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link> */}
            </div>
            <p className="text-xs opacity-70">
              © 2026 Nobre Matilha. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
