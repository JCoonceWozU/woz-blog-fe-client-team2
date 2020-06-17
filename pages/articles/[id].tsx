import {GetStaticPaths, NextPage} from "next";
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
            <title> {props.article.title} | Woz U Woz U Next.js Blog Project Team 2</title>
            <section>
                <h1>
                    <h1>Article: {props.article.title}</h1>
                </h1>

            </section>
            <section>
                <p>This section will display each individual article.</p>
                <p> {props.article.body} </p>
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
    const paths = ids.map(id => ({params: {id}}));
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params: {id}}) {
    const res = await fetch('http://localhost:8080/api/articles/${id}');
    const articles = await res.json()
    const article = articles.find(article => article.id === id)
    return {
        props: {
            article,
        }
    };
}

export default ArticlePage;

// props: {
//         title: article.title,
//         body: article.body
// }

