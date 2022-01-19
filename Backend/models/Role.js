import { Schema, model } from "mongoose";

export const ROLES = ["user", "admin", "budgeter"];

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchema);
