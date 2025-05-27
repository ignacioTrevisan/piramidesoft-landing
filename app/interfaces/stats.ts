export interface StatsResponse {
  mes: string;
  cantidadDeProductos: number;
  cantidadDeBlogs: number;
  userViews: UserView[];
  cantidadDeConsultas: Consultas[];
}

interface UserView {
  id: string;
  ip: string;
  statsMes: string;
}

interface Consultas {
  id: string;
  descripcion: string;
  email: string;
  numero: string;
  createdAt: Date;
  statsMes: string;
}
