export interface Comments {
    comments: CommentType[];
}

export type CommentType = {
    id: number;
    body: string;
    article: number;
    author: string;
};