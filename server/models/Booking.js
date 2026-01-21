import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  serviceType: String,
  address: String,
  status: {
    type: String,
    enum: ["PENDING","ASSIGNED","IN_PROGRESS","COMPLETED","CANCELLED","FAILED"],
    default: "PENDING"
  },
  retryCount: { type: Number, default: 0 },
  assignedAt: Date
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
