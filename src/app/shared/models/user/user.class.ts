export class User {
  id: string;
  cpf: string;
  nome: string;
  nascimento: string;
  situacao: string;
  inscricao: string;
  constructor(
    id: string,
    cpf: string,
    nome: string,
    nascimento: string,
    situacao: string,
    inscricao: string
  ) {
    this.id = id;
    this.cpf = cpf;
    this.nome = nome;
    this.nascimento = nascimento;
    this.situacao = situacao;
    this.inscricao = inscricao;
  }
}
