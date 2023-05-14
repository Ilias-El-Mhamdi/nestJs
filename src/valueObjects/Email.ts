import { DomainError } from './DomainError';

export class Email {
  readonly _value: string;

  constructor(email: string) {
    if (!Email.isValid(email)) {
      throw new DomainError('Invalid email format');
    }
    this._value = email;
  }

  get value(): string {
    return this._value;
  }

  static isValid(email: string): boolean {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  }
}
