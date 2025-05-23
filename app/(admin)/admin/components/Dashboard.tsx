"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { getStats } from "@/app/action/stats/getStats";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  trend?: string;
  percentage?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  color,
  trend,
  percentage,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);

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

  return (
    <div
      ref={cardRef}
      className="stats-card admin-card hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="title">{title}</p>
          <p className="value">{value}</p>
          {trend && <p className="trend">↗ {trend}</p>}
          {percentage !== undefined && (
            <p
              className={`text-sm font-medium ${getPercentageColor(
                percentage
              )}`}
            >
              {getPercentageIcon(percentage)} {formatPercentage(percentage)} vs
              mes anterior
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>{icon}</div>
      </div>
    </div>
  );
};

export const Dashboard = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [stats, setStats] = useState({
    productos: "0",
    blogs: "0",
    consultas: "0",
    visitas: "0",
  });

  const [percentageChanges, setPercentageChanges] = useState({
    productos: 0,
    blogs: 0,
    consultas: 0,
    visitas: 0,
  });

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }

    const fetchStats = async () => {
      const now = new Date();
      const month1 = now.getMonth() + 1;
      const monthString1 = String(month1).padStart(2, "0");
      const month2 = now.getMonth();
      const monthString2 = String(month2).padStart(2, "0");
      const year = now.getFullYear();

      const statsData = await getStats(
        `${monthString1}/${year}`,
        `${monthString2}/${year}`
      );

      if (statsData.data && statsData.data.length >= 2) {
        const currentMonth = statsData.data[0]; // Mes actual
        const previousMonth = statsData.data[1]; // Mes anterior

        // Función para calcular el porcentaje de cambio
        const calculatePercentageChange = (
          current: number,
          previous: number
        ) => {
          if (previous === 0) {
            return current > 0 ? 100 : 0;
          }
          return ((current - previous) / previous) * 100;
        };

        // Extraer valores numéricos
        const currentProducts = currentMonth.cantidadDeProductos;
        const previousProducts = previousMonth.cantidadDeProductos;

        const currentBlogs = currentMonth.cantidadDeBlogs;
        const previousBlogs = previousMonth.cantidadDeBlogs;

        const currentConsultas = currentMonth.cantidadDeConsultas.length;
        const previousConsultas = previousMonth.cantidadDeConsultas.length;

        const currentVisitas = currentMonth.userViews.length;
        const previousVisitas = previousMonth.userViews.length;

        // Calcular porcentajes de cambio
        const productosChange = calculatePercentageChange(
          currentProducts,
          previousProducts
        );
        const blogsChange = calculatePercentageChange(
          currentBlogs,
          previousBlogs
        );
        const consultasChange = calculatePercentageChange(
          currentConsultas,
          previousConsultas
        );
        const visitasChange = calculatePercentageChange(
          currentVisitas,
          previousVisitas
        );

        // Actualizar estados
        setStats({
          productos: currentProducts.toString(),
          blogs: currentBlogs.toString(),
          consultas: currentConsultas.toString(),
          visitas: currentVisitas.toString(),
        });

        setPercentageChanges({
          productos: productosChange,
          blogs: blogsChange,
          consultas: consultasChange,
          visitas: visitasChange,
        });
      } else if (statsData.data && statsData.data.length === 1) {
        // Solo hay datos del mes actual
        const currentMonth = statsData.data[0];

        setStats({
          productos: currentMonth.cantidadDeProductos.toString(),
          blogs: currentMonth.cantidadDeBlogs.toString(),
          consultas: currentMonth.cantidadDeConsultas.length.toString(),
          visitas: currentMonth.userViews.length.toString(),
        });

        // Sin datos del mes anterior, no se pueden calcular porcentajes
        setPercentageChanges({
          productos: 0,
          blogs: 0,
          consultas: 0,
          visitas: 0,
        });
      }
    };

    fetchStats();
  }, []);

  const statsData = [
    {
      title: "Total Productos",
      value: stats.productos,
      icon: (
        <svg
          className="w-6 h-6 text-white"
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
      ),
      color: "bg-blue-500",
      trend: `${stats.productos} este mes`,
      percentage: percentageChanges.productos,
    },
    {
      title: "Nuevos visitantes este mes",
      value: stats.visitas,
      icon: (
        <svg
          className="w-6 h-6 text-white"
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
      ),
      color: "bg-green-500",
      trend: `${stats.visitas} este mes`,
      percentage: percentageChanges.visitas,
    },
    {
      title: "Total Blogs",
      value: stats.blogs,
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
      color: "bg-purple-500",
      trend: `${stats.blogs} este mes`,
      percentage: percentageChanges.blogs,
    },
    {
      title: "Consultas Pendientes",
      value: stats.consultas,
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      color: "bg-orange-500",
      trend: `${stats.consultas} este mes`,
      percentage: percentageChanges.consultas,
    },
  ];

  return (
    <div className="space-y-6" style={{ fontSize: "14px" }}>
      {/* Header */}
      <div className="mb-8">
        <h1
          ref={titleRef}
          className="text-2xl font-bold text-gray-800 mb-2"
          style={{ fontSize: "24px" }}
        >
          Dashboard
        </h1>
        <p className="text-gray-600" style={{ fontSize: "14px" }}>
          Bienvenido al panel administrativo de Piramide Soft
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Acciones Rápidas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <svg
              className="w-5 h-5 text-blue-600"
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
            <span className="font-medium text-blue-600">Agregar Producto</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
            <svg
              className="w-5 h-5 text-purple-600"
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
            <span className="font-medium text-purple-600">Crear Blog</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
            <svg
              className="w-5 h-5 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="font-medium text-orange-600">Ver Consultas</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Actividad Reciente
        </h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">
              Nuevo producto agregado: "Sistema POS"
            </span>
            <span className="text-sm text-gray-500 ml-auto">Hace 2 horas</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">
              Blog publicado: "Beneficios de la digitalización"
            </span>
            <span className="text-sm text-gray-500 ml-auto">Hace 1 día</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700">Nueva consulta recibida</span>
            <span className="text-sm text-gray-500 ml-auto">Hace 2 días</span>
          </div>
        </div>
      </div>
    </div>
  );
};
