export interface Post {
    id: number;
    author_id: number;
    content: string;
    created_at: string;
    updated_at: string;
}

export interface Comment {
    id: number;
    post_id: number;
    author_id: number;
    content: string;
    created_at: string;
}