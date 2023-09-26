import { Request, Response } from "express";
import { CreateFlashCardsUseCase } from "./CreateFlashCardsUseCase";

export class CreateFlashCardsController {
    async handle(req: Request, res: Response) {
        const { materia, resume } = req.body;

        const createFlashCardsUseCase = new CreateFlashCardsUseCase();

        const result = await createFlashCardsUseCase.execute({materia, resume});

        return res.status(201).json({result});
    }
}