import bd from "../infra/sqlite-db.js";

const getTasks = () => {
  return new Promise((resolve, reject) => {
    bd.all("SELECT * FROM TAREFAS", (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const postTask = (model) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `INSERT INTO TAREFAS(ID, TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)
          VALUES (?,?,?,?,?,?)`,
      [
        model.id,
        model.title,
        model.description,
        model.status,
        model.dataCreate,
        model.userId,
      ],
      (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(model);
        }
      }
    );
  });
};

const getTaskByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.all(`SELECT * FROM TAREFAS WHERE ID = ?`, id, (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const putTaskByID = (model) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `UPDATE TAREFAS 
            SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?  
              WHERE ID = ? AND ID_USUARIO = ?`,
      [
        model.title,
        model.description,
        model.status,
        model.dataCreate,
        model.id,
        model.userId,
      ],
      (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(model);
        }
      }
    );
  });
};

const delTaskByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.run(`DELETE FROM TAREFAS WHERE ID = ?`, id, (erro) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve("Tarefa Deletada com sucesso");
      }
    });
  });
};

export { getTasks, postTask, getTaskByID, putTaskByID, delTaskByID };
