export class Candidato {

  constructor(id = "", nome = "", dataNascimento = "", cpf = "", telefone = "", email = ""){
    this.id = id;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.telefone = telefone;
    this.email = email;
  }

  id: string;
  nome: string;
  dataNascimento: string;
  cpf: string;
  telefone: string;
  email: string;
}

