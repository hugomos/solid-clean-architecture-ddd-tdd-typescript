import { IUserDTO } from './../dtos/IUserDTO'
import { uuid as uuidv4 } from 'uuidv4'

export class User {
  readonly id: string
  public username: string
  public email: string

  constructor(data: IUserDTO) {
    this.id = data.id ?? uuidv4()
    this.username = data.username
    this.email = data.email
  }
}
