import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github'
export default NextAuth ({
    providers: [
        GitHubProvider({
            clientId: 'd8eb4b3e17ffadb1380a',
            clientSecret: '14369ea69a7f993ffe28bc19ed33ab694571babc'
        })
    ]
})