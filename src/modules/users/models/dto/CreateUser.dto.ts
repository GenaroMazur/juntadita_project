export default class CreateUserDto {
  username: string;
  email: string;
  password: string;

  constructor({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
