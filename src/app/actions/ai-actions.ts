"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function getTrendAnalysis(historyData: Record<string, unknown>[], currencyName: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Actuá como un analista financiero experto en economía argentina. 
      Analizá los siguientes datos históricos de los últimos 30 días para la divisa: ${currencyName}.
      
      Datos: ${JSON.stringify(historyData)}

      Tu objetivo es devolver un análisis técnico (máximo 5 líneas) que incluya:
      1. La tendencia predominante (Alcista, Bajista o Estable).
      2. Puntos clave de soporte o resistencia detectados.
      3. Una conclusión sobre la volatilidad reciente.
      4. Sentimiento del Mercado y Riesgo: Evaluá si el escenario actual sugiere un "riesgo alto" (mucha volatilidad) o una "ventana de oportunidad" (estabilidad o baja de precio). Indicá qué postura (prudencia, oportunidad de cobertura, etc.) sería más adecuada según el contexto.
      
      IMPORTANTE: Respondé en español, de forma profesional y técnica. 
      NUNCA des órdenes directas y explícitas como "comprá", "vendé" o "invertí ya". Usá frases analíticas como "El contexto sugiere prudencia...", "El escenario actual podría representar una oportunidad de cobertura...", o "Es un momento de observación...".
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();

  } catch (error) {
    console.error("Error en la acción de IA:", error);
    return "No se pudo generar el análisis en este momento. Reintentá más tarde.";
  }
}