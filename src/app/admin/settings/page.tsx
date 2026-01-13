"use client";

import { useState } from "react";
import { Save, Store, Bell, CreditCard, Truck, Shield } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("store");
  const [storeSettings, setStoreSettings] = useState({
    name: "Nobre Matilha",
    email: "contato@nobrematilha.com",
    phone: "(11) 99999-9999",
    address: "Rua das Flores, 123 - São Paulo, SP",
    cnpj: "12.345.678/0001-90",
  });

  const tabs = [
    { id: "store", label: "Loja", icon: Store },
    { id: "notifications", label: "Notificações", icon: Bell },
    { id: "payments", label: "Pagamentos", icon: CreditCard },
    { id: "shipping", label: "Frete", icon: Truck },
    { id: "security", label: "Segurança", icon: Shield },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-brand-navy font-display">
          Configurações
        </h1>
        <p className="text-gray-500">Gerencie as configurações da sua loja</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200">
            <nav className="p-4 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-brand-gold/10 text-brand-gold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            {activeTab === "store" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Informações da Loja
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome da Loja
                      </label>
                      <input
                        type="text"
                        value={storeSettings.name}
                        onChange={(e) =>
                          setStoreSettings({
                            ...storeSettings,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        value={storeSettings.email}
                        onChange={(e) =>
                          setStoreSettings({
                            ...storeSettings,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        value={storeSettings.phone}
                        onChange={(e) =>
                          setStoreSettings({
                            ...storeSettings,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CNPJ
                      </label>
                      <input
                        type="text"
                        value={storeSettings.cnpj}
                        onChange={(e) =>
                          setStoreSettings({
                            ...storeSettings,
                            cnpj: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Endereço
                      </label>
                      <input
                        type="text"
                        value={storeSettings.address}
                        onChange={(e) =>
                          setStoreSettings({
                            ...storeSettings,
                            address: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button className="flex items-center gap-2 bg-brand-gold text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-brand-gold-dark transition-colors">
                    <Save className="w-4 h-4" />
                    Salvar Alterações
                  </button>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Preferências de Notificação
                </h2>
                <div className="space-y-4">
                  {[
                    { label: "Notificar novos pedidos", checked: true },
                    { label: "Notificar estoque baixo", checked: true },
                    { label: "Notificar novos clientes", checked: false },
                    {
                      label: "Resumo diário de vendas por e-mail",
                      checked: true,
                    },
                  ].map((item) => (
                    <label
                      key={item.label}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        defaultChecked={item.checked}
                        className="w-5 h-5 rounded border-gray-300 text-brand-gold focus:ring-brand-gold"
                      />
                      <span className="text-gray-700">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "payments" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Métodos de Pagamento
                </h2>
                <div className="space-y-4">
                  {[
                    { label: "Cartão de Crédito", enabled: true },
                    { label: "Cartão de Débito", enabled: true },
                    { label: "PIX", enabled: true },
                    { label: "Boleto Bancário", enabled: false },
                  ].map((method) => (
                    <div
                      key={method.label}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <span className="font-medium text-gray-900">
                        {method.label}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={method.enabled}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-gold"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Configurações de Frete
                </h2>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-500 text-center">
                    Configurações de frete serão adicionadas em breve.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Segurança
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Senha Atual
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nova Senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirmar Nova Senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                      placeholder="••••••••"
                    />
                  </div>
                  <button className="flex items-center gap-2 bg-brand-gold text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-brand-gold-dark transition-colors">
                    <Save className="w-4 h-4" />
                    Atualizar Senha
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
