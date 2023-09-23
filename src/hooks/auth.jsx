import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@rocketfoods: user", JSON.stringify(user));
      localStorage.setItem("@rocketfoods: token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user,
      });
    } catch (error) {
      error.response
        ? alert(error.response.data.message)
        : alert("Não foi possível entrar.");
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketfoods:user");
    localStorage.removeItem("@rocketfoods:token");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketfoods:token");
    const user = localStorage.getItem("@rocketfoods:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
