import { useNavigate } from "react-router-dom";

export default function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/booking", {
      state: { serviceType: service.name }
    });
  };

  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">
        {service.name}
      </h3>

      <p className="text-gray-600 mb-4">
        {service.description}
      </p>

      <button
        onClick={handleBook}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Book Now
      </button>
    </div>
  );
}
