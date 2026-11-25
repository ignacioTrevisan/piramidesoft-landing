/**
 * Detecta si una URL apunta a un video en vez de imagen.
 * Soporta:
 *  - Extensiones directas: .mp4, .webm, .mov, .ogg, .m4v, .avi
 *  - URLs de Cloudinary de video (contienen /video/upload/)
 *  - YouTube / Vimeo (iframes, tratados como videos remotos)
 */
export const isVideoUrl = (url: string): boolean => {
  if (!url) return false;
  const lower = url.toLowerCase().split("?")[0];

  // Extensiones directas de archivo de video
  if (/\.(mp4|webm|mov|ogg|m4v|avi|mkv)$/i.test(lower)) return true;

  // Cloudinary video upload
  if (lower.includes("cloudinary.com") && lower.includes("/video/")) return true;

  // Plataformas que devuelven iframes (consideradas video)
  if (lower.includes("youtube.com/watch") || lower.includes("youtu.be/")) return true;
  if (lower.includes("vimeo.com/")) return true;

  return false;
};

/**
 * Indica si la URL es un embed remoto (YouTube/Vimeo) que necesita iframe
 * en vez de la tag <video>.
 */
export const isEmbedVideoUrl = (url: string): boolean => {
  if (!url) return false;
  const lower = url.toLowerCase();
  return (
    lower.includes("youtube.com") ||
    lower.includes("youtu.be") ||
    lower.includes("vimeo.com")
  );
};

/**
 * Convierte una URL de YouTube/Vimeo al formato embed para iframe.
 */
export const toEmbedUrl = (url: string): string => {
  if (url.includes("youtube.com/watch?v=")) {
    const id = url.split("v=")[1]?.split("&")[0] ?? "";
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0] ?? "";
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("vimeo.com/")) {
    const id = url.split("vimeo.com/")[1]?.split("?")[0] ?? "";
    return `https://player.vimeo.com/video/${id}`;
  }
  return url;
};
