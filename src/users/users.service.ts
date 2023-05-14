import { Injectable } from '@nestjs/common';
import { UsersGateway } from './users.gateway';
import { CreateUserDto } from './interfaces/CreateUserDto';

@Injectable()
export class UsersService {
  constructor(private readonly usersGateway: UsersGateway) {}

  async create(user: CreateUserDto) {
    const email = user.email.value;
    if (this.usersGateway.findOne(email)) {
      throw new Error(`[DOMAIN_ERROR_400] User ${email} already exists`);
    }
    return this.usersGateway.create(user);
  }
}
