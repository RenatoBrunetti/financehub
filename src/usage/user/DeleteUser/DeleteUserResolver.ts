import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { IDeleteUserInput } from './DeleteUserDTO';

export class DeleteUserResolver {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: IDeleteUserInput): Promise<any> {
    try {
      const userAlreadyExists = await this.usersRepository.findByEmail(
        data.email,
      );
      if (!userAlreadyExists) {
        throw new Error('Non-existent user.');
      }

      await this.usersRepository.remove(userAlreadyExists);

      return 'User deleted successfully.';
    } catch (error) {
      return error;
    }
  }
}
