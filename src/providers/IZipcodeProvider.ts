export interface IFullAddress {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface IZipcodeProvider {
  getAddressByZipcode(zipcode: string): Promise<void>;
}
