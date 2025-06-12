"use client";

import { Card } from "@/components/Card";
import { PostCard } from "@/components/PostCard";
import { PostInput } from "@/components/PostInput";
import { Title } from "@/components/Title";
import { usePosts } from "@/hooks/usePosts";

export default function Feed() {
    const { data: Posts } = usePosts();
    
    return (
        <div className="grid items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col items-center sm:items-start w-full gap-3">
                <Card>
                    <Title />
                    <hr className="my-4 w-full border-neutral-200 dark:border-neutral-700" />

                    <PostInput />
                </Card>

                <hr className="md:w-100 sm:w-50 self-center border-neutral-100 dark:border-neutral-800" />

                {Posts && Posts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                    />
                ))}

            </main>
        </div>
    );
}