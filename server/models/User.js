import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["CUSTOMER", "PROVIDER", "ADMIN"],
    required: true
  },
  isAvailable: { type: Boolean, default: true }
});

export default mongoose.model("User", userSchema);
