import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Layout from "../components/common/Layout";
import utilStyles from "../styles/utils.module.css";

// this is the home page: "/"

const fetcher = url => fetch(url).then(res => res.json())

const Home = () => {

    const {data, error} = useSWR(`http://localhost:8080/api/articles/`, fetcher)

    if (error) return <div>Failed to load articles</div>
    if (!data) return <div>Loading...</div>

    return (
        <Layout home>
            <h1>Welcome to Team 2's Next.js Blog</h1>
            <h2>
                Articles:
            </h2>
            <article className={utilStyles.articles}>
                <p>Display Article titles with snippets and links to each [id] below:</p>
                <h3>{data.map(article => {
                    return (
                        <p key={article.id}>
                            <Link as={`/articles/${article.id}`} href={`/articles/[id]`}>
                                <a>{article.title}</a>
                            </Link>
                        </p>
                    );
                })}
                </h3>
                <section>
                    {data.map(article => {
                        return (
                            <p key={article.body}>
                                {article.body}
                            </p>
                        );
                    })}
                </section>
            </article>
        </Layout>
    )
}

export default Home;
