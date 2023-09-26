import { User } from '@prisma/client'
import { prisma } from '../../../../prisma/client'
import { CreateUserDTO } from '../../dtos/CreateUserDTO'
import { AppError } from '../../../../errors/AppError'

export class CreateUserUseCase {
    async execute({
        name,
        email, 
        password,
        grau_form,
        temp_form,
        qtd_mat,
        dat_inicio,
        dat_final
    }: CreateUserDTO): Promise<User> {
        
        // Verificar se existe o usuário.
        const userAlreadyExist = await prisma.user.findUnique({
            where: {
                email,                
            }
        })

        if(userAlreadyExist) {
            throw new AppError('User Already exist', 401)
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
                grau_form,
                temp_form,
                qtd_mat,
                dat_inicio,
                dat_final
            }
        })

        return user;
    }
}