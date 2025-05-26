'use client';

import { useState, useEffect } from 'react';
import { useSession } from '@/app/hooks/useSession';
import { toggleLike } from '@/app/action/blogInteractions/toggleLike';
import { getLikeStatus } from '@/app/action/blogInteractions/getLikeStatus';
import Link from 'next/link';

interface LikeButtonProps {
  blogId: string;
}

export const LikeButton = ({ blogId }: LikeButtonProps) => {
  const { user } = useSession();
  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  useEffect(() => {
    loadLikeStatus();
  }, [blogId]);

  const loadLikeStatus = async () => {
    const response = await getLikeStatus(blogId);
    if (response.ok && response.data) {
      setLiked(response.data.liked);
      setTotalLikes(response.data.totalLikes);
    }
  };

  const handleLike = async () => {
    if (!user) {
      setShowLoginMessage(true);
      setTimeout(() => setShowLoginMessage(false), 3000);
      return;
    }

    setIsLoading(true);
    const response = await toggleLike(blogId);
    
    if (response.ok && response.data) {
      setLiked(response.data.liked);
      setTotalLikes(response.data.totalLikes);
    }
    setIsLoading(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleLike}
        disabled={isLoading}
        className={`
          flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${liked 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
          }
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
        `}
      >
        <svg 
          className={`w-5 h-5 transition-all duration-200 ${
            liked ? 'fill-current' : 'stroke-current fill-none'
          }`}
          viewBox="0 0 24 24" 
          strokeWidth={2}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
          />
        </svg>
        <span>{totalLikes}</span>
        <span className="hidden sm:inline">
          {liked ? 'Te gusta' : 'Me gusta'}
        </span>
      </button>

      {/* Mensaje de login necesario */}
      {showLoginMessage && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-blue-50 border border-blue-200 rounded-lg p-3 shadow-lg z-10">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-2">
              <p className="text-xs text-blue-800">
                ¡Únete para dar like! {' '}
                <Link href="/auth/login" className="font-medium underline hover:text-blue-600">
                  Inicia sesión
                </Link>
                {' '}o{' '}
                <Link href="/auth/register" className="font-medium underline hover:text-blue-600">
                  regístrate
                </Link>
                {' '}✨
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
