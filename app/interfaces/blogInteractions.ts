export interface BlogComment {
  id: string;
  contenido: string;
  blogId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface BlogLike {
  id: string;
  blogId: string;
  userId: string;
  user: {
    id: string;
    name: string;
  };
}

export interface BlogWithInteractions {
  id: string;
  titulo: string;
  contenido: string;
  resumen: string;
  imagen: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
  comentarios: BlogComment[];
  likes: BlogLike[];
  _count: {
    comentarios: number;
    likes: number;
  };
}

export interface CreateCommentData {
  contenido: string;
  blogId: string;
}

export interface CommentResponse {
  ok: boolean;
  data?: BlogComment;
  error?: string;
}

export interface LikeResponse {
  ok: boolean;
  data?: {
    liked: boolean;
    totalLikes: number;
  };
  error?: string;
}
