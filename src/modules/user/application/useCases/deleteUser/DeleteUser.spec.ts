import { describe, it, expect } from 'vitest'
import { MakeDeleteUserController } from '../../factories/makeDeleteUserController'
import { InMemoryUserRepository } from '../../../../../infra/database/inMemory/inMemoryUserRepository'

describe('DeleteUser', () => {
  const userRepository = new InMemoryUserRepository()
  const deleteUserController = MakeDeleteUserController.make(userRepository)

  it('should be able to delete a user', async () => {
    userRepository.create({
      id: '1',
      username: 'johndoe',
      email: 'johndoe@email.com'
    })

    userRepository.create({
      id: '2',
      username: 'snowden',
      email: 'snowden@email.com'
    })

    expect(deleteUserController.handle('1')).resolves.not.toThrow()
  })

  it('should not be able to delete a user that does not exist', async () => {
    expect(deleteUserController.handle('10')).rejects.toThrow()
  })
})
