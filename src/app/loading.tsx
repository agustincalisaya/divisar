import { Header } from "@/src/components/shared/header";
import { Footer } from "@/src/components/shared/footer";
import { Skeleton } from "@/src/components/ui/skeleton";

export default function LoadingHome() {
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
        
        <div className="flex flex-col items-center text-center space-y-6 w-full">
          <Skeleton className="h-12 md:h-16 w-3/4 max-w-md rounded-xl" />
          <Skeleton className="h-6 w-full max-w-xl rounded-md" />
          <Skeleton className="h-6 w-5/6 max-w-lg rounded-md hidden md:block" />
        </div>

        <div className="mt-16 w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          <div className="relative flex items-center justify-center">
            <Skeleton className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-200/50 dark:bg-slate-800/50" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-2xl dark:from-cyan-900/20"></div>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-[240px]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-800 rounded-xl">
                <Skeleton className="w-7 h-7 rounded-full flex-shrink-0" />
                <Skeleton className="h-5 w-24 rounded-md" />
              </div>
            ))}
          </div>

        </div>

        <div className="mt-24 flex flex-col items-center space-y-6">
          <Skeleton className="w-12 h-12 rounded-full" />
        </div>

      </main>

      <Footer />

    </div>
  );
}