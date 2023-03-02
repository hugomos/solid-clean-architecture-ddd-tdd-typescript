import { IUserDTO } from '../dtos/IUserDTO'

export interface IUserRepository {
  create(data: IUserDTO): Promise<void>

  delete(id: string): Promise<void>

  findMany(): Promise<IUserDTO[]>

  findById(id: string): Promise<IUserDTO | null>

  findByEmail(email: string): Promise<IUserDTO | null>
}
