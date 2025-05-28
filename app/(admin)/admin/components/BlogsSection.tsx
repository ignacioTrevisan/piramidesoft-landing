"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { getBlogs } from "@/app/action/blogs/getBlogs";
import { createBlog } from "@/app/action/blogs/createBlog";
import { updateBlog } from "@/app/action/blogs/updateBlog";
import { deleteBlog } from "@/app/action/blogs/deleteBlog";
import { changeVisibilityBlog } from "@/app/action/blogs/changeVisibilityBlog";
import { Blog, FormToCreateBlog } from "@/app/interfaces/blog";
import { MediaUploader } from "./MediaUploader";
import { useToast } from "@/app/components/ToastProvider";
import { useAdmin } from "../context/AdminContext";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog?: Blog | null;
  onSave: (blog: FormToCreateBlog) => void;
}

const BlogModal: React.FC<BlogModalProps> = ({
  isOpen,
  onClose,
  blog,
  onSave,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormToCreateBlog>({
    titulo: "",
    contenido: "",
    resumen: "",
    imagen: "",
    visible: true,
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        titulo: blog.titulo,
        contenido: blog.contenido,
        resumen: blog.resumen,
        imagen: blog.imagen,
        visible: blog.visible,
      });
    } else {
      setFormData({
        titulo: "",
        contenido: "",
        resumen: "",
        imagen: "",
        visible: true,
      });
    }
  }, [blog]);

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
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay admin-container">
      <div
        ref={modalRef}
        className="admin-modal modal-content bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {blog ? "Editar Blog" : "Crear Blog"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título
            </label>
            <input
              type="text"
              value={formData.titulo}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, titulo: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resumen
            </label>
            <textarea
              value={formData.resumen}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, resumen: e.target.value }))
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              placeholder="Resumen corto del blog post..."
            />
          </div>

          <div>
            <MediaUploader
              type="image"
              label="Imagen del Blog"
              currentUrl={formData.imagen}
              onUpload={(url) =>
                setFormData((prev) => ({ ...prev, imagen: url }))
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contenido
            </label>
            <textarea
              value={formData.contenido}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, contenido: e.target.value }))
              }
              rows={12}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              placeholder="Escribe el contenido completo del blog post..."
            />
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.visible}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    visible: e.target.checked,
                  }))
                }
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Blog visible
              </span>
            </label>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              {blog ? "Actualizar" : "Crear"} Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const BlogsSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useToast();
  const { createBlogTriggered, resetTriggers } = useAdmin();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }

    const loadBlogs = async () => {
      const response = await getBlogs();
      if (response.ok && response.data) {
        setBlogs(response.data);
      }
      setLoading(false);
    };

    loadBlogs();
  }, []);

  // Efecto para manejar el trigger de crear blog desde acciones rápidas
  useEffect(() => {
    if (createBlogTriggered) {
      openCreateModal();
      resetTriggers();
    }
  }, [createBlogTriggered, resetTriggers]);

  const handleSaveBlog = async (blogData: FormToCreateBlog) => {
    if (selectedBlog) {
      // Actualizar blog existente
      const response = await updateBlog(selectedBlog.id, blogData);
      if (response.ok && response.data) {
        setBlogs((prev) =>
          prev.map((b) => (b.id === selectedBlog.id ? response.data! : b))
        );
      }
    } else {
      // Crear nuevo blog
      const response = await createBlog(blogData);
      if (response.ok && response.data) {
        setBlogs((prev) => [response.data!, ...prev]);
      }
    }
    setSelectedBlog(null);
  };

  const handleEditBlog = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleDeleteBlog = async (blogId: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este blog?")) {
      const response = await deleteBlog(blogId);
      if (response.ok) {
        setBlogs((prev) => prev.filter((b) => b.id !== blogId));
      }
    }
  };

  const toggleBlogVisibility = async (blogId: string) => {
    const response = await changeVisibilityBlog(blogId);
    if (response.ok) {
      setBlogs((prev) =>
        prev.map((b) =>
          b.id === blogId
            ? { ...b, visible: !b.visible, updatedAt: new Date().toISOString() }
            : b
        )
      );
    }
  };

  const openCreateModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" style={{ fontSize: "14px" }}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1
            ref={titleRef}
            className="text-2xl font-bold text-gray-800 mb-2"
            style={{ fontSize: "24px" }}
          >
            Gestión de Blogs
          </h1>
          <p className="text-gray-600" style={{ fontSize: "14px" }}>
            Administra el contenido del blog de Piramide Soft
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <svg
            className="w-5 h-5"
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
          <span>Crear Blog</span>
        </button>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="admin-card hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-w-16 aspect-h-9 relative h-48 bg-gray-200 rounded-t-xl overflow-hidden">
              {blog.imagen ? (
                <img
                  src={blog.imagen}
                  alt={blog.titulo}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Error loading blog image:', blog.imagen);
                    // Crear un placeholder SVG como data URL
                    const placeholderSvg = `
                      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#f3f4f6"/>
                        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="system-ui" font-size="16">Imagen no disponible</text>
                      </svg>
                    `;
                    (e.target as HTMLImageElement).src = `data:image/svg+xml;base64,${btoa(placeholderSvg)}`;
                    (e.target as HTMLImageElement).onerror = null; // Prevent infinite loop
                  }}
                  onLoad={() => {
                    console.log('Blog image loaded successfully:', blog.imagen);
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              <div className="absolute top-3 right-3">
                <button
                  onClick={() => toggleBlogVisibility(blog.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    blog.visible
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                  title={blog.visible ? "Ocultar blog" : "Mostrar blog"}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {blog.visible ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3
                  className="text-xl font-semibold text-gray-800 line-clamp-2 flex-1"
                  style={{ fontSize: "18px" }}
                >
                  {blog.titulo}
                </h3>
                <span
                  className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                    blog.visible
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {blog.visible ? "Visible" : "Oculto"}
                </span>
              </div>

              <p
                className="text-gray-600 text-sm mb-4 line-clamp-3"
                style={{ fontSize: "14px" }}
              >
                {blog.resumen}
              </p>

              <div
                className="text-sm text-gray-500 mb-4"
                style={{ fontSize: "12px" }}
              >
                <div>Creado: {formatDate(blog.createdAt)}</div>
                {blog.updatedAt !== blog.createdAt && (
                  <div>Actualizado: {formatDate(blog.updatedAt)}</div>
                )}
              </div>

              <div className="flex space-x-2 pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleEditBlog(blog)}
                  className="flex-1 bg-purple-50 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors flex items-center justify-center space-x-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span>Editar</span>
                </button>
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="flex-1 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center space-x-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <span>Eliminar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
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
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No hay blogs
          </h3>
          <p className="text-gray-500 mb-6">
            Comienza creando tu primer blog post.
          </p>
          <button
            onClick={openCreateModal}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Crear Primer Blog
          </button>
        </div>
      )}

      {/* Modal */}
      <BlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        blog={selectedBlog}
        onSave={handleSaveBlog}
      />
    </div>
  );
};
