import { IUserDTO } from '../dtos/IUserDTO'
import { IUserRepository } from '../repositories/IUserRepository'

export abstract class CreateUserUseCase {
  readonly userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  abstract execute(user: IUserDTO): Promise<void>
}
