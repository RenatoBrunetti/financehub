import { ViaCEPProvider } from '@providers/implementations/ViaCEPProvider';
import { AddressResolver } from './AddressResolver';

const viaCEP = new ViaCEPProvider();

export default {
  Query: {
    getAddress: async (root, args, context) => {
      const addressResolver = new AddressResolver(viaCEP);
      return await addressResolver.getAddress(args);
    },
  },
};
