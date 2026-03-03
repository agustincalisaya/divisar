import { Header } from "@/src/components/shared/header";
import { Footer } from "@/src/components/shared/footer";
import { Skeleton } from "@/src/components/ui/skeleton";

export default function LoadingLegales() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b1120] transition-colors duration-300">
      
      <div className="w-full bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <Header />
        </div>
      </div>

      <main className="flex-1 px-4 pt-8 pb-16 md:px-8 md:pt-12 max-w-4xl mx-auto w-full relative overflow-hidden">
        <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
          
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[50%] right-[50%] w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

          <Skeleton className="h-10 w-48 md:w-64 mb-8 relative z-10" />

          <div className="space-y-8 relative z-10">
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}