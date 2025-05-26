"use client";
import { useState } from "react";
import { MediaUploader } from "@/app/(admin)/admin/components/MediaUploader";

export default function MediaUploaderDemo() {
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          📎☁️ MediaUploader Híbrido
        </h1>
        <p className="text-lg text-gray-600">
          Demostración del sistema de carga flexible: URL directa + Cloudinary
        </p>
      </div>

      {/* Demo de Video */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          🎥 Video Upload Demo
        </h2>
        <p className="text-gray-600 mb-4">
          Para videos, recomendamos usar URLs directas de YouTube/Vimeo para ahorrar ancho de banda.
        </p>
        
        <MediaUploader
          type="video"
          label="Video del Producto"
          currentUrl={videoUrl}
          onUpload={setVideoUrl}
        />

        {videoUrl && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">✅ Video configurado:</p>
            <p className="text-green-700 text-sm break-all">{videoUrl}</p>
          </div>
        )}
      </div>

      {/* Demo de Imagen */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          🖼️ Image Upload Demo
        </h2>
        <p className="text-gray-600 mb-4">
          Para imágenes, puedes usar URLs directas o subir a Cloudinary para optimización automática.
        </p>
        
        <MediaUploader
          type="image"
          label="Imagen del Producto"
          currentUrl={imageUrl}
          onUpload={setImageUrl}
        />

        {imageUrl && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 font-medium">✅ Imagen configurada:</p>
            <p className="text-blue-700 text-sm break-all">{imageUrl}</p>
            <img 
              src={imageUrl} 
              alt="Preview" 
              className="mt-2 max-w-xs h-32 object-cover rounded border"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      {/* Guía de uso */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          💡 Guía de Uso Inteligente
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-green-700">📎 Usa URL Directa cuando:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• El video ya está en YouTube/Vimeo</li>
              <li>• Tienes archivos en Google Drive</li>
              <li>• Quieres evitar tiempo de carga</li>
              <li>• El archivo es muy grande (+50MB)</li>
              <li>• Necesitas resultado inmediato</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-blue-700">☁️ Usa Cloudinary cuando:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Tienes archivos locales sin subir</li>
              <li>• Necesitas optimización automática</li>
              <li>• Quieres control total del hosting</li>
              <li>• Las imágenes no están optimizadas</li>
              <li>• Necesitas CDN global</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ejemplos de URLs válidas */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          🔗 Ejemplos de URLs Válidas
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-red-600 mb-2">🎥 Videos:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-50 p-2 rounded text-gray-700">
                https://www.youtube.com/watch?v=dQw4w9WgXcQ
              </div>
              <div className="bg-gray-50 p-2 rounded text-gray-700">
                https://youtu.be/dQw4w9WgXcQ
              </div>
              <div className="bg-gray-50 p-2 rounded text-gray-700">
                https://vimeo.com/123456789
              </div>
              <div className="bg-gray-50 p-2 rounded text-gray-700">
                https://ejemplo.com/video.mp4
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-blue-600 mb-2">🖼️ Imágenes:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-50 p-2 rounded text-gray-700">
                https://ejemplo.com/imagen.jpg
              </div>
              <div className="bg-gray-50 p-2 rounded text-gray-700">
                https://res.cloudinary.com/...
              </div>
              <div className="bg-gray-50 p-2 rounded text-gray-700">
                https://imgur.com/a/ejemplo
              </div>
              <div className="bg-gray-50 p-2 rounded text-gray-700">
                https://unsplash.com/photos/...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
