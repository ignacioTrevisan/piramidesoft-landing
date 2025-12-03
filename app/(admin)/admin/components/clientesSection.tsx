"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useToast } from "@/app/components/ToastProvider";
import { AddHistorial } from "@/app/action/historial/addHistorial";
import { categoryInterface } from "@/app/interfaces/categorias";
import { GetCategorias } from "@/app/action/categorias/getCategorias";
import { GetAllUsers } from "@/app/action/session/getAllUser";
import { UserInterface } from "@/app/interfaces/userInterface";
import { GetAllUserCategory } from "@/app/action/UserCategory/getAllUserCategory";
import { UserCategoryInterface } from "@/app/interfaces/userCategory";

// Interfaces
interface User {
  id: string;
  name: string;
  email: string;
  cuit?: string | null;
  phone?: string | null;
  fechaNacimiento?: Date | null;
}

interface CategoryClient {
  id: string;
  name: string;
  value: number;
}

interface UserWithCategory extends User {
  userCategory?: {
    id: string;
    categoryClient: CategoryClient;
  } | null;
}

interface AssignCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserWithCategory | null;
  categories: categoryInterface[];
  onSave: (userId: string, categoryId: string | null) => void;
}

// Modal para asignar/modificar categoría
const AssignCategoryModal: React.FC<AssignCategoryModalProps> = ({
  isOpen,
  onClose,
  user,
  categories,
  onSave,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user?.userCategory?.categoryClient) {
      setSelectedCategoryId(user.userCategory.categoryClient.id);
    } else {
      setSelectedCategoryId("");
    }
  }, [user]);

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
    if (!user || isSubmitting) return;

    setIsSubmitting(true);
    try {
      onSave(user.id, selectedCategoryId || null);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !user) return null;

  return (
    <div className="modal-overlay admin-container">
      <div
        ref={modalRef}
        className="admin-modal modal-content bg-white rounded-xl max-w-md w-full"
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {user.userCategory
              ? "Modificar Categoría de Cliente"
              : "Asignar Categoría de Cliente"}
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Cliente: <span className="font-medium">{user.name}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoría de Cliente
            </label>
            <select
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Seleccione una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name} - ${category.value.toFixed(2)}/mes
                </option>
              ))}
            </select>
          </div>

          {user.userCategory && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-medium text-blue-800 mb-1">
                Categoría Actual
              </p>
              <p className="text-sm text-blue-700">
                {user.userCategory.categoryClient.name} - $
                {user.userCategory.categoryClient.value.toFixed(2)}/mes
              </p>
            </div>
          )}

          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !selectedCategoryId}
              className={`px-6 py-2 text-white rounded-lg transition-colors flex items-center space-x-2 ${
                isSubmitting || !selectedCategoryId
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
                  ? "Guardando..."
                  : user.userCategory
                  ? "Actualizar"
                  : "Asignar"}{" "}
                Categoría
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Componente principal
export const ClientesSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { showToast } = useToast();
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [categories, setCategories] = useState<categoryInterface[]>([]);
  const [userCategory, setUserCategory] = useState<UserCategoryInterface[]>([]); //Tabla intermedia
  const [tablaIntermediaEnLimpio, setTablaIntermediaEnLimpio] = useState<
    { id: string; categoria: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserWithCategory | null>(
    null
  );
  const [filterCategory, setFilterCategory] = useState<string>("all");

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }

    loadData();
  }, []);
  useEffect(() => {
    if (users.length > 0 && categories.length > 0 && userCategory.length > 0) {
      cargarTablaIntermediaEnLimpio();
    }
  }, [users, categories, userCategory]);

  const cargarTablaIntermediaEnLimpio = () => {
    const tablaLimpia = users.map((u) => {
      const userCategorie = userCategory.find((uc) => uc.userId === u.id);
      const categoria = userCategorie
        ? categories.find((c) => c.id === userCategorie.categoryClientId)
            ?.name || "Sin categoria"
        : "Sin categoria";

      return {
        id: u.id,
        categoria: categoria,
      };
    });

    setTablaIntermediaEnLimpio(tablaLimpia);
    console.log({ tablaIntermediaEnLimpio: tablaLimpia });
  };
  const loadData = async () => {
    try {
      const dataCategorias = await GetCategorias();
      const dataUsers = await GetAllUsers();

      const dataUserCategory = await GetAllUserCategory();
      if (
        dataCategorias.data &&
        dataCategorias.ok &&
        dataUsers.data &&
        dataUserCategory.data
      ) {
        setUsers(dataUsers.data);
        setCategories(dataCategorias.data);
        setUserCategory(dataUserCategory.data);
      }
    } catch (error) {
      console.error("Error al cargar datos:", error);
      showToast("Error al cargar los datos", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleAssignCategory = (user: UserWithCategory) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSaveCategory = async (
    userId: string,
    categoryId: string | null
  ) => {
    try {
      // Aquí deberías llamar a tu función de servidor para asignar/actualizar la categoría
      // const response = await AssignUserCategory(userId, categoryId);

      const user = users.find((u) => u.id === userId);
      const category = categories.find((c) => c.id === categoryId);

      if (user) {
        showToast(
          `Categoría ${category ? `"${category.name}"` : ""} asignada a ${
            user.name
          }`,
          "success"
        );
        await AddHistorial(
          `Se asignó la categoría "${category?.name}" al cliente "${user.name}"`
        );
      }

      // Recargar datos
      await loadData();
    } catch (error) {
      console.error("Error al asignar categoría:", error);
      showToast("Error al asignar la categoría", "error");
    }
  };

  const handleRemoveCategory = async (userId: string) => {
    const user = users.find((u) => u.id === userId);
    if (!user) return;

    if (
      confirm(
        `¿Estás seguro de que deseas eliminar la categoría del cliente "${user.name}"?`
      )
    ) {
      try {
        // Aquí deberías llamar a tu función de servidor para eliminar la categoría
        // await RemoveUserCategory(userId);

        showToast(`Categoría eliminada del cliente ${user.name}`, "success");
        await AddHistorial(
          `Se eliminó la categoría del cliente "${user.name}"`
        );

        await loadData();
      } catch (error) {
        console.error("Error al eliminar categoría:", error);
        showToast("Error al eliminar la categoría", "error");
      }
    }
  };

  const handleEmitTicket = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    showToast(
      `Emitir ticket para ${user?.name} - Funcionalidad pendiente`,
      "info"
    );
  };

  //   const handleEmitAllTickets = () => {
  //     const usersWithCategory = users.filter((u) => u.userCategory);
  //     if (usersWithCategory.length === 0) {
  //       showToast("No hay clientes con categoría asignada", "error");
  //       return;
  //     }

  //     if (
  //       confirm(
  //         `¿Deseas emitir tickets para todos los clientes con categoría asignada? (${usersWithCategory.length} clientes)`
  //       )
  //     ) {
  //       showToast(
  //         `Emitiendo ${usersWithCategory.length} tickets - Funcionalidad pendiente`,
  //         "info"
  //       );
  //     }
  //   };

  const filteredUsers = users.filter((user) => {
    if (filterCategory === "all") return true;

    const userInTable = tablaIntermediaEnLimpio.find((ti) => ti.id === user.id);

    if (filterCategory === "sin-categoria") {
      return userInTable?.categoria === "Sin categoria";
    }

    // Buscar el nombre de la categoría seleccionada
    const selectedCategory = categories.find((c) => c.id === filterCategory);
    return userInTable?.categoria === selectedCategory?.name;
  });

  const usersWithCategory = tablaIntermediaEnLimpio.filter(
    (ti) => ti.categoria !== "Sin categoria"
  );
  const usersWithoutCategory = tablaIntermediaEnLimpio.filter(
    (ti) => ti.categoria === "Sin categoria"
  );

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
      <div className="flex justify-between items-start">
        <div>
          <h1
            ref={titleRef}
            className="text-2xl font-bold text-gray-800 mb-2"
            style={{ fontSize: "24px" }}
          >
            Gestión de Clientes y Categorías
          </h1>
          <p className="text-gray-600" style={{ fontSize: "14px" }}>
            Administra las categorías asignadas a cada cliente
          </p>
        </div>
        <button
          onClick={() => console.log("Aun no implementada")}
          disabled={usersWithCategory.length === 0}
          className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors ${
            usersWithCategory.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>Emitir Todos los Tickets ({usersWithCategory.length})</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 font-medium">
                Total Clientes
              </p>
              <p className="text-3xl font-bold text-blue-900 mt-2">
                {users.length}
              </p>
            </div>
            <div className="bg-blue-200 p-3 rounded-full">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 font-medium">
                Con Categoría
              </p>
              <p className="text-3xl font-bold text-green-900 mt-2">
                {usersWithCategory.length}
              </p>
            </div>
            <div className="bg-green-200 p-3 rounded-full">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 font-medium">
                Sin Categoría
              </p>
              <p className="text-3xl font-bold text-orange-900 mt-2">
                {usersWithoutCategory.length}
              </p>
            </div>
            <div className="bg-orange-200 p-3 rounded-full">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">
            Filtrar por:
          </label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos los clientes</option>
            <option value="sin-categoria">Sin categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-500">
            ({filteredUsers.length}{" "}
            {filteredUsers.length === 1 ? "cliente" : "clientes"})
          </span>
        </div>
      </div>

      {/* Clientes List */}
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="admin-card hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold text-gray-800"
                        style={{ fontSize: "18px" }}
                      >
                        {user.name}
                      </h3>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {user.cuit && (
                      <div className="text-sm">
                        <span className="text-gray-600">CUIT:</span>
                        <span className="ml-2 font-mono text-gray-800">
                          {user.cuit}
                        </span>
                      </div>
                    )}
                    {user.phone && (
                      <div className="text-sm">
                        <span className="text-gray-600">Teléfono:</span>
                        <span className="ml-2 font-mono text-gray-800">
                          {user.phone}
                        </span>
                      </div>
                    )}
                  </div>

                  {tablaIntermediaEnLimpio.filter(
                    (ti) => ti.id === user.id
                  )[0] ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-green-800 mb-1">
                            Categoría Asignada
                          </p>
                          <p className="text-lg font-semibold text-green-900">
                            {
                              tablaIntermediaEnLimpio.filter(
                                (ti) => ti.id === user.id
                              )[0].categoria
                            }
                          </p>
                          <p className="text-sm text-green-700 mt-1">
                            {" "}
                            {categories.filter(
                              (c) =>
                                c.name ===
                                tablaIntermediaEnLimpio.filter(
                                  (ti) => ti.id === user.id
                                )[0].categoria
                            )[0]?.value ?? "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <p className="text-sm font-medium text-orange-800">
                        Sin categoría asignada
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-2 ml-6">
                  {tablaIntermediaEnLimpio.find((til) => til.id === user.id)
                    ?.categoria !== "Sin categoria" ? (
                    <>
                      <button
                        onClick={() => handleEmitTicket(user.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 whitespace-nowrap"
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
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span>Emitir Ticket</span>
                      </button>
                      <button
                        onClick={() => handleAssignCategory(user)}
                        className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center space-x-2 whitespace-nowrap"
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
                        <span>Modificar</span>
                      </button>
                      <button
                        onClick={() => handleRemoveCategory(user.id)}
                        className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors flex items-center space-x-2 whitespace-nowrap"
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
                        <span>Quitar</span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleAssignCategory(user)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 whitespace-nowrap"
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
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <span>Asignar Categoría</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
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
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No se encontraron clientes
          </h3>
          <p className="text-gray-500">
            {filterCategory === "all"
              ? "No hay clientes registrados en el sistema."
              : "No hay clientes que coincidan con el filtro seleccionado."}
          </p>
        </div>
      )}

      {/* Modal */}
      <AssignCategoryModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}
        user={selectedUser}
        categories={categories}
        onSave={handleSaveCategory}
      />
    </div>
  );
};
