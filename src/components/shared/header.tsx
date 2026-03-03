import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import LogoLight from "./LogoLight";

export function Header() {
  return (
    <header className="flex justify-between items-center w-full ">
      <LogoLight />
      
      <div className="flex items-center gap-2 sm:gap-4 ">
        <nav className="hidden sm:flex gap-2">
          <Button variant="ghost" asChild className="rounded-xl border shadow-sm">
            <Link href="/dolar">Dólar</Link>
          </Button>
          <Button variant="ghost" asChild className="rounded-xl border shadow-sm">
            <Link href="/euro-real">Euro</Link>
          </Button>
          <Button variant="ghost" asChild className="rounded-xl border shadow-sm">
            <Link href="/euro-real">Real</Link>
          </Button>
        </nav>

        <div className="hidden sm:block w-px h-6 bg-border mx-2"></div>

        <ThemeToggle />
      </div>
    </header>
  );
}