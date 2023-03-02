import { IUserDTO } from '../../../domain/dtos/IUserDTO'
import { IUserRepository } from '../../../domain/repositories/IUserRepository'
import { ICreateUserUseCase } from '../../../domain/useCases/ICreateUserUseCase'

export class CreateUserUseCase extends ICreateUserUseCase {
  constructor(userRepository: IUserRepository) {
    super(userRepository)
  }

  async execute(user: IUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(user.email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    await this.userRepository.create(user)
  }
}
