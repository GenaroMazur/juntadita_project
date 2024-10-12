import GroupEntity from "../../../groups/models/entity/Group.entity";
import UserEntity from "../../../users/models/entity/User.entity";

export default class MeetEntity {
  id: number;
  name: string;

  groups: GroupEntity[];
  users: UserEntity[];

  date: Date;

  constructor({
    id,
    name,
    groups,
    users,
    date,
  }: {
    id: number;
    name: string;
    groups: GroupEntity[];
    users: UserEntity[];
    date: Date;
  }) {
    this.id = id;
    this.name = name;
    this.groups = groups;
    this.users = users;
    this.date = date;
  }
}
