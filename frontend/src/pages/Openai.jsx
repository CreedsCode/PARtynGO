import React, { useState } from "react";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true, // just for testing
});

export default function OpenAIExample() {
  const [processing, setProcessing] = useState(false);
  const [prompt, setPrompt] = useState(
    `22:10,Der_CEO,Decided to pull an all-nighter\n23:15,Seppe,Kissed a Brazilian girl\n23:48,Daniel,Bought another round\n01:21,Owen,Left the club\n05:45,Olivier,Went home to check on his van`
  );
  const [response, setResponse] = useState(null);

  async function generateText() {
    console.log("Calling OpenAI...");
    setProcessing(true);
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
    console.log(completion);

    setProcessing(false);
    setResponse(completion);
  }

  return (
    <div>
      <h1>OpenAI Test</h1>

      <p>Currently accepts an 'event log' in the following CSV format:</p>
      <textarea
        value={prompt}
        rows={8}
        cols={50}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <br />
      <br />

      <button onClick={generateText} disabled={processing}>
        Generate Text
      </button>

      <br />
      <br />
      <br />

      {response ? <ShowResponse response={response} /> : null}
    </div>
  );
}

function ShowResponse({ response }) {
  return <div className="w-1/3">{response.choices[0].message.content}</div>;
}
