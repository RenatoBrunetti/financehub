import { AddressResolver } from './AddressResolver';
import { ViaCEPProvider } from '../../providers/implementations/ViaCEPProvider';

const viaCEP = new ViaCEPProvider();

export default {
  Query: {
    getAddress: async (root, args, context) => {
      const addressResolver = new AddressResolver(viaCEP);
      return await addressResolver.getAddress(args);
    },
  },
};
