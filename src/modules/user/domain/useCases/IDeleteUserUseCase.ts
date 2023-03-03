import { IUserRepository } from '../repositories/IUserRepository'

export abstract class IDeleteUserUseCase {
  readonly userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  abstract execute(id: string): Promise<void>
}
