import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("freshmart_token")) {
      setReady(true);
      return;
    }
    api("/auth/me/")
      .then(setUser)
      .catch((error) => {
        if (error.status === 401) localStorage.removeItem("freshmart_token");
      })
      .finally(() => setReady(true));
  }, []);
  async function login(email, password, admin = false) {
    const data = await api("/auth/login/", {
      method: "POST",
      body: { email, password },
    });
    if (admin && !data.user.is_staff)
      throw new Error("This account does not have administrator access.");
    localStorage.setItem("freshmart_token", data.token);
    setUser(data.user);
  }
  async function logout() {
    // The backend has no logout endpoint; logging out means forgetting the token.
    localStorage.removeItem("freshmart_token");
    setUser(null);
    window.location.hash = "/";
  }
  return (
    <AuthContext.Provider value={{ user, ready, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
