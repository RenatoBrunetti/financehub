import { User } from '@entities/User';
import { IUsersRepository } from '../IUsersRepository';
import UserModel from './mongodb/User';

export class MongodbUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<any> {
    return await UserModel.findOne({ email });
  }

  async findByDocument(document: string): Promise<any> {
    return await UserModel.findOne({ document });
  }

  async save(user: User): Promise<void> {
    const userModel = new UserModel(user);
    userModel.save();
  }

  async remove(user: User): Promise<void> {
    const { document } = user;
    UserModel.findOneAndDelete({ document }, (err) => {
      if (err) throw new Error('Delete user error.');
    });
  }
}
