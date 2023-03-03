import { describe, expect, it } from 'vitest'
import { IUserDTO } from '../../../domain/dtos/IUserDTO'
import { User } from '../../../domain/entities/User'
import { MakeCreateUserController } from '../../factories/makeCreateUserController'

describe('Create User', () => {
  it('should be able to create a user', () => {
    const data: IUserDTO = { username: 'johndoe', email: 'johndoe@test.com' }
    expect(new User(data)).toBeInstanceOf(User)
  })

  it('should be able to create a user by controller', async () => {
    const data: IUserDTO = { username: 'johndoe', email: 'johndoe@test.com' }
    const createUserController = MakeCreateUserController.make()

    expect(createUserController.handle(data)).resolves.not.toThrow()
  })

  it('cannot create a user with an email that already exists', async () => {
    const data: IUserDTO = { username: 'johndoe', email: 'johndoe@test.com' }
    const createUserController = MakeCreateUserController.make()

    await createUserController.handle(data)
    expect(createUserController.handle(data)).rejects.toThrow()
  })
})
