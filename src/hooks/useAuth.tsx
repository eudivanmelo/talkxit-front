"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  access: string | null;
  refresh: string | null;
  setAccess: (token: string | null) => void;
  setRefresh: (token: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuthProvider() {
  const [access, setAccess] = useState<string | null>(() =>
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null
  );
  const [refresh, setRefresh] = useState<string | null>(() =>
    typeof window !== "undefined" ? localStorage.getItem("refreshToken") : null
  );

  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccess(null);
    setRefresh(null);
  }

  useEffect(() => {
    if (access) localStorage.setItem("accessToken", access);
    else localStorage.removeItem("accessToken");
  }, [access]);
  useEffect(() => {
    if (refresh) localStorage.setItem("refreshToken", refresh);
    else localStorage.removeItem("refreshToken");
  }, [refresh]);

  return { access, refresh, setAccess, setRefresh, logout };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const value = useAuthProvider();
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
