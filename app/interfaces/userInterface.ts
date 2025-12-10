export interface UserInterface {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  cuit?: string;

  phone?: string;
}

export interface userToCreate {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  cuit?: string;

  phone?: string;
}
