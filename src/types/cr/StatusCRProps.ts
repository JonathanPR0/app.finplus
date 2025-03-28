import { EmpresaProps } from "../EmpresaProps";

export interface StatusCRProps {
  id?: string;
  status: string;

  empresa?: EmpresaProps;
  id_empresa?: string;
}
