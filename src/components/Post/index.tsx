import { useMemo } from "react";

interface PostProps {
    avatar?: string;
    username?: string;
    date?: string;
    content?: string;
}

export const Post = ({avatar, username, date, content}: PostProps) => {
    const fixedAvatar = useMemo(() => {
        return avatar ?? `https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_${Math.floor(Math.random() * 27 + 1)}.png`;
    }, [avatar]);

    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-center gap-2">
                <img
                    src={fixedAvatar}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full bg-neutral-300 dark:bg-neutral-700"
                />
                <div className="flex flex-col">
                    <span className="text-sm font-semibold">{username ?? 'undefined'}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        {date ?? 'undefined'}
                    </span>
                </div>
            </div>
            <p className="text-base text-gray-800 dark:text-gray-200">
                {content ?? 'This is a sample post content. It can be a short description or a longer text depending on the context.'}
            </p>
        </div>
    );
}