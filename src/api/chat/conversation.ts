import OpenAI from "openai"
import process from "process";

interface RequestResponse {
    
}

export async function POST(req: RequestResponse){
    const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.OPENROUTER_API_KEY
    })

    console.debug(req,{ depth: null });

    const completion = await openai.chat.completions.create({
        model: "openai/gpt-oss-120b:free",
        messages: [
            
        ]
    })
    return;
}