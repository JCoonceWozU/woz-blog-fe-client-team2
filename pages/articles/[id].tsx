import {NextPage} from "next";
import Link from "next/link";
import React from "react";

const ArticlePage: NextPage<{
    id: long;
    slug: string;
    title: string;
    body: string;
    description: string;
}> = props => {
    return (
        <div>
            <title> </title>
            <section>
                <h1>
                    <h1>Article: {props.title}</h1>
                </h1>

            </section>
            <section>
                <p>This section will display each individual article.</p>
                <p> {props.body} </p>
            </section>
            <section>

            </section>

        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:8080/api/articles/${id}')
    const articles = res.json();
    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({ params: { id } }));
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps( {params: { id } } ) {
    const res = await fetch('http://localhost:8080/api/articles/${id}');
    const articles= await res.json()
    const article = articles.find(article => article.id === id)
    return {
        props: {
            title: article.title,
            body: article.body,
        }
    };
}

export default ArticlePage;
