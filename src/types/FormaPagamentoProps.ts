import { EmpresaProps } from "./EmpresaProps";

export interface FormaPagamentoProps {
  id?: string;
  uuid?: string;
  nome: string;

  empresa?: EmpresaProps;
  id_empresa?: string;
}
