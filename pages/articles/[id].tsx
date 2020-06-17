import {NextPage} from "next";
import Link from "next/link";
import React from "react";

type Data = {
    id: long;
    slug: string;
    title: string;
    body: string;
    description: string;
};

const ArticlePage: NextPage<{ data: Data }> = props => {


    return (
        <div>
            <title> </title>
            <section>
                <h1>
                    <h1>Article</h1>
                </h1>
            </section>
            <section>
                <p>This section will display each individual article.</p>
            </section>
            <section>

            </section>

        </div>
    )
}

export default ArticlePage;
