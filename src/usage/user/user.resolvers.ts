import { CreateUserResolver } from './CreateUser/CreateUserResolver';
import { MongodbUsersRepository } from '../../repositories/implementations/MongodbUsersRepository';

const mongodbUsersRepository = new MongodbUsersRepository();

export default {
  Mutation: {
    createUser: async (root, args, context) => {
      const createUser = new CreateUserResolver(mongodbUsersRepository);
      return await createUser.execute(args);
    },
  },
};
