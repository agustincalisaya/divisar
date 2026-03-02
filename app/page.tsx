// src/app/page.tsx
import { getDolares, getCotizacion } from "@/lib/api";
import { CurrencyCard } from "@/components/dashboard/currency-card";
import { Header } from "@/components/dashboard/header";

export default async function Home() {
  // Promise.all ejecuta todas las peticiones al mismo tiempo para que cargue más rápido
  const [dolares, euro, real] = await Promise.all([
    getDolares(),
    getCotizacion("eur"),
    getCotizacion("brl"),
  ]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 p-4 md:p-8 font-sans">
      
      {/* HEADER (Logo y Botones Varios según tu mockup) */}
      <Header />

      {/* GRILLA PRINCIPAL (Dividida en 2 columnas en pantallas grandes) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* COLUMNA IZQUIERDA: Todos los Dólares */}
        <section className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">
              Dolar - USD
            </h2>
            
            {/* Grilla interna para las tarjetas (2 columnas) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dolares.map((dolar: any) => (
                <CurrencyCard
                  key={dolar.casa}
                  title={`Dólar ${dolar.nombre}`}
                  compra={dolar.compra}
                  venta={dolar.venta}
                />
              ))}
            </div>
          </div>

          {/* Placeholders para los Gráficos de Dólar (Lo haremos en el próximo paso) */}
          <div className="space-y-4">
            <div className="h-64 bg-white dark:bg-zinc-900 border rounded-xl shadow-sm flex items-center justify-center text-slate-400">
              Gráfico de Dólar Oficial de los últimos 30 días (Próximamente)
            </div>
            <div className="h-64 bg-white dark:bg-zinc-900 border rounded-xl shadow-sm flex items-center justify-center text-slate-400">
              Gráfico de Dólar Blue de los últimos 30 días (Próximamente)
            </div>
          </div>
        </section>

        {/* COLUMNA DERECHA: Euro y Real Brasileño */}
        <section className="space-y-6">
          
          {/* SECCIÓN EURO */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
              Tasa de Euro
            </h2>
            {euro && (
              <CurrencyCard
                title="Euro"
                compra={euro.compra}
                venta={euro.venta}
              />
            )}
            <div className="h-64 bg-slate-50 dark:bg-zinc-950 border rounded-xl flex items-center justify-center text-slate-400">
              Gráfico del Euro x ARS en los últimos 30 días (Próximamente)
            </div>
          </div>

          {/* SECCIÓN REAL BRASILEÑO */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
              Tasa de Real Brasileño
            </h2>
            {real && (
              <CurrencyCard
                title="Real Brasileño"
                compra={real.compra}
                venta={real.venta}
              />
            )}
            <div className="h-64 bg-slate-50 dark:bg-zinc-950 border rounded-xl flex items-center justify-center text-slate-400">
              Gráfico del Real BR x ARS en los últimos 30 días (Próximamente)
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}