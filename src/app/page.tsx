import { Header } from "@/src/components/shared/header";
import { Footer } from "@/src/components/shared/footer";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

export default function HomePage() {
  const countries = [
    { name: "Dólar", flagCode: "US", href: "/dolar" },
    { name: "Euro", flagCode: "EU", href: "/euro-real" },
    { name: "Real", flagCode: "BR", href: "/euro-real" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b1120] transition-colors duration-300 relative overflow-hidden">
      
      
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <Header />
        </div>
      </div>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center relative z-10">
        
        <div className="flex flex-col items-center text-center space-y-6">

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
            Bienvenidos a DivisAR
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl transition-colors duration-300">
            Aquí podrás encontrar las Cotizaciones de Dólar, Euro y Real en tiempo real con respecto al Peso Argentino.
          </p>
          
        </div>

        <div className="mt-16 w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          <div className="relative flex items-center justify-center">
            
            <div className="w-64 h-64 md:w-80 md:h-80 relative transition-all duration-300">
                <Image
                  src="/globo-terraquio-light.png"
                  alt="Globo Terráqueo"
                  fill
                  className="object-contain block dark:hidden"
                  priority
                />
                
                <Image
                  src="/globo-terraquio-oscuro.png"
                  alt="Globo Terráqueo Oscuro"
                  fill
                  className="object-contain hidden dark:block"
                  priority
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-2xl dark:from-cyan-900/20"></div>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-[240px]">
            {countries.map((country) => (
              <Link
                key={country.name}
                href={country.href}
                className="flex items-center gap-4 px-5 py-3 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all shadow-sm group"
              >
                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform flex items-center justify-center bg-slate-100">
                  <ReactCountryFlag
                    countryCode={country.flagCode}
                    svg
                    style={{
                      width: '120%',
                      height: '120%',
                      objectFit: 'cover',
                    }}
                    title={country.name}
                  />
                </div>
                
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {country.name}
                </span>
              </Link>
            ))}
          </div>

        </div>

        <div className="mt-24 flex flex-col items-center space-y-6">
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/agustincalisaya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center border-2 border-white dark:border-[#0b1120] shadow-md relative group hover:scale-110 transition-transform cursor-pointer"
            >
              <GithubIcon size={20} className="text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-slate-900 text-white text-xs py-1 px-2 rounded">
                Daniel Calisaya
              </span>
            </a>
          </div>
        </div>

      </main>

      <Footer />

    </div>
  );
}