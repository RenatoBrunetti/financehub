import { AxiosProvider } from '../../core/implementations/AxiosProvider';
import { IZipcodeProvider } from '../IZipcodeProvider';

export class ViaCEPProvider implements IZipcodeProvider {
  private axiosProvider;

  constructor() {
    this.axiosProvider = new AxiosProvider();
  }

  async getAddressByZipcode(zipcode): Promise<void> {
    const url = `http://viacep.com.br/ws/${zipcode}/json/`;
    const request = await this.axiosProvider.get(url);
    if (request && request.status) {
      return request.result;
    } else {
      console.log('>>> Error');
    }
  }
}
