export default function BookingCard({ booking, onAccept, onComplete }) {
  return (
    <div className="border rounded p-4 shadow">
      <p><b>Service:</b> {booking.serviceType}</p>
      <p><b>Address:</b> {booking.address}</p>
      <p><b>Status:</b> {booking.status}</p>

      <div className="mt-4 flex gap-3">
        {booking.status === "ASSIGNED" && (
          <button
            onClick={() => onAccept(booking._id)}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Accept
          </button>
        )}

        {booking.status === "IN_PROGRESS" && (
          <button
            onClick={() => onComplete(booking._id)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
}
