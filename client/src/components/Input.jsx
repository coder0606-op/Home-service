export default function Input({ label, type = "text", value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
