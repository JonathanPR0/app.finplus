import { EmpresaProps } from "./EmpresaProps";

export interface CategoriaProps {
  id?: string;
  uuid?: string;
  nome: string;
  tipo: "receita" | "despesa";
  cor: "gray" | "black" | "purple" | "blue" | "green" | "yellow" | "orange" | "red" | "pink";
  descricao: string;

  empresa?: EmpresaProps;
  id_empresa?: string;
}
