import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Layout from "../../components/common/Layout";

// this is the articles list page: "/articles"
const fetcher = url => fetch(url).then(res => res.json())

const Articles = () => {

    const { data, error } = useSWR(`http://localhost:8080/api/articles/`, fetcher)

    if (error) return <div>Failed to load articles</div>
    if (!data) return <div>Loading...</div>

    return (
        <Layout>
            <title>'Woz U Next.js Blog Project Team 2'</title>
            <section>
                <h1>
                    <p>Articles</p>
                </h1>
            </section>
            <section>
                <p>This section will display Article titles with links to each [id].</p>
            </section>
            <section>
                <ul>
                    {data.map(article => {
                        return (
                            <li key={article.id}>
                                <Link as={`/articles/${article.id}`} href={`/articles/[id]`}>
                                    <a>{article.title}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>

        </Layout>
    )
}

export default Articles;
