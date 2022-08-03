import { Tasks_M } from "../models/Tasks_M.js";
import { Result_M } from "../models/Result_M.js";

const getAllTasks = (res, db) => {
  try {
    res.status(200).json(new Result_M(db, false));
  } catch (error) {
    res.status(400).json({ message: error.message, error: true });
  }
};

const getTaskByID = (req, res, db) => {
  try {
    const dataFilter = db.filter((task) => task.id === req.params.id);
    res.status(200).json(new Result_M(dataFilter, false));
  } catch (error) {
    res.status(400).json({ message: error.message, error: true });
  }
};

const getTaskByUserID = (req, res, db) => {
  try {
    const dataFilter = db.filter(
      (task) => task.userId === parseInt(req.params.userID)
    );
    res.status(200).json(new Result_M(dataFilter, false));
  } catch (error) {
    res.status(400).json({ message: error.message, error: true });
  }
};

const createNewTask = (req, res, db) => {
  try {
    const { outsideUserID, outsideText, outsideStatus } = req.body;

    const dataMolded = new Tasks_M(outsideUserID, outsideText, outsideStatus);
    db.push(dataMolded);
    res.status(201).json(new Result_M(dataMolded, false));
  } catch (error) {
    res.status(400).json({ message: error.message, error: true });
  }
};

const updateTaskByID = (req, res, db) => {};
const deleteTaskByID = (res, db) => {};

export {
  getAllTasks,
  getTaskByID,
  getTaskByUserID,
  createNewTask,
  updateTaskByID,
  deleteTaskByID,
};
