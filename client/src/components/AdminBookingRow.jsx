export default function AdminBookingRow({ booking, onAssign }) {
  return (
    <tr className="border-b">
      <td className="p-3">{booking.serviceType}</td>
      <td className="p-3">{booking.address}</td>
      <td className="p-3">{booking.status}</td>
      <td className="p-3">
        {booking.providerId ? "Assigned" : "Not Assigned"}
      </td>
      <td className="p-3">
        {booking.status === "PENDING" && (
          <button
            onClick={() => onAssign(booking._id)}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Assign
          </button>
        )}
      </td>
    </tr>
  );
}
