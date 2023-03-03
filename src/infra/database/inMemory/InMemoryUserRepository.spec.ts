import { describe, it, expect } from 'vitest'
import { InMemoryUserRepository } from './inMemoryUserRepository'
import { User } from '../../../modules/user/domain/entities/User'

describe('InMemoryUserRepository', async () => {
  it('should be able to create a user', () => {
    const userRepository = new InMemoryUserRepository()
    const data = { username: 'johndoe', email: 'johndoe@test.com' }

    expect(userRepository.create(data)).resolves.not.toThrow()
  })

  it('should be able to find a user by id', async () => {
    const userRepository = new InMemoryUserRepository()
    await userRepository.create({
      id: '1',
      username: 'johndoe',
      email: 'johndoe@test.com'
    })

    expect(userRepository.findById('1')).resolves.toBeInstanceOf(User)
  })

  it('should be able to find a user by email', async () => {
    const userRepository = new InMemoryUserRepository()
    await userRepository.create({
      username: 'johndoe',
      email: 'johndoe@test.com'
    })

    expect(userRepository.findByEmail('johndoe@test.com')).resolves.toBeInstanceOf(User)
  })

  it('should be able to delete a user', async () => {
    const userRepository = new InMemoryUserRepository()
    await userRepository.create({
      id: '1',
      username: 'johndoe',
      email: 'johndoe@test.com'
    })

    expect(userRepository.delete('1')).resolves.not.toThrow()
  })

  it('should be able to find many users', async () => {
    const userRepository = new InMemoryUserRepository()

    await userRepository.create({
      username: 'johndoe',
      email: 'johndoe@test.com'
    })

    await userRepository.create({
      username: 'snownden',
      email: 'snownden@test.com'
    })

    expect(userRepository.findMany()).resolves.toBeInstanceOf(Array<User>)
  })
})
