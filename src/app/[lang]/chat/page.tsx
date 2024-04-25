"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { ChangeEvent, JSX, SVGProps } from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <>
      <main className="flex-1 p-6 h-[calc(100%_-_8rem)]">
        <div className="rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">
            Welcome to Agri-Assistant! How can I help you today?
          </h2>
          <form
            className="flex items-center mb-4 gap-2"
            onSubmit={handleSubmit}
          >
            <Input
              className="flex-1 rounded-l-md px-4 py-2"
              placeholder="Ask me anything about farming..."
              type="text"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit" className="text-white rounded-r-md px-4 py-2">
              <SearchIcon className="h-5 w-5" />
            </Button>
          </form>

          {messages.length > 0 ? (
            messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === "user" ? "User: " : "AI: "}
                {m.content}
              </div>
            ))
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: { value: "Crop Cultivation" },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <LeafIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>Crop Cultivation</span>
              </Button>
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: { value: "Pest Management" },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <BugIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>Pest Management</span>
              </Button>
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: { value: "Irrigation" },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <DropletIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>Irrigation</span>
              </Button>
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: { value: "Fertilizers" },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <LeafIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>Fertilizers</span>
              </Button>
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: { value: "Organic Farming" },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <LeafIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>Organic Farming</span>
              </Button>
              <Button
                className="h-full rounded-lg p-4 flex flex-col items-center transition-colors"
                variant={"outline"}
                onClick={() =>
                  handleInputChange({
                    target: { value: "Government Schemes for farmer" },
                  } as ChangeEvent<HTMLInputElement>)
                }
              >
                <LeafIcon className="h-8 w-8 text-green-500 mb-2" />
                <span>Government Schemes</span>
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
          )}
        </div>
      </main>
    </>
  );
}

function BugIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  );
}

function CalendarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function CloudIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function DropletIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
