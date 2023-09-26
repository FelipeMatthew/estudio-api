import { Request, Response } from "express";
import { UpdateCornellUseCase } from "./UpdateCornellUseCase";



export class UpdateCornellController {
    async handle(req: Request, res: Response) {

        const { id } = req.params;
        const { materia, idea_princ, notes, resume } = req.body;

        const updateCornellUseCase = new UpdateCornellUseCase();

        const result = await updateCornellUseCase.execute(
            Number(id), 
            {
                materia,
                idea_princ,
                notes,
                resume
        });

        const message = "Usuário atualizado com sucesso.";
        
        return res.status(201).json({ message, result });
    }
}