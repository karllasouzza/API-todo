import { v4 as uuidv4 } from "uuid";

class Usuario {
  constructor(nome, email, senha, id) {
    this.id = id || uuidv4();
    this.name = nome;
    this.email = email;
    this.password = senha;
  }
}

export default Usuario;
