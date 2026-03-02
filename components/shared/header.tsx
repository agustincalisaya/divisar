
export function Header() {
  return (
    <header className="mb-8 flex justify-between items-center bg-white dark:bg-zinc-900 p-4 rounded-xl border shadow-sm">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        DivisAR
      </h1>
      <div className="flex gap-3">
        <div className="h-9 w-24 bg-slate-100 dark:bg-zinc-800 rounded-md border animate-pulse"></div>
        <div className="h-9 w-24 bg-slate-100 dark:bg-zinc-800 rounded-md border animate-pulse"></div>
      </div>
    </header>
  );
}