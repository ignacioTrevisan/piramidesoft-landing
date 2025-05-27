export interface Blog {
  id: string;
  titulo: string;
  contenido: string;
  resumen: string;
  imagen: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FormToCreateBlog {
  titulo: string;
  contenido: string;
  resumen: string;
  imagen: string;
  visible: boolean;
}
