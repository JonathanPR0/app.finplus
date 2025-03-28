import { EmpresaProps } from "../EmpresaProps";
import { TituloCRProps } from "./TituloCRProps";

export interface PagamentoProps {
  id?: string;
  uuid?: string;
  titulo?: TituloCRProps;
  id_titulo?: string;
  data_vencimento: string; // ISO string
  data_pagamento?: string | null; // ISO string
  valor: number;
  valor_pago: number;
  status: "pendente" | "pago";

  empresa?: EmpresaProps;
  id_empresa?: string;
}
