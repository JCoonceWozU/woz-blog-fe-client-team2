import React from "react";
import Head from "next/head";
import Link from "next/link";

const siteTitle = 'Woz U Next.js Blog Project Team 2';

export default function Layout({children, home}) {
    return (
        <div>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header>
                {home}
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
