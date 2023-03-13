import NextAuth from "next-auth";
import { authOptions } from "~/server/auth";
import FacebookProvider from "next-auth/providers/facebook";

providers: [
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
    })
  ]

export default NextAuth(authOptions);
