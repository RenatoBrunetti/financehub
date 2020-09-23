import { IZipcodeProvider } from '@providers/IZipcodeProvider';
import { IZipcode } from './AddressDTO';

export class AddressResolver {
  constructor(private zipcodeProvider: IZipcodeProvider) {}

  async getAddress({ zipcode }: IZipcode): Promise<any> {
    return await this.zipcodeProvider.getAddressByZipcode(zipcode);
  }
}
