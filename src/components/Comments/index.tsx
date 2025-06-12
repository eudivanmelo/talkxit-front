"use client";

import { Comment } from "@/models/post";
import { useState } from "react";

interface CommentsProps {
    comments: Comment[];
    expanded?: boolean;
    onComment?: (text: string) => void;
}

export const Comments = ({ comments, expanded = false, onComment }: CommentsProps) => {
    const [input, setInput] = useState("");

    const handleComment = () => {
        if (input.trim() && onComment) {
            onComment(input);
            setInput("");
        }
    };

    const visibleComments = expanded ? comments : comments.slice(0, 1);

    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-center gap-2 w-full mt-2">
                <input
                    className="flex-1 p-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Adicionar um comentário..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleComment(); }}
                />
                <button
                    className="px-4 py-2 bg-yellow-800 text-white rounded-lg hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-800 dark:focus:ring-yellow-800"
                    onClick={handleComment}
                >
                    Comentar
                </button>
            </div>
            {visibleComments.length > 0 ? (
                visibleComments.map((comment, idx) => (
                    <div key={idx} className="flex flex-col gap-2 w-full rounded-2xl bg-neutral-500 dark:bg-neutral-900 p-3">
                        <div className="flex items-center gap-2 ">
                            <img
                                src={"https://via.placeholder.com/40"}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full bg-neutral-300 dark:bg-neutral-700"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">{'Fulano de Tal'}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{comment.created_at}</span>
                            </div>
                        </div>
                        <p className="text-base text-gray-800 dark:text-gray-200">{comment.content}</p>
                    </div>
                ))
            ) : (
                <span className="text-sm text-gray-500">Nenhum comentário ainda.</span>
            )}
        </div>
    );
}