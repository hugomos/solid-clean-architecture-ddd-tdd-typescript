import { IUserRepository } from '../../../domain/repositories/IUserRepository'
import { IDeleteUserUseCase } from '../../../domain/useCases/IDeleteUserUseCase'

export class DeleteUserUseCase extends IDeleteUserUseCase {
  constructor(readonly userRepository: IUserRepository) {
    super(userRepository)
  }

  async execute(id: string): Promise<void> {
    const userExists = await this.userRepository.findById(id)

    if (!userExists) {
      throw new Error('User does not exists')
    }

    await this.userRepository.delete(id)
  }
}
