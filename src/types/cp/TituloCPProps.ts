import { CartaoProps } from "../CartaoProps";
import { CategoriaProps } from "../CategoriaProps";
import { ContaBancariaProps } from "../ContaBancariaProps";
import { EmpresaProps } from "../EmpresaProps";
import { FormaPagamentoProps } from "../FormaPagamentoProps";
import { UserProps } from "../UserProps";
import { FornecedorProps } from "./FornecedorProps";
import { StatusCPProps } from "./StatusCPProps";
import { VencimentoProps } from "./VencimentoProps";

export interface TituloCPProps {
  id?: string;
  uuid?: string;
  nome: string;
  id_status?: string;
  status?: StatusCPProps;
  id_fornecedor?: string;
  fornecedor?: FornecedorProps;
  id_forma_pagamento?: string;
  forma_pagamento?: FormaPagamentoProps;
  id_cartao?: string | null;
  cartao?: CartaoProps | null;
  id_categoria?: string;
  categoria?: CategoriaProps;
  id_conta_bancaria?: ContaBancariaProps;
  conta_bancaria?: ContaBancariaProps;
  descricao: string;
  valor: number;
  data_pagamento?: string | null; // ISO string
  created_at: string; // ISO string
  updated_at: string; // ISO string
  user: UserProps;
  vencimentos: VencimentoProps[];

  empresa?: EmpresaProps;
  id_empresa?: string;
}
