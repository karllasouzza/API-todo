export const Usuarios = (app) => {
  app.get("/usuarios", (req, res) => {
    res.send("devolver todos os usuarios");
  });

  app.post("/usuarios", (req, res) => {
    console.log(req.body)
    res.send(`O usuario ${req.body.name} foi criado.`);
  });
};
