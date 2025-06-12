"use client";
import RequireAuth from "@/components/RequireAuth";
import Feed from "@/screens/Feed";

export default function FeedPage() {
  return (
    
    <RequireAuth>
      <Feed />
    </RequireAuth>
  );
}
