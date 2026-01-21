import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import api from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await api.post("/auth/login", { email, password });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);

    if (res.data.role === "CUSTOMER") navigate("/services");
    if (res.data.role === "PROVIDER") navigate("/provider");
    if (res.data.role === "ADMIN") navigate("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <Input
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button text="Login" onClick={handleLogin} />

  
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
