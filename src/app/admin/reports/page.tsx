"use client";

import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  Calendar,
  Download,
  BarChart3,
  PieChart,
} from "lucide-react";

const monthlyData = [
  { month: "Jul", sales: 8500, orders: 45 },
  { month: "Ago", sales: 9200, orders: 52 },
  { month: "Set", sales: 7800, orders: 41 },
  { month: "Out", sales: 11500, orders: 68 },
  { month: "Nov", sales: 14200, orders: 85 },
  { month: "Dez", sales: 18900, orders: 112 },
  { month: "Jan", sales: 15420, orders: 89 },
];

const categoryData = [
  { name: "Acessórios", value: 35, color: "#D4A853" },
  { name: "Brinquedos", value: 28, color: "#4ECDC4" },
  { name: "Camas", value: 18, color: "#FF6B6B" },
  { name: "Roupas", value: 12, color: "#9B59B6" },
  { name: "Higiene", value: 7, color: "#3498DB" },
];

const topSellingProducts = [
  { name: "Coleira LED Recarregável", sold: 156, revenue: 14040.4 },
  { name: "Cama Ortopédica Pet M", sold: 89, revenue: 23121.1 },
  { name: "Brinquedo Mordedor Durável", sold: 234, revenue: 10530.0 },
  { name: "Guia Retrátil 5m", sold: 178, revenue: 13350.0 },
  { name: "Arranhador Torre Gato", sold: 67, revenue: 12723.3 },
];

export default function ReportsPage() {
  const [period, setPeriod] = useState("30");

  const currentMonthStats = {
    revenue: 15420,
    revenueChange: 8.2,
    orders: 89,
    ordersChange: 4.7,
    avgTicket: 173.26,
    avgTicketChange: -2.1,
    customers: 67,
    customersChange: 12.5,
  };

  const maxSales = Math.max(...monthlyData.map((d) => d.sales));

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-navy font-display">
            Relatórios
          </h1>
          <p className="text-gray-500">
            Análise de vendas e desempenho da loja
          </p>
        </div>
        <div className="flex gap-2">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
          >
            <option value="7">Últimos 7 dias</option>
            <option value="30">Últimos 30 dias</option>
            <option value="90">Últimos 3 meses</option>
            <option value="365">Último ano</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-brand-gold text-white rounded-lg font-semibold hover:bg-brand-gold-dark transition-colors">
            <Download className="w-4 h-4" />
            Exportar
          </button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                currentMonthStats.revenueChange >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {currentMonthStats.revenueChange >= 0 ? "+" : ""}
              {currentMonthStats.revenueChange}%
              {currentMonthStats.revenueChange >= 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            R$ {currentMonthStats.revenue.toLocaleString("pt-BR")}
          </p>
          <p className="text-sm text-gray-500">Receita Total</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                currentMonthStats.ordersChange >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {currentMonthStats.ordersChange >= 0 ? "+" : ""}
              {currentMonthStats.ordersChange}%
              {currentMonthStats.ordersChange >= 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {currentMonthStats.orders}
          </p>
          <p className="text-sm text-gray-500">Total de Pedidos</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                currentMonthStats.avgTicketChange >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {currentMonthStats.avgTicketChange >= 0 ? "+" : ""}
              {currentMonthStats.avgTicketChange}%
              {currentMonthStats.avgTicketChange >= 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            R$ {currentMonthStats.avgTicket.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">Ticket Médio</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                currentMonthStats.customersChange >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {currentMonthStats.customersChange >= 0 ? "+" : ""}
              {currentMonthStats.customersChange}%
              {currentMonthStats.customersChange >= 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {currentMonthStats.customers}
          </p>
          <p className="text-sm text-gray-500">Novos Clientes</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Vendas Mensais
              </h2>
              <p className="text-sm text-gray-500">Últimos 7 meses</p>
            </div>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>

          {/* Simple Bar Chart */}
          <div className="flex items-end justify-between gap-2 h-48">
            {monthlyData.map((data, index) => (
              <div
                key={data.month}
                className="flex-1 flex flex-col items-center"
              >
                <div
                  className={`w-full rounded-t-lg transition-all hover:opacity-80 ${
                    index === monthlyData.length - 1
                      ? "bg-brand-gold"
                      : "bg-brand-gold/40"
                  }`}
                  style={{
                    height: `${(data.sales / maxSales) * 100}%`,
                    minHeight: "20px",
                  }}
                  title={`R$ ${data.sales.toLocaleString("pt-BR")}`}
                />
                <span className="text-xs text-gray-500 mt-2">{data.month}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm">
            <div>
              <span className="text-gray-500">Melhor mês:</span>
              <span className="font-semibold text-gray-900 ml-1">
                Dezembro (R$ 18.900)
              </span>
            </div>
            <div>
              <span className="text-gray-500">Média:</span>
              <span className="font-semibold text-gray-900 ml-1">
                R$ 12.217
              </span>
            </div>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Vendas por Categoria
              </h2>
              <p className="text-sm text-gray-500">Distribuição percentual</p>
            </div>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>

          {/* Simple Pie Chart Representation */}
          <div className="flex items-center gap-8">
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {
                  categoryData.reduce(
                    (acc, category, index) => {
                      const startAngle = acc.angle;
                      const angle = (category.value / 100) * 360;
                      const endAngle = startAngle + angle;

                      const startRad = (startAngle * Math.PI) / 180;
                      const endRad = (endAngle * Math.PI) / 180;

                      const x1 = 50 + 40 * Math.cos(startRad);
                      const y1 = 50 + 40 * Math.sin(startRad);
                      const x2 = 50 + 40 * Math.cos(endRad);
                      const y2 = 50 + 40 * Math.sin(endRad);

                      const largeArc = angle > 180 ? 1 : 0;

                      acc.paths.push(
                        <path
                          key={index}
                          d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                          fill={category.color}
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                      );

                      acc.angle = endAngle;
                      return acc;
                    },
                    { paths: [] as React.ReactNode[], angle: 0 }
                  ).paths
                }
                <circle cx="50" cy="50" r="20" fill="white" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900">100%</span>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              {categoryData.map((category) => (
                <div key={category.name} className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="flex-1 text-sm text-gray-600">
                    {category.name}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {category.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Selling Products */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            Produtos Mais Vendidos
          </h2>
          <p className="text-sm text-gray-500">
            Ranking por quantidade vendida
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produto
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unidades Vendidas
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Receita
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  % do Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {topSellingProducts.map((product, index) => {
                const totalRevenue = topSellingProducts.reduce(
                  (sum, p) => sum + p.revenue,
                  0
                );
                const percentage = (
                  (product.revenue / totalRevenue) *
                  100
                ).toFixed(1);

                return (
                  <tr key={product.name} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${
                          index === 0
                            ? "bg-brand-gold text-white"
                            : index === 1
                            ? "bg-gray-300 text-gray-700"
                            : index === 2
                            ? "bg-orange-300 text-orange-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {product.sold} un.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                      R${" "}
                      {product.revenue.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-brand-gold h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">
                          {percentage}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
