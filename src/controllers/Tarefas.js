/* Estamos importando nosso banco simulado e nosso model para
 podermos usa-los neste arquivo */
import TarefasM from "../models/Tarefas.js";
// import { bdTarefas } from "../infra/bd.js";

//  Estamos exportando uma const
export const Tarefas = (app, bd) => {
  app.get("/tarefas", (req, res) => {
    bd.all("SELECT * FROM TAREFAS", (erro, rows) => {
      if (erro) {
        console.log(erro.message);
      } else {
        res.json(rows);
      }
    });
  });

  app.post("/tarefas", (req, res) => {
    const { titulo, desc, status, datacreate, id_usuario } = req.body;

    bd.run(
      `INSERT INTO TAREFAS(TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)
            VALUES (?,?,?,?,?)`,
      [titulo, desc, status, datacreate, id_usuario],
      (erro) => {
        if (erro) {
          console.log(erro);
        } else {
          res.send("tarefa criada com sucesso");
        }
      }
    );
  });

  // app.post("/tarefas", (req, res) => {
  //   const { idUsuario, texto, status } = req.body;

  //   const dataM = new TarefasM(idUsuario, texto, status);
  //   bdTarefas.push(dataM);
  //   res.send(bdTarefas);
  // });

  // app.get("/tarefas/:id", (req, res) => {
  //   const data = bdTarefas.filter((element) => element.id === req.params.id);

  //   res.send(data);
  // });

  // app.delete("/tarefas/:id", (req, res) => {
  //   res.send(req.params.id);
  // });

  // app.put("/tarefas/:id", (req, res) => {
  //   res.send(req.params.id);
  // });

  // app.patch("/tarefas/:id", (req, res) => {
  //   res.send(req.params.id);
  // });
};
