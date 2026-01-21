import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

export default function BookingHistory() {
  const { id } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get(`/bookings/${id}/history`).then(res => {
      setEvents(res.data);
    });
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Booking History</h2>

      <ol className="relative border-l border-gray-300">
        {events.map((event, index) => (
          <li key={index} className="mb-6 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full"></span>

            <p className="font-semibold">
              {event.action}
            </p>

            <p className="text-sm text-gray-500">
              By: {event.actorRole}
            </p>

            <p className="text-xs text-gray-400">
              {new Date(event.timestamp).toLocaleString()}
            </p>

            {event.reason && (
              <p className="text-red-500 text-sm">
                Reason: {event.reason}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
