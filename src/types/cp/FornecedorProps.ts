import { EmpresaProps } from "../EmpresaProps";

export interface FornecedorProps {
  id?: string;
  uuid?: string;
  nome: string;

  empresa?: EmpresaProps;
  id_empresa?: string;
}
