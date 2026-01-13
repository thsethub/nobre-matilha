"use client";

import {
  Package,
  ShoppingBag,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
} from "lucide-react";

const stats = [
  {
    title: "Total de Produtos",
    value: "124",
    change: "+12%",
    trend: "up",
    icon: Package,
    color: "bg-brand-navy",
  },
  {
    title: "Vendas do Mês",
    value: "R$ 15.420",
    change: "+23%",
    trend: "up",
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Pedidos Pendentes",
    value: "18",
    change: "-5%",
    trend: "down",
    icon: ShoppingBag,
    color: "bg-brand-gold",
  },
  {
    title: "Taxa de Conversão",
    value: "3.2%",
    change: "+0.5%",
    trend: "up",
    icon: TrendingUp,
    color: "bg-brand-navy-700",
  },
];

const recentOrders = [
  {
    id: "#001",
    customer: "Maria Silva",
    product: "Coleira Premium para Cães",
    value: "R$ 89,90",
    status: "Enviado",
  },
  {
    id: "#002",
    customer: "João Santos",
    product: "Brinquedo Interativo Gato",
    value: "R$ 45,00",
    status: "Processando",
  },
  {
    id: "#003",
    customer: "Ana Costa",
    product: "Cama Ortopédica Pet",
    value: "R$ 259,90",
    status: "Pendente",
  },
  {
    id: "#004",
    customer: "Pedro Lima",
    product: "Kit Banho Pet Premium",
    value: "R$ 120,00",
    status: "Enviado",
  },
  {
    id: "#005",
    customer: "Carla Mendes",
    product: "Arranhador Torre Gato",
    value: "R$ 189,90",
    status: "Processando",
  },
];

const topProducts = [
  { name: "Coleira LED Recarregável", sales: 45, stock: 23 },
  { name: "Brinquedo Mordedor Durável", sales: 38, stock: 56 },
  { name: "Cama Impermeável P", sales: 32, stock: 12 },
  { name: "Guia Retrátil 5m", sales: 28, stock: 34 },
  { name: "Comedouro Inteligente", sales: 25, stock: 8 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-brand-navy font-display">
          Dashboard
        </h1>
        <p className="text-gray-500">
          Bem-vindo ao painel administrativo da Nobre Matilha
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div
                className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart Placeholder */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-brand-navy">
              Vendas Mensais
            </h2>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-gold">
              <option>Últimos 7 dias</option>
              <option>Último mês</option>
              <option>Últimos 3 meses</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">
                Gráfico de vendas será exibido aqui
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Integração com biblioteca de gráficos pendente
              </p>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-brand-navy mb-6">
            Produtos Mais Vendidos
          </h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={product.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-brand-navy text-sm">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Estoque: {product.stock} un.
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-navy">
                    {product.sales} vendas
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-brand-navy">
            Pedidos Recentes
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pedido
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produto
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.value}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        order.status === "Enviado"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Processando"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
