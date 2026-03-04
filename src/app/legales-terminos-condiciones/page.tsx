import { Header } from "@/src/components/shared/header";
import { Footer } from "@/src/components/shared/footer";

export default async function LegalesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b1120] transition-colors duration-300">
      <div className="w-full bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <Header />
        </div>
      </div>

      <main className="flex-1 px-4 pt-8 pb-16 md:px-8 md:pt-12 max-w-4xl mx-auto w-full relative">

        <div className="relative z-10 bg-white dark:bg-slate-900 p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300">
          
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-300">
            Aviso Legal
          </h1>

          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">
            <p>
              DivisAR es un servicio exclusivamente informativo que proporciona datos sobre cotizaciones de divisas y herramientas de conversión.
            </p>

            <p>
              Los desarrolladores y colaboradores de DivisAR se eximen de toda responsabilidad en cuanto a la posible falta de precisión, veracidad, exactitud, integridad o vigencia de los datos proporcionados a través de nuestro sitio web. No garantizamos la precisión, veracidad, exactitud, integridad o vigencia de la información mostrada en nuestro servicio.
            </p>

            <p>
              DivisAR y sus colaboradores declinan toda responsabilidad respecto al uso que los usuarios puedan dar a la información y los datos obtenidos a través de nuestra plataforma. No nos hacemos responsables por eventuales daños patrimoniales o perjuicios que pudieran resultar del uso de los datos proporcionados por nuestro servicio.
            </p>

            <p>
              Los usuarios reconocen que los datos proporcionados por DivisAR son meramente informativos y pueden no reflejar con exactitud las cotizaciones reales o actuales de las divisas en los mercados correspondientes.
            </p>

            <p>
              El uso de DivisAR implica la aceptación de estos términos y condiciones. DivisAR se reserva el derecho de modificar, suspender o interrumpir el servicio en cualquier momento sin previo aviso.
            </p>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}