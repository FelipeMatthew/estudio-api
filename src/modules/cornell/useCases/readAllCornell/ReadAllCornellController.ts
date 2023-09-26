import { Request, Response } from "express";
import { ReadAllCornellUseCase } from "./ReadAllCornellUseCase";

export class ReadAllCornellController {
    async handle(req: Request, res: Response) {
        const readAllCornellUseCase = new ReadAllCornellUseCase();

        const result = await readAllCornellUseCase.execute();

        return res.status(201).json(result);

    }
}