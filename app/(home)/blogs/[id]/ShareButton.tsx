"use client";
import { Blog } from "@/interfaces/blog";

interface ShareButtonProps {
  blog: Blog;
}

export default function ShareButton({ blog }: ShareButtonProps) {
  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        try {
          await navigator.share({
            title: blog.titulo,
            text: blog.resumen,
            url: window.location.href,
          });
        } catch (error) {
          // El usuario canceló o hubo un error
          console.log('Error sharing:', error);
        }
      } else {
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert('Enlace copiado al portapapeles');
        } catch (error) {
          console.log('Error copying to clipboard:', error);
        }
      }
    }
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleShare}
        className="text-gray-600 hover:text-gray-800 transition-colors"
        title="Compartir"
        type="button"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" 
          />
        </svg>
      </button>
    </div>
  );
}
