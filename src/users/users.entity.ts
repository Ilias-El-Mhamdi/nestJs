import { v4 as uuid } from 'uuid';
import { Password } from '../valueObjects/Password';
import { Email } from '../valueObjects/Email';

export class User {
  id: string;
  password: string;
  email: string;

  constructor(password: Password, email: Email) {
    this.id = uuid();
    this.password = password.value;
    this.email = email.value;
  }
}
