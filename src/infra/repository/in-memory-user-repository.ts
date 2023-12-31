import { type UserRepository } from '../../usecases/ports/user-repository'
import { type UserData } from '../../usecases/user-data'

export class InMemoryUserRepository implements UserRepository {
  private readonly repository: UserData[]

  constructor (repository: UserData[]) {
    this.repository = repository
  }

  async add (user: UserData): Promise<void> {
    const exists = await this.exists(user)

    if (!exists) {
      this.repository.push(user)
    }
  }

  async findUserByEmail (email: string): Promise<UserData> {
    const users = this.repository.find(user => user.email === email)

    return users || null
  }

  async findAllUsers (): Promise<UserData[]> {
    return this.repository
  }

  async exists (user: UserData): Promise<boolean> {
    return !!await this.findUserByEmail(user.email)
  }
}
