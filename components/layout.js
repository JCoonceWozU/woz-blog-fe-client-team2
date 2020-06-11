import Head from 'next/head'
import React from "react";

export const siteTitle = 'Woz U Next.js Blog Project Team 2'

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
        </div>
    )
}
