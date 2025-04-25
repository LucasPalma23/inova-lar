import { ExpressAuth } from "@auth/express";
import GoogleProvider from "@auth/core/providers/google";
import type { AuthConfig } from "@auth/core/types";
import { signInGoogle } from "../controllers/userPublic/googlePublicAuthController";
import { AdapterUser } from "@auth/core/adapters";

export const authConfig: AuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      if (!user.email || !user.name) return false;

      const adapterUser = user as AdapterUser;
      return signInGoogle(adapterUser);
    },
    async session({ session }) {
      return session;
    },
    async jwt({ token }) {
      return token;
    }
  }
}

export const auth = ExpressAuth(authConfig)
