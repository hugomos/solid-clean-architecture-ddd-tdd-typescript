import { describe, expect, it } from 'vitest'
import { IUserDTO } from '../../../domain/dtos/IUserDTO'
import { User } from '../../../domain/entities/User'
import { InMemoryUserRepository } from '../../../../../infra/database/inMemory/inMemoryUserRepository'
import { MakeCreateUserController } from '../../factories/makeCreateUserController'

describe('Create User', () => {
  const userRepository = new InMemoryUserRepository()
  const createUserController = MakeCreateUserController.make(userRepository)

  it('should be able to create a user', () => {
    const data: IUserDTO = { username: 'johndoe', email: 'johndoe@test.com' }
    expect(new User(data)).toBeInstanceOf(User)
  })

  it('should be able to create a user by controller', async () => {
    const data: IUserDTO = { username: 'snowden', email: 'snowden@test.com' }
    expect(createUserController.handle(data)).resolves.not.toThrow()
  })

  it('cannot create a user with an email that already exists', async () => {
    const data: IUserDTO = { username: 'anonymous', email: 'anonymous@test.com' }
    userRepository.create(data)

    expect(createUserController.handle(data)).rejects.toThrow()
  })
})
