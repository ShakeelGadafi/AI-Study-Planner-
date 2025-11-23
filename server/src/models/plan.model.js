import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    hoursPerDay: {
      type: Number,
      required: true,
    },
    howManyDays: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },
    generatedPlan: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Plan = mongoose.model("Plan", planSchema);