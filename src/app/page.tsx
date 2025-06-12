"use client";

import { Card } from "@/components/Card";
import { Comments } from "@/components/Comments";
import { Interactions } from "@/components/Interactions";
import { Post } from "@/components/Post";
import { PostCard } from "@/components/PostCard";
import { PostInput } from "@/components/PostInput";
import { Title } from "@/components/Title";
import { useState } from "react";

export default function Home() {
  return (
    <div className="grid items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start w-full gap-3">
        <Card>
          <Title />
          <hr className="my-4 w-full border-neutral-200 dark:border-neutral-700" />

          <PostInput />
        </Card>

        <hr className="md:w-100 sm:w-50 self-center border-neutral-100 dark:border-neutral-800" />
        
        <PostCard
          post={{
            avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png",
            username: "Alohe",
            date: "2023-10-01",
            content: "Este é um exemplo de post. Você pode adicionar mais conteúdo aqui.",
            comments: [
              {
                username: "Usuário 1",
                date: "2023-10-02",
                avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_2.png",
                text: "Este é um comentário de exemplo."
              },
              {
                username: "Usuário 2",
                date: "2023-10-03",
                avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png",
                text: "Outro comentário interessante."
              }
            ]
          }}
        />

        <PostCard
          post={{
            avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png",
            username: "Alohe",
            date: "2023-10-01",
            content: "Este é um exemplo de post. Você pode adicionar mais conteúdo aqui.",
            comments: [

            ]
          }}
        />
      </main>
    </div>
  );
}
