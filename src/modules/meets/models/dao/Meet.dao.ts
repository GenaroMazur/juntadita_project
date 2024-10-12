import mongoose, { Schema } from "mongoose";
import MeetEntity from "../entity/Meet.entity";

const MeetSchema = new Schema<MeetEntity>(
  {
    id: { type: Number, unique: true, auto: true },
    date: { type: Date, required: true },
    users: { type: [mongoose.Types.ObjectId], ref: "User", default: [] },
    name: { type: String, required: true },
    groups: { type: [mongoose.Types.ObjectId], ref: "Group", default: [] },
  },
  { versionKey: false }
);

const Meet = mongoose.model<MeetEntity>("Meet", MeetSchema, "Meet");

export default Meet;
