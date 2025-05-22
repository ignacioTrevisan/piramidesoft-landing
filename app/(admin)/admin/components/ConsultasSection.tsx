"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Consulta {
  id: string;
  descripcion: string;
  email: string;
  numero: string;
  createdAt: string;
  atendida?: boolean;
  respuesta?: string;
}

interface ConsultaModalProps {
  isOpen: boolean;
  onClose: () => void;
  consulta: Consulta | null;
  onResponder: (consultaId: string, respuesta: string) => void;
}

const ConsultaModal: React.FC<ConsultaModalProps> = ({ isOpen, onClose, consulta, onResponder }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {
    if (consulta) {
      setRespuesta(consulta.respuesta || "");
    }
  }, [consulta]);

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
    if (consulta && respuesta.trim()) {
      onResponder(consulta.id, respuesta);
      onClose();
    }
  };

  if (!isOpen || !consulta) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Responder Consulta
          </h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Información de la consulta */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Información de la Consulta</h3>
            <div className="space-y-2">
              <div>
                <span className="font-medium text-gray-600">Email:</span>
                <span className="ml-2 text-gray-800">{consulta.email}</span>
              </div>
              <div>
                <span className="font-medium text-gray-600">Teléfono:</span>
                <span className="ml-2 text-gray-800">{consulta.numero}</span>
              </div>
              <div>
                <span className="font-medium text-gray-600">Fecha:</span>
                <span className="ml-2 text-gray-800">
                  {new Date(consulta.createdAt).toLocaleDateString('es-AR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Descripción de la consulta */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Consulta:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">{consulta.descripcion}</p>
            </div>
          </div>

          {/* Formulario de respuesta */}
          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Respuesta
            </label>
            <textarea
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Escribe tu respuesta aquí..."
              required
            />

            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                Enviar Respuesta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const ConsultasSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [consultas, setConsultas] = useState<Consulta[]>([]);
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

    // Simular carga de consultas
    setTimeout(() => {
      setConsultas([
        {
          id: "1",
          descripcion: "Hola, me interesa conocer más sobre el sistema de punto de venta. ¿Podrían enviarme información sobre precios y características?",
          email: "cliente@empresa.com",
          numero: "+54 9 3454 123456",
          createdAt: "2024-01-15T10:30:00Z",
          atendida: false
        },
        {
          id: "2",
          descripcion: "Necesito un sistema de facturación electrónica que se integre con AFIP. ¿Tienen algo disponible?",
          email: "contabilidad@pyme.com",
          numero: "+54 9 3454 987654",
          createdAt: "2024-01-14T16:45:00Z",
          atendida: true,
          respuesta: "Hola, muchas gracias por tu consulta. Sí, tenemos un sistema completo de facturación electrónica que se integra perfectamente con AFIP..."
        },
        {
          id: "3",
          descripcion: "¿Ofrecen capacitaciones para el uso de sus sistemas? Somos una empresa de 20 empleados.",
          email: "recursos@empresa.com",
          numero: "+54 9 3454 111222",
          createdAt: "2024-01-13T09:15:00Z",
          atendida: false
        },
        {
          id: "4",
          descripcion: "Quiero saber si es posible personalizar el sistema de gestión de stock para nuestra industria específica.",
          email: "gerencia@industrial.com",
          numero: "+54 9 3454 333444",
          createdAt: "2024-01-12T14:20:00Z",
          atendida: true,
          respuesta: "¡Por supuesto! Nuestros sistemas son altamente personalizables. Podemos adaptar el sistema de gestión de stock..."
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleResponderConsulta = (consultaId: string, respuesta: string) => {
    setConsultas(prev => prev.map(c => 
      c.id === consultaId 
        ? { ...c, atendida: true, respuesta }
        : c
    ));
    // Aquí podrías enviar un email real al cliente
    console.log("Enviando respuesta por email a:", selectedConsulta?.email);
  };

  const handleDeleteConsulta = (consultaId: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar esta consulta?")) {
      setConsultas(prev => prev.filter(c => c.id !== consultaId));
    }
  };

  const openResponseModal = (consulta: Consulta) => {
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
        return !consulta.atendida;
      case 'atendidas':
        return consulta.atendida;
      default:
        return true;
    }
  });

  const consultasPendientes = consultas.filter(c => !c.atendida).length;
  const consultasAtendidas = consultas.filter(c => c.atendida).length;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" style={{ fontSize: '14px' }}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 ref={titleRef} className="text-2xl font-bold text-gray-800 mb-2" style={{ fontSize: '24px' }}>
            Gestión de Consultas
          </h1>
          <p className="text-gray-600" style={{ fontSize: '14px' }}>
            Administra las consultas recibidas de clientes potenciales
          </p>
        </div>
        
        {/* Stats */}
        <div className="flex space-x-4">
          <div className="bg-orange-100 px-4 py-2 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-600">{consultasPendientes}</div>
            <div className="text-sm text-orange-800">Pendientes</div>
          </div>
          <div className="bg-green-100 px-4 py-2 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">{consultasAtendidas}</div>
            <div className="text-sm text-green-800">Atendidas</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex space-x-2">
        <button
          onClick={() => setFilter('todas')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'todas' 
              ? 'bg-orange-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Todas ({consultas.length})
        </button>
        <button
          onClick={() => setFilter('pendientes')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'pendientes' 
              ? 'bg-orange-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Pendientes ({consultasPendientes})
        </button>
        <button
          onClick={() => setFilter('atendidas')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'atendidas' 
              ? 'bg-orange-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Atendidas ({consultasAtendidas})
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
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      consulta.atendida 
                        ? "bg-green-100 text-green-800" 
                        : "bg-orange-100 text-orange-800"
                    }`}>
                      {consulta.atendida ? "Atendida" : "Pendiente"}
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatDate(consulta.createdAt)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                <p className="text-gray-800 mt-1 leading-relaxed">{consulta.descripcion}</p>
              </div>

              {consulta.respuesta && (
                <div className="mb-4 bg-green-50 p-4 rounded-lg">
                  <span className="text-sm font-medium text-green-800">Respuesta enviada:</span>
                  <p className="text-green-700 mt-1 leading-relaxed">{consulta.respuesta}</p>
                </div>
              )}

              <div className="flex space-x-2 pt-4 border-t border-gray-100">
                {!consulta.atendida ? (
                  <button
                    onClick={() => openResponseModal(consulta)}
                    className="flex-1 bg-orange-50 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-100 transition-colors flex items-center justify-center space-x-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Responder</span>
                  </button>
                ) : (
                  <button
                    onClick={() => openResponseModal(consulta)}
                    className="flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center space-x-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Ver Respuesta</span>
                  </button>
                )}
                
                <button
                  onClick={() => window.open(`mailto:${consulta.email}`, '_blank')}
                  className="bg-gray-50 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </button>

                <button
                  onClick={() => window.open(`tel:${consulta.numero}`, '_blank')}
                  className="bg-gray-50 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Llamar</span>
                </button>

                <button
                  onClick={() => handleDeleteConsulta(consulta.id)}
                  className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>Eliminar</span>
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
        onResponder={handleResponderConsulta}
      />
    </div>
  );
};
