/* Estamos importando nosso banco simulado e nosso model para
 podermos usa-los neste arquivo */
import TarefasM from "../models/Tarefas.js";
import { bdTarefas } from "../infra/bd.js";

//  Estamos exportando uma const
export const Tarefas = (app) => {
  app.get("/tarefas", (req, res) => {
    res.send(bdTarefas)
  });

  app.post("/tarefas", (req, res) => {
    const { idUsuario, texto, status } = req.body;

    const dataM = new TarefasM(idUsuario, texto, status);
    bdTarefas.push(dataM);
    res.send(bdTarefas);
  });

  app.get("/tarefas/:id", (req, res) => {
    const data = bdTarefas.filter((element) => element.id === req.params.id);

    res.send(data);
  });
};
