"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GetCategorias } from "@/app/action/categorias/getCategorias";
import { AddHistorial } from "@/app/action/historial/addHistorial";
import { useToast } from "@/app/components/ToastProvider";
import { DeleteCatetegoria } from "@/app/action/categorias/deleteCategorias";
import { CreateCategoria } from "@/app/action/categorias/createCategoria";
import { UpdateCategoria } from "@/app/action/categorias/updateCategoria";
import { categoryInterface } from "@/app/interfaces/categorias";

interface FormToCreateCategoria {
  name: string;
  value: number;
}

interface CategoriaModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoria?: categoryInterface | null;
  onSave: (categoria: FormToCreateCategoria) => void;
}

const CategoriaModal: React.FC<CategoriaModalProps> = ({
  isOpen,
  onClose,
  categoria,
  onSave,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    value: 0,
  });

  useEffect(() => {
    if (categoria) {
      setFormData({
        name: categoria.name,
        value: categoria.value,
      });
    } else {
      setFormData({
        name: "",
        value: 0,
      });
    }
  }, [categoria]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Validaciones básicas
    if (!formData.name.trim()) {
      showToast("El nombre es requerido", "error");
      return;
    }

    if (formData.name.trim().length < 2) {
      showToast("El nombre debe tener al menos 2 caracteres", "error");
      return;
    }

    if (formData.value < 0) {
      showToast("El valor debe ser mayor a cero", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const categoriaData = {
        name: formData.name.trim(),
        value: formData.value,
      };

      console.log("Formulario válido, enviando datos:", categoriaData);

      onSave(categoriaData);
    } catch (error) {
      console.error("Error en handleSubmit:", error);
      showToast("Error inesperado al procesar el formulario", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay admin-container">
      <div
        ref={modalRef}
        className="admin-modal modal-content bg-white rounded-xl max-w-md w-full"
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {categoria ? "Editar Categoría" : "Agregar Categoría"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre de la Categoría
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: Electrónica, Ropa, Alimentos..."
              required
              maxLength={50}
            />
            <p className="text-xs text-gray-500 mt-1">
              Mínimo 2 caracteres, máximo 50
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Valor de la Categoría
            </label>
            <input
              type="text"
              value={formData.value}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, value: +e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: electronica, ropa, alimentos..."
              required
              maxLength={50}
            />
            <p className="text-xs text-gray-500 mt-1">
              Mínimo 2 caracteres, máximo 50
            </p>
          </div>

          {categoria && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-medium">ID:</span> {categoria.id}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                El ID no puede ser modificado
              </p>
            </div>
          )}

          {/* Botones */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 text-white rounded-lg transition-colors flex items-center space-x-2 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting && (
                <svg
                  className="animate-spin h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
              <span>
                {isSubmitting
                  ? categoria
                    ? "Actualizando..."
                    : "Creando..."
                  : categoria
                  ? "Actualizar"
                  : "Crear"}{" "}
                Categoría
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const CategoriasSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { showToast } = useToast();
  const [categorias, setCategorias] = useState<categoryInterface[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoria, setSelectedCategoria] =
    useState<categoryInterface | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }

    const loadCategorias = async () => {
      try {
        const response = await GetCategorias();
        if (response.data) {
          setCategorias(response.data);
        }
      } catch (error) {
        console.error("Error al cargar categorías:", error);
        showToast("Error al cargar las categorías", "error");
      } finally {
        setLoading(false);
      }
    };

    loadCategorias();
  }, []);

  const handleSaveCategoria = async (categoriaData: FormToCreateCategoria) => {
    try {
      if (selectedCategoria && selectedCategoria.id) {
        // Actualizar categoría existente
        const categoryToSend: categoryInterface = {
          id: selectedCategoria.id,
          name: categoriaData.name,
          value: categoriaData.value,
        };
        const data = await UpdateCategoria(categoryToSend);

        if (data.ok && data.data) {
          setCategorias((prev) =>
            prev.map((c) =>
              c.id === selectedCategoria.id
                ? (data.data as categoryInterface)
                : c
            )
          );
          showToast(
            `Categoría "${categoriaData.name}" actualizada exitosamente`,
            "success"
          );
          await AddHistorial(
            `Se actualizó la categoría "${categoriaData.name}"`
          );
          setIsModalOpen(false);
          setSelectedCategoria(null);
        } else {
          console.error("Error al actualizar categoría:", data.msg);
          showToast(data.msg || "Error al actualizar la categoría", "error");
        }
      } else {
        // Crear nueva categoría
        console.log("Creando nueva categoría con datos:", categoriaData);
        const data = await CreateCategoria(
          categoriaData.name,
          categoriaData.value
        );
        console.log("Respuesta de createCategoria:", data);

        if (data.ok) {
          setCategorias((prev) => [data.data! as categoryInterface, ...prev]);
          showToast(
            `Categoría "${categoriaData.name}" creada exitosamente`,
            "success"
          );
          await AddHistorial(`Se creó la categoría "${categoriaData.name}"`);
          setIsModalOpen(false);
          setSelectedCategoria(null);
        } else {
          console.error("Error al crear categoría:", data.msg || data.error);
          showToast(
            data.msg || data.error || "Error al crear la categoría",
            "error"
          );
        }
      }
    } catch (error) {
      console.error("Error en handleSaveCategoria:", error);
      showToast("Error inesperado al guardar la categoría", "error");
    }
  };

  const handleEditCategoria = (categoria: categoryInterface) => {
    setSelectedCategoria(categoria);
    setIsModalOpen(true);
  };

  const handleDeleteCategoria = async (categoriaId: string) => {
    const categoria = categorias.find((c) => c.id === categoriaId);
    const categoriaName = categoria?.name || "la categoría";

    if (
      confirm(
        `¿Estás seguro de que quieres eliminar "${categoriaName}"?\n\nAdvertencia: Esta acción eliminará la categoría y podría afectar los productos asociados.`
      )
    ) {
      try {
        const resp = await DeleteCatetegoria(categoriaId);
        if (resp.ok) {
          setCategorias((prev) => prev.filter((c) => c.id !== categoriaId));
          showToast(
            `Categoría "${categoriaName}" eliminada exitosamente`,
            "success"
          );
          await AddHistorial(`Se eliminó la categoría "${categoriaName}"`);
        } else {
          showToast(resp.msg || "Error al eliminar la categoría", "error");
        }
      } catch (error) {
        console.error("Error al eliminar categoría:", error);
        showToast("Error inesperado al eliminar la categoría", "error");
      }
    }
  };

  const openCreateModal = () => {
    setSelectedCategoria(null);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" style={{ fontSize: "14px" }}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1
            ref={titleRef}
            className="text-2xl font-bold text-gray-800 mb-2"
            style={{ fontSize: "24px" }}
          >
            Gestión de Categorías
          </h1>
          <p className="text-gray-600" style={{ fontSize: "14px" }}>
            Administra las categorías de productos disponibles en el sistema
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>Agregar Categoría</span>
        </button>
      </div>

      {/* Categorías Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="admin-card hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3
                    className="text-xl font-semibold text-gray-800 mb-2"
                    style={{ fontSize: "18px" }}
                  >
                    {categoria.name}
                  </h3>
                  <p
                    className="text-sm text-gray-500 mb-2 font-mono"
                    style={{ fontSize: "12px" }}
                  >
                    ID: {categoria.id}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <div
                    className="w-3 h-3 bg-green-400 rounded-full"
                    title="Categoría activa"
                  ></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="font-medium text-gray-700">Valor:</span>
                    <p className="text-gray-600 mt-1 font-mono">
                      {categoria.value}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleEditCategoria(categoria)}
                    className="flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center space-x-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span>Editar</span>
                  </button>
                  <button
                    onClick={() => handleDeleteCategoria(categoria.id)}
                    className="flex-1 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center space-x-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span>Eliminar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {categorias.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No hay categorías configuradas
          </h3>
          <p className="text-gray-500 mb-6">
            Comienza agregando la primera categoría de producto al sistema.
          </p>
          <button
            onClick={openCreateModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Agregar Primera Categoría
          </button>
        </div>
      )}

      {/* Modal */}
      <CategoriaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categoria={selectedCategoria}
        onSave={handleSaveCategoria}
      />
    </div>
  );
};
