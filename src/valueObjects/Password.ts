type PasswordValidationResult = {
  isValid: boolean;
  reasons: string[];
};

export class Password {
  readonly _value: string;

  constructor(password: string) {
    const validationResult = this.validatePassword(password);
    if (!validationResult.isValid) {
      throw new Error(
        `[DOMAIN_ERROR_400] Invalid password: ${validationResult.reasons.join(
          ', ',
        )}`,
      );
    }
    this._value = password;
  }

  get value(): string {
    return this._value;
  }

  private validatePassword(password: string): PasswordValidationResult {
    const reasons: string[] = [];
    if (!/(?=.*[a-z])/.test(password)) {
      reasons.push('it must contain at least one lowercase letter');
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      reasons.push('it must contain at least one uppercase letter');
    }
    if (!/(?=.*\d)/.test(password)) {
      reasons.push('it must contain at least one digit');
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      reasons.push('it must contain at least one special character');
    }
    if (!/^.{8,}$/.test(password)) {
      reasons.push('it must be at least 8 characters long');
    }
    return {
      isValid: reasons.length === 0,
      reasons,
    };
  }
}
