"use client";
import { useState, useRef } from "react";
import { uploadToCloudinary, validateImageFile, validateVideoFile } from "@/app/lib/cloudinary";
import { isVideoUrl, isEmbedVideoUrl } from "@/app/lib/mediaUtils";

interface MediaUploaderProps {
  onUpload: (url: string) => void;
  currentUrl?: string;
  // 'media' acepta imagen o video indistintamente (detecta por mime type)
  type: 'image' | 'video' | 'media';
  label: string;
  accept?: string;
  multiple?: boolean;
}

export const MediaUploader: React.FC<MediaUploaderProps> = ({
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
  const [uploadMethod, setUploadMethod] = useState<'url' | 'file'>('url');
  const [urlInput, setUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUrlSubmit = () => {
    if (!urlInput.trim()) return;

    setError(null);
    
    // Validaciones básicas para URL
    try {
      new URL(urlInput);

      const isVideoLink =
        urlInput.includes('youtube.com') ||
        urlInput.includes('youtu.be') ||
        urlInput.includes('vimeo.com') ||
        !!urlInput.match(/\.(mp4|webm|ogg|mov|avi|m4v|mkv)(\?|$)/i) ||
        (urlInput.includes('cloudinary.com') && urlInput.includes('/video/'));

      const isImageLink =
        !!urlInput.match(/\.(jpg|jpeg|png|gif|webp|svg|avif)(\?|$)/i) ||
        (urlInput.includes('cloudinary.com') && !urlInput.includes('/video/')) ||
        urlInput.includes('imgur.com') ||
        urlInput.includes('unsplash.com') ||
        urlInput.includes('drive.google.com');

      if (type === 'video' && !isVideoLink) {
        setError('Por favor ingresa una URL válida de video (YouTube, Vimeo, o archivo directo)');
        return;
      }
      if (type === 'image' && !isImageLink) {
        setError('Por favor ingresa una URL válida de imagen (JPG, PNG, WebP, etc.)');
        return;
      }
      if (type === 'media' && !isVideoLink && !isImageLink) {
        setError('Ingresa una URL válida de imagen o video');
        return;
      }

      onUpload(urlInput);
      setUrlInput('');
      setError(null);
    } catch {
      setError('Por favor ingresa una URL válida');
    }
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError(null);
    setUploadProgress(0);

    try {
      const file = files[0];

      // Determinar si estamos tratando con video o imagen (el modo 'media'
      // decide automaticamente segun el mime type del archivo).
      const isVideoFile = file.type.startsWith('video/');
      const effectiveType: 'image' | 'video' =
        type === 'media' ? (isVideoFile ? 'video' : 'image') : type;

      // Validar archivo según el tipo efectivo
      if (effectiveType === 'image') {
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

      const result = await uploadToCloudinary(file, effectiveType);
      
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
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Toggle entre métodos de subida */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        <button
          type="button"
          onClick={() => setUploadMethod('url')}
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            uploadMethod === 'url'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📎 URL Directa
        </button>
        <button
          type="button"
          onClick={() => setUploadMethod('file')}
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            uploadMethod === 'file'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          ☁️ Subir Archivo
        </button>
      </div>

      {/* Método por URL */}
      {uploadMethod === 'url' && (
        <div className="space-y-3">
          <div className="space-y-3">
            <div>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleUrlSubmit();
                  }
                }}
                placeholder={
                  type === 'video'
                    ? "https://www.youtube.com/watch?v=... o URL directa de video"
                    : type === 'media'
                    ? "URL de imagen o video (YouTube, .mp4, .jpg, etc.)"
                    : "https://ejemplo.com/imagen.jpg"
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={handleUrlSubmit}
              disabled={!urlInput.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-2 px-4 rounded-lg font-medium transition-colors"
            >
              Usar esta URL
            </button>
          </div>
          
          {/* Información sobre URLs permitidas */}
          <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
            {type === 'video' ? (
              <div>
                <p className="font-medium mb-1">URLs de video permitidas:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>YouTube: youtube.com/watch?v=... o youtu.be/...</li>
                  <li>Vimeo: vimeo.com/...</li>
                  <li>Videos directos: .mp4, .webm, .ogg</li>
                  <li>Cloudinary: res.cloudinary.com/...</li>
                </ul>
              </div>
            ) : type === 'media' ? (
              <div>
                <p className="font-medium mb-1">Imagen o video:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Imagenes: .jpg, .png, .webp, .gif</li>
                  <li>Videos: .mp4, .webm, .mov (hasta 100MB)</li>
                  <li>YouTube / Vimeo (URL directa)</li>
                  <li>Cloudinary: res.cloudinary.com/...</li>
                </ul>
              </div>
            ) : (
              <div>
                <p className="font-medium mb-1">URLs de imagen permitidas:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Imágenes directas: .jpg, .png, .webp, .gif</li>
                  <li>Cloudinary: res.cloudinary.com/...</li>
                  <li>Google Drive, Imgur, Unsplash</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Método por archivo */}
      {uploadMethod === 'file' && (
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
                <p className="text-sm text-gray-600">Subiendo a Cloudinary...</p>
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
                Arrastra tu {type === 'media' ? 'imagen o video' : type} aquí o haz clic para seleccionar
              </p>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Seleccionar archivo
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Se subirá a Cloudinary con optimización automática
              </p>
            </div>
          )}
        </div>
      )}

      {/* Preview actual - detecta por URL real si es video o imagen, asi funciona
          correctamente en modo 'media' donde cada slot puede ser cualquier cosa */}
      {currentUrl && !uploading && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Archivo actual:</p>
          <div className="relative inline-block">
            {isEmbedVideoUrl(currentUrl) ? (
              <div className="w-32 h-24 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-8 h-8 text-red-600 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <p className="text-xs text-gray-600">YouTube/Vimeo</p>
                </div>
              </div>
            ) : isVideoUrl(currentUrl) ? (
              <video
                src={currentUrl}
                muted
                playsInline
                controls
                preload="metadata"
                className="w-32 h-24 object-cover rounded-lg border border-gray-200 bg-black"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={currentUrl}
                alt="Preview"
                className="w-32 h-24 object-cover rounded-lg border border-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
                }}
              />
            )}
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        accept={
          accept ||
          (type === 'image'
            ? 'image/*'
            : type === 'video'
            ? 'video/*'
            : 'image/*,video/*')
        }
        multiple={multiple}
        className="hidden"
      />

      {/* Información sobre restricciones solo para archivos */}
      {uploadMethod === 'file' && (
        <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg space-y-1">
          {type === 'image' ? (
            <>
              <p>• <strong>Imagenes:</strong> JPG, PNG, WebP (máx. 10MB)</p>
              <p>• <strong>Optimización:</strong> Automática al subir</p>
            </>
          ) : type === 'video' ? (
            <>
              <p>• <strong>Videos:</strong> MP4, WebM, OGG (máx. 100MB)</p>
              <p>• <strong>Tip:</strong> Para YouTube usa URL directa</p>
            </>
          ) : (
            <>
              <p>• <strong>Imagenes:</strong> JPG, PNG, WebP (máx. 10MB)</p>
              <p>• <strong>Videos:</strong> MP4, WebM, MOV (máx. 100MB)</p>
              <p>• Se detecta automaticamente segun el archivo</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};
