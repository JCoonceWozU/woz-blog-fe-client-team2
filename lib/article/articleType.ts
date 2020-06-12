export interface Article {
    article: ArticleType;
}

export type ArticleType = {
    id: number;
    slug: string;
    title: string;
    description: string;
    body: string;
};
