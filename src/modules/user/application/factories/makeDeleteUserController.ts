import { IUserRepository } from '../../domain/repositories/IUserRepository'
import { DeleteUserController } from '../useCases/deleteUser/DeleteUserController'
import { DeleteUserUseCase } from '../useCases/deleteUser/DeleteUserUseCase'

export class MakeDeleteUserController {
  constructor() { }

  static make(userRepository: IUserRepository): DeleteUserController {
    const deleteUserUseCase = new DeleteUserUseCase(userRepository)
    return new DeleteUserController(deleteUserUseCase)
  }
}
