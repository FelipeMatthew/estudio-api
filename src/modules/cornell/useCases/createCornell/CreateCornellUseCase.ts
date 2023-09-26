import { Cornell } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateCornellDTO } from "../../dtos/CreateCornellDTO";

export class CreateCornellUseCase {
    async execute({materia, idea_princ, notes, resume} : CreateCornellDTO) : Promise<Cornell> {

        const cornellCreate = prisma.cornell.create({
            data: {
                materia,
                idea_princ,
                notes,
                resume,
            }
        })

        return cornellCreate;

    }
}