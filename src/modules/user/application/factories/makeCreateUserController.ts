import { InMemoryUserRepository } from '../../../../infra/database/inMemory/inMemoryUserRepository'
import { CreateUserController } from '../useCases/createUser/CreateUserController'
import { CreateUserUseCase } from '../useCases/createUser/CreateUserUseCase'

export class MakeCreateUserController {
  constructor() { }

  static make(): CreateUserController {
    const inMemoryUserRepository = new InMemoryUserRepository()
    const createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
    return new CreateUserController(createUserUseCase)
  }
}
