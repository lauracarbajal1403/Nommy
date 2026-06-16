import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai"; // Necesitas instalar esta librería oficial de Google

export async function POST(request: Request) {
  try {
    const { keyword } = await request.json();

    // 1. Aquí se llama a la variable de entorno de forma 100% segura en el servidor
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({ error: "Falta la configuración de la API Key" }, { status: 500 });
    }

    // 2. Inicializamos la IA de Google con la clave
    const ai = new GoogleGenAI({ apiKey: apiKey });

    // 3. Le pedimos a Gemini que genere contenido SEO
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: `Genera un título SEO y una meta descripción optimizada para la palabra clave: ${keyword}. Devuélvelo en formato JSON.`,
    });

    return NextResponse.json({ data: response.text });

  } catch (error) {
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
  }
}