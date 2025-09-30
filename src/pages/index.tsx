import { useState } from "react";

export default function Page() {
  const [prompt, setPrompt] = useState("");

  return (
    <>
      <input value={prompt} className="bg-red-50" onChange={(e) => setPrompt(e.target.value)} />
    </>
  );
}
