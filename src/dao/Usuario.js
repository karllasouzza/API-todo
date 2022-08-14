import bd from "../infra/sqlite-db.js";

const getUsers = () => {
  return new Promise((resolve, reject) => {
    bd.all("SELECT * FROM USUARIOS", (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const postUser = (model) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `INSERT INTO USUARIOS(ID, NOME, EMAIL, SENHA)
          VALUES (?,?,?,?)`,
      [model.id, model.name, model.email, model.password],
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

const getUserByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.all(`SELECT * FROM USUARIOS WHERE ID = ?`, id, (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const putUserByID = (model) => {
  return new Promise((resolve, reject) => {
    bd.run(
      `UPDATE USUARIOS 
            SET NOME = ?, EMAIL = ?, SENHA = ? 
              WHERE ID = ?`,
      [model.name, model.email, model.password, model.id],
      (erro, rows) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(model);
        }
      }
    );
  });
};

const delUserByID = (id) => {
  return new Promise((resolve, reject) => {
    bd.run(`DELETE FROM USUARIOS WHERE ID = ?`, id, (erro) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve("Usuario Deletada(o,e) com sucesso");
      }
    });
  });
};

export { getUsers, postUser, getUserByID, putUserByID, delUserByID };
