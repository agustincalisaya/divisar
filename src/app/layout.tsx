import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/shared/theme-provider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://divis-ar.vercel.app"),
  
  title: "DivisAR - Cotizaciones en tiempo real",
  description: "Tu herramienta definitiva para seguir las cotizaciones del Dólar (Blue, Oficial, MEP), Euro y Real, y realizar conversiones en tiempo real en Argentina.",
  keywords: ["dólar", "dolar blue", "euro", "real", "cotización", "argentina", "divisas", "dolar mep", "convertidor"],
  authors: [{ name: "Daniel Agustin Calisaya" }],
  
  openGraph: {
    title: "DivisAR | Cotizaciones de Divisas en Argentina",
    description: "Seguí en tiempo real la cotización del Dólar, Euro y Real. Convertidor de monedas actualizado al instante.",
    url: "https://divis-ar.vercel.app",
    siteName: "DivisAR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vista previa del dashboard de DivisAR",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DivisAR | Cotizaciones en tiempo real",
    description: "Seguí en tiempo real la cotización del Dólar, Euro y Real en Argentina.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <div className="relative flex flex-col min-h-screen overflow-x-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}