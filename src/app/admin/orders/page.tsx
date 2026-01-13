"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  Package,
} from "lucide-react";

interface Order {
  id: string;
  customer: string;
  email: string;
  date: string;
  total: number;
  items: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  paymentMethod: string;
}

const ordersData: Order[] = [
  {
    id: "#NM-001",
    customer: "Maria Silva",
    email: "maria@email.com",
    date: "13/01/2026",
    total: 289.9,
    items: 3,
    status: "delivered",
    paymentMethod: "Cartão de Crédito",
  },
  {
    id: "#NM-002",
    customer: "João Santos",
    email: "joao@email.com",
    date: "12/01/2026",
    total: 145.0,
    items: 2,
    status: "shipped",
    paymentMethod: "PIX",
  },
  {
    id: "#NM-003",
    customer: "Ana Costa",
    email: "ana@email.com",
    date: "12/01/2026",
    total: 459.9,
    items: 4,
    status: "processing",
    paymentMethod: "Cartão de Crédito",
  },
  {
    id: "#NM-004",
    customer: "Pedro Lima",
    email: "pedro@email.com",
    date: "11/01/2026",
    total: 89.9,
    items: 1,
    status: "pending",
    paymentMethod: "Boleto",
  },
  {
    id: "#NM-005",
    customer: "Carla Mendes",
    email: "carla@email.com",
    date: "10/01/2026",
    total: 320.0,
    items: 2,
    status: "cancelled",
    paymentMethod: "PIX",
  },
  {
    id: "#NM-006",
    customer: "Lucas Oliveira",
    email: "lucas@email.com",
    date: "10/01/2026",
    total: 175.5,
    items: 3,
    status: "delivered",
    paymentMethod: "Cartão de Crédito",
  },
];

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredOrders = ordersData.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: ordersData.length,
    pending: ordersData.filter((o) => o.status === "pending").length,
    processing: ordersData.filter((o) => o.status === "processing").length,
    shipped: ordersData.filter((o) => o.status === "shipped").length,
    delivered: ordersData.filter((o) => o.status === "delivered").length,
  };

  const getStatusBadge = (status: Order["status"]) => {
    const config = {
      pending: {
        icon: Clock,
        label: "Pendente",
        style: "bg-yellow-100 text-yellow-700",
      },
      processing: {
        icon: Package,
        label: "Processando",
        style: "bg-blue-100 text-blue-700",
      },
      shipped: {
        icon: Truck,
        label: "Enviado",
        style: "bg-purple-100 text-purple-700",
      },
      delivered: {
        icon: CheckCircle,
        label: "Entregue",
        style: "bg-green-100 text-green-700",
      },
      cancelled: {
        icon: XCircle,
        label: "Cancelado",
        style: "bg-red-100 text-red-700",
      },
    };

    const { icon: Icon, label, style } = config[status];

    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${style}`}
      >
        <Icon className="w-3.5 h-3.5" />
        {label}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-brand-navy font-display">
          Pedidos
        </h1>
        <p className="text-gray-500">Gerencie todos os pedidos da loja</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          <p className="text-xs text-gray-500">Total</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
          <p className="text-xs text-gray-500">Pendentes</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-blue-600">{stats.processing}</p>
          <p className="text-xs text-gray-500">Processando</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-purple-600">{stats.shipped}</p>
          <p className="text-xs text-gray-500">Enviados</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-green-600">{stats.delivered}</p>
          <p className="text-xs text-gray-500">Entregues</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por número, cliente ou e-mail..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
            >
              <option value="all">Todos os status</option>
              <option value="pending">Pendente</option>
              <option value="processing">Processando</option>
              <option value="shipped">Enviado</option>
              <option value="delivered">Entregue</option>
              <option value="cancelled">Cancelado</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
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
                  Data
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Itens
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pagamento
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="font-medium text-gray-900">
                        {order.customer}
                      </p>
                      <p className="text-xs text-gray-500">{order.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.items} {order.items === 1 ? "item" : "itens"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                    R$ {order.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.paymentMethod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Ver detalhes"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum pedido encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
}
