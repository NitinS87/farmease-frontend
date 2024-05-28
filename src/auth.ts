import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/schema";
import { ZodError } from "zod";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./utils/prisma";
import { getUserFromDb } from "./utils/db";
import { saltAndHashPassword } from "./lib/password";
import { Adapter } from "next-auth/adapters";

export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [
    Google,
    // Facebook,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials, req) => {
        try {
          let user = null;

          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          // logic to salt and hash password
          const pwHash = await saltAndHashPassword(password);

          // logic to verify if user exists
          user = await getUserFromDb(email, pwHash);

          if (!user) {
            throw new Error("User not found.");
          }

          // return json object with the user data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
          throw error;
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
});
