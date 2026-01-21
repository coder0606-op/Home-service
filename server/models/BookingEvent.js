import mongoose from "mongoose";

const bookingEventSchema = new mongoose.Schema({
  bookingId: mongoose.Schema.Types.ObjectId,
  action: String,
  fromStatus: String,
  toStatus: String,
  actorRole: String,
  reason: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("BookingEvent", bookingEventSchema);
