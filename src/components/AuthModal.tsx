"use client";

import { useState } from "react";
import { X, Mail, Lock, User, Eye, EyeOff, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
// import Logo from "./Logo";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar autenticação
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleAdminAccess = () => {
    onClose();
    router.push("/admin");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header com gradiente navy */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-navy-700 p-6 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex justify-center mb-3">
            {/* <Logo size="sm" showText={false} /> */}
          </div>
          <h2 className="text-xl font-bold text-white font-display">
            {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
          </h2>
          <p className="text-white/70 text-sm mt-1">
            {isLogin
              ? "Entre para acessar sua conta"
              : "Cadastre-se para começar a comprar"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${
              isLogin
                ? "text-brand-navy border-b-2 border-brand-gold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${
              !isLogin
                ? "text-brand-navy border-b-2 border-brand-gold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Cadastrar
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Nome completo"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input-brand pl-11"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="input-brand pl-11"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="input-brand pl-11 pr-11"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {!isLogin && (
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirmar senha"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="input-brand pl-11"
                required
              />
            </div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-brand-gold focus:ring-brand-gold"
                />
                <span className="text-gray-600">Lembrar de mim</span>
              </label>
              <button
                type="button"
                className="text-brand-gold hover:text-brand-gold-dark font-medium"
              >
                Esqueci a senha
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full brand-gradient text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            {isLogin ? "Entrar" : "Criar conta"}
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">ou</span>
            </div>
          </div>

          {/* Botão de acesso administrativo */}
          <button
            type="button"
            onClick={handleAdminAccess}
            className="w-full flex items-center justify-center gap-2 bg-brand-navy text-white py-3 rounded-lg font-semibold hover:bg-brand-navy-700 transition-all"
          >
            <Settings className="w-5 h-5" />
            Acessar Painel Administrativo
          </button>
        </form>

        {/* Footer */}
        <div className="px-6 pb-6 text-center text-sm text-gray-500">
          {isLogin ? (
            <p>
              Não tem uma conta?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-brand-gold hover:text-brand-gold-dark font-medium"
              >
                Cadastre-se grátis
              </button>
            </p>
          ) : (
            <p>
              Já tem uma conta?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-brand-gold hover:text-brand-gold-dark font-medium"
              >
                Entre aqui
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
