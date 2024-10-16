import mongoose, { Schema } from "mongoose";
import GroupEntity from "../entity/Group.entity";

const GroupSchema = new Schema<GroupEntity>(
  {
    id: { type: Number, unique: true, auto: true },
    name: { type: String, required: true },
    users: { type: [mongoose.Types.ObjectId], ref: "User", default: [] },
  },
  { versionKey: false },
);

const Group = mongoose.model<GroupEntity>("Group", GroupSchema, "Group");

export default Group;
