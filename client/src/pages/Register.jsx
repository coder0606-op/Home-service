import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import api from "../api/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "CUSTOMER"
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    await api.post("/auth/register", form);
    alert("Registration successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <Input label="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })} />

        <Input label="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })} />

        <Input label="Password"
          type="password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })} />

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Role</label>
          <select
            className="w-full px-4 py-2 border rounded"
            onChange={e => setForm({ ...form, role: e.target.value })}
          >
            <option value="CUSTOMER">Customer</option>
            <option value="PROVIDER">Provider</option>
          </select>
        </div>

        <Button text="Register" onClick={handleRegister} />
      </div>
    </div>
  );
}
