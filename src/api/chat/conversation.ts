import OpenAI from "openai"
import process from "process";

export async function MessageCHAT(){

    console.log(process.env.OPENROUTER_API_KEY);
    return

    const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.OPENROUTER_API_KEY
    })

    const completion = await openai.chat.completions.create({
        model: "openai/gpt-oss-120b:free",
        messages: [
            {
                role: "user",
                content: "Hi!"
            }
        ]
    })

    console.debug(completion,{ depth: null })
    return;
}