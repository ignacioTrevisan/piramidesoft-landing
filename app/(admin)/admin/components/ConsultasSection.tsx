"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { getConsultas, updateConsultaStatus, getConsultaStats } from "@/app/action/consultas";
import { Consulta, ConsultaStats } from "@/app/interfaces/consulta";

interface ConsultaModalProps {
  isOpen: boolean;
  onClose: () => void;
  consulta: Consulta | null;
  onStatusUpdate: (consultaId: string, status: 'PENDIENTE' | 'ATENDIDA') => void;
}

const ConsultaModal: React.FC<ConsultaModalProps> = ({ isOpen, onClose, consulta, onStatusUpdate }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Animación NO bloqueante: arranca desde scale 0.95 sin tocar opacity,
      // así si GSAP no dispara el modal sigue siendo visible.
      gsap.fromTo(
        modalRef.current,
        { scale: 0.95 },
        { scale: 1, duration: 0.2, ease: "power2.out", clearProps: "transform" }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleStatusChange = async (status: 'PENDIENTE' | 'ATENDIDA') => {
    if (consulta) {
      const response = await updateConsultaStatus({ id: consulta.id, status });
      if (response.ok) {
        onStatusUpdate(consulta.id, status);
        onClose();
      }
    }
  };

  if (!isOpen || !consulta || !mounted) return null;

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/60 flex items-start sm:items-center justify-center z-[1000] p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto my-auto shadow-2xl"
      >
        {/* Header sticky con cambio de estado siempre visible */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10 rounded-t-xl">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Detalle de Consulta
            </h2>
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Barra de estado / acciones SIEMPRE visible (no requiere scroll) */}
          <div className="px-4 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center gap-2 pt-3 sm:pt-0">
              <span className="text-sm text-gray-600">Estado actual:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                consulta.status === 'ATENDIDA'
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}>
                {consulta.status === 'ATENDIDA' ? 'Atendida' : 'Pendiente'}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleStatusChange('PENDIENTE')}
                disabled={consulta.status === 'PENDIENTE'}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  consulta.status === 'PENDIENTE'
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-yellow-500 text-white hover:bg-yellow-600'
                }`}
              >
                Marcar Pendiente
              </button>
              <button
                onClick={() => handleStatusChange('ATENDIDA')}
                disabled={consulta.status === 'ATENDIDA'}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  consulta.status === 'ATENDIDA'
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Marcar Atendida
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">

          {/* Información del cliente */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Información del Cliente</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-gray-600">Nombre:</span>
                <p className="text-gray-800">{consulta.nombre}</p>
              </div>
              <div>
                <span className="font-medium text-gray-600">Email:</span>
                <p className="text-gray-800">{consulta.email}</p>
              </div>
              <div>
                <span className="font-medium text-gray-600">Teléfono:</span>
                <p className="text-gray-800">{consulta.numero}</p>
              </div>
              <div>
                <span className="font-medium text-gray-600">Fecha:</span>
                <p className="text-gray-800">
                  {new Date(consulta.createdAt).toLocaleDateString('es-AR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Producto consultado */}
          {consulta.product && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Producto Consultado</h3>
              <p className="text-blue-700">{consulta.product.titulo}</p>
            </div>
          )}

          {/* Consulta */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Mensaje:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 whitespace-pre-wrap">{consulta.descripcion}</p>
            </div>
          </div>

          {/* Acciones de contacto */}
          <div className="flex space-x-3 pt-4 border-t border-gray-200">
            <button
              onClick={() => window.open(`mailto:${consulta.email}`, '_blank')}
              className="flex-1 bg-blue-50 text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Enviar Email</span>
            </button>
            
            <button
              onClick={() => window.open(`tel:${consulta.numero}`, '_blank')}
              className="flex-1 bg-green-50 text-green-600 px-4 py-3 rounded-lg hover:bg-green-100 transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Llamar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export const ConsultasSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [stats, setStats] = useState<ConsultaStats>({ total: 0, pendientes: 0, atendidas: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConsulta, setSelectedConsulta] = useState<Consulta | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'todas' | 'pendientes' | 'atendidas'>('todas');

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
    loadConsultas();
    loadStats();
  }, []);

  const loadConsultas = async () => {
    setLoading(true);
    const response = await getConsultas();
    if (response.ok && response.data) {
      setConsultas(response.data);
    }
    setLoading(false);
  };

  const loadStats = async () => {
    const response = await getConsultaStats();
    if (response.ok && response.data) {
      setStats(response.data);
    }
  };

  const handleStatusUpdate = (consultaId: string, status: 'PENDIENTE' | 'ATENDIDA') => {
    setConsultas(prev => prev.map(c => 
      c.id === consultaId ? { ...c, status } : c
    ));
    loadStats(); // Recargar estadísticas
  };

  const openModal = (consulta: Consulta) => {
    setSelectedConsulta(consulta);
    setIsModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredConsultas = consultas.filter(consulta => {
    switch (filter) {
      case 'pendientes':
        return consulta.status === 'PENDIENTE';
      case 'atendidas':
        return consulta.status === 'ATENDIDA';
      default:
        return true;
    }
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div>
          <h1 ref={titleRef} className="text-2xl font-bold text-gray-800 mb-2">
            Gestión de Consultas
          </h1>
          <p className="text-gray-600">
            Administra las consultas recibidas de clientes potenciales
          </p>
        </div>
        
        {/* Stats */}
        <div className="flex space-x-4">
          <div className="bg-blue-100 px-4 py-3 rounded-lg text-center min-w-[100px]">
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            <div className="text-sm text-blue-800">Total</div>
          </div>
          <div className="bg-yellow-100 px-4 py-3 rounded-lg text-center min-w-[100px]">
            <div className="text-2xl font-bold text-yellow-600">{stats.pendientes}</div>
            <div className="text-sm text-yellow-800">Pendientes</div>
          </div>
          <div className="bg-green-100 px-4 py-3 rounded-lg text-center min-w-[100px]">
            <div className="text-2xl font-bold text-green-600">{stats.atendidas}</div>
            <div className="text-sm text-green-800">Atendidas</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('todas')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'todas' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Todas ({stats.total})
        </button>
        <button
          onClick={() => setFilter('pendientes')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'pendientes' 
              ? 'bg-yellow-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Pendientes ({stats.pendientes})
        </button>
        <button
          onClick={() => setFilter('atendidas')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'atendidas' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Atendidas ({stats.atendidas})
        </button>
      </div>

      {/* Consultas List */}
      <div className="space-y-4">
        {filteredConsultas.map((consulta) => (
          <div
            key={consulta.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      consulta.status === 'ATENDIDA' 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {consulta.status === 'ATENDIDA' ? "Atendida" : "Pendiente"}
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatDate(consulta.createdAt)}
                    </span>
                    {consulta.product && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        📦 {consulta.product.titulo}
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Nombre:</span>
                      <p className="text-gray-800 font-medium">{consulta.nombre}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Email:</span>
                      <p className="text-gray-800">{consulta.email}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Teléfono:</span>
                      <p className="text-gray-800">{consulta.numero}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium text-gray-600">Consulta:</span>
                <p className="text-gray-800 mt-1 leading-relaxed line-clamp-3">
                  {consulta.descripcion}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                <button
                  onClick={() => openModal(consulta)}
                  className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Ver Detalle</span>
                </button>
                
                <button
                  onClick={() => window.open(`mailto:${consulta.email}`, '_blank')}
                  className="bg-gray-50 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </button>

                <button
                  onClick={() => window.open(`tel:${consulta.numero}`, '_blank')}
                  className="bg-gray-50 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Llamar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredConsultas.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No hay consultas {filter !== 'todas' ? filter : ''}
          </h3>
          <p className="text-gray-500">
            {filter === 'pendientes' 
              ? 'Todas las consultas han sido atendidas.' 
              : filter === 'atendidas'
              ? 'No hay consultas atendidas aún.'
              : 'No se han recibido consultas todavía.'
            }
          </p>
        </div>
      )}

      {/* Modal */}
      <ConsultaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        consulta={selectedConsulta}
        onStatusUpdate={handleStatusUpdate}
      />
    </div>
  );
};
