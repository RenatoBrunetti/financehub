import { ViaCEPProvider } from '@providers/implementations/ViaCEPProvider';
import { AddressResolver } from './AddressResolver';

const viaCEP = new ViaCEPProvider();

const zipcode = { zipcode: '04094-050' };
const ibirapuera = {
  cep: '04094-050',
  logradouro: 'Avenida Pedro Álvares Cabral',
  complemento: '',
  bairro: 'Parque Ibirapuera',
  localidade: 'São Paulo',
  uf: 'SP',
  ibge: '3550308',
  gia: '1004',
  ddd: '11',
  siafi: '7107',
};

test('it should be Parque do Ibirapuera', async () => {
  const addressResolver = new AddressResolver(viaCEP);
  const address = await addressResolver.getAddress(zipcode);
  expect(address).toEqual(ibirapuera);
});
