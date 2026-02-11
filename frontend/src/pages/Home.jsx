import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center mt-48">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg space-y-6">
        <h1 className="text-2xl font-semibold text-gray-100">Login</h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          />

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 rounded hover:bg-indigo-500"
          >
            Login
          </button>
        </form>

        {/* Links */}
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

          <p>
            <Link
              to="/forgot-password"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Forgot your password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
