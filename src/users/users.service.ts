import { Injectable } from '@nestjs/common';
import { UsersGateway } from './users.gateway';
import { CreateUserDto } from './interfaces/CreateUserDto';
import { DomainError } from '../valueObjects/DomainError';

@Injectable()
export class UsersService {
  constructor(private readonly usersGateway: UsersGateway) {}

  async create(user: CreateUserDto) {
    const email = user.email.value;
    if (this.usersGateway.findOne(email)) {
      throw new DomainError(`User ${email} already exists`);
    }
    return this.usersGateway.create(user);
  }
}
