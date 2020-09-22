import axios, { AxiosResponse, AxiosError } from 'axios';
import { IAxiosResponse } from '../IAxiosProvider';

export class AxiosProvider {
  private service;

  constructor() {
    let service = axios.create({
      headers: {},
    });
    this.service = service;
  }

  async get(path) {
    return await this.service
      .get(path)
      .then((response: AxiosResponse) => this.buildSuccessResponse(response))
      .catch((error: AxiosError) => this.builFailedResponse(error));
  }

  private buildSuccessResponse(rawResponse: AxiosResponse): IAxiosResponse {
    return {
      status: true,
      result: rawResponse.data,
    };
  }

  private builFailedResponse(error: AxiosError): IAxiosResponse {
    return {
      status: false,
      error,
      httpErrorCode: error.response?.status ?? 500,
      httpErrorMessage: error.response?.statusText ?? 'NO STATUS TEXT FROM API',
    };
  }
}
