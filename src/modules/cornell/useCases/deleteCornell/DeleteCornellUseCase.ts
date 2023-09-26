import { Cornell } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class DeleteCornellUseCase {
    async execute(id: Number) : Promise<Cornell | null>  {
            const deleteCornell = await prisma.cornell.delete({
                where: {
                    id: Number(id)
                }
            })
    
            // fazer validação de tipo
            if (!id) {
               throw new AppError('Id não encontrado', 401);
            }

            return deleteCornell;
    }
}