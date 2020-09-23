import { IZipcodeProvider } from '@providers/IZipcodeProvider';
import { IZipcode } from './GetAddressDTO';

export class GetAddressResolver {
  constructor(private zipcodeProvider: IZipcodeProvider) {}

  async byZipcode({ zipcode }: IZipcode): Promise<any> {
    return await this.zipcodeProvider.getAddressByZipcode(zipcode);
  }
}
