import { Request, Response } from "express";
import { CreateCornellUseCase } from "./CreateCornellUseCase";

export class CreateCornellController {
    async handle(req: Request, res: Response) {
        const {materia, idea_princ, notes, resume } = req.body

        const createCornellUseCase = new CreateCornellUseCase();

        const result = await createCornellUseCase.execute({ 
            materia, idea_princ, notes, resume 
        });

        return res.status(201).json(result);

    }
}