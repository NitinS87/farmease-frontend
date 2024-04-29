import React, { FC } from "react";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import Chat from "@/components/chat";

export const dynamic = "force-dynamic";

type ChatPageProps = {
  params: {
    lang: Locale;
  };
};

const ChatPage: FC<ChatPageProps> = async ({ params }) => {
  const { chat } = await getDictionary(params.lang);

  return <Chat chat={chat} />;
};

export default ChatPage;
