import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({ where: { email: String(credentials.email) } });
        if (!user) return null;

        const matches = await bcrypt.compare(String(credentials.password), user.password);
        if (!matches) return null;

        return { id: user.id, email: user.email, name: user.nickname };
      }
    })
  ],
  pages: {
    signIn: "/auth/login"
  }
});
