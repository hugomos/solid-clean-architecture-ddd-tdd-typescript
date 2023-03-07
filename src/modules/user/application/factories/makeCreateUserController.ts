import { IUserRepository } from '../../domain/repositories/IUserRepository'
import { CreateUserController } from '../useCases/createUser/CreateUserController'
import { CreateUserUseCase } from '../useCases/createUser/CreateUserUseCase'

export class MakeCreateUserController {
  constructor() { }

  static make(userRepository: IUserRepository): CreateUserController {
    const createUserUseCase = new CreateUserUseCase(userRepository)
    return new CreateUserController(createUserUseCase)
  }
}
