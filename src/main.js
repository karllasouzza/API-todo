import express from "express";
import cors from "cors";

const app = express();

// Middlewares
//  Cors
const corsConfig = {
  origin: "*",
};
app.use(cors(corsConfig));
app.use(express.json());

// Routers
import { Tarefas } from "./controllers/Tarefas.js";
import { Usuarios } from "./controllers/Usuarios.js";

Tarefas(app);
Usuarios(app);

app.listen(4000, () => {
  console.log("app listen: http://localhost:4000");
});
