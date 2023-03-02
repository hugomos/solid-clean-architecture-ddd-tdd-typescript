import { IUserDTO } from '../../../domain/dtos/IUserDTO'
import { User } from '../../../domain/entities/User'
import { IUserRepository } from '../../../domain/repositories/IUserRepository'

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = []

  async create(data: IUserDTO): Promise<void> {
    const user = new User(data)
    this.users.push(user)
  }

  async delete(email: string): Promise<void> {
    const listWithARemovedUser = this.users.filter(user => user.email !== email)
    this.users = listWithARemovedUser
  }

  async findMany(): Promise<IUserDTO[]> {
    return [...this.users]
  }

  async findById(id: string): Promise<IUserDTO | null> {
    const user = this.users.find(user => user.id === id)
    return user || null
  }

  async findByEmail(email: string): Promise<IUserDTO | null> {
    const user = this.users.find(user => user.email === email)
    return user || null
  }
}
