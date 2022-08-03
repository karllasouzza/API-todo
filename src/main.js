import express from "express";
const app = express();

app.use(express.json());

import { Tarefas } from "./controllers/Tarefas.js";
import { Usuarios } from "./controllers/Usuarios.js";

Tarefas(app);
Usuarios(app);

app.listen(4000, () => {
  console.log("app listen: http://localhost:4000");
});
