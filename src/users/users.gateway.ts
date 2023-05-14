import { User } from './users.entity';
import { CreateUserDto } from './interfaces/CreateUserDto';

export class UsersGateway {
  users: User[] = [];

  findOne(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  create(user: CreateUserDto): User {
    const newUser = new User(user.password, user.email);
    this.users.push(newUser);
    return newUser;
  }

  delete(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
