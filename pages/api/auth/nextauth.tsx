import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    site: process.env.SITE || 'http://localhost:3000',

    // Configure one or more authentication providers
    providers: [
        Providers.Okta({
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret
        }),
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL || 'http://localhost:8080/api/',
}

export default (req, res) => NextAuth(req, res, options)
