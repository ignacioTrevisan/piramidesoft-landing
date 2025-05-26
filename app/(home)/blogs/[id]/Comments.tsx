"use client";

import { useState, useEffect } from "react";
import { useSession } from "@/app/hooks/useSession";
import { createComment } from "@/app/action/blogInteractions/createComment";
import { getCommentsByBlogId } from "@/app/action/blogInteractions/getComments";
import { BlogComment } from "@/interfaces/blogInteractions";
import Link from "next/link";

interface CommentsProps {
  blogId: string;
}

export const Comments = ({ blogId }: CommentsProps) => {
  const { user, isLoading } = useSession();
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    loadComments();
  }, [blogId]);

  const loadComments = async () => {
    setLoadingComments(true);
    const response = await getCommentsByBlogId(blogId);
    if (response.ok && response.data) {
      setComments(response.data);
    }
    setLoadingComments(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      setShowLoginMessage(true);
      setTimeout(() => setShowLoginMessage(false), 3000);
      return;
    }

    if (!newComment.trim()) return;

    setIsSubmitting(true);
    const response = await createComment({
      contenido: newComment.trim(),
      blogId,
    });

    if (response.ok && response.data) {
      setComments([response.data, ...comments]);
      setNewComment("");
    }
    setIsSubmitting(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Comentarios ({comments.length})
      </h3>

      {/* Formulario de comentarios */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder={
              user ? "Escribe tu comentario..." : "Inicia sesión para comentar"
            }
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={4}
            maxLength={1000}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {newComment.length}/1000 caracteres
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !newComment.trim() || isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {isSubmitting ? "Enviando..." : "Comentar"}
          </button>
        </div>
      </form>

      {/* Mensaje de login necesario */}
      {showLoginMessage && (
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-800">
                ¡Hola! Para comentar necesitas{" "}
                <Link
                  href="/auth/login"
                  className="font-medium underline hover:text-blue-600"
                >
                  iniciar sesión
                </Link>{" "}
                o{" "}
                <Link
                  href="/auth/register"
                  className="font-medium underline hover:text-blue-600"
                >
                  crear una cuenta
                </Link>
                . ¡Es gratis y rápido! 🚀
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lista de comentarios */}
      {loadingComments ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4 animate-pulse">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-4">💬</div>
          <p className="text-lg">¡Sé el primero en comentar!</p>
          <p className="text-sm mt-2">
            Comparte tu opinión sobre este artículo
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
                  {comment.user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {comment.user.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDate(comment.createdAt)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {comment.contenido}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
