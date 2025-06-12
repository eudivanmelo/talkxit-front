"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { access } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!access) {
      router.replace("/login");
    }
  }, [access, router]);

  if (!access) return null;
  return <>{children}</>;
}
