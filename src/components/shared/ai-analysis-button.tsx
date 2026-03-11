"use client";

import { useState } from "react";
import { Sparkles, Loader2, Bot } from "lucide-react";
import { getTrendAnalysis } from "@/src/app/actions/ai-actions";

interface AiAnalysisButtonProps {
  currencyName: string;
  historyData: Record<string, unknown>[];
}

export function AiAnalysisButton({ currencyName, historyData }: AiAnalysisButtonProps) {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const agentName = "Kale Analyst AI";

  const handleAnalyze = async () => {
    setIsLoading(true);
    setAnalysis(null);
    
    try {
      const result = await getTrendAnalysis(historyData, currencyName);
      setAnalysis(result);
    } catch { 
      setAnalysis("Hubo un error al conectar con la IA. Intentá de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-slate-900 dark:text-slate-100">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

    return (
        <div className="flex flex-col gap-3 mt-4 w-full">
            <button
                onClick={handleAnalyze}
                disabled={isLoading || historyData.length === 0}
                className="flex items-center justify-center gap-2 w-fit mx-auto py-2 px-4 text-sm transition-all hover:scale-105 
                            text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 
                            disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                    <Sparkles className="w-4 h-4" />
                )}
                {isLoading ? `${agentName} está analizando...` : `Analiza las tendencias con ${agentName}`}
            </button>

            {analysis && (
                <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900 rounded-lg text-sm text-slate-700 dark:text-slate-300 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-blue-200 dark:border-blue-800">
                        <Bot className="w-4 h-4 text-blue-800 dark:text-blue-400" />
                        <span className="font-semibold text-blue-800 dark:text-blue-300">
                            Análisis de {agentName}
                        </span>
                    </div>
                    <p className="whitespace-pre-line leading-relaxed">
                        {formatText(analysis)}
                    </p>
                    <div className="mt-3 pt-3 border-t border-cyan-200/50 dark:border-cyan-800/50">
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                        Ver{" "}
                        <a href="/legales-terminos-condiciones" className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          Aviso Legal
                        </a>.
                      </p>
                    </div>
                </div>
            )}
        </div>
    );
}