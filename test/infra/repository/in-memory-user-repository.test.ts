import { InMemoryUserRepository } from '../../../src/infra/repository/in-memory-user-repository'
import { type UserData } from '../../../src/usecases/user-data'

describe('In memory user repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepository = new InMemoryUserRepository(users)
    const user = await userRepository.findUserByEmail('any@mail.com')
    expect(user).toBeNull()
  })

  test('should return user if it is found in the repository', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@mail.com'

    const userRepository = new InMemoryUserRepository(users)
    await userRepository.add({ name, email })
    const user = await userRepository.findUserByEmail('any@mail.com')

    expect(user.name).toBe('any_name')
  })

  test('should return all users in the repository', async () => {
    const users: UserData[] = [{ name: 'first_user', email: 'fist@mail.com' }, { name: 'second_user', email: 'second@mail.com' }]

    const userRepository = new InMemoryUserRepository(users)
    const returnedUsers = await userRepository.findAllUsers()

    expect(returnedUsers.length).toBe(2)
  })
})
