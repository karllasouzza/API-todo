export default (app, db) => {
  app.get("/user/", (req, res) => getAllUsers(req, res, db));
  app.get("/user/:id", (req, res) => getUserByID(req, res, db));
  app.post("/user", (req, res) => createNewUser(req, res, db));
  app.patch("/user/:id", (req, res) => updateUserByID(req, res, db));
  app.delete("/user/:id", (req, res) => deleteUserByID(req, res, db));
};
