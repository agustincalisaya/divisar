"use client";

import { Button } from "@/src/components/ui/button";

export function CotizarButton() {
  const handleScroll = () => {
    // 1. Buscamos la sección de cotizaciones
    const element = document.getElementById("cotizaciones");
    
    if (element) {
      // 2. Definimos cuánto margen queremos dejar arriba (80px es ideal por tu header)
      const offset = 80;
      
      // 3. Calculamos exactamente a cuántos píxeles está de la parte de arriba
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      // 4. Forzamos a la ventana a deslizarse suavemente hasta ese cálculo matemático
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleScroll}
      className="bg-white dark:bg-zinc-900 shadow-sm text-primary hover:text-primary hover:bg-slate-50 border-primary/20"
    >
      COTIZAR
    </Button>
  );
}