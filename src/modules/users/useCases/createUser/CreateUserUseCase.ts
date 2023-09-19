import { User } from '@prisma/client'
import { prisma } from '../../../../prisma/client'
import { CreateUserDTO } from '../createUser/dtos/CreateUserDTO'

export class CreateUserUseCase {
    async execute({name, email}: CreateUserDTO): Promise<User> {
        
        const userAlreadyExist = await prisma.user.findUnique({
            where: {
                email,                
            }
        })

        if(userAlreadyExist) {
            // Error
        }

        const user = await prisma.user.create({
            data: {

            }
        })
    }
}