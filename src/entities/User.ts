import { v4 } from 'uuid';

export class User {
  public readonly _id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, '_id'>, _id?: string) {
    Object.assign(this, props);

    // if (!_id) this._id = v4();
  }
}
