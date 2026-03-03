"use client";

import { Button } from "@/src/components/ui/button";

export function CotizarButton() {
  const handleScroll = () => {
    const element = document.getElementById("cotizaciones");
    
    if (element) {
      const offset = 80;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

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