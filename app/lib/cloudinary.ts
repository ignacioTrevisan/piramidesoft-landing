"use client";

interface CloudinaryResponse {
  public_id: string;
  secure_url: string;
}

export const uploadToCloudinary = async (
  file: File,
  resourceType: 'image' | 'video' = 'image'
): Promise<CloudinaryResponse | null> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'piramidesoft_test');
    
    // Validaciones para imágenes
    if (resourceType === 'image') {
      const img = new Image();
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      return new Promise((resolve, reject) => {
        img.onload = async () => {
          const aspectRatio = img.width / img.height;
          
          // Advertencia sobre relación de aspecto (recomendado entre 1:2 y 2:1)
          if (aspectRatio < 0.5 || aspectRatio > 2) {
            console.warn('⚠️ Advertencia: La imagen tiene una relación de aspecto inusual. Se recomienda entre 1:2 y 2:1 para mejor visualización responsive.');
          }
          
          // Si la imagen es muy grande, redimensionarla
          let { width, height } = img;
          const maxWidth = 1920;
          const maxHeight = 1080;
          
          if (width > maxWidth || height > maxHeight) {
            const scaleFactor = Math.min(maxWidth / width, maxHeight / height);
            width *= scaleFactor;
            height *= scaleFactor;
          }
          
          canvas.width = width;
          canvas.height = height;
          ctx?.drawImage(img, 0, 0, width, height);
          
          canvas.toBlob(async (blob) => {
            if (blob) {
              const optimizedFormData = new FormData();
              optimizedFormData.append('file', blob);
              optimizedFormData.append('upload_preset', 'piramidesoft_test');
              
              try {
                const response = await fetch(
                  `https://api.cloudinary.com/v1_1/nachotrevisan/${resourceType}/upload`,
                  {
                    method: 'POST',
                    body: optimizedFormData,
                  }
                );
                
                if (!response.ok) {
                  throw new Error('Error uploading to Cloudinary');
                }
                
                const data = await response.json();
                resolve(data);
              } catch (error) {
                reject(error);
              }
            } else {
              reject(new Error('Error processing image'));
            }
          }, 'image/jpeg', 0.85);
        };
        
        img.onerror = () => reject(new Error('Error loading image'));
        img.src = URL.createObjectURL(file);
      });
    } else {
      // Para videos, validar tamaño
      if (file.size > 100 * 1024 * 1024) { // 100MB limit
        throw new Error('El video no puede superar los 100MB');
      }
      
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/nachotrevisan/${resourceType}/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );
      
      if (!response.ok) {
        throw new Error('Error uploading video to Cloudinary');
      }
      
      return await response.json();
    }
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

export const validateImageFile = (file: File): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('El archivo debe ser una imagen'));
      return;
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      reject(new Error('La imagen no puede superar los 10MB'));
      return;
    }
    
    const img = new Image();
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      
      // Advertencia sobre relación de aspecto (recomendado entre 1:2 y 2:1)
      if (aspectRatio < 0.5 || aspectRatio > 2) {
        console.warn('⚠️ Advertencia: La imagen tiene una relación de aspecto inusual. Se recomienda entre 1:2 y 2:1 para mejor visualización responsive.');
      }
      
      // Validar resolución mínima
      if (img.width < 400 || img.height < 200) {
        reject(new Error('La imagen debe tener al menos 400x200 píxeles'));
        return;
      }
      
      resolve(true);
    };
    
    img.onerror = () => reject(new Error('Error al cargar la imagen'));
    img.src = URL.createObjectURL(file);
  });
};

export const validateVideoFile = (file: File): boolean => {
  if (!file.type.startsWith('video/')) {
    throw new Error('El archivo debe ser un video');
  }
  
  if (file.size > 100 * 1024 * 1024) { // 100MB limit
    throw new Error('El video no puede superar los 100MB');
  }
  
  // Validar formatos permitidos
  const allowedTypes = ['video/mp4', 'video/webm', 'video/ogg'];
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Formato de video no permitido. Use MP4, WebM o OGG');
  }
  
  return true;
};
