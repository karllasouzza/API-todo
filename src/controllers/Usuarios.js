import UsuarioM from "../models/Usuario.js";
import {
  delUserByID,
  getUserByID,
  getUsers,
  postUser,
  putUserByID,
} from "../dao/Usuario.js";

export const Usuarios = (app) => {
  app.get("/usuarios", async (req, res) => {
    try {
      const data = await getUsers();
      res.status(200).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }
  });

  app.post("/usuario", async (req, res) => {
    const { nome, email, senha } = req.body;

    const dataMolded = new UsuarioM(nome, email, senha);
    console.log(dataMolded);
    try {
      const data = await postUser(dataMolded);
      res.status(201).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }
  });

  app.get("/usuario/:id", async (req, res) => {
    try {
      const data = await getUserByID(req.params.id);
      res.status(200).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }
  });

  app.put("/usuario/:id", async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.params;

    const oldUser = await getUserByID(id);
    const dataMolded = new UsuarioM(
      nome || oldUser[0].NOME,
      email || oldUser[0].EMAIL,
      senha || oldUser[0].SENHA,
      id
    );

    try {
      const data = await putUserByID(dataMolded);
      res.status(201).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }
  });

  app.delete("/usuario/:id", async (req, res) => {
    try {
      const data = await delUserByID(req.params.id);
      res.status(200).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }
  });
};
