"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { getProducts } from "@/app/action/products/products";
import { getTipos } from "@/app/action/tipos/getTipos";
import { FormToCreateProducts, Products } from "@/app/interfaces/products";
import { createProduct } from "@/app/action/products/createProducts";
import { updateProduct } from "@/app/action/products/updateProducts";
import { changeVisibility } from "@/app/action/products/changeVisibility";
import { deleteProduct } from "@/app/action/products/deleteProducts";
import { MediaUploader } from "./MediaUploader";
import { AddHistorial } from "@/app/action/historial/addHistorial";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Products | null;
  onSave: (product: FormToCreateProducts) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
  onSave,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    precioAntes: "",
    precioAhora: "",
    imagenes: [""],
    video: "",
    url_demo: "",
    url_full: "",
    visible: true,
    tipoId: "",
    modulos: [{ titulo: "", subtitulos: [""] }],
  });

  const [tipos, setTipos] = useState<{ id: string; titulo: string }[]>([]);

  useEffect(() => {
    if (product) {
      setFormData({
        titulo: product.titulo,
        descripcion: product.descripcion,
        precioAntes: product.precioAntes?.toString() || "",
        precioAhora: product.precioAhora.toString(),
        imagenes: product.imagenes,
        video: product.video,
        url_demo: product.url_demo || "",
        url_full: product.url_full || "",
        visible: product.visible,
        tipoId: product.tipoId,
        modulos: product.modulos,
      });
    } else {
      setFormData({
        titulo: "",
        descripcion: "",
        precioAntes: "",
        precioAhora: "",
        imagenes: [""],
        video: "",
        url_demo: "",
        url_full: "",
        visible: true,
        tipoId: "",
        modulos: [{ titulo: "", subtitulos: [""] }],
      });
    }
  }, [product]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones básicas
    if (!formData.titulo.trim()) {
      alert("El título es requerido");
      return;
    }

    if (!formData.descripcion.trim()) {
      alert("La descripción es requerida");
      return;
    }

    if (!formData.precioAhora || parseFloat(formData.precioAhora) <= 0) {
      alert("El precio actual debe ser mayor a 0");
      return;
    }

    if (!formData.tipoId) {
      alert("Debe seleccionar un tipo de producto");
      return;
    }

    if (!formData.video.trim()) {
      alert("El video es requerido");
      return;
    }

    // Verificar que al menos una imagen tenga URL
    const imagenesValidas = formData.imagenes.filter(
      (img) => img.trim() !== ""
    );
    if (imagenesValidas.length === 0) {
      alert("Debe agregar al menos una imagen");
      return;
    }

    // Verificar que los módulos tengan contenido
    const modulosValidos = formData.modulos.filter(
      (mod) =>
        mod.titulo.trim() !== "" &&
        mod.subtitulos.some((sub) => sub.trim() !== "")
    );
    if (modulosValidos.length === 0) {
      alert("Debe agregar al menos un módulo con título y subtitulos");
      return;
    }

    console.log("Formulario válido, enviando datos:", {
      ...formData,
      precioAntes: formData.precioAntes
        ? parseFloat(formData.precioAntes)
        : null,
      precioAhora: parseFloat(formData.precioAhora),
      imagenes: imagenesValidas,
      modulos: modulosValidos,
    });

    onSave({
      ...formData,
      precioAntes: formData.precioAntes
        ? parseFloat(formData.precioAntes)
        : null,
      precioAhora: parseFloat(formData.precioAhora),
      imagenes: imagenesValidas,
      modulos: modulosValidos,
    });
    onClose();
  };

  const addImagen = () => {
    setFormData((prev) => ({
      ...prev,
      imagenes: [...prev.imagenes, ""],
    }));
  };

  const removeImagen = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      imagenes: prev.imagenes.filter((_, i) => i !== index),
    }));
  };

  const updateImagen = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      imagenes: prev.imagenes.map((img, i) => (i === index ? value : img)),
    }));
  };

  const addModulo = () => {
    setFormData((prev) => ({
      ...prev,
      modulos: [...prev.modulos, { titulo: "", subtitulos: [""] }],
    }));
  };

  const removeModulo = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      modulos: prev.modulos.filter((_, i) => i !== index),
    }));
  };

  const updateModulo = (
    index: number,
    field: keyof (typeof formData.modulos)[number],
    value: string | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      modulos: prev.modulos.map((mod, i) =>
        i === index ? { ...mod, [field]: value } : mod
      ),
    }));
  };

  const addSubtitulo = (moduloIndex: number) => {
    setFormData((prev) => ({
      ...prev,
      modulos: prev.modulos.map((mod, i) =>
        i === moduloIndex
          ? { ...mod, subtitulos: [...mod.subtitulos, ""] }
          : mod
      ),
    }));
  };

  const removeSubtitulo = (moduloIndex: number, subtituloIndex: number) => {
    setFormData((prev) => ({
      ...prev,
      modulos: prev.modulos.map((mod, i) =>
        i === moduloIndex
          ? {
              ...mod,
              subtitulos: mod.subtitulos.filter((_, j) => j !== subtituloIndex),
            }
          : mod
      ),
    }));
  };

  const updateSubtitulo = (
    moduloIndex: number,
    subtituloIndex: number,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      modulos: prev.modulos.map((mod, i) =>
        i === moduloIndex
          ? {
              ...mod,
              subtitulos: mod.subtitulos.map((sub, j) =>
                j === subtituloIndex ? value : sub
              ),
            }
          : mod
      ),
    }));
  };
  const loadTipos = async () => {
    const data = await getTipos();
    if (data.data) {
      setTipos(data.data);
    }
  };
  useEffect(() => {
    loadTipos();
  }, []);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay admin-container">
      <div
        ref={modalRef}
        className="admin-modal modal-content bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {product ? "Editar Producto" : "Agregar Producto"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Información básica */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título
              </label>
              <input
                type="text"
                value={formData.titulo}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, titulo: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo
              </label>
              <select
                value={formData.tipoId}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, tipoId: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Seleccionar tipo</option>
                {tipos.map((tipo) => (
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.titulo}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descripción
            </label>
            <textarea
              value={formData.descripcion}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  descripcion: e.target.value,
                }))
              }
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Precios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Precio Antes (opcional)
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.precioAntes}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    precioAntes: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Precio Actual
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.precioAhora}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    precioAhora: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Video con MediaUploader */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <MediaUploader
                type="video"
                label="Video del Producto"
                currentUrl={formData.video}
                onUpload={(url) =>
                  setFormData((prev) => ({ ...prev, video: url }))
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Producto visible
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.visible}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      visible: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Producto visible
                </span>
              </label>
            </div>
          </div>

          {/* URLs adicionales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL Demo (opcional)
              </label>
              <input
                type="url"
                value={formData.url_demo}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, url_demo: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://demo.ejemplo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL Completa (opcional)
              </label>
              <input
                type="url"
                value={formData.url_full}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, url_full: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://producto.ejemplo.com"
              />
            </div>
          </div>

          {/* Imágenes con Cloudinary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Imágenes del Producto
            </label>
            <div className="space-y-4">
              {formData.imagenes.map((imagen, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-gray-700">
                      Imagen {index + 1}
                    </h4>
                    <button
                      type="button"
                      onClick={() => removeImagen(index)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                      disabled={formData.imagenes.length === 1}
                    >
                      Eliminar
                    </button>
                  </div>
                  <MediaUploader
                    type="image"
                    label=""
                    currentUrl={imagen}
                    onUpload={(url) => updateImagen(index, url)}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addImagen}
                className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center space-x-2"
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
                <span>Agregar Nueva Imagen</span>
              </button>
            </div>
          </div>

          {/* Módulos */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Módulos
            </label>
            {formData.modulos.map((modulo, moduloIndex) => (
              <div
                key={moduloIndex}
                className="border border-gray-200 rounded-lg p-4 mb-4"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-700">
                    Módulo {moduloIndex + 1}
                  </h4>
                  <button
                    type="button"
                    onClick={() => removeModulo(moduloIndex)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    disabled={formData.modulos.length === 1}
                  >
                    ×
                  </button>
                </div>

                <input
                  type="text"
                  value={modulo.titulo}
                  onChange={(e) =>
                    updateModulo(moduloIndex, "titulo", e.target.value)
                  }
                  placeholder="Título del módulo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Subtítulos
                  </label>
                  {modulo.subtitulos.map((subtitulo, subtituloIndex) => (
                    <div key={subtituloIndex} className="flex space-x-2 mb-2">
                      <input
                        type="text"
                        value={subtitulo}
                        onChange={(e) =>
                          updateSubtitulo(
                            moduloIndex,
                            subtituloIndex,
                            e.target.value
                          )
                        }
                        placeholder="Subtítulo"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          removeSubtitulo(moduloIndex, subtituloIndex)
                        }
                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        disabled={modulo.subtitulos.length === 1}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addSubtitulo(moduloIndex)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                  >
                    + Subtítulo
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addModulo}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              + Agregar Módulo
            </button>
          </div>

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
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {product ? "Actualizar" : "Crear"} Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Función auxiliar para manejar las fechas de forma segura
const formatDateString = (date: string | Date | null | undefined): string => {
  if (typeof date === "string") {
    return date;
  }
  if (date instanceof Date) {
    return date.toISOString();
  }
  return new Date().toISOString();
};

export const ProductosSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [products, setProducts] = useState<Products[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
    const asynFunction = async () => {
      const products = await getProducts();
      if (products.data) {
        setProducts(
          products.data.map((p) => ({
            ...p,
            precioAntes:
              p.precioAntes !== null && p.precioAntes !== undefined
                ? Number(p.precioAntes)
                : null,
            precioAhora:
              p.precioAhora !== null && p.precioAhora !== undefined
                ? Number(p.precioAhora)
                : 0,
            createdAt: formatDateString(p.createdAt),
            updatedAt: formatDateString(p.updatedAt),
          }))
        );
      }
      setLoading(false);
    };
    asynFunction();
  }, []);

  const handleSaveProduct = async (productData: FormToCreateProducts) => {
    try {
      if (selectedProduct && selectedProduct.id) {
        // Actualizar producto existente
        const data = await updateProduct(selectedProduct.id, productData);
        if (data.ok && data.data) {
          setProducts((prev) =>
            prev.map((p) =>
              p.id === selectedProduct.id
                ? ({
                    ...data.data!,
                    precioAntes: data.data!.precioAntes
                      ? Number(data.data!.precioAntes)
                      : null,
                    precioAhora: Number(data.data!.precioAhora),
                    createdAt: formatDateString(data.data!.createdAt),
                    updatedAt: formatDateString(data.data!.updatedAt),
                  } as Products)
                : p
            )
          );
          console.log("Producto actualizado exitosamente");
        } else {
          console.error("Error al actualizar producto:", data.msg);
        }
      } else {
        // Crear nuevo producto
        console.log("Creando nuevo producto con datos:", productData);
        const data = await createProduct(productData);
        console.log("Respuesta de createProduct:", data);

        if (data.ok && data.data) {
          const newProduct: Products = {
            ...data.data,
            precioAntes: data.data.precioAntes
              ? Number(data.data.precioAntes)
              : null,
            precioAhora: Number(data.data.precioAhora),
            createdAt: formatDateString(data.data.createdAt),
            updatedAt: formatDateString(data.data.updatedAt),
          };
          setProducts((prev) => [newProduct, ...prev]);
          console.log("Producto creado exitosamente");
        } else {
          console.error("Error al crear producto:", data.msg || data.error);
          alert(
            "Error al crear el producto: " +
              (data.msg || data.error || "Error desconocido")
          );
        }
      }
    } catch (error) {
      console.error("Error en handleSaveProduct:", error);
      alert("Error inesperado al guardar el producto");
    }

    // Cerrar modal solo si todo salió bien
    setSelectedProduct(null);
  };

  const handleEditProduct = (product: Products) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = async (productId: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      const resp = await deleteProduct(productId);
      console.log({ resp });
      if (resp.ok) {
        setProducts((prev) => prev.filter((p) => p.id !== productId));
      }
    }
  };

  const toggleProductVisibility = async (productId: string) => {
    const data = await changeVisibility(productId);

    if (data.ok) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === productId
            ? { ...p, visible: !p.visible, updatedAt: new Date().toISOString() }
            : p
        )
      );
      const producto = products.filter((p) => p.id === productId);
      await AddHistorial(
        `Se configuro ${producto[0].titulo} a ${
          producto[0].visible ? "visible" : "invisible"
        }`
      );
    }
  };

  const openCreateModal = () => {
    setSelectedProduct(null);
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
            Gestión de Productos
          </h1>
          <p className="text-gray-600" style={{ fontSize: "14px" }}>
            Administra el catálogo de productos de Piramide Soft
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
          <span>Agregar Producto</span>
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="admin-card hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3
                    className="text-xl font-semibold text-gray-800 mb-2"
                    style={{ fontSize: "18px" }}
                  >
                    {product.titulo}
                  </h3>
                  <p
                    className="text-sm text-gray-500 mb-2"
                    style={{ fontSize: "12px" }}
                  >
                    {product.tipo.titulo}
                  </p>
                  <p
                    className="text-gray-600 text-sm mb-3 line-clamp-2"
                    style={{ fontSize: "14px" }}
                  >
                    {product.descripcion}
                  </p>
                </div>
                <div className="flex space-x-1 ml-4">
                  <button
                    onClick={() => toggleProductVisibility(product.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      product.visible
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                    title={
                      product.visible ? "Ocultar producto" : "Mostrar producto"
                    }
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {product.visible ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    {product.precioAntes && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.precioAntes.toLocaleString()}
                      </span>
                    )}
                    <div className="text-lg font-bold text-blue-600">
                      ${product.precioAhora.toLocaleString()}
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.visible
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {product.visible ? "Visible" : "Oculto"}
                  </span>
                </div>

                <div className="text-sm text-gray-500">
                  <div>Módulos: {product.modulos.length}</div>
                  <div>Imágenes: {product.imagenes.length}</div>
                </div>

                <div className="flex space-x-2 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleEditProduct(product)}
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
                    onClick={() => handleDeleteProduct(product.id)}
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

      {products.length === 0 && (
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
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No hay productos
          </h3>
          <p className="text-gray-500 mb-6">
            Comienza agregando tu primer producto al catálogo.
          </p>
          <button
            onClick={openCreateModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Agregar Primer Producto
          </button>
        </div>
      )}

      {/* Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        onSave={handleSaveProduct}
      />
    </div>
  );
};
