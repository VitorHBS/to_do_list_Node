import  Router  from "express";
import { changeTask, createTask, getAllTask } from "../controllers/toDoController";

export const mainRouter = Router();

mainRouter.post("/task", createTask);

mainRouter.get("/task", getAllTask)

mainRouter.put("/task/:id", changeTask)