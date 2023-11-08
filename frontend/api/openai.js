// we must set a OPENAI_API_KEY env at vercel

import OpenAI from "openai";

const openai = new OpenAI();

export const config = {
  runtime: "experimental-edge",
};

export default async (request) => {
  console.log("Calling OpenAI...", request.body); // not sure if it comes in as json or string

  const completion = await openai.chat.completions.create({
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
      { role: "user", content: prompt },
    ],
    model: "gpt-4-1106-preview",
  });

  return new Response(completion, {
    status: 200,
  });
};
