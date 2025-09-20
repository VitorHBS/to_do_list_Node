import  Router  from "express";
import { changeTask, createTask, deleteTask, getAllTask } from "../controllers/toDoController";

export const mainRouter = Router();

mainRouter.post("/task", createTask);

mainRouter.get("/task", getAllTask)

mainRouter.put("/task/:id", changeTask)

mainRouter.delete("/task/:id", deleteTask)