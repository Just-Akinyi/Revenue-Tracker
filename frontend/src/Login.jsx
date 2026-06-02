import { useState } from "react";
import api from "./api";

export default function Login({ onLoginSuccess, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.access_token);
      onLoginSuccess();
    } catch (err) {
      setError(err.response?.data?.detail || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in to LedgerAI</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <div className="rounded-md shadow-sm space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Email address"
            />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Password"
            />
          </div>
          <div className="flex gap-4">
            <button type="button" onClick={onBack} className="w-1/2 py-2 border rounded-lg hover:bg-gray-50">
              Back
            </button>
            <button type="submit" className="w-1/2 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}