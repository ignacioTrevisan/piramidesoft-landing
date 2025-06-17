"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { getTipos } from "@/app/action/tipos/getTipos";
import { AddHistorial } from "@/app/action/historial/addHistorial";
import { useToast } from "@/app/components/ToastProvider";
import { deleteTipos } from "@/app/action/tipos/deleteTipos";
import { createTipo } from "@/app/action/tipos/createTipo";
import { UpdateTipo } from "@/app/action/tipos/updateTipo";

// Interface para los tipos
interface Tipo {
  id: string;
  titulo: string;
}

interface FormToCreateTipo {
  titulo: string;
}

interface TipoModalProps {
  isOpen: boolean;
  onClose: () => void;
  tipo?: Tipo | null;
  onSave: (tipo: FormToCreateTipo) => void;
}

const TipoModal: React.FC<TipoModalProps> = ({
  isOpen,
  onClose,
  tipo,
  onSave,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
  });

  useEffect(() => {
    if (tipo) {
      setFormData({
        titulo: tipo.titulo,
      });
    } else {
      setFormData({
        titulo: "",
      });
    }
  }, [tipo]);

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
    if (!formData.titulo.trim()) {
      showToast("El título es requerido", "error");
      return;
    }

    if (formData.titulo.trim().length < 2) {
      showToast("El título debe tener al menos 2 caracteres", "error");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const tipoData = {
        titulo: formData.titulo.trim(),
      };

      console.log("Formulario válido, enviando datos:", tipoData);
      
      onSave(tipoData);
      
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
            {tipo ? "Editar Tipo" : "Agregar Tipo"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título del Tipo
            </label>
            <input
              type="text"
              value={formData.titulo}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, titulo: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: Inventario, CRM, Facturación..."
              required
              maxLength={50}
            />
            <p className="text-xs text-gray-500 mt-1">
              Mínimo 2 caracteres, máximo 50
            </p>
          </div>

          {tipo && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-medium">ID:</span> {tipo.id}
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
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
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
                  ? (tipo ? "Actualizando..." : "Creando...") 
                  : (tipo ? "Actualizar" : "Crear")
                } Tipo
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const TiposSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { showToast } = useToast();
  const [tipos, setTipos] = useState<Tipo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTipo, setSelectedTipo] = useState<Tipo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
    
    const loadTipos = async () => {
      try {
        const response = await getTipos();
        if (response.data) {
          setTipos(response.data);
        }
      } catch (error) {
        console.error("Error al cargar tipos:", error);
        showToast("Error al cargar los tipos", "error");
      } finally {
        setLoading(false);
      }
    };
    
    loadTipos();
  }, []);

  // Efecto para manejar el trigger de crear tipo desde acciones rápidas
  

  const handleSaveTipo = async (tipoData: FormToCreateTipo) => {
    try {
      if (selectedTipo && selectedTipo.id) {
        // Actualizar tipo existente
        const data = await UpdateTipo(selectedTipo.id, tipoData.titulo);
        if (data.ok && data.data) {
          setTipos((prev) =>
            prev.map((t) =>
              t.id === selectedTipo.id ? data.data! : t
            )
          );
          showToast(`Tipo "${tipoData.titulo}" actualizado exitosamente`, "success");
          await AddHistorial(`Se actualizó el tipo "${tipoData.titulo}"`);
          setIsModalOpen(false);
          setSelectedTipo(null);
        } else {
          console.error("Error al actualizar tipo:", data.msg);
          showToast(data.msg || "Error al actualizar el tipo", "error");
        }
      } else {
        // Crear nuevo tipo
        console.log("Creando nuevo tipo con datos:", tipoData);
        const data = await createTipo(tipoData.titulo);
        console.log("Respuesta de createTipo:", data);

        if (data.ok && data.data) {
          setTipos((prev) => [data.data!, ...prev]);
          showToast(`Tipo "${tipoData.titulo}" creado exitosamente`, "success");
          await AddHistorial(`Se creó el tipo "${tipoData.titulo}"`);
          setIsModalOpen(false);
          setSelectedTipo(null);
        } else {
          console.error("Error al crear tipo:", data.msg || data.error);
          showToast(
            data.msg || data.error || "Error al crear el tipo",
            "error"
          );
        }
      }
    } catch (error) {
      console.error("Error en handleSaveTipo:", error);
      showToast("Error inesperado al guardar el tipo", "error");
    }
  };

  const handleEditTipo = (tipo: Tipo) => {
    setSelectedTipo(tipo);
    setIsModalOpen(true);
  };

  const handleDeleteTipo = async (tipoId: string) => {
    const tipo = tipos.find(t => t.id === tipoId);
    const tipoName = tipo?.titulo || "el tipo";
    
    if (confirm(`¿Estás seguro de que quieres eliminar "${tipoName}"?\n\nAdvertencia: Esta acción eliminará el tipo y podría afectar los productos asociados.`)) {
      try {
        const resp = await deleteTipos(tipoId);
        if (resp.ok) {
          setTipos((prev) => prev.filter((t) => t.id !== tipoId));
          showToast(`Tipo "${tipoName}" eliminado exitosamente`, "success");
          await AddHistorial(`Se eliminó el tipo "${tipoName}"`);
        } else {
          showToast(resp.msg || "Error al eliminar el tipo", "error");
        }
      } catch (error) {
        console.error("Error al eliminar tipo:", error);
        showToast("Error inesperado al eliminar el tipo", "error");
      }
    }
  };

  const openCreateModal = () => {
    setSelectedTipo(null);
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
            Gestión de Tipos
          </h1>
          <p className="text-gray-600" style={{ fontSize: "14px" }}>
            Administra los tipos de productos disponibles en el sistema
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
          <span>Agregar Tipo</span>
        </button>
      </div>

      {/* Tipos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tipos.map((tipo) => (
          <div
            key={tipo.id}
            className="admin-card hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3
                    className="text-xl font-semibold text-gray-800 mb-2"
                    style={{ fontSize: "18px" }}
                  >
                    {tipo.titulo}
                  </h3>
                  <p
                    className="text-sm text-gray-500 mb-2 font-mono"
                    style={{ fontSize: "12px" }}
                  >
                    ID: {tipo.id}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-green-400 rounded-full" title="Tipo activo"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm text-gray-500">
                  <div className="bg-gray-50 p-2 rounded text-center">
                    <span className="font-medium text-gray-700">Tipo de Producto</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleEditTipo(tipo)}
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
                    onClick={() => handleDeleteTipo(tipo.id)}
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

      {tipos.length === 0 && (
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
            No hay tipos configurados
          </h3>
          <p className="text-gray-500 mb-6">
            Comienza agregando el primer tipo de producto al sistema.
          </p>
          <button
            onClick={openCreateModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Agregar Primer Tipo
          </button>
        </div>
      )}

      {/* Modal */}
      <TipoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tipo={selectedTipo}
        onSave={handleSaveTipo}
      />
    </div>
  );
};