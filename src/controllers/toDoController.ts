import { idSchema, taskSchema, tasksListSchema, updateUserSchema } from "../schemas/taskSchema";
import * as taskService from "../services/task";
import { Request, Response } from "express";


/*        Criação         */

export async function createTask(req: Request, res: Response) {
    try {
        const result = taskSchema.parse(req.body);

        const newTask = await taskService.createTask(result);

        return res.status(200).json(newTask);
    }
    catch (err) {
        console.error(err);
        return res.status(400).json({ error: "dados inválidos", details: err });
    }
}


/*        Pesquisa         */

export async function getAllTask(req: Request, res: Response) {
    try {
        const tasks = await taskService.getAllTask();

        const result = tasksListSchema.parse(tasks);

        return res.json(result);

    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: "falha ao listar taks" })
    }

}


/*        Alteração         */

export async function changeTask(req: Request, res: Response) {

    const { id } = req.params;
    const taskId = Number(id);

    if (isNaN(taskId)) {
        return res.status(400).json({ message: "O ID da task deve ser um número" })
    }

    const parseResult = updateUserSchema.parse(req.body);

    const { newTitle, newDescription, newStatus } = parseResult;

    try {
        const changedTask = await taskService.changeTask(
            Number(taskId),
            newTitle,
            newDescription ?? '',
            newStatus);

        return res.status(200).json(changedTask);

    } catch (err) {
        res.status(400).json({ error: "Não foi possivel alterar as informações", err });
    }
}



/*        Exclusão         */

export async function deleteTask(req:Request, res: Response) {
    const { id } = req.params;
    const taskId = Number(id)

    if (isNaN(taskId)){
        res.status(400).json({message: "erro ao encontrar o id"})
    }

    try {
        const deletedTask = await taskService.deleteTask(taskId);
        res.status(200).json({message: "tarefa deletada com sucesso", deletedTask})
    }catch(err:any) {
        res.status(500).json({error: "erro ao deletar tarefa", err})
        return err
    }
}