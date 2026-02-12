import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/vault");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center mt-48">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg space-y-6">
        <h1 className="text-2xl font-semibold text-gray-100">Login</h1>

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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 rounded hover:bg-indigo-500"
          >
            Login
          </button>
        </form>

        <div className="text-sm text-center space-y-2">
          <p className="text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
