import { Request, Response } from "express";
import { ReadByIdCornellUseCase } from "./ReadByIdCornellUseCase";



export class ReadByIdCornellController {
    async handle(req: Request, res: Response) {

        const { id } = req.params;

        const readByIdCornellUseCase = new ReadByIdCornellUseCase();

        const result = await readByIdCornellUseCase.execute(Number(id));

        return res.status(201).json(result);

    }
}