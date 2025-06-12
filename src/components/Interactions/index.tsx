"use client";

import { FC, useState } from "react";

interface InteractionsProps {
    likes?: number;
    comments?: number;
    onLike?: () => void;
    onComment?: () => void;
}

export const Interactions: FC<InteractionsProps> = ({
    likes = 0,
    comments = 0,
    onLike,
    onComment,
}) => {
    const [ liked, setLiked ] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        if (onLike) {
            onLike();
        }
    };

    const handleComment = () => {
        if (onComment) {
            onComment();
        }
    };

    return (
        <div className="flex flex-row items-center gap-6 w-full">
            <button
                className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200 hover:text-yellow-600 focus:outline-none"
                onClick={handleLike}
                aria-label={liked ? "Descurtir" : "Curtir"}
            >
                {liked ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="oklch(47.6% 0.114 61.907)"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="oklch(47.6% 0.114 61.907)"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                )}
                <span>{likes}</span>
            </button>
            <button
                className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200 hover:text-yellow-600 focus:outline-none"
                onClick={handleComment}
                aria-label="Comentar"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="oklch(47.6% 0.114 61.907)"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>{comments}</span>
            </button>
        </div>
    );
};