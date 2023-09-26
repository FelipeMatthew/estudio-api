import { Request, Response } from "express";
import { DeleteCornellUseCase } from "./DeleteCornellUseCase";
import { AppError } from "../../../../errors/AppError";



export class DeleteCornellController {
    async handle(req: Request, res: Response) {

        const { id } = req.params;

        const deleteCornellUseCase = new DeleteCornellUseCase();

        await deleteCornellUseCase.execute(Number(id))

        const message = `User ${id} excluido com sucesso`;

        return res.status(201).json({message});

    }
}