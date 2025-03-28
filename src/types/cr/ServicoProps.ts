import { CategoriaProps } from "../CategoriaProps";
import { EmpresaProps } from "../EmpresaProps";

export interface ServicoProps {
  id?: string;
  uuid?: string;
  id_categoria?: string;
  categoria?: CategoriaProps;
  descricao: number;
  data_servico: string; // ISO string
  data_servico_futuro?: string | null; // ISO string
  data_expiracao_garantia?: string | null; // ISO string

  empresa?: EmpresaProps;
  id_empresa?: string;
}
