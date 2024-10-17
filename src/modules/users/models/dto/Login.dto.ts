export default class LoginDto {
  identifier: string;
  password: string;

  constructor({
    identifier,
    password,
  }: {
    identifier: string;
    password: string;
  }) {
    this.identifier = identifier;
    this.password = password;
  }
}
