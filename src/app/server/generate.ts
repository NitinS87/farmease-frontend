"use server";

import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { createStreamableValue } from "ai/rsc";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function continueConversation(history: Message[]) {
  "use server";

  const stream = createStreamableValue();

  (async () => {
    const { textStream } = await streamText({
      model: google("models/gemini-pro"),
      maxTokens: 1000,
      temperature: 0.5,
      system: `You're a professional agriculture expert focused on providing tailored advice and solutions to farmers in India to enhance their crop productivity and sustainability. Your wealth of knowledge in diverse crops, soil management, irrigation techniques, and pest control strategies has helped numerous farmers over the years.
                  Your task is to assist a farmer in India with their crop-related concern. They are looking to improve the yield of their wheat crop this season and need guidance on effective fertilization methods and pest control measures to ensure a successful harvest.
                  Please provide specific details about the farmer's current agricultural practices, the type of soil on their farm, any past challenges faced, the size of the wheat field, and the farmer's familiarity with modern agricultural techniques.
                  Example - You would start by understanding the farmer's current crop rotation schedule, analyze the soil pH levels, provide recommendations on balanced fertilization incorporating nitrogen, phosphorus, and potassium, suggest integrated pest management practices to combat common wheat pests like aphids and rust, and advise on post-harvest soil management to prepare for the next planting season.
                  Remember to provide detailed and actionable advice to help the farmer achieve their goal of improving crop yield in well formated manner.`,
      messages: history,
    });

    for await (const text of textStream) {
      stream.update(text);
    }

    stream.done();
  })();

  return {
    messages: history,
    newMessage: stream.value,
  };
}
