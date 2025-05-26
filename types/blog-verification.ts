// Archivo de verificación de tipos para evitar errores en build
import { Blog, FormToCreateBlog } from "@/interfaces/blog";
import { Products, FormToCreateProducts } from "@/interfaces/products";
import { ApiResponse } from "@/interfaces/apiResponse";

// Verificación de tipos de las funciones del servidor para blogs
type GetBlogsReturn = Promise<ApiResponse<Blog[]>>;
type GetBlogByIdReturn = Promise<ApiResponse<Blog | null>>;
type CreateBlogReturn = Promise<ApiResponse<Blog>>;
type UpdateBlogReturn = Promise<ApiResponse<Blog>>;
type DeleteBlogReturn = Promise<ApiResponse<null>>;
type ChangeVisibilityReturn = Promise<ApiResponse<null>>;

// Verificación de tipos de las funciones del servidor para productos
type GetProductsReturn = Promise<ApiResponse<Products[]>>;
type CreateProductReturn = Promise<ApiResponse<Products>>;
type UpdateProductReturn = Promise<ApiResponse<Products>>;

// Verificación de las interfaces
const sampleBlog: Blog = {
  id: "sample-id",
  titulo: "Sample Blog",
  contenido: "Sample content",
  resumen: "Sample summary",
  imagen: "https://example.com/image.jpg",
  visible: true,
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-01T00:00:00Z",
};

const sampleFormBlog: FormToCreateBlog = {
  titulo: "Sample Blog",
  contenido: "Sample content",
  resumen: "Sample summary",
  imagen: "https://example.com/image.jpg",
  visible: true,
};

const sampleProduct: Products = {
  id: "sample-product-id",
  titulo: "Sample Product",
  descripcion: "Sample description",
  precioAntes: 100,
  precioAhora: 80,
  imagenes: ["https://example.com/image1.jpg"],
  video: "https://example.com/video.mp4",
  url_demo: "https://demo.example.com",
  url_full: "https://full.example.com",
  visible: true,
  tipoId: "sample-type-id",
  tipo: { id: "sample-type-id", titulo: "Sample Type" },
  modulos: [{
    id: "sample-module-id",
    titulo: "Sample Module",
    subtitulos: ["Feature 1", "Feature 2"]
  }],
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-01T00:00:00Z",
};

// Verificación de respuesta API
const sampleApiResponse: ApiResponse<Blog[]> = {
  ok: true,
  data: [sampleBlog],
};

export {
  type GetBlogsReturn,
  type GetBlogByIdReturn,
  type CreateBlogReturn,
  type UpdateBlogReturn,
  type DeleteBlogReturn,
  type ChangeVisibilityReturn,
  type GetProductsReturn,
  type CreateProductReturn,
  type UpdateProductReturn,
};
