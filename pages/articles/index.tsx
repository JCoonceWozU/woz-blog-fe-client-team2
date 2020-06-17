import React from "react";
import {NextPage, GetStaticProps} from "next";
import Link from "next/link";
import {useRouter} from "next/router";
import useSWR from "swr";

// this is the articles list page: "/articles"
const Articles: NextPage<{
    articles: {
        id: long;
        slug: string;
        title: string;
        body: string;
    }[];
}> = props => {
    return (
        <div>
            <title>'Woz U Next.js Blog Project Team 2'</title>
            <section>
                <h1>
                    <h1>Articles</h1>
                </h1>
            </section>
            <section>
                <p>This section will display Article titles with links to each [id].</p>
            </section>
            <section>
                <ul>
                    {props.articles.map(article => {
                        return (
                            <li key={article.id}>
                                <Link as={`/articles/${article.id}`} href={`/articles/[id]`}>
                                    {article.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>

        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:8080/api/articles')
    const articles = await res.json()
    return {
        props: {articles}
    };
}

export default Articles;
