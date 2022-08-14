import TarefasM from "../models/Tarefas.js";
import {
  delTaskByID,
  getTaskByID,
  getTasks,
  postTask,
  putTaskByID,
} from "../dao/Tarefas.js";

export const Tarefas = (app, bd) => {
  app.get("/tarefas", async (req, res) => {
    try {
      const data = await getTasks();
      res.status(200).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }
  });

  app.post("/tarefas", async (req, res) => {
    const { titulo, desc, status, id_usuario } = req.body;

    const dataMolded = new TarefasM(titulo, desc, status, id_usuario);
    console.log(dataMolded);
    try {
      const data = await postTask(dataMolded);
      res.status(201).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro, error: true });
    }
  });

  app.put("/tarefas/:id", async (req, res) => {
    const { titulo, desc, status, dataCreate, userId } = req.body;
    const { id } = req.params;

    
    try {
      const oldTask = await getTaskByID(id);

      console.log(oldTask)
  
      const dataMolded = new TarefasM(
        titulo || oldTask[0].TITULO,
        desc || oldTask[0].DESCRICAO,
        status || oldTask[0].STATUS,
        dataCreate || oldTask[0].DATACRIACAO,
        userId || oldTask[0].ID_USUARIO,
        id
      );
      const data = await putTaskByID(dataMolded);
      res.status(201).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro, error: true });
    }
  });

  app.delete("/tarefas/:id", async (req, res) => {
    try {
      const data = await delTaskByID(req.params.id);
      res.status(200).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }
  });
};
