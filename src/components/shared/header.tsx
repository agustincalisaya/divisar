"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home } from "lucide-react";
import { ThemeToggle } from "./theme-toggle"; 
import ReactCountryFlag from "react-country-flag";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const rutas = [
    { nombre: "Inicio", ruta: "/", isHome: true },
    { nombre: "Dólar", ruta: "/dolar", flagCode: "US" },
    { nombre: "Euro", ruta: "/euro-real", flagCode: "EU" },
    { nombre: "Real", ruta: "/euro-real", flagCode: "BR" },
  ];

  return (
    <header className="relative w-full">
      <div className="flex items-center justify-between">
        
        <Link 
          href="/" 
          className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          DivisAR
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {rutas.map((link) => {
            const isActive = pathname === link.ruta;
            return (
              <Link
                key={link.nombre}
                href={link.ruta}
                className={`flex items-center gap-2 text-sm font-medium transition-all hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 ${
                  isActive 
                    ? "text-cyan-600 dark:text-blue-400 font-bold" 
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {link.isHome ? (
                  <Home size={16} className={isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400"} />
                ) : (
                  <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700 flex items-center justify-center bg-slate-100 shadow-sm">
                    <ReactCountryFlag
                      countryCode={link.flagCode as string}
                      svg
                      style={{ width: '120%', height: '120%', objectFit: 'cover' }}
                      title={link.nombre}
                    />
                  </div>
                )}
                {link.nombre}
              </Link>
            );
          })}
          
          <div className="pl-2 border-l border-slate-200 dark:border-slate-800">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-4 flex flex-col gap-2 md:hidden z-50 animate-in slide-in-from-top-2">
          {rutas.map((link) => {
            const isActive = pathname === link.ruta;
            return (
              <Link
                key={link.nombre}
                href={link.ruta}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-all active:scale-95 ${
                  isActive 
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400" 
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
              >
                {/* Condición para mostrar la casita o la bandera en el celu */}
                {link.isHome ? (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"}`}>
                    <Home size={18} />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700 flex items-center justify-center bg-slate-100 shadow-sm">
                    <ReactCountryFlag
                      countryCode={link.flagCode as string}
                      svg
                      style={{ width: '120%', height: '120%', objectFit: 'cover' }}
                      title={link.nombre}
                    />
                  </div>
                )}
                
                {link.nombre}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}