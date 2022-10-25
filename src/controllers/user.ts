import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const findUser = async () => {
    const email = 'celso@email.com';
    await prisma.user.findUnique({
        where: {
            email: email
        }
    })
}