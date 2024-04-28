// copy paste this file in profile.model.js
import mongoose from "mongoose";
const profileSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    year: {
      type: String,
      required: true,
      enum: ["First Year", "Second Year", "Third Year", "Fourth Year"],
    },
    communities: [
      {
        type: String,
        required: true,
        enum: ["Web Development", "AIML", "DSA", "College Curriculum"],
      },
    ],
  }, { timestamps: true });

  export const Profile = mongoose.model("Profile", profileSchema);