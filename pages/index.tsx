import React from "react";
import Link from "next/link";

// this is the home page: "/"

const Home = ({articles}) => {
    return (
        <div>
            <title>'Woz U Next.js Blog Project Team 2'</title>
            <section>
                <h1>
                    'Woz U Next.js Blog Project Team 2'
                </h1>
            </section>
            <section>
                <h2>
                    <Link as={`/articles/`} href={`/articles/`}>
                        All Articles
                    </Link>
                </h2>
            </section>
            <section>
                <p>Display Article titles with snippets and links to each [id] below:</p>
                <p>{articles.map(article => {
                    return (
                        <h3 key={article.id}>
                            <Link as={`/articles/${article.id}`} href={`/articles/[id]`}>
                                {article.title}
                            </Link>
                        </h3>
                    );
                })}</p>
            </section>
            <section>
                {articles.map(article => {
                    return (
                        <p key={article.body}>
                            {article.body}
                        </p>
                    );
                })}
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


export default Home;
