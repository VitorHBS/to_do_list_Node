import { Prisma } from "../generated/prisma/client";
import { prisma } from "../libs/prisma";


export const createTask = async (data: Prisma.TaskCreateInput) => {
    const task = await prisma.task.create({
        data
    })
    return task;
}