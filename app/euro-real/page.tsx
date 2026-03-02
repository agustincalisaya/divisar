import { getCotizacion, getHistorialCotizacion } from "@/lib/api";
import { MiniConversor } from "@/components/euro-real/mini-conversor";
import { HistoryChart } from "@/components/dolar/history-chart"; // ¡Reutilizamos el gráfico!
import { Header } from "@/components/shared/header";

// Función auxiliar para formatear la fecha
function formatFecha(fechaISO: string) {
  if (!fechaISO) return "Fecha no disponible";
  const fecha = new Date(fechaISO);
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(fecha) + " hs UTC-3 - Argentina";
}

// Función auxiliar para formatear moneda
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(value);

export default async function EuroRealPage() {
  // Hacemos las 4 peticiones a la API EN PARALELO para máxima velocidad
  const [euro, real, historialEuro, historialReal] = await Promise.all([
    getCotizacion("eur"),
    getCotizacion("brl"),
    getHistorialCotizacion("eur"),
    getHistorialCotizacion("brl"),
  ]);

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto">
      <Header />

      <div className="space-y-16"> {/* Mayor espaciado entre Euro y Real */}
        
        {/* ================= SECCIÓN: EURO ================= */}
        {euro && (
          <section id="euro" className="space-y-6 scroll-mt-6">
            <h2 className="text-2xl font-bold uppercase">Euro</h2>
            
            {/* Precios Compra/Venta */}
            <div className="flex gap-8">
              <div>
                <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Compra</span>
                <span className="text-2xl font-bold text-[#059669] dark:text-[#10B981]">{formatCurrency(euro.compra)}</span>
              </div>
              <div>
                <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Venta</span>
                <span className="text-2xl font-bold">{formatCurrency(euro.venta)}</span>
              </div>
            </div>

            {/* Mini Conversor Integrado */}
            <MiniConversor moneda="EUR" tasa={euro.venta} />

            {/* Gráfico Histórico */}
            <HistoryChart data={historialEuro} tipo="Euro" />

            <p className="text-xs text-muted-foreground">
              Última actualización el {formatFecha(euro.fechaActualizacion)}
            </p>
          </section>
        )}

        {/* Separador visual opcional entre secciones */}
        <hr className="border-border" />

        {/* ================= SECCIÓN: REAL ================= */}
        {real && (
          <section id="real" className="space-y-6 scroll-mt-6">
            <h2 className="text-2xl font-bold uppercase">Real</h2>
            
            {/* Precios Compra/Venta */}
            <div className="flex gap-8">
              <div>
                <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Compra</span>
                <span className="text-2xl font-bold text-[#059669] dark:text-[#10B981]">{formatCurrency(real.compra)}</span>
              </div>
              <div>
                <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Venta</span>
                <span className="text-2xl font-bold">{formatCurrency(real.venta)}</span>
              </div>
            </div>

            {/* Mini Conversor Integrado */}
            <MiniConversor moneda="REAL" tasa={real.venta} />

            {/* Gráfico Histórico */}
            <HistoryChart data={historialReal} tipo="Real" />

            <p className="text-xs text-muted-foreground">
              Última actualización el {formatFecha(real.fechaActualizacion)}
            </p>
          </section>
        )}

      </div>
    </main>
  );
}