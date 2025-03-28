import { ContaBancariaProps } from "../ContaBancariaProps";
import { EmpresaProps } from "../EmpresaProps";
import { FormaPagamentoProps } from "../FormaPagamentoProps";
import { UserProps } from "../UserProps";
import { ClienteProps } from "./ClienteProps";
import { PagamentoProps } from "./PagamentoProps";
import { StatusCRProps } from "./StatusCRProps";

export interface TituloCRProps {
  id?: string;
  uuid?: string;
  nome: string;
  id_status?: string;
  status?: StatusCRProps;
  id_cliente?: string;
  cliente?: ClienteProps;
  id_forma_recebimento: string;
  forma_recebimento: FormaPagamentoProps;
  conta_bancaria: ContaBancariaProps;
  descricao: string;
  valor: number;
  data_recebimento?: string | null; // ISO string
  created_at: string; // ISO string
  updated_at: string; // ISO string
  user: UserProps;
  pagamentos: PagamentoProps[];

  empresa?: EmpresaProps;
  id_empresa?: string;
}
