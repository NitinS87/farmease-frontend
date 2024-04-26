import React from "react";
import CustomLink from "./custom-link";
import { Button } from "./ui/button";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import { auth, signIn } from "@/auth";
import UserButton from "./user-button";

const UserNavbar = async ({
  lang,
  navigation,
}: {
  lang: Locale;
  navigation: Awaited<ReturnType<typeof getDictionary>>["navigation"];
}) => {
  const session = await auth();
  const user = session?.user;

  return <>{user ? <UserButton user={user} /> : <SignInButton />}</>;
};

function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  );
}

export default UserNavbar;
