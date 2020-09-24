import { v4 } from 'uuid';

export class User {
  public readonly _id?: string;
  public readonly __v?: number;

  public name: string;
  public email: string;
  public document: string;
  public password: string;
  public status: boolean;

  constructor(props: Omit<User, '_id, __v'>, _id?: string, __v?: number) {
    Object.assign(this, props);
    if (!this.status) this.status = false;
    // if (!_id) this._id = v4();
  }
}
