"use client";

import { useState } from "react";
import {
  Search,
  AlertTriangle,
  Package,
  TrendingDown,
  TrendingUp,
  Filter,
} from "lucide-react";

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  currentStock: number;
  minStock: number;
  lastUpdated: string;
  status: "ok" | "low" | "critical" | "out";
}

const inventoryData: InventoryItem[] = [
  {
    id: "1",
    name: "Coleira LED Recarregável",
    sku: "COL-LED-001",
    category: "Acessórios",
    currentStock: 23,
    minStock: 10,
    lastUpdated: "10/01/2026",
    status: "ok",
  },
  {
    id: "2",
    name: "Brinquedo Mordedor Durável",
    sku: "BRI-MOR-002",
    category: "Brinquedos",
    currentStock: 56,
    minStock: 15,
    lastUpdated: "09/01/2026",
    status: "ok",
  },
  {
    id: "3",
    name: "Cama Ortopédica Pet P",
    sku: "CAM-ORT-003",
    category: "Camas",
    currentStock: 5,
    minStock: 10,
    lastUpdated: "08/01/2026",
    status: "low",
  },
  {
    id: "4",
    name: "Arranhador Torre Gato",
    sku: "ARR-TOR-004",
    category: "Brinquedos",
    currentStock: 12,
    minStock: 8,
    lastUpdated: "07/01/2026",
    status: "ok",
  },
  {
    id: "5",
    name: "Guia Retrátil 5m",
    sku: "GUI-RET-005",
    category: "Acessórios",
    currentStock: 0,
    minStock: 10,
    lastUpdated: "06/01/2026",
    status: "out",
  },
  {
    id: "6",
    name: "Roupa Inverno Cão M",
    sku: "ROU-INV-006",
    category: "Roupas",
    currentStock: 3,
    minStock: 15,
    lastUpdated: "05/01/2026",
    status: "critical",
  },
  {
    id: "7",
    name: "Comedouro Inox 500ml",
    sku: "COM-INO-007",
    category: "Acessórios",
    currentStock: 45,
    minStock: 20,
    lastUpdated: "10/01/2026",
    status: "ok",
  },
  {
    id: "8",
    name: "Shampoo Pet Neutro 500ml",
    sku: "SHA-NEU-008",
    category: "Higiene",
    currentStock: 8,
    minStock: 25,
    lastUpdated: "04/01/2026",
    status: "critical",
  },
];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredItems = inventoryData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || item.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: inventoryData.length,
    ok: inventoryData.filter((i) => i.status === "ok").length,
    low: inventoryData.filter((i) => i.status === "low").length,
    critical: inventoryData.filter((i) => i.status === "critical").length,
    out: inventoryData.filter((i) => i.status === "out").length,
  };

  const getStatusBadge = (status: InventoryItem["status"]) => {
    const styles = {
      ok: "bg-green-100 text-green-700",
      low: "bg-yellow-100 text-yellow-700",
      critical: "bg-orange-100 text-orange-700",
      out: "bg-red-100 text-red-700",
    };
    const labels = {
      ok: "Normal",
      low: "Baixo",
      critical: "Crítico",
      out: "Esgotado",
    };
    return (
      <span
        className={`px-2.5 py-1 text-xs font-medium rounded-full ${styles[status]}`}
      >
        {labels[status]}
      </span>
    );
  };

  const getStockIndicator = (current: number, min: number) => {
    const percentage = (current / min) * 100;
    let color = "bg-green-500";
    if (current === 0) color = "bg-red-500";
    else if (percentage < 50) color = "bg-orange-500";
    else if (percentage < 100) color = "bg-yellow-500";

    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full transition-all`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-brand-navy font-display">
          Controle de Estoque
        </h1>
        <p className="text-gray-500">
          Monitore e gerencie o estoque dos produtos
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              <p className="text-xs text-gray-500">Total</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.ok}</p>
              <p className="text-xs text-gray-500">Normal</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.low}</p>
              <p className="text-xs text-gray-500">Baixo</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.critical}
              </p>
              <p className="text-xs text-gray-500">Crítico</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.out}</p>
              <p className="text-xs text-gray-500">Esgotado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nome ou SKU..."
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
              <option value="ok">Normal</option>
              <option value="low">Baixo</option>
              <option value="critical">Crítico</option>
              <option value="out">Esgotado</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Mais Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produto
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SKU
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estoque
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nível
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Atualizado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-900">
                      {item.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                    {item.sku}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">
                        {item.currentStock}
                      </span>
                      <span className="text-xs text-gray-400">
                        / mín. {item.minStock}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap w-32">
                    {getStockIndicator(item.currentStock, item.minStock)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(item.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.lastUpdated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum item encontrado</p>
          </div>
        )}
      </div>

      {/* Alerts */}
      {(stats.critical > 0 || stats.out > 0) && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <div>
              <h3 className="font-semibold text-red-800">
                Atenção: Produtos precisam de reposição
              </h3>
              <p className="text-sm text-red-600">
                {stats.critical + stats.out} produto(s) com estoque crítico ou
                esgotado. Verifique a lista acima.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
