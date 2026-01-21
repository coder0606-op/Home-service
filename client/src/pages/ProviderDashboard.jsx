import { useEffect, useState } from "react";
import api from "../api/api";
import BookingCard from "../components/BookingCard";

export default function ProviderDashboard() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await api.get("/bookings/provider");
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const acceptBooking = async (id) => {
    await api.post(`/bookings/${id}/accept`);
    fetchBookings();
  };

  const completeBooking = async (id) => {
    await api.post(`/bookings/${id}/complete`);
    fetchBookings();
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4">
      <h2 className="text-2xl font-bold mb-6">My Assigned Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings assigned</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {bookings.map(booking => (
            <BookingCard
              key={booking._id}
              booking={booking}
              onAccept={acceptBooking}
              onComplete={completeBooking}
            />
          ))}
        </div>
      )}
    </div>
  );
}
