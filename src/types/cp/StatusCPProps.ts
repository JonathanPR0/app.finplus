import { EmpresaProps } from "../EmpresaProps";

export interface StatusCPProps {
  id?: string;
  status: string;

  empresa?: EmpresaProps;
  id_empresa?: string;
}
