'use client';

import { useState, useEffect } from 'react';
import { getLikeStatus } from '@/app/action/blogInteractions/getLikeStatus';
import { getCommentsByBlogId } from '@/app/action/blogInteractions/getComments';

interface BlogStatsProps {
  blogId: string;
}

export const BlogStats = ({ blogId }: BlogStatsProps) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, [blogId]);

  const loadStats = async () => {
    try {
      const [likeResponse, commentsResponse] = await Promise.all([
        getLikeStatus(blogId),
        getCommentsByBlogId(blogId)
      ]);

      if (likeResponse.ok && likeResponse.data) {
        setLikes(likeResponse.data.totalLikes);
      }

      if (commentsResponse.ok && commentsResponse.data) {
        setComments(commentsResponse.data.length);
      }
    } catch (error) {
      console.error('Error loading blog stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
          <span>...</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
          <span>...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4 text-sm text-gray-600">
      <div className="flex items-center space-x-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span>{likes}</span>
      </div>
      
      <div className="flex items-center space-x-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span>{comments}</span>
      </div>
    </div>
  );
};
