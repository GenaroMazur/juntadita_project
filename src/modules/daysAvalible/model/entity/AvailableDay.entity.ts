import UserEntity from "../../../users/models/entity/User.entity";

export default class AvailableDayEntity {
  user: UserEntity;
  date: Date;
  from: Date;
  to: Date;
  reserved: true;

  constructor({
    user,
    date,
    from,
    to,
    reserved,
  }: {
    user: UserEntity;
    date: Date;
    from: Date;
    to: Date;
    reserved: true;
  }) {
    this.user = user;
    this.date = date;
    this.from = from;
    this.to = to;
    this.reserved = reserved;
  }
}
