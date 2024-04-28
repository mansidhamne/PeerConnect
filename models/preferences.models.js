import mongoose from "mongoose";

const preferenceSchema = new mongoose.Schema({
    community: {
        type: String,
        required: true,
        enum: [
            "Web Development",
            "AIML",
            "DSA",
            "College"
        ]
    }
}, { timestamps: true });

export const Preference = mongoose.model("Preference", preferenceSchema);
