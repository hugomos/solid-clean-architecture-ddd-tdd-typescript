import { IDeleteUserUseCase } from '../../../domain/useCases/IDeleteUserUseCase'

export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: IDeleteUserUseCase) {
    this.deleteUserUseCase = deleteUserUseCase
  }

  async handle(id: string): Promise<void> {
    await this.deleteUserUseCase.execute(id)
  }
}
