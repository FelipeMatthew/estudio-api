import { Cornell } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateCornellDTO } from "../../dtos/CreateCornellDTO";
import { AppError } from "../../../../errors/AppError";

export class UpdateCornellUseCase {
    async execute(id: number, {materia, idea_princ, notes, resume} : CreateCornellDTO) : Promise<Cornell> {

        const findUser = await prisma.cornell.findUnique({
            where: { id: Number(id)}
        })

        if(!findUser) {
            throw new AppError('Usuário não encontrado', 401)
        }
        
        const cornellUpdate = prisma.cornell.update({
            where: {
                id: Number(id),
            },
            data: {
                materia,
                idea_princ,
                notes,
                resume,
            }
        })

        return cornellUpdate;

    }
}