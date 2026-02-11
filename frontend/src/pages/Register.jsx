export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center mt-48">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg space-y-6">
        <h1 className="text-2xl font-semibold text-gray-100">Create account</h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          />

          <input
            type="password"
            placeholder="Master password"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          />

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          />

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
