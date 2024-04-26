import { signOut } from "next-auth/react";

export async function logout(): Promise<void> {
  "use server";
  await signOut();
}
