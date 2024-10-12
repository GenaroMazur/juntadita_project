import UserEntity from "../../../users/models/entity/User.entity";

export default class GroupEntity {
  id: number;
  name: string;

  users: UserEntity[];

  constructor({
    id,
    name,
    users,
  }: {
    id: number;
    name: string;
    users: UserEntity[];
  }) {
    this.id = id;
    this.name = name;
    this.users = users;
  }
}
