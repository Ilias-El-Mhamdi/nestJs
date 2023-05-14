import { Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Email } from '../valueObjects/Email';
import { Password } from '../valueObjects/Password';
import { PresentableUser } from '../valueObjects/PresentableUser';

@Controller('')
export class AuthController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  async signup(): Promise<PresentableUser> {
    return new PresentableUser(
      await this.usersService.create({
        email: new Email('bob@gmail.com'),
        password: new Password('Bob1!1235'),
      }),
    );
  }
}
