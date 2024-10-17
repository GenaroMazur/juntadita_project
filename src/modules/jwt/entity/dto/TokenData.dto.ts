export default class TokenDataDto {
  username: string;
  alias: string;

  constructor({ username, alias }: { username: string; alias: string }) {
    this.username = username;
    this.alias = alias;
  }
}
