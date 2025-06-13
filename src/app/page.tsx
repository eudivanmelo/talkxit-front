"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { access } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (access) router.replace("/feed");
    else router.replace("/login");
  }, [access, router]);

  return null;
}
