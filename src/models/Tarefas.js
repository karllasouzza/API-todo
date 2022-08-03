//  this = Sempre irá se referir a class que ele esta dentro
import { v4 as uuidv4 } from 'uuid';

class Tarefas {
  constructor(idUsuario, texto, status) {
    this.id = uuidv4();
    this.userId = idUsuario;
    this.text = texto;
    this.status = status;
  }
}

export default Tarefas;
