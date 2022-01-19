import { Schema, model } from "mongoose";

const materialSchema = new Schema(
  {
    materialId: {
      type: String,
    },
    codigo: {
      type: String,
    },
    descripcion: {
      type: String,
    },
    unidad: {
      type: String,
    },
    valorunit: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("material", materialSchema);
