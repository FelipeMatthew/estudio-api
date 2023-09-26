import { Cornell } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class ReadByIdCornellUseCase {
    async execute(id: Number) : Promise<Cornell | null>  {
            const cornellReadById = await prisma.cornell.findUnique({
                where: {
                    id: Number(id)
                }
            })
    
            // fazer validação de tipo
            if (!cornellReadById) {
               throw new AppError('Id não encontrado', 401);
            }

            return cornellReadById;
    }
}