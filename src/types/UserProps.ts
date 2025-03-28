import { EmpresaProps } from "./EmpresaProps";

export interface UserProps {
  id?: string;
  uuid?: string;
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "EMPLOYEE" | "BOSS" | string;

  empresa: EmpresaProps;
  id_empresa?: string;
}
