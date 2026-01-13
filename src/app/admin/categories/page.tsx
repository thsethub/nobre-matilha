"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, X, Tag, FolderOpen } from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
  color: string;
}

interface TagItem {
  id: string;
  name: string;
  productCount: number;
}

const initialCategories: Category[] = [
  {
    id: "1",
    name: "Acessórios",
    description: "Coleiras, guias, roupas e mais",
    productCount: 45,
    color: "#D4A853",
  },
  {
    id: "2",
    name: "Brinquedos",
    description: "Brinquedos interativos e mordedores",
    productCount: 32,
    color: "#4ECDC4",
  },
  {
    id: "3",
    name: "Camas",
    description: "Camas, almofadas e casas",
    productCount: 18,
    color: "#FF6B6B",
  },
  {
    id: "4",
    name: "Roupas",
    description: "Roupas e fantasias para pets",
    productCount: 24,
    color: "#9B59B6",
  },
  {
    id: "5",
    name: "Higiene",
    description: "Produtos de banho e higiene",
    productCount: 15,
    color: "#3498DB",
  },
];

const initialTags: TagItem[] = [
  { id: "1", name: "Cachorro", productCount: 89 },
  { id: "2", name: "Gato", productCount: 45 },
  { id: "3", name: "Passeio", productCount: 23 },
  { id: "4", name: "Segurança", productCount: 15 },
  { id: "5", name: "Interativo", productCount: 28 },
  { id: "6", name: "Conforto", productCount: 34 },
  { id: "7", name: "Premium", productCount: 12 },
  { id: "8", name: "Promoção", productCount: 8 },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [tags, setTags] = useState<TagItem[]>(initialTags);
  const [activeTab, setActiveTab] = useState<"categories" | "tags">(
    "categories"
  );
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingTag, setEditingTag] = useState<TagItem | null>(null);
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
    color: "#D4A853",
  });
  const [tagForm, setTagForm] = useState({ name: "" });

  const openCategoryModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category);
      setCategoryForm({
        name: category.name,
        description: category.description,
        color: category.color,
      });
    } else {
      setEditingCategory(null);
      setCategoryForm({ name: "", description: "", color: "#D4A853" });
    }
    setIsCategoryModalOpen(true);
  };

  const openTagModal = (tag?: TagItem) => {
    if (tag) {
      setEditingTag(tag);
      setTagForm({ name: tag.name });
    } else {
      setEditingTag(null);
      setTagForm({ name: "" });
    }
    setIsTagModalOpen(true);
  };

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCategory: Category = {
      id: editingCategory?.id || Date.now().toString(),
      name: categoryForm.name,
      description: categoryForm.description,
      color: categoryForm.color,
      productCount: editingCategory?.productCount || 0,
    };

    if (editingCategory) {
      setCategories(
        categories.map((c) => (c.id === editingCategory.id ? newCategory : c))
      );
    } else {
      setCategories([...categories, newCategory]);
    }

    setIsCategoryModalOpen(false);
  };

  const handleTagSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTag: TagItem = {
      id: editingTag?.id || Date.now().toString(),
      name: tagForm.name,
      productCount: editingTag?.productCount || 0,
    };

    if (editingTag) {
      setTags(tags.map((t) => (t.id === editingTag.id ? newTag : t)));
    } else {
      setTags([...tags, newTag]);
    }

    setIsTagModalOpen(false);
  };

  const deleteCategory = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta categoria?")) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  const deleteTag = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta tag?")) {
      setTags(tags.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-navy font-display">
            Categorias & Tags
          </h1>
          <p className="text-gray-500">Organize seus produtos</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab("categories")}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${
                activeTab === "categories"
                  ? "text-brand-gold border-b-2 border-brand-gold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <FolderOpen className="w-4 h-4" />
              Categorias ({categories.length})
            </button>
            <button
              onClick={() => setActiveTab("tags")}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${
                activeTab === "tags"
                  ? "text-brand-gold border-b-2 border-brand-gold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Tag className="w-4 h-4" />
              Tags ({tags.length})
            </button>
          </div>
        </div>

        {/* Categories Tab */}
        {activeTab === "categories" && (
          <div className="p-6">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => openCategoryModal()}
                className="flex items-center gap-2 bg-brand-gold text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-brand-gold-dark transition-colors"
              >
                <Plus className="w-5 h-5" />
                Nova Categoria
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <FolderOpen
                        className="w-5 h-5"
                        style={{ color: category.color }}
                      />
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => openCategoryModal(category)}
                        className="p-1.5 text-gray-400 hover:text-brand-gold hover:bg-brand-gold/10 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteCategory(category.id)}
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {category.description}
                  </p>
                  <span className="text-xs text-gray-400">
                    {category.productCount} produtos
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags Tab */}
        {activeTab === "tags" && (
          <div className="p-6">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => openTagModal()}
                className="flex items-center gap-2 bg-brand-gold text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-brand-gold-dark transition-colors"
              >
                <Plus className="w-5 h-5" />
                Nova Tag
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 group hover:bg-gray-100 transition-colors"
                >
                  <Tag className="w-4 h-4 text-brand-gold" />
                  <span className="font-medium text-gray-700">{tag.name}</span>
                  <span className="text-xs text-gray-400 bg-white px-2 py-0.5 rounded-full">
                    {tag.productCount}
                  </span>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => openTagModal(tag)}
                      className="p-1 text-gray-400 hover:text-brand-gold transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => deleteTag(tag.id)}
                      className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Category Modal */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsCategoryModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
            <div className="border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                {editingCategory ? "Editar Categoria" : "Nova Categoria"}
              </h2>
              <button
                onClick={() => setIsCategoryModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCategorySubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da Categoria *
                </label>
                <input
                  type="text"
                  value={categoryForm.name}
                  onChange={(e) =>
                    setCategoryForm({ ...categoryForm, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                  placeholder="Ex: Brinquedos"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição
                </label>
                <textarea
                  value={categoryForm.description}
                  onChange={(e) =>
                    setCategoryForm({
                      ...categoryForm,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold resize-none"
                  rows={3}
                  placeholder="Descrição da categoria..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cor
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={categoryForm.color}
                    onChange={(e) =>
                      setCategoryForm({
                        ...categoryForm,
                        color: e.target.value,
                      })
                    }
                    className="w-12 h-10 rounded cursor-pointer"
                  />
                  <span className="text-sm text-gray-500">
                    {categoryForm.color}
                  </span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsCategoryModalOpen(false)}
                  className="px-4 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-brand-gold text-white rounded-lg font-semibold hover:bg-brand-gold-dark transition-colors"
                >
                  {editingCategory ? "Salvar" : "Criar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Tag Modal */}
      {isTagModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsTagModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
            <div className="border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                {editingTag ? "Editar Tag" : "Nova Tag"}
              </h2>
              <button
                onClick={() => setIsTagModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleTagSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da Tag *
                </label>
                <input
                  type="text"
                  value={tagForm.name}
                  onChange={(e) =>
                    setTagForm({ ...tagForm, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                  placeholder="Ex: Premium"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsTagModalOpen(false)}
                  className="px-4 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-brand-gold text-white rounded-lg font-semibold hover:bg-brand-gold-dark transition-colors"
                >
                  {editingTag ? "Salvar" : "Criar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
