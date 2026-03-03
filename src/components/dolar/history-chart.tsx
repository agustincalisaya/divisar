"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/src/components/ui/chart";

interface HistorialData {
  compra: number;
  venta: number;
  fecha: string; // Formato: "YYYY-MM-DD"
}

interface HistoryChartProps {
  data: HistorialData[];
  tipo: string;
}

export function HistoryChart({ data, tipo }: HistoryChartProps) {
  // Si por algún motivo la API no trae datos, mostramos un cartel elegante
  if (!data || data.length === 0) {
    return (
      <Card className="h-80 flex items-center justify-center border-dashed">
        <p className="text-muted-foreground">Datos históricos no disponibles temporalmente.</p>
      </Card>
    );
  }

  // 1. Formatear datos para el gráfico (ej: "2024-03-02" -> "02 mar")
  const chartData = data.map((item) => {
    const date = new Date(item.fecha + "T00:00:00");
    return {
      fechaStr: new Intl.DateTimeFormat("es-AR", { day: "2-digit", month: "short" }).format(date),
      venta: item.venta,
    };
  });

  // 2. Calcular porcentaje de crecimiento del mes
  const primerValor = chartData[0].venta;
  const ultimoValor = chartData[chartData.length - 1].venta;
  const variacion = ((ultimoValor - primerValor) / primerValor) * 100;
  const esPositivo = variacion >= 0;

  // 3. Configuración visual para Shadcn Chart
  const chartConfig = {
    venta: {
      label: "Precio de Venta ($)",
      color: "var(--color-chart-1)", // Toma el Verde Acento de tu globals.css
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-80 flex flex-col shadow-sm border bg-white dark:bg-zinc-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Variación últimos 30 días</CardTitle>
        <CardDescription>Evolución histórica del Dólar {tipo}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 w-full min-h-0 pb-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            {/* Margen negativo a la izquierda para que los números del eje Y no ocupen tanto espacio */}
            <LineChart data={chartData} margin={{ top: 10, left: -20, right: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="fechaStr" 
                tickLine={false} 
                axisLine={false} 
                tickMargin={10}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                domain={['dataMin - 20', 'auto']} // Evita que la línea toque el piso del gráfico
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="venta" 
                stroke="var(--color-chart-1)" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "var(--color-chart-1)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      
      <CardFooter className="pt-4 border-t mt-4">
        <div className="flex items-center gap-2 font-medium leading-none">
          {esPositivo ? (
            <>
              <TrendingUp className="h-5 w-5 text-[#059669] dark:text-[#10B981]" />
              <span className="text-[#059669] dark:text-[#10B981]">
                +{variacion.toFixed(2)}% (Crecimiento en 30 días)
              </span>
            </>
          ) : (
            <>
              <TrendingDown className="h-5 w-5 text-red-500" />
              <span className="text-red-500">
                {variacion.toFixed(2)}% (Baja en 30 días)
              </span>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}