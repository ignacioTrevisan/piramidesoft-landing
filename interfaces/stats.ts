export interface StatsResponse {
  mes: string;
  cantidadDeProductos: number;
  cantidadDeBlogs: number;
  userViews: UserView[];
  cantidadDeConsultas: Consultas[];
}

interface UserView {
  id: String;
  ip: String;
  statsMes: String;
}

interface Consultas {
  id: String;
  descripcion: String;
  email: String;
  numero: String;
  createdAt: Date;
  statsMes: String;
}
