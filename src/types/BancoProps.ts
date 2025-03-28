import { EmpresaProps } from "./EmpresaProps";

export interface BancoProps {
  id?: string;
  uuid?: string;
  nome: string;
  codigo: string;
  active: boolean;

  empresa: EmpresaProps;
  id_empresa?: string;
}
