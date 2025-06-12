import { useState } from "react";
import { Card } from "@/components/Card";
import { Post } from "@/components/Post";
import { Interactions } from "@/components/Interactions";
import { Comments } from "@/components/Comments";

interface Comment {
  username: string;
  date: string;
  avatarUrl: string;
  text: string;
}

interface PostCardProps {
  post: {
    avatar?: string;
    username?: string;
    date?: string;
    content?: string;
    comments: Comment[];
  };
}

export function PostCard({ post }: PostCardProps) {
  const [showAllComments, setShowAllComments] = useState(false);

  const handleShowAllComments = () => setShowAllComments((v) => !v);

  const handleComment = (text: string) => {
    console.log("Novo comentário:", text);
  };

  return (
    <Card>
      <Post
        avatar={post.avatar}
        username={post.username}
        date={post.date}
        content={post.content}
      />
      <hr className="my-4 w-full border-neutral-200 dark:border-neutral-700" />
      <Interactions likes={0} comments={post.comments.length} onComment={handleShowAllComments} />
      <hr className="my-4 w-full border-neutral-200 dark:border-neutral-700" />
      <Comments
        comments={post.comments}
        expanded={showAllComments}
        onComment={handleComment}
      />
    </Card>
  );
}