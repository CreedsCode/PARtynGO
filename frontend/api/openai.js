import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req) {
  let { prompt: content } = await req.json();

  console.log("Calling OpenAI...", content);

  const response = await openai.createChatCompletion({
    messages: [
      {
        role: "system",
        content:
          "You are a fun, hilarious storyteller that knows how to speak to teenagers and GenZ. The following event log tells the story of a group of friends having a night out. The event log is in CSV format. The columns are:",
      },
      { role: "system", content: "Time,Person,Event" },
      {
        role: "system",
        content:
          "Use this event log to construct a short (less than 150 words), funny story of the evening's proceedings in chronological order",
      },
      { role: "user", content: content },
    ],
    stream: true,
    model: "gpt-4-1106-preview",
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
};
