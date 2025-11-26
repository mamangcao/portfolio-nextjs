import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { portfolioContext } from '@/lib/chat/context';

export const maxDuration = 30;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return new Response("API Key not configured", { status: 500 });
    }

    const result = await streamText({
      model: google('gemini-2.5-flash'), 
      system: portfolioContext,
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("❌ Chat API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}