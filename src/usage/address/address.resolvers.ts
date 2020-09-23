import { ViaCEPProvider } from '@providers/implementations/ViaCEPProvider';
import { GetAddressResolver } from './GetAddress/GetAddressResolver';

const viaCEP = new ViaCEPProvider();

export default {
  Query: {
    getAddress: async (root, args, context) => {
      const getAddressResolver = new GetAddressResolver(viaCEP);
      return await getAddressResolver.byZipcode(args);
    },
  },
};
