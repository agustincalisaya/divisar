import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="mb-8 flex justify-between items-center bg-card p-4 rounded-xl border shadow-sm">
      <Link href="/" className="text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
        DivisAR
      </Link>
      
      <div className="flex items-center gap-2 sm:gap-4">
        <nav className="hidden sm:flex gap-2">
          <Button variant="ghost" asChild>
            <Link href="/dolar">Dólar</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/euro-real">Euro</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/euro-real">Real</Link>
          </Button>
        </nav>
        <div className="hidden sm:block w-px h-6 bg-border mx-2"></div>
        <ThemeToggle />
      </div>
    </header>
  );
}