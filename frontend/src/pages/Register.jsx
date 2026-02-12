import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await apiFetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
        }),
      });

      alert("Compte créé !");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center mt-48">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg space-y-6">
        <h1 className="text-2xl font-semibold text-gray-100">Create account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          />

          <input
            type="password"
            placeholder="Master password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 rounded hover:bg-indigo-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
