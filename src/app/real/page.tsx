import { getCotizacion, getHistorialCotizacion } from "@/src/lib/api";
import { MiniConversor } from "@/src/components/euro-real/mini-conversor";
import { HistoryChart } from "@/src/components/dolar/history-chart"; 
import { Header } from "@/src/components/shared/header";
import { Footer } from "@/src/components/shared/footer";

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

export default async function EuroRealPage() {
  const [real, historialReal] = await Promise.all([
    getCotizacion("brl"),
    getHistorialCotizacion("brl"),
  ]);

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

          {real && (
            <section id="real" className="space-y-6 scroll-mt-6">
              <h2 className="text-2xl font-bold uppercase">Real</h2>
              
              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-2 md:mt-0">
                <div>
                  <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Compra</span>
                  <span className="text-2xl font-bold text-[#059669] dark:text-[#10B981]">{formatCurrency(real.compra)}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Venta</span>
                  <span className="text-2xl font-bold">{formatCurrency(real.venta)}</span>
                </div>
              </div>

              <MiniConversor moneda="REAL" tasa={real.venta} />
              <HistoryChart data={historialReal} tipo="Real" />

              <p className="text-xs text-muted-foreground">
                Última actualización el {formatFecha(real.fechaActualizacion)}
              </p>

              <AiAnalysisButton currencyName="Real" historyData={historialReal} />
              
            </section>
          )}

        </div>
      </main>

      <Footer />

    </div>
  );
}