import { FlashCards } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateFlashCardsDTO } from "../../dtos/CreateFlashCardsDTO";

export class CreateFlashCardsUseCase {
    async execute({ materia, resume }: CreateFlashCardsDTO) : Promise<FlashCards> {
        
        const createFlashCards = prisma.flashCards.create({
            data: {
                materia,
                resume
            }
        })

        return createFlashCards;
    }
}