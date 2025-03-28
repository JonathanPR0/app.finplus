import { EmpresaProps } from "./EmpresaProps";

export interface CartaoProps {
  id?: string;
  uuid?: string;
  nome: string;
  tipo: string;
  cor: string;
  descricao: string;

  empresa?: EmpresaProps;
  id_empresa?: string;
}
