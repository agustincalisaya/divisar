"use client";

import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { Dolar } from "@/src/types/dolar";
import { Card } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

interface ConversorProps {
  dolares: Dolar[];
}

export function Conversor({ dolares }: ConversorProps) {
  const [monto, setMonto] = useState<string>("100");
  const [origen, setOrigen] = useState<"usd" | "ars">("usd");
  
  const [tipoSeleccionado, setTipoSeleccionado] = useState<string>("blue");
  const [invertido, setInvertido] = useState<boolean>(false);

  const dolarActual = dolares.find((d) => d.casa === tipoSeleccionado) || dolares[0];
  const tasa = dolarActual?.venta || 1;

  let valorUsd = "";
  let valorArs = "";

  if (origen === "usd") {
    valorUsd = monto;
    const calc = parseFloat(monto) * tasa;
    valorArs = isNaN(calc) ? "" : calc.toFixed(2);
  } else {
    valorArs = monto;
    const calc = parseFloat(monto) / tasa;
    valorUsd = isNaN(calc) ? "" : calc.toFixed(2);
  }

  const formatCurrency = (value: number, currency: string) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: currency,
    }).format(value);

  return (
    <Card className="p-6 md:p-8 bg-white dark:bg-zinc-900 border shadow-sm">
      <div className="flex flex-col space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-2/5">
            {invertido ? (
              <div className="h-10 flex items-center px-3 border rounded-md bg-slate-50 dark:bg-zinc-950 text-muted-foreground font-medium">
                Pesos Argentinos (ARS)
              </div>
            ) : (
              <Select value={tipoSeleccionado} onValueChange={setTipoSeleccionado}>
                <SelectTrigger className="w-full h-10 uppercase font-medium">
                  <SelectValue placeholder="Seleccioná un dólar" />
                </SelectTrigger>
                <SelectContent>
                  {dolares.map((d) => (
                    <SelectItem key={d.casa} value={d.casa} className="uppercase">
                      Dólar {d.nombre === "Bolsa" ? "MEP" : d.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setInvertido(!invertido)}
            className="rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 transition-transform active:scale-95"
          >
            <ArrowRightLeft className="w-5 h-5 text-primary" />
          </Button>

          <div className="w-full md:w-2/5">
            {!invertido ? (
              <div className="h-10 flex items-center px-3 border rounded-md bg-slate-50 dark:bg-zinc-950 text-muted-foreground font-medium">
                Pesos Argentinos (ARS)
              </div>
            ) : (
              <Select value={tipoSeleccionado} onValueChange={setTipoSeleccionado}>
                <SelectTrigger className="w-full h-10 uppercase font-medium">
                  <SelectValue placeholder="Seleccioná un dólar" />
                </SelectTrigger>
                <SelectContent>
                  {dolares.map((d) => (
                    <SelectItem key={d.casa} value={d.casa} className="uppercase">
                      Dólar {d.nombre === "Bolsa" ? "MEP" : d.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-2/5 relative">
            <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
            <Input
              type="number"
              value={invertido ? valorArs : valorUsd}
              onChange={(e) => {
                setOrigen(invertido ? "ars" : "usd");
                setMonto(e.target.value);
              }}
              className="pl-8 h-12 text-lg font-bold border-2 focus-visible:ring-primary"
              placeholder="0.00"
            />
          </div>

          <div className="hidden md:flex items-center justify-center w-10">
            <span className="text-2xl font-bold text-muted-foreground">=</span>
          </div>

          <div className="w-full md:w-2/5 relative">
            <span className="absolute left-3 top-2.5 text-muted-foreground font-medium">$</span>
            <Input
              type="number"
              value={invertido ? valorUsd : valorArs}
              onChange={(e) => {
                setOrigen(invertido ? "usd" : "ars");
                setMonto(e.target.value);
              }}
              className="pl-8 h-12 text-lg font-bold border-2 focus-visible:ring-primary"
              placeholder="0.00"
            />
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-muted-foreground mt-2">
            Cotización utilizada: {formatCurrency(tasa, "ARS")} (Precio de Venta)
          </p>
        </div>

      </div>
    </Card>
  );
}