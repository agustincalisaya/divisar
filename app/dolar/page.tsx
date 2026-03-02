import { getDolares } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "../../components/shared/header";
import { Dolar } from "@/types/dolar";

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

export default async function DolarPage() {
  const dolares: Dolar[] = await getDolares();

  // Extracción de Dólares
  const oficial = dolares.find((d: Dolar) => d.casa === "oficial");
  const blue = dolares.find((d: Dolar) => d.casa === "blue");
  const tarjeta = dolares.find((d: Dolar) => d.casa === "tarjeta");
  const bolsa = dolares.find((d: Dolar) => d.casa === "bolsa");
  const cripto = dolares.find((d: Dolar) => d.casa === "cripto");
  const mayorista = dolares.find((d: Dolar) => d.casa === "mayorista");
  const mep = bolsa ? { ...bolsa, nombre: "MEP" } : undefined;

  const otrosDolares = [tarjeta, mep, cripto, mayorista].filter(Boolean) as Dolar[];

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto">
      <Header />

      <div className="space-y-12">
        {/* SECCIÓN: DÓLAR OFICIAL */}
        {oficial && (
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold uppercase">Dólar Oficial</h2>
              <Button variant="outline">COTIZAR</Button>
            </div>
            
            <div className="flex gap-8 mb-4">
              <div>
                <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Compra</span>
                <span className="text-2xl font-bold text-[#059669] dark:text-[#10B981]">{formatCurrency(oficial.compra)}</span>
              </div>
              <div>
                <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Venta</span>
                <span className="text-2xl font-bold">{formatCurrency(oficial.venta)}</span>
              </div>
            </div>

            <Card className="h-80 flex flex-col items-center justify-center border-2 border-dashed">
              <p className="text-muted-foreground">Gráfico de la variación del precio del DÓLAR OFICIAL... (Próximamente)</p>
              <p className="font-bold mt-4 text-[#059669] dark:text-[#10B981]">X% (Crecimiento)</p>
            </Card>
            <p className="text-xs text-muted-foreground">Última actualización el {formatFecha(oficial.fechaActualizacion)}</p>
          </section>
        )}

        {/* SECCIÓN: DÓLAR BLUE */}
        {blue && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase">Dólar Blue</h2>
            
            <div className="flex gap-8 mb-4">
              <div>
                <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Compra</span>
                <span className="text-2xl font-bold text-[#059669] dark:text-[#10B981]">{formatCurrency(blue.compra)}</span>
              </div>
              <div>
                <span className="text-sm font-semibold uppercase text-muted-foreground mr-2">Venta</span>
                <span className="text-2xl font-bold">{formatCurrency(blue.venta)}</span>
              </div>
            </div>

            <Card className="h-80 flex flex-col items-center justify-center border-2 border-dashed">
              <p className="text-muted-foreground">Gráfico de la variación del precio del DÓLAR BLUE... (Próximamente)</p>
              <p className="font-bold mt-4 text-[#059669] dark:text-[#10B981]">X% (Crecimiento)</p>
            </Card>
            <p className="text-xs text-muted-foreground">Última actualización el {formatFecha(blue.fechaActualizacion)}</p>
          </section>
        )}

        {/* SECCIÓN: OTROS TIPOS DE DÓLAR */}
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
          {/* Mostramos la fecha del primer elemento para no repetirla en cada tarjeta */}
          {otrosDolares.length > 0 && (
            <p className="text-xs text-muted-foreground mt-2">
              Última actualización el {formatFecha(otrosDolares[0].fechaActualizacion)}
            </p>
          )}
        </section>

        {/* SECCIÓN: COTIZACIONES (Conversor) */}
        <section className="space-y-4 pb-12">
          <h2 className="text-xl font-bold uppercase">Cotizaciones</h2>
          <Card className="p-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-muted-foreground">
              <p>Herramienta de Conversión (Próximamente)</p>
            </div>
          </Card>
        </section>

      </div>
    </main>
  );
}