import React from "react";
import Link from "next/link";
import useSWR from "swr";

// this is the home page: "/"

const fetcher = url => fetch(url).then(res => res.json())

const Home = () => {

    const [ session, loading ] = useSession()

    const {data, error} = useSWR(`http://localhost:8080/api/articles/`, fetcher)

    if (error) return <div>Failed to load articles</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <title>'Woz U Next.js Blog Project Team 2'</title>
            <section>
                <h1>
                    <p>'Woz U Next.js Blog Project Team 2'</p>
                </h1>
            </section>
            <section>
                <h2>
                    <Link as={`/articles/`} href={`/articles/`}>
                        <a>All Articles</a>
                    </Link>
                </h2>
            </section>
            <section>
                <p>
                    {!session && <>
                        Not signed in <br/>
                        <a href="./api/auth/signin">Sign in</a>
                    </>}
                    {session && <>
                        Signed in as {session.user.email} <br/>
                        <a href="./api/auth/signout">Sign out</a>
                    </>}
                </p>

                <p>Display Article titles with snippets and links to each [id] below:</p>
                <h3>{data.map(article => {
                    return (
                        <p key={article.id}>
                            <Link as={`/articles/${article.id}`} href={`/articles/[id]`}>
                                <a>{article.title}</a>
                            </Link>
                        </p>
                    );
                })}</h3>
            </section>
            <section>
                {data.map(article => {
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

export default Home;
