import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // TEMP: fake auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Later: check JWT on app load
  useEffect(() => {
    // Example (future):
    // const token = localStorage.getItem("token");
    // if (token) setIsAuthenticated(true);
  }, []);

  function login(fakeUser = { email: "user@test.com" }) {
    setIsAuthenticated(true);
    setUser(fakeUser);
  }

  function logout() {
    setIsAuthenticated(false);
    setUser(null);
    // localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
