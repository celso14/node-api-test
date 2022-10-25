import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();


export const questions = async (req:Request, res:Response) => {
    console.log(await prisma.question.findMany());
    const lista = await prisma.question.findMany();
    res.json(lista);
}