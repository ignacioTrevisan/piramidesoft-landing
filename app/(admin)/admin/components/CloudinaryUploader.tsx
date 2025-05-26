"use client";
import { useState, useRef } from "react";
import { uploadToCloudinary, validateImageFile, validateVideoFile } from "@/app/lib/cloudinary";

interface CloudinaryUploaderProps {
  onUpload: (url: string) => void;
  currentUrl?: string;
  type: 'image' | 'video';
  label: string;
  accept?: string;
  multiple?: boolean;
}

export const CloudinaryUploader: React.FC<CloudinaryUploaderProps> = ({
  onUpload,
  currentUrl,
  type,
  label,
  accept,
  multiple = false
}) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError(null);
    setUploadProgress(0);

    try {
      const file = files[0]; // Por ahora manejamos un archivo a la vez

      // Validar archivo según el tipo
      if (type === 'image') {
        await validateImageFile(file);
      } else {
        validateVideoFile(file);
      }

      // Simular progreso de subida
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      const result = await uploadToCloudinary(file, type);
      
      clearInterval(progressInterval);
      setUploadProgress(100);

      if (result) {
        onUpload(result.secure_url);
        setTimeout(() => {
          setUploading(false);
          setUploadProgress(0);
        }, 500);
      } else {
        throw new Error('Error al subir archivo');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error desconocido');
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    
    if (files.length > 0) {
      // Simular el evento de cambio del input
      const fakeEvent = {
        target: { files }
      } as React.ChangeEvent<HTMLInputElement>;
      
      await handleFileSelect(fakeEvent);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          uploading 
            ? 'border-blue-300 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400 bg-gray-50 hover:bg-gray-100'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {uploading ? (
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Subiendo {type}...</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{uploadProgress}%</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Arrastra tu {type} aquí o haz clic para seleccionar
            </p>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Seleccionar {type}
            </button>
          </div>
        )}
      </div>

      {/* Preview actual */}
      {currentUrl && !uploading && (
        <div className="mt-3">
          <p className="text-sm text-gray-600 mb-2">Archivo actual:</p>
          <div className="relative inline-block">
            {type === 'image' ? (
              <img
                src={currentUrl}
                alt="Preview"
                className="w-32 h-24 object-cover rounded-lg border border-gray-200"
              />
            ) : (
              <video
                src={currentUrl}
                className="w-32 h-24 object-cover rounded-lg border border-gray-200"
                controls
              />
            )}
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        accept={accept || (type === 'image' ? 'image/*' : 'video/*')}
        multiple={multiple}
        className="hidden"
      />

      {/* Información sobre restricciones */}
      <div className="text-xs text-gray-500 space-y-1">
        {type === 'image' ? (
          <>
            <p>• Formatos: JPG, PNG, WebP (máx. 10MB)</p>
            <p>• Relación de aspecto: Entre 1:2 y 2:1 (responsive)</p>
            <p>• Resolución mínima: 400x200 píxeles</p>
          </>
        ) : (
          <>
            <p>• Formatos: MP4, WebM, OGG (máx. 100MB)</p>
            <p>• Duración recomendada: Menos de 2 minutos</p>
          </>
        )}
      </div>
    </div>
  );
};
