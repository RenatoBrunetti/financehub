import { User } from '../../../entities/User';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { ICreateUserInput } from './CreateUserDTO';

export class CreateUserResolver {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserInput): Promise<any> {
    try {
      const userAlreadyExists = await this.usersRepository.findByEmail(
        data.email,
      );
      if (userAlreadyExists) {
        throw new Error('User already exists.');
      }

      const user = new User(data);
      await this.usersRepository.save(user);

      return 'User created successfully.';
    } catch (error) {
      return error;
    }
  }
}
