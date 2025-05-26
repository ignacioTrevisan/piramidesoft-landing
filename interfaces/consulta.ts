export interface Consulta {
  id: string;
  nombre: string;
  descripcion: string;
  email: string;
  numero: string;
  productId?: string;
  product?: {
    id: string;
    titulo: string;
  };
  status: 'PENDIENTE' | 'ATENDIDA';
  createdAt: string;
  updatedAt: string;
}

export interface CreateConsultaData {
  nombre: string;
  descripcion: string;
  email: string;
  numero: string;
  productId?: string;
}

export interface UpdateConsultaStatusData {
  id: string;
  status: 'PENDIENTE' | 'ATENDIDA';
}

export interface ConsultaResponse {
  ok: boolean;
  data?: Consulta;
  error?: string;
}

export interface ConsultasListResponse {
  ok: boolean;
  data?: Consulta[];
  error?: string;
}

export interface ConsultaStats {
  total: number;
  pendientes: number;
  atendidas: number;
}
