import {
  getAllTasks,
  getTaskByID,
  getTaskByUserID,
  createNewTask,
  updateTaskByID,
  deleteTaskByID,
} from "../controllers/Tasks_C.js";

export default (app, db) => {
  app
    .route("/task")
    .get((_, res) => getAllTasks(res, db))
    .post((req, res) => createNewTask(req, res, db));

  app
    .route("/task/:id")
    .get((req, res) => getTaskByID(req, res, db))
    .patch((req, res) => updateTaskByID(req, res, db))
    .delete((req, res) => deleteTaskByID(req, res, db));

  app
    .route("/task/user/:userID")
    .get((req, res) => getTaskByUserID(req, res, db));
};
