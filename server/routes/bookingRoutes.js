import { Router } from "express";
import auth from "../middleware/authMiddleware.js";

import {
  createBooking,
  getProviderBookings,
  acceptBooking,
  completeBooking,
  cancelBooking,
  getBookingHistory
} from "../controllers/bookingController.js";

const router = Router();


router.post("/", auth(["CUSTOMER"]), createBooking);


router.get("/provider", auth(["PROVIDER"]), getProviderBookings);


router.post("/:id/accept", auth(["PROVIDER"]), acceptBooking);
router.post("/:id/complete", auth(["PROVIDER"]), completeBooking);

router.post("/:id/cancel", auth(["CUSTOMER", "PROVIDER"]), cancelBooking);


router.get("/:id/history", auth(), getBookingHistory);

export default router;
