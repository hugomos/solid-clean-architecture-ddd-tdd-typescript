import { IUserDTO } from './../dtos/IUserDTO'
import { uuid as uuidv4 } from 'uuidv4'

export class User {
  private readonly id: string
  public username: string
  public email: string

  constructor(data: Omit<IUserDTO, 'id'>, id?: string) {
    this.username = data.username
    this.email = data.email
    this.id = id || uuidv4()
  }
}
