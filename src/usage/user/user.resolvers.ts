import { MongodbUsersRepository } from '../../repositories/implementations/MongodbUsersRepository';
import { CreateUserResolver } from './CreateUser/CreateUserResolver';

const mongodbUsersRepository = new MongodbUsersRepository();

export default {
  Mutation: {
    createUser: async (root, args, context) => {
      const createUser = new CreateUserResolver(mongodbUsersRepository);
      return await createUser.execute(args);
    },
  },
};
