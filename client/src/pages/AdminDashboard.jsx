import { useEffect, useState } from "react";
import api from "../api/api";
import AdminBookingRow from "../components/AdminBookingRow";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await api.get("/bookings/admin");
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const assignProvider = async (id) => {
    await api.post(`/bookings/${id}/assign`);
    fetchBookings();
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Provider</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <AdminBookingRow
                key={b._id}
                booking={b}
                onAssign={assignProvider}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
