"use client";
import { useEffect, useState } from "react";
import { getStats } from "@/app/action/stats/getStats";
import { RecentActivity } from "@/app/components/RecentActivity";
import { useAdmin } from "../context/AdminContext";

interface StatsData {
  productos: string;
  blogs: string;
  consultas: string;
  visitas: string;
}

interface PercentageChanges {
  productos: number;
  blogs: number;
  consultas: number;
  visitas: number;
}

export const Dashboard = () => {
  const { setActiveSection, triggerCreateProduct, triggerCreateBlog } = useAdmin();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<StatsData>({
    productos: "0",
    blogs: "0",
    consultas: "0",
    visitas: "0",
  });
  const [percentageChanges, setPercentageChanges] = useState<PercentageChanges>(
    {
      productos: 0,
      blogs: 0,
      consultas: 0,
      visitas: 0,
    }
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchStats = async () => {
      try {
        setLoading(true);

        // Usar una fecha fija para evitar diferencias de hydration
        const fixedDate = new Date();
        const currentMonth = fixedDate.getMonth() + 1;
        const currentYear = fixedDate.getFullYear();

        let previousMonth = currentMonth - 1;
        let previousYear = currentYear;

        if (previousMonth === 0) {
          previousMonth = 12;
          previousYear = currentYear - 1;
        }

        const currentMonthString = String(currentMonth).padStart(2, "0");
        const previousMonthString = String(previousMonth).padStart(2, "0");

        const statsData = await getStats(
          `${currentMonthString}/${currentYear}`,
          `${previousMonthString}/${previousYear}`
        );

        if (statsData.ok && statsData.data) {
          const calculatePercentageChange = (
            current: number,
            previous: number
          ) => {
            if (previous === 0) {
              return current > 0 ? current * 100 : 0;
            }
            return ((current - previous) / previous) * 100;
          };

          if (statsData.data.length >= 2) {
            const currentMonthData = statsData.data[0];
            const previousMonthData = statsData.data[1];

            const currentProducts = currentMonthData.cantidadDeProductos;
            const previousProducts = previousMonthData.cantidadDeProductos;
            const currentBlogs = currentMonthData.cantidadDeBlogs;
            const previousBlogs = previousMonthData.cantidadDeBlogs;
            const currentConsultas =
              currentMonthData.cantidadDeConsultas?.length || 0;
            const previousConsultas =
              previousMonthData.cantidadDeConsultas?.length || 0;
            const currentVisitas = currentMonthData.userViews?.length || 0;
            const previousVisitas = previousMonthData.userViews?.length || 0;

            setStats({
              productos: currentProducts.toString(),
              blogs: currentBlogs.toString(),
              consultas: currentConsultas.toString(),
              visitas: currentVisitas.toString(),
            });

            setPercentageChanges({
              productos: calculatePercentageChange(
                currentProducts,
                previousProducts
              ),
              blogs: calculatePercentageChange(currentBlogs, previousBlogs),
              consultas: calculatePercentageChange(
                currentConsultas,
                previousConsultas
              ),
              visitas: calculatePercentageChange(
                currentVisitas,
                previousVisitas
              ),
            });
          } else if (statsData.data.length === 1) {
            const currentMonthData = statsData.data[0];
            setStats({
              productos: currentMonthData.cantidadDeProductos.toString(),
              blogs: currentMonthData.cantidadDeBlogs.toString(),
              consultas: (
                currentMonthData.cantidadDeConsultas?.length || 0
              ).toString(),
              visitas: (currentMonthData.userViews?.length || 0).toString(),
            });
            setPercentageChanges({
              productos: 0,
              blogs: 0,
              consultas: 0,
              visitas: 0,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [mounted]);

  const formatPercentage = (percent: number) => {
    const sign = percent > 0 ? "+" : "";
    return `${sign}${percent.toFixed(1)}%`;
  };

  const getPercentageColor = (percent: number) => {
    if (percent > 0) return "text-green-600";
    if (percent < 0) return "text-red-600";
    return "text-gray-600";
  };

  const getPercentageIcon = (percent: number) => {
    if (percent > 0) return "↗";
    if (percent < 0) return "↘";
    return "→";
  };

  // Funciones para manejar las acciones rápidas
  const handleAddProduct = () => {
    triggerCreateProduct();
  };

  const handleCreateBlog = () => {
    triggerCreateBlog();
  };

  const handleViewConsultas = () => {
    setActiveSection('consultas');
  };

  // No renderizar nada hasta que esté montado
  if (!mounted) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const statsCards = [
    {
      title: "Total Productos",
      value: stats.productos,
      color: "bg-blue-500",
      percentage: percentageChanges.productos,
      icon: "📦",
    },
    {
      title: "Nuevos visitantes este mes",
      value: stats.visitas,
      color: "bg-green-500",
      percentage: percentageChanges.visitas,
      icon: "👥",
    },
    {
      title: "Total Blogs",
      value: stats.blogs,
      color: "bg-purple-500",
      percentage: percentageChanges.blogs,
      icon: "📝",
    },
    {
      title: "Consultas Pendientes",
      value: stats.consultas,
      color: "bg-orange-500",
      percentage: percentageChanges.consultas,
      icon: "💬",
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      {/* Debug Panel Temporal */}

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Bienvenido al panel administrativo de Piramide Soft
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1 truncate">
                  {stat.title}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  ↗ {stat.value} este mes
                </p>
                {stat.percentage !== 0 && (
                  <p
                    className={`text-xs sm:text-sm font-medium mt-1 ${getPercentageColor(
                      stat.percentage
                    )}`}
                  >
                    {getPercentageIcon(stat.percentage)}{" "}
                    {formatPercentage(stat.percentage)} vs mes anterior
                  </p>
                )}
              </div>
              <div
                className={`p-2 sm:p-3 rounded-full ${stat.color} text-white text-lg sm:text-2xl flex-shrink-0 ml-2`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
          Acciones Rápidas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <button 
            onClick={handleAddProduct}
            className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors hover:shadow-md"
          >
            <span className="text-blue-600 text-lg sm:text-xl">➕</span>
            <span className="font-medium text-blue-600 text-sm sm:text-base">
              Agregar Producto
            </span>
          </button>
          <button 
            onClick={handleCreateBlog}
            className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors hover:shadow-md"
          >
            <span className="text-purple-600 text-lg sm:text-xl">✏️</span>
            <span className="font-medium text-purple-600 text-sm sm:text-base">
              Crear Blog
            </span>
          </button>
          <button 
            onClick={handleViewConsultas}
            className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors sm:col-span-2 lg:col-span-1 hover:shadow-md"
          >
            <span className="text-orange-600 text-lg sm:text-xl">👁️</span>
            <span className="font-medium text-orange-600 text-sm sm:text-base">
              Ver Consultas
            </span>
          </button>
        </div>
      </div>

      {/* Recent Activity - Historial Real */}
      <RecentActivity limit={5} />
    </div>
  );
};
