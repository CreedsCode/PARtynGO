// Must pass OPENAI_API_KEY as an environment variable
// Key shared on Telegram

import React, { useState } from "react";
import { useCompletion } from "ai/react";

export default function OpenAIExample() {
  const [processing, setProcessing] = useState(false);
  const [prompt, setPrompt] = useState(
    `22:10,Der_CEO,Decided to pull an all-nighter\n23:15,Seppe,Kissed a Brazilian girl\n23:48,Daniel,Bought another round\n01:21,Owen,Left the club\n05:45,Olivier,Went home to check on his van`
  );

  const { complete, completion, isLoading, stop } = useCompletion({
    api: "/api/openai",
  });

  async function generateText() {
    complete(prompt);
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

      <div className="w-1/3">{completion}</div>
    </div>
  );
}
