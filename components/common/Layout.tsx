import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from './layout.module.css'

const siteTitle = 'Woz U Next.js Blog Project Team 2';

export default function Layout({children, home}) {
    return (
        <div className={styles.layout}>
            <Head>
                <title className={styles.title}>{siteTitle}</title>
            </Head>
            <header>
                <NavBar/>
            </header>
            <main>
                <div className={styles.container}>
                    {children}
                </div>
            </main>
            <Footer/>
        </div>
    )
}
