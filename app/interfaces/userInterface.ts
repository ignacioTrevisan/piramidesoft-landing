export interface UserInterface {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  cuit?: string;
  fechaNacimiento?: Date;
  phone?: string;
}
