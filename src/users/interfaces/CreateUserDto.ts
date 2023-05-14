import { Email } from '../../valueObjects/Email';
import { Password } from '../../valueObjects/Password';

export type CreateUserDto = {
  email: Email;
  password: Password;
};
