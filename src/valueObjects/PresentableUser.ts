import { User } from '../users/users.entity';

export class PresentableUser {
  readonly id: string;
  readonly email: string;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
  }
}
