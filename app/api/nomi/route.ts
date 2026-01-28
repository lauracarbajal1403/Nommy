import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    console.log("MENSAJES RECIBIDOS:", messages);
    console.log(
      "API KEY EXISTE:",
      typeof process.env.OPENAI_API_KEY === "string"
    );

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY no definida" },
        { status: 500 }
      );
    }

    // Convertir el formato de mensajes de OpenAI a Gemini
    const geminiContents = messages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }]
    }));

    const openaiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.OPENAI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: geminiContents
        }),
      }
    );

    if (!openaiRes.ok) {
      const err = await openaiRes.text();
      console.error("Google Gemini error:", err);
      return NextResponse.json(
        { error: "Error desde Google Gemini" },
        { status: 500 }
      );
    }

    const result = await openaiRes.json();
    return NextResponse.json({
      text: result.candidates[0].content.parts[0].text,
    });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Error al procesar el mensaje" },
      { status: 500 }
    );
  }
}
