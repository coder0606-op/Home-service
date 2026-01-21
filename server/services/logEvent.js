import BookingEvent from "../models/BookingEvent.js";

const logEvent = async (eventData) => {
  await BookingEvent.create(eventData);
};

export default logEvent;
