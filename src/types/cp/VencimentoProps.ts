import { EmpresaProps } from "../EmpresaProps";
import { TituloCPProps } from "./TituloCPProps";

export interface VencimentoProps {
  id?: string;
  uuid?: string;
  titulo?: TituloCPProps;
  id_titulo?: string;
  data_vencimento: string; // ISO string
  data_pagamento?: string | null; // ISO string
  valor: number;
  valor_pago: number;
  status: "pendente" | "pago";

  empresa?: EmpresaProps;
  id_empresa?: string;
}
