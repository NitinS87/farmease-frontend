"use client";
import React, { useState } from "react";

import { MemoizedReactMarkdown } from "@/components/markdown";

import { Button } from "@/components/ui/button";
import {
  BugIcon,
  DropletIcon,
  GeminiIcon,
  IconUser,
  LeafIcon,
  SearchIcon,
} from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChangeEvent, useEffect, useRef } from "react";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { getDictionary } from "@/lib/get-dictionary";
import { readStreamableValue } from "ai/rsc";
import { Message, continueConversation } from "@/app/server/generate";

const Chat = ({
  chat,
}: {
  chat: Awaited<ReturnType<typeof getDictionary>>["chat"];
}) => {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [conversation]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { messages, newMessage } = await continueConversation([
      ...conversation,
      { role: "user", content: input },
    ]);

    let textContent = "";

    for await (const delta of readStreamableValue(newMessage)) {
      textContent = `${textContent}${delta}`;

      setConversation([
        ...messages,
        { role: "assistant", content: textContent },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <main className="flex-1 py-2 md:p-6 container rounded-lg lg:border lg:my-6 relative h-[calc(100%_-_5rem)] lg:h-[calc(100%_-_11rem)] overflow-hidden">
      <div className="overflow-y-auto h-full w-full" ref={scrollRef}>
        {conversation.length > 0 ? (
          conversation.map((message, index) => (
            <div
              key={index}
              className={cn(
                "group relative flex items-start mb-4",
                conversation.length - 1 == index && "mb-14 lg:mb-12"
              )}
            >
              <div
                className={cn(
                  "flex size-8 shrink-0 select-none items-center justify-center rounded-lg border shadow",
                  message.role === "user" ? "bg-background" : "bg-popover"
                )}
              >
                {message.role === "user" ? <IconUser /> : <GeminiIcon />}
              </div>
              <div className="flex-1 px-1 ml-4 space-y-2 overflow-hidden">
                <MemoizedReactMarkdown
                  className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 prose-base !max-w-none"
                  remarkPlugins={[remarkGfm, remarkMath]}
                >
                  {message.content}
                </MemoizedReactMarkdown>
              </div>
            </div>
          ))
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4 text-balance">
              {chat.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: { value: "How should I do my crop cultivation?" },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <LeafIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>{chat.cultivation}</span>
              </Button>
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: { value: "How should I do Pest Management?" },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <BugIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>{chat.pest}</span>
              </Button>
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: { value: "Tell me how to improve irrigation?" },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <DropletIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>{chat.irrigation}</span>
              </Button>
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: {
                      value: "What is the proper way to apply fertilizers?",
                    },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <LeafIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>{chat.fertilizers}</span>
              </Button>
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: {
                      value: "How to get started with organic farming?",
                    },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <LeafIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>{chat["organic-farming"]}</span>
              </Button>
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: {
                      value:
                        "What are the Government Schemes for farmer in India?",
                    },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <LeafIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>{chat["government-schemes"]}</span>
              </Button>
              {/* <Button
          className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
          variant={"outline"}
          onClick={() =>
            handleInputChange({
              target: { value: "Weather Forecasts" },
            } as ChangeEvent<HTMLInputElement>)
          }
        >
          <CloudIcon className="h-8 w-8 text-green-500 mb-2" />
          <span>Weather Forecasts</span>
        </Button> */}
              {/* <Button
          className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
          variant={"outline"}
          onClick={() =>
            handleInputChange({
              target: { value: "Task Reminders" },
            } as ChangeEvent<HTMLInputElement>)
          }
        >
          <CalendarIcon className="h-8 w-8 text-green-500 mb-2" />
          <span>Task Reminders</span>
        </Button> */}
            </div>
          </>
        )}
        <form
          className="flex items-center gap-2 absolute bottom-4 w-[80%] left-[10%]"
          onSubmit={handleSubmit}
        >
          <Input
            className="flex-1 rounded-l-md px-4 py-2"
            placeholder={chat.start}
            type="text"
            value={input}
            disabled={loading}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            className="text-white rounded-r-md px-4 py-2"
            disabled={loading}
          >
            <SearchIcon className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Chat;
