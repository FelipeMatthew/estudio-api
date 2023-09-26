import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { 
            email,
            name,
            password,
            grau_form,
            temp_form, 
            qtd_mat,
            dat_inicio,
            dat_final,
        } = req.body;

        const createUserUseCase = new CreateUserUseCase();

        // Vai rodar o query
        const result = await createUserUseCase.execute({
            email,
            name,
            password,
            grau_form,
            temp_form,
            qtd_mat,
            dat_inicio,
            dat_final,
        });

        return res.status(201).json(result);
    }
}