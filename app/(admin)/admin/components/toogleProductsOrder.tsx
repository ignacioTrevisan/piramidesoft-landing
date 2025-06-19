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

interface DragState {
  isDragging: boolean;
  draggedId: string | null;
  draggedIndex: number | null;
  dragOverIndex: number | null;
}

export const ProductOrderSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { showToast } = useToast();
  const [products, setProducts] = useState<ProductWithOrder[]>([]);
  const [originalProducts, setOriginalProducts] = useState<ProductWithOrder[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    draggedId: null,
    draggedIndex: null,
    dragOverIndex: null,
  });

  // Referencias para el auto-scroll
  const autoScrollRef = useRef<number | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }

    loadProducts();

    // Cleanup del auto-scroll al desmontar
    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
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

  const checkForChanges = (currentProducts: ProductWithOrder[]) => {
    const hasChanges = currentProducts.some(
      (product, index) => product.id !== originalProducts[index]?.id
    );
    setHasChanges(hasChanges);
  };

  const handleSaveChanges = async () => {
    if (!hasChanges) {
      showToast("No hay cambios para guardar", "warning");
      return;
    }

    setUpdating(true);

    try {
      // Preparar array de actualizaciones con nuevo orden
      const updates = products.map((product, index) => ({
        id: product.id,
        orden: index + 1, // El orden es basado en la posición en el array
      }));

      const response = await updateProductsOrder(updates);

      if (response.ok) {
        // Actualizar el orden en los productos
        const updatedProducts = products.map((product, index) => ({
          ...product,
          orden: index + 1,
        }));

        setProducts(updatedProducts);
        setOriginalProducts([...updatedProducts]); // Actualizar la referencia original
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
    setDragState({
      isDragging: false,
      draggedId: null,
      draggedIndex: null,
      dragOverIndex: null,
    });
    showToast("Cambios descartados", "info");
  };

  // Drag and Drop handlers
  const handleDragStart = (
    e: React.DragEvent,
    productId: string,
    index: number
  ) => {
    setDragState({
      isDragging: true,
      draggedId: productId,
      draggedIndex: index,
      dragOverIndex: null,
    });

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", "");

    // Agregar clase visual al elemento arrastrado
    const target = e.target as HTMLElement;
    target.style.opacity = "0.5";
  };

  const handleDragEnd = (e: React.DragEvent) => {
    const target = e.target as HTMLElement;
    target.style.opacity = "1";

    setDragState({
      isDragging: false,
      draggedId: null,
      draggedIndex: null,
      dragOverIndex: null,
    });
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    if (dragState.draggedIndex !== null && dragState.draggedIndex !== index) {
      setDragState((prev) => ({
        ...prev,
        dragOverIndex: index,
      }));
    }
  };

  const handleDragLeave = () => {
    setDragState((prev) => ({
      ...prev,
      dragOverIndex: null,
    }));
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();

    const { draggedIndex } = dragState;

    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDragState({
        isDragging: false,
        draggedId: null,
        draggedIndex: null,
        dragOverIndex: null,
      });
      return;
    }

    // Crear nueva lista reordenada
    const newProducts = [...products];
    const draggedProduct = newProducts[draggedIndex];

    // Remover el producto de su posición original
    newProducts.splice(draggedIndex, 1);

    // Insertar en la nueva posición
    newProducts.splice(dropIndex, 0, draggedProduct);

    setProducts(newProducts);
    checkForChanges(newProducts);

    setDragState({
      isDragging: false,
      draggedId: null,
      draggedIndex: null,
      dragOverIndex: null,
    });
  };

  // Organizar productos en filas de 3 columnas
  const organizeInRows = (products: ProductWithOrder[]) => {
    const rows = [];
    for (let i = 0; i < products.length; i += 3) {
      rows.push(products.slice(i, i + 3));
    }
    return rows;
  };

  const productRows = organizeInRows(products);

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
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div>
          <h1
            ref={titleRef}
            className="text-2xl font-bold text-gray-800 mb-2"
            style={{ fontSize: "24px" }}
          >
            Orden de Productos
          </h1>
          <p className="text-gray-600" style={{ fontSize: "14px" }}>
            Arrastra las tarjetas para reordenar los productos
            {hasChanges && (
              <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Cambios pendientes
              </span>
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {hasChanges && (
            <>
              <button
                onClick={handleDiscardChanges}
                disabled={updating}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
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
                <span>{updating ? "Guardando..." : "Guardar Orden"}</span>
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

      {/* Instrucciones */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <svg
            className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <h3 className="text-sm font-medium text-blue-800 mb-1">
              ¿Cómo funciona?
            </h3>
            <span className="text-sm text-blue-700">
              Arrastra las tarjetas hacia arriba o hacia abajo para cambiar el
              orden. Los productos se mostrarán en tu sitio web en el orden que
              establezcas aquí. Recuerda hacer clic en &quot;Guardar Orden&quot;
              para aplicar los cambios.
            </span>
          </div>
        </div>
      </div>

      {/* Tabla de productos */}
      {products.length > 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Filas de productos */}
          <div className="divide-y divide-gray-200">
            {productRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200"
              >
                {row.map((product, colIndex) => {
                  const globalIndex = rowIndex * 3 + colIndex;
                  return (
                    <div
                      key={product.id}
                      draggable={!updating}
                      onDragStart={(e) =>
                        handleDragStart(e, product.id, globalIndex)
                      }
                      onDragEnd={handleDragEnd}
                      onDragOver={(e) => handleDragOver(e, globalIndex)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, globalIndex)}
                      className={`
                        p-6 transition-all duration-200 cursor-move
                        ${
                          dragState.dragOverIndex === globalIndex &&
                          dragState.draggedIndex !== globalIndex
                            ? "bg-blue-50 border-blue-400"
                            : dragState.isDragging &&
                              dragState.draggedIndex === globalIndex
                            ? "bg-gray-50"
                            : "hover:bg-gray-50"
                        }
                        ${updating ? "cursor-not-allowed opacity-60" : ""}
                      `}
                    >
                      <div className="space-y-4">
                        {/* Header con orden y drag handle */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm">
                              {globalIndex + 1}
                            </div>
                            {originalProducts.findIndex(
                              (op) => op.id === product.id
                            ) !== globalIndex && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                <svg
                                  className="w-3 h-3 mr-1"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                Movido
                              </span>
                            )}
                          </div>
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </div>

                        {/* Imagen del producto */}
                        <div className="flex justify-center">
                          {product.imagenes && product.imagenes.length > 0 ? (
                            <img
                              src={product.imagenes[0]}
                              alt={product.titulo}
                              className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover border border-gray-200"
                              draggable={false}
                            />
                          ) : (
                            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-8 h-8 text-gray-400"
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
                        <div className="text-center space-y-2">
                          <h3 className="font-semibold text-gray-800 text-sm lg:text-base line-clamp-2">
                            {product.titulo}
                          </h3>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {product.tipo.titulo}
                          </span>
                          <p className="text-xs lg:text-sm text-gray-600 line-clamp-3">
                            {product.descripcion}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Rellenar celdas vacías en la última fila */}
                {row.length < 3 && (
                  <>
                    {Array.from({ length: 3 - row.length }).map(
                      (_, emptyIndex) => (
                        <div
                          key={`empty-${rowIndex}-${emptyIndex}`}
                          className="hidden lg:block p-6"
                        >
                          <div className="h-full flex items-center justify-center text-gray-400">
                            <div className="text-center">
                              <svg
                                className="w-8 h-8 mx-auto mb-2 opacity-50"
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
                              <p className="text-sm">Celda vacía</p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </>
                )}
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
            No se encontraron productos visibles para ordenar. Asegúrate de que
            haya productos marcados como visibles.
          </p>
        </div>
      )}
    </div>
  );
};
