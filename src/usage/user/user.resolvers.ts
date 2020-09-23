import { MongodbUsersRepository } from '@repositories/implementations/MongodbUsersRepository';
import { CreateUserResolver } from './CreateUser/CreateUserResolver';
import { DeleteUserResolver } from './DeleteUser/DeleteUserResolver';

const mongodbUsersRepository = new MongodbUsersRepository();

export default {
  Mutation: {
    createUser: async (root, args, context) => {
      const createUser = new CreateUserResolver(mongodbUsersRepository);
      return await createUser.execute(args);
    },
    deleteUser: async (root, args, context) => {
      const deleteUser = new DeleteUserResolver(mongodbUsersRepository);
      return await deleteUser.execute(args);
    },
  },
};
