export interface HistorialEntry {
  id: string;
  descripcion: string;
  createdAt: Date | string;
}

export interface HistorialResponse {
  id: string;
  descripcion: string;
  createdAt: Date;
}
