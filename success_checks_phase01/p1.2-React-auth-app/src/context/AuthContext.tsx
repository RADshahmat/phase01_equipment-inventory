// src/context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext not found");
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  // fake login logic
  const login = (email: string, password: string): boolean => {
    // simple fake validation
    if (email === "admin@test.com" && password === "1234") {
      const fakeUser: User = { email };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};