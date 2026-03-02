"use client";

import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MiniConversorProps {
  moneda: string; 
  tasa: number;   
}

export function MiniConversor({ moneda, tasa }: MiniConversorProps) {
  const [monto, setMonto] = useState<string>("100");
  const [origen, setOrigen] = useState<"ext" | "ars">("ext");
  const [invertido, setInvertido] = useState<boolean>(false);

  // Lógica bi-direccional
  let valorExt = "";
  let valorArs = "";

  if (origen === "ext") {
    valorExt = monto;
    const calc = parseFloat(monto) * tasa;
    valorArs = isNaN(calc) ? "" : calc.toFixed(2);
  } else {
    valorArs = monto;
    const calc = parseFloat(monto) / tasa;
    valorExt = isNaN(calc) ? "" : calc.toFixed(2);
  }

  return (
    <div className="flex flex-col space-y-4 mb-8">
      <h3 className="text-sm font-bold uppercase text-muted-foreground">Cotización</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Lado Izquierdo */}
        <div className="w-full md:w-2/5 space-y-2">
          <div className="h-10 flex items-center justify-center border rounded-md bg-slate-50 dark:bg-zinc-950 text-muted-foreground font-medium uppercase">
            {invertido ? "ARS" : moneda}
          </div>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
            <Input
              type="number"
              value={invertido ? valorArs : valorExt}
              onChange={(e) => {
                setOrigen(invertido ? "ars" : "ext");
                setMonto(e.target.value);
              }}
              className="pl-8 h-12 text-lg font-bold focus-visible:ring-primary"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Botón Invertir */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setInvertido(!invertido)}
          className="rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 transition-transform active:scale-95 md:mt-12"
        >
          <ArrowRightLeft className="w-5 h-5 text-primary" />
        </Button>

        {/* Lado Derecho */}
        <div className="w-full md:w-2/5 space-y-2">
          <div className="h-10 flex items-center justify-center border rounded-md bg-slate-50 dark:bg-zinc-950 text-muted-foreground font-medium uppercase">
            {invertido ? moneda : "ARS"}
          </div>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
            <Input
              type="number"
              value={invertido ? valorExt : valorArs}
              onChange={(e) => {
                setOrigen(invertido ? "ext" : "ars");
                setMonto(e.target.value);
              }}
              className="pl-8 h-12 text-lg font-bold focus-visible:ring-primary"
              placeholder="0.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}