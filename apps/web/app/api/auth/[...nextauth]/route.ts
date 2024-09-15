import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "@repo/db/dist/index.js";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(client),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "text", label: "email" },
        password: { type: "text", label: "password" },
      },
      async authorize(credentials: { email: string; password: string }) {
        if (!credentials.email || !credentials.password) {
          return null;
        }
        console.log(credentials);
        const user = await client.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) {
          return null;
        }
        const verifyPassword = await bcrypt.compare(
          credentials.password,
          user?.password
        );
        if (verifyPassword) {
          return user;
        }
        if (!verifyPassword) {
          return null;
        }
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "secret",
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
