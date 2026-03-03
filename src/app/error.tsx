"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Header } from "@/src/components/shared/header";
import { Footer } from "@/src/components/shared/footer";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  useEffect(() => {
    console.error("Error capturado por DivisAR:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b1120] transition-colors duration-300">
      
      <div className="w-full bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <Header />
        </div>
      </div>

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-12 flex flex-col items-center justify-center relative z-10 text-center">
        
        <div className="bg-red-100 dark:bg-red-900/20 p-5 rounded-full mb-6 shadow-sm border border-red-200 dark:border-red-900/30">
          <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-500" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
          ¡Ups! Algo salió mal
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
          Tuvimos un problema al intentar cargar las cotizaciones. Puede que el servidor de datos esté temporalmente inactivo o haya un problema de conexión.
        </p>

        <button
          onClick={() => reset()}
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white rounded-xl font-medium transition-all shadow-sm hover:scale-105 active:scale-95"
        >
          <RefreshCcw className="w-4 h-4" />
          Intentar de nuevo
        </button>
        
      </main>

      <Footer />
      
    </div>
  );
}