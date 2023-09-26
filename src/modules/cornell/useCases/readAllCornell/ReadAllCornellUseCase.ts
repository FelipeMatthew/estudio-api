import { Cornell } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class ReadAllCornellUseCase{
    async execute() : Promise<Cornell | any> {

        const readAllCornell = prisma.cornell.findMany();

        if((await readAllCornell).length < 1) {
            throw new AppError('Nenhum usuário cadastrado', 401);
        }

        return readAllCornell;

    }
}