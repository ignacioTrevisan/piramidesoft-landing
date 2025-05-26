export interface Products {
  id: string;
  titulo: string;
  descripcion: string;
  precioAntes: number | null;
  precioAhora: number;
  imagenes: string[];
  video: string;
  url_demo: string | null;
  url_full: string | null;
  visible: boolean;
  tipoId: string;
  tipo: Tipo;
  modulos: Modulos[];
  createdAt: string;
  updatedAt: string;
}

interface Modulos {
  id: string;
  titulo: string;
  subtitulos: string[];
}

interface Tipo {
  id: string;
  titulo: string;
}

export interface FormToCreateProducts {
  titulo: string;
  descripcion: string;
  precioAntes: number | null;
  precioAhora: number;
  imagenes: string[];
  video: string;
  url_demo?: string;
  url_full?: string;
  visible: boolean;
  tipoId: string;
  modulos: Modulos[];
}
