import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from "ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export const dynamic = "force-dynamic";
// export const runtime = "edge";

// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: messages
    .filter(
      (message) => message.role === "user" || message.role === "assistant"
    )
    .map((message) => ({
      role: message.role === "user" ? "user" : "model",
      parts: [{ text: message.content }],
    })),
});

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();

  const geminiStream = await genAI
    .getGenerativeModel({
      model: "gemini-1.5-pro-latest",
      systemInstruction: {
        role: "system",
        parts: [
          {
            text: `You're a professional agriculture expert focused on providing tailored advice and solutions to farmers in India to enhance their crop productivity and sustainability. Your wealth of knowledge in diverse crops, soil management, irrigation techniques, and pest control strategies has helped numerous farmers over the years.
                  Your task is to assist a farmer in India with their crop-related concern. They are looking to improve the yield of their wheat crop this season and need guidance on effective fertilization methods and pest control measures to ensure a successful harvest.
                  Please provide specific details about the farmer's current agricultural practices, the type of soil on their farm, any past challenges faced, the size of the wheat field, and the farmer's familiarity with modern agricultural techniques.
                  Example - You would start by understanding the farmer's current crop rotation schedule, analyze the soil pH levels, provide recommendations on balanced fertilization incorporating nitrogen, phosphorus, and potassium, suggest integrated pest management practices to combat common wheat pests like aphids and rust, and advise on post-harvest soil management to prepare for the next planting season.`,
          },
        ],
      },
    })
    .generateContentStream(buildGoogleGenAIPrompt(messages));

  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(geminiStream);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
