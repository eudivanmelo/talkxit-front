import { useState } from "react";
import { Card } from "@/components/Card";
import { Post } from "@/components/Post";
import { Interactions } from "@/components/Interactions";
import { Comments } from "@/components/Comments";
import { Comment, Post as PostModel } from "@/models/post";

interface PostCardProps {
  post: PostModel;
}

export function PostCard({ post }: PostCardProps) {
  const comments: Comment[] = []
  const [showAllComments, setShowAllComments] = useState(false);

  const handleShowAllComments = () => setShowAllComments((v) => !v);

  const handleComment = (text: string) => {
    console.log("Novo comentário:", text);
  };

  return (
    <Card>
      <Post
        username={''}
        date={post.created_at}
        content={post.content}
      />
      <hr className="my-4 w-full border-neutral-200 dark:border-neutral-700" />
      <Interactions likes={0} comments={comments.length} onComment={handleShowAllComments} />
      <hr className="my-4 w-full border-neutral-200 dark:border-neutral-700" />
      <Comments
        comments={comments}
        expanded={showAllComments}
        onComment={handleComment}
      />
    </Card>
  );
}