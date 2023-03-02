import { IUserDTO } from '../../domain/dtos/IUserDTO'
import { ICreateUserUseCase } from '../../domain/useCases/ICreateUserUseCase'

export class CreateUserController {
  constructor(private readonly createUserUseCase: ICreateUserUseCase) {
    this.createUserUseCase = createUserUseCase
  }

  async handle(data: IUserDTO): Promise<void> {
    await this.createUserUseCase.execute(data)
  }
}
