import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import React from "react";
import Link from "next";

export async function getStaticProps() {
    const res = await fetch('https://localhost:8080/api/articles/')
    const allArticles = res.json();
    return {
        props: {
            allArticles,
        }
    }
}

// this is the home page
export default function Home({allArticles}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section>
                <h1>
                    {siteTitle}
                </h1>
            </section>
            <section>
                <p>This section will display Article cards with routes to [id].</p>
                <h2>Articles</h2>
                <ul>
                    {allArticles.map(({id, date, title}) => (
                        <li key={id}>
                            <Link href="./articles/[id]" as={`/articles/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <small>
                                {/*// make a date component*/}
                                {/*<Date dateString={date} />*/}
                            </small>
                        </li>
                    ))}
                </ul>

            </section>

        </Layout>
    )
}

