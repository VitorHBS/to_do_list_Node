import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";
import { id } from "zod/locales";


       /*        Criação         */

export const createTask = async (data: Prisma.TaskCreateInput) => {
    const task = await prisma.task.create({
        data: {
            title: data.title,
            description: data.description ?? null,
            status: data.status ?? "pending"
        }
    })
    return task;
}

        /*        Pesquisa         */

export const getAllTask = async () => {
    const tasks = await prisma.task.findMany()

    return tasks;
}

/*        Atualização         */

export const changeTask = async (idTask: number, newTitle: string, newDescription: string, newStatus: string) => {
    const changeTask = await prisma.task.update({
        where:{
            id: idTask
        },
        data: {
            title: newTitle,
            description: newDescription ?? null,
            status: newStatus
        }
    })

    return changeTask;
}

/*        Exclusão         */
