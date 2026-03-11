import { getDolares, getHistorialDolar } from "@/src/lib/api";
import { Dolar } from "@/src/types/dolar";

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Conversor } from "@/src/components/dolar/conversor";
import { HistoryChart } from "@/src/components/dolar/history-chart";
import { CotizarButton } from "@/src/components/dolar/cotizar-button";
import { Footer } from "@/src/components/shared/footer";
import { Header } from "@/src/components/shared/header";

import { AiAnalysisButton } from "@/src/components/shared/ai-analysis-button";


function formatFecha(fechaISO: string) {
  if (!fechaISO) return "Fecha no disponible";
  const fecha = new Date(fechaISO);
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(fecha) + " hs UTC-3 - Argentina";
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(value);

export default async function DolarPage() {
  const [dolares, historialOficial, historialBlue] = await Promise.all([
    getDolares(),
    getHistorialDolar("oficial"),
    getHistorialDolar("blue"),
  ]);

  const oficial = dolares.find((d: Dolar) => d.casa === "oficial");
  const blue = dolares.find((d: Dolar) => d.casa === "blue");
  const tarjeta = dolares.find((d: Dolar) => d.casa === "tarjeta");
  const bolsa = dolares.find((d: Dolar) => d.casa === "bolsa");
  const cripto = dolares.find((d: Dolar) => d.casa === "cripto");
  const mayorista = dolares.find((d: Dolar) => d.casa === "mayorista");
  const mep = bolsa ? { ...bolsa, nombre: "MEP" } : undefined;

  const otrosDolares = [tarjeta, mep, cripto, mayorista].filter(Boolean) as Dolar[];

  return (
    <div className="min-h-screen flex flex-col">

      <div className="w-full bg-white dark:bg-[#111827] border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <Header />
        </div>
      </div>

      <main className="flex-1 px-4 pt-4 pb-12 md:px-8 md:pt-6 max-w-5xl mx-auto w-full relative">

        <div className="hidden dark:block absolute bottom-[50%] right-[50%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="hidden dark:block absolute bottom-[10%] left-[50%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="hidden dark:block absolute bottom-[90%] left-[50%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="space-y-12 relative z-10">

          {oficial && (
            <section className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-bold uppercase">Dólar Oficial</h2>
                <CotizarButton />
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-4 mt-2 md:mt-0">
                <div>
                  <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Compra</span>
                  <span className="text-2xl font-bold text-[#059669] dark:text-[#10B981]">{formatCurrency(oficial.compra)}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Venta</span>
                  <span className="text-2xl font-bold">{formatCurrency(oficial.venta)}</span>
                </div>
              </div>

              <HistoryChart data={historialOficial} tipo="Oficial" />

              <p className="text-xs text-muted-foreground">Última actualización el {formatFecha(oficial.fechaActualizacion)}</p>
              <AiAnalysisButton currencyName="Oficial" historyData={historialOficial} />
            </section>
          )}

          {blue && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold uppercase">Dólar Blue</h2>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-4 mt-2 md:mt-0">
                <div>
                  <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Compra</span>
                  <span className="text-2xl font-bold text-[#059669] dark:text-[#10B981]">{formatCurrency(blue.compra)}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Venta</span>
                  <span className="text-2xl font-bold">{formatCurrency(blue.venta)}</span>
                </div>
              </div>

              <HistoryChart data={historialBlue} tipo="Blue" />

              <p className="text-xs text-muted-foreground">Última actualización el {formatFecha(blue.fechaActualizacion)}</p>
              <AiAnalysisButton currencyName="Blue" historyData={historialBlue} />
            </section>
          )}

          <section className="space-y-4">
            <h2 className="text-xl font-bold">Otros Tipos de Dólar</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otrosDolares.map((dolar: Dolar) => (
                <Card key={dolar.casa} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg uppercase">Dólar {dolar.nombre}</CardTitle>
                    <p className="text-xs text-muted-foreground">1 USD {dolar.nombre.toUpperCase()}</p>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center mt-2">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Compra</span>
                      <span className="text-lg font-bold text-[#059669] dark:text-[#10B981]">{formatCurrency(dolar.compra)}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Venta</span>
                      <span className="text-lg font-bold">{formatCurrency(dolar.venta)}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {otrosDolares.length > 0 && (
              <p className="text-xs text-muted-foreground mt-2">
                Última actualización el {formatFecha(otrosDolares[0].fechaActualizacion)}
              </p>
            )}
          </section>

          <section id="cotizaciones" className="space-y-4 pb-12 scroll-mt-24">
            <h2 className="text-xl font-bold uppercase">Cotizaciones</h2>
            <Conversor dolares={dolares} />
          </section>

        </div>
      </main>

      <Footer />

    </div>
  );
}