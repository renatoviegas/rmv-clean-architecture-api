import { type UserData } from '../../../src/usecases/user-data'

describe('Register user on mailing list use case', () => {
  test('Should add user with complete data to mailing list', async () => {
    const users: UserData[] = []
    console.log(users)
    // const repository: UserRepository = new InMemoryUserRepository(users)
    // const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repository)
    // const name = 'any_name'
    // const email = 'any@email.com'
    // const response = await usecase.registerUserOnMailingList({ name, email })
    // const user = repository.findUserByEmail(email)
    // expect((await user).name).toBe('any_name')
  })
})
