"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { getProducts } from "@/app/action/products/products";
import { AddHistorial } from "@/app/action/historial/addHistorial";
import { useToast } from "@/app/components/ToastProvider";
import { updateProductsOrder } from "@/app/action/products/orderProducts";

// Interface para productos con orden
interface ProductWithOrder {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: {
    id: string;
    titulo: string;
  };
  visible: boolean;
  orden: number;
  imagenes: string[];
}

interface OrderChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductWithOrder | null;
  currentOrder: number;
  maxOrder: number;
  onSave: (productId: string, newOrder: number) => void;
}

const OrderChangeModal: React.FC<OrderChangeModalProps> = ({
  isOpen,
  onClose,
  product,
  currentOrder,
  maxOrder,
  onSave,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newOrder, setNewOrder] = useState(currentOrder);

  useEffect(() => {
    setNewOrder(currentOrder);
  }, [currentOrder]);

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
    
    if (isSubmitting || !product) return;

    if (newOrder === currentOrder) {
      showToast("El orden no ha cambiado", "warning");
      return;
    }

    if (newOrder < 1 || newOrder > maxOrder) {
      showToast(`El orden debe estar entre 1 y ${maxOrder}`, "error");
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSave(product.id, newOrder);
    } catch (error) {
      console.error("Error en handleSubmit:", error);
      showToast("Error inesperado al cambiar el orden", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay admin-container">
      <div
        ref={modalRef}
        className="admin-modal modal-content bg-white rounded-xl max-w-md w-full"
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Cambiar Orden
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">{product.titulo}</h3>
            <p className="text-sm text-gray-600">
              Orden actual: <span className="font-medium">{currentOrder}</span>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nuevo Orden
            </label>
            <input
              type="number"
              value={newOrder}
              onChange={(e) => setNewOrder(parseInt(e.target.value) || 1)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              min={1}
              max={maxOrder}
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Rango válido: 1 - {maxOrder}
            </p>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-800">
              <span className="font-medium">Nota:</span> Los demás productos se ajustarán automáticamente para evitar conflictos de orden.
            </p>
          </div>

          {/* Vista previa del cambio */}
          {newOrder !== currentOrder && (
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
              <p className="text-sm text-amber-800">
                <span className="font-medium">Vista previa:</span><br />
                {newOrder < currentOrder ? (
                  <>Los productos del orden {newOrder} al {currentOrder - 1} subirán una posición.</>
                ) : (
                  <>Los productos del orden {currentOrder + 1} al {newOrder} bajarán una posición.</>
                )}
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
              disabled={isSubmitting || newOrder === currentOrder}
              className={`px-6 py-2 text-white rounded-lg transition-colors flex items-center space-x-2 ${
                isSubmitting || newOrder === currentOrder
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
                {isSubmitting ? "Actualizando..." : "Cambiar Orden"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const ProductOrderSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { showToast } = useToast();
  const [products, setProducts] = useState<ProductWithOrder[]>([]);
  const [originalProducts, setOriginalProducts] = useState<ProductWithOrder[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductWithOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
    
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      if (response.ok && response.data) {
        // Filtrar solo productos visibles y ordenarlos
        const visibleProducts = response.data
          .filter((product) => product.visible)
          .map((product, index) => ({
            id: product.id,
            titulo: product.titulo,
            descripcion: product.descripcion,
            tipo: product.tipo,
            visible: product.visible,
            imagenes: product.imagenes,
            orden: product.orden || index + 1, // Si no tiene orden, asignar basado en índice
          }))
          .sort((a, b) => a.orden - b.orden);

        setProducts(visibleProducts);
        setOriginalProducts([...visibleProducts]); // Copia para comparar cambios
        setHasChanges(false);
      }
    } catch (error) {
      console.error("Error al cargar productos:", error);
      showToast("Error al cargar los productos", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeOrder = (productId: string, newOrder: number) => {
    // Actualizar el orden localmente sin enviar al servidor
    const updatedProducts = [...products];
    const productIndex = updatedProducts.findIndex(p => p.id === productId);
    const product = updatedProducts[productIndex];
    const oldOrder = product.orden;

    // Remover el producto de su posición actual
    updatedProducts.splice(productIndex, 1);

    // Ajustar los órdenes de los productos afectados
    if (newOrder < oldOrder) {
      // Moviendo hacia arriba - incrementar orden de productos entre newOrder y oldOrder
      updatedProducts.forEach(p => {
        if (p.orden >= newOrder && p.orden < oldOrder) {
          p.orden += 1;
        }
      });
    } else {
      // Moviendo hacia abajo - decrementar orden de productos entre oldOrder y newOrder
      updatedProducts.forEach(p => {
        if (p.orden > oldOrder && p.orden <= newOrder) {
          p.orden -= 1;
        }
      });
    }

    // Actualizar el producto movido
    product.orden = newOrder;

    // Insertar el producto en su nueva posición
    updatedProducts.push(product);

    // Reordenar y actualizar estado
    const sortedProducts = updatedProducts.sort((a, b) => a.orden - b.orden);
    setProducts(sortedProducts);
    
    // Verificar si hay cambios
    checkForChanges(sortedProducts);
    
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const checkForChanges = (currentProducts: ProductWithOrder[]) => {
    const hasChanges = currentProducts.some((product, index) => 
      product.orden !== originalProducts[index]?.orden || 
      product.id !== originalProducts[index]?.id
    );
    setHasChanges(hasChanges);
  };

  const handleQuickMove = (productId: string, direction: 'up' | 'down') => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const currentOrder = product.orden;
    let newOrder;

    if (direction === 'up' && currentOrder > 1) {
      newOrder = currentOrder - 1;
    } else if (direction === 'down' && currentOrder < products.length) {
      newOrder = currentOrder + 1;
    } else {
      return; // No se puede mover
    }

    handleChangeOrder(productId, newOrder);
  };

  const handleSaveChanges = async () => {
    if (!hasChanges) {
      showToast("No hay cambios para guardar", "warning");
      return;
    }

    setUpdating(true);
    
    try {
      // Preparar array de actualizaciones
      const updates = products.map(product => ({
        id: product.id,
        orden: product.orden
      }));

      const response = await updateProductsOrder(updates);
      
      if (response.ok) {
        setOriginalProducts([...products]); // Actualizar la referencia original
        setHasChanges(false);
        showToast("Orden de productos actualizado exitosamente", "success");
        await AddHistorial("Se actualizó el orden de los productos");
      } else {
        showToast(response.msg || "Error al actualizar el orden", "error");
      }
    } catch (error) {
      console.error("Error al guardar cambios:", error);
      showToast("Error inesperado al guardar los cambios", "error");
    } finally {
      setUpdating(false);
    }
  };

  const handleDiscardChanges = () => {
    setProducts([...originalProducts]);
    setHasChanges(false);
    showToast("Cambios descartados", "info");
  };

  const openOrderModal = (product: ProductWithOrder) => {
    setSelectedProduct(product);
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
            Orden de Productos
          </h1>
          <p className="text-gray-600" style={{ fontSize: "14px" }}>
            Administra el orden en que aparecen los productos en el sitio web
            {hasChanges && (
              <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Cambios pendientes
              </span>
            )}
          </p>
        </div>
        <div className="flex space-x-3">
          {hasChanges && (
            <>
              <button
                onClick={handleDiscardChanges}
                disabled={updating}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Descartar</span>
              </button>
              <button
                onClick={handleSaveChanges}
                disabled={updating}
                className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors ${
                  updating
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                {updating && (
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
                  {updating ? "Guardando..." : "Guardar Cambios"}
                </span>
              </button>
            </>
          )}
          <button
            onClick={loadProducts}
            disabled={updating}
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Actualizar Lista</span>
          </button>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header de la tabla */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-gray-700">
              <div className="col-span-2 text-center">Orden</div>
              <div className="col-span-1">Imagen</div>
              <div className="col-span-4">Producto</div>
              <div className="col-span-2">Tipo</div>
              <div className="col-span-3 text-center">Acciones</div>
            </div>
          </div>

          {/* Contenido de la tabla */}
          <div className="divide-y divide-gray-200">
            {products.map((product) => (
              <div
                key={product.id}
                className={`px-6 py-4 hover:bg-gray-50 transition-colors ${
                  updating === true ? 'bg-blue-50' : ''
                }`}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Orden */}
                  <div className="col-span-2 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg ${
                      // Verificar si este producto ha cambiado de orden
                      originalProducts.find(op => op.id === product.id)?.orden !== product.orden
                        ? 'bg-amber-100 text-amber-800 ring-2 ring-amber-300'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {product.orden}
                    </div>
                    {originalProducts.find(op => op.id === product.id)?.orden !== product.orden && (
                      <div className="text-xs text-amber-600 mt-1">
                        Era: {originalProducts.find(op => op.id === product.id)?.orden}
                      </div>
                    )}
                  </div>

                  {/* Imagen */}
                  <div className="col-span-1">
                    {product.imagenes && product.imagenes.length > 0 ? (
                      <img
                        src={product.imagenes[0]}
                        alt={product.titulo}
                        className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Información del producto */}
                  <div className="col-span-4">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {product.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.descripcion}
                    </p>
                  </div>

                  {/* Tipo */}
                  <div className="col-span-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {product.tipo.titulo}
                    </span>
                  </div>

                  {/* Acciones */}
                  <div className="col-span-3 flex justify-center space-x-2">
                    {/* Mover arriba */}
                    <button
                      onClick={() => handleQuickMove(product.id, 'up')}
                      disabled={product.orden === 1 || updating}
                      className={`p-2 rounded-lg transition-colors ${
                        product.orden === 1 || updating
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-green-50 text-green-600 hover:bg-green-100'
                      }`}
                      title="Mover arriba"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 14l5-5 5 5" />
                      </svg>
                    </button>

                    {/* Mover abajo */}
                    <button
                      onClick={() => handleQuickMove(product.id, 'down')}
                      disabled={product.orden === products.length || updating}
                      className={`p-2 rounded-lg transition-colors ${
                        product.orden === products.length || updating
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-green-50 text-green-600 hover:bg-green-100'
                      }`}
                      title="Mover abajo"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 10l-5 5-5-5" />
                      </svg>
                    </button>

                    {/* Cambiar orden específico */}
                    <button
                      onClick={() => openOrderModal(product)}
                      disabled={updating}
                      className={`p-2 rounded-lg transition-colors ${
                        updating
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      }`}
                      title="Cambiar orden específico"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No hay productos visibles
          </h3>
          <p className="text-gray-500 mb-6">
            No se encontraron productos visibles para ordenar. Asegúrate de que haya productos marcados como visibles.
          </p>
        </div>
      )}

      {/* Modal de cambio de orden */}
      <OrderChangeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        currentOrder={selectedProduct?.orden || 1}
        maxOrder={products.length}
        onSave={handleChangeOrder}
      />
    </div>
  );
};