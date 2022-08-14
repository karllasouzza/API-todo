import moment from "moment";
import { v4 as uuidv4 } from "uuid";

class Tarefas {
  static validStatus(status) {
    return ["Pending", "Complete", "Not Complete"].includes(status)
      ? status
      : "Status inexistente";
  }

  constructor(titulo, desc, status, userId, id) {
    this.id = id || uuidv4();
    this.userId = userId;
    this.title = titulo;
    this.description = desc;
    this.dataCreate = moment().format();
    this.status = Tarefas.validStatus(status);
  }
}

export default Tarefas;
