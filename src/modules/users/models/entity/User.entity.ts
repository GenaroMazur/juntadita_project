export default class UserEntity {
  alias: string;

  username: string;
  email: string;
  password?: string;

  emailValidated: boolean;

  createdAt!: Date;
  updatedAt!: Date;

  constructor({
    alias,
    username,
    email,
    password,
    emailValidated,
  }: {
    alias: string;
    username: string;
    email: string;
    password: string;
    emailValidated: boolean;
  }) {
    this.alias = alias;
    this.username = username;
    this.email = email;
    this.password = password;
    this.emailValidated = emailValidated;
  }
}
