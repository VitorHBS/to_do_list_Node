import  Router  from "express";
import { createTask, getAllTask } from "../controllers/toDoController";

export const mainRouter = Router();

mainRouter.post("/task", createTask);

mainRouter.get("/task", getAllTask)