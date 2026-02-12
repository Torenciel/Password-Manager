import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-950 border-b border-gray-800">
      <div className="mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="ml-2 text-lg font-semibold text-white">
          Password Manager
        </Link>

        {/* Navigation */}
        <div className="mr-2 flex gap-6 text-sm items-center">
          {isAuthenticated && (
            <>
              <NavLink
                to="/vault"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-400"
                    : "text-gray-300 hover:text-white"
                }
              >
                Vault
              </NavLink>

              <button
                className="cursor-pointer text-gray-300 hover:text-white"
                onClick={logout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
