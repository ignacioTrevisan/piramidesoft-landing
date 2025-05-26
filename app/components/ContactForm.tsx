'use client';

import { useState } from 'react';
import { createConsulta } from '@/app/action/consultas';
import { CreateConsultaData } from '@/interfaces/consulta';

interface ContactFormProps {
  productId?: string;
  productTitle?: string;
  onClose?: () => void;
}

export const ContactForm = ({ productId, productTitle, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState<CreateConsultaData>({
    nombre: '',
    descripcion: '',
    email: '',
    numero: '',
    productId: productId
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const response = await createConsulta(formData);
    
    if (response.ok) {
      setShowSuccess(true);
      setTimeout(() => {
        if (onClose) onClose();
      }, 3000);
    } else {
      setError(response.error || 'Error al enviar la consulta');
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (showSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          ¡Consulta enviada exitosamente!
        </h3>
        <p className="text-gray-600 mb-4">
          Hemos recibido tu consulta{productTitle && ` sobre ${productTitle}`}. 
          Nos pondremos en contacto contigo a la brevedad.
        </p>
        <p className="text-sm text-gray-500">
          Esta ventana se cerrará automáticamente...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Solicitar Información
        </h3>
        {productTitle && (
          <p className="text-gray-600 mb-6">
            Sobre: <span className="font-medium text-blue-600">{productTitle}</span>
          </p>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex">
            <svg className="w-5 h-5 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="ml-3 text-sm text-red-800">{error}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tu nombre completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="numero" className="block text-sm font-medium text-gray-700 mb-2">
          Número de teléfono *
        </label>
        <input
          type="tel"
          id="numero"
          name="numero"
          required
          value={formData.numero}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="+54 9 11 1234-5678"
        />
      </div>

      <div>
        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje o consulta *
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          required
          rows={4}
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder={productTitle 
            ? `Cuéntanos qué te interesa saber sobre ${productTitle}...`
            : "Cuéntanos en qué podemos ayudarte..."
          }
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            'Enviar Consulta'
          )}
        </button>
      </div>
    </form>
  );
};
