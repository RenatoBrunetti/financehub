export interface IAxiosResponse {
  status: boolean;
  result?: any;
  error?: Error;
  httpErrorCode?: number;
  httpErrorMessage?: string;
}
