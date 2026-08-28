import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 80
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      maxlength: 160,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email address"]
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: 5,
      maxlength: 4000
    },
    fileName: {
      type: String,
      trim: true,
      default: ""
    },
    userAgent: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

export default mongoose.models.Message || mongoose.model("Message", messageSchema);
