import { useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/api";

export default function Booking() {
  const location = useLocation();

  const [serviceType, setServiceType] = useState(
    location.state?.serviceType || ""
  );
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const createBooking = async () => {
    if (!serviceType || !address) {
      alert("All fields required");
      return;
    }

    setLoading(true);
    try {
      await api.post("/bookings", { serviceType, address });
      alert("Booking created successfully");
      setAddress("");
    } catch (err) {
      alert("Failed to create booking");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Book a Service</h2>

      <input
        className="w-full mb-4 px-4 py-2 border rounded"
        value={serviceType}
        disabled
      />

      <input
        className="w-full mb-4 px-4 py-2 border rounded"
        placeholder="Service Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <button
        onClick={createBooking}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        {loading ? "Booking..." : "Confirm Booking"}
      </button>
    </div>
  );
}
