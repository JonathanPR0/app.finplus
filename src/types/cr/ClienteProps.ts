import { EmpresaProps } from "../EmpresaProps";

export interface ClienteProps {
  id?: string;
  uuid?: string;
  nome: string;
  numero: string;
  endereco: string;
  cnpj: string;
  tipo: "empresa" | "pessoa";

  empresa?: EmpresaProps;
  id_empresa?: string;
}
