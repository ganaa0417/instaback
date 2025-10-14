import mongoose from "mongoose";
import { Schema } from "mongoose";
const userSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  comment: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});
