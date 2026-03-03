import { Header } from "@/src/components/shared/header";
import { Footer } from "@/src/components/shared/footer";
import { Skeleton } from "@/src/components/ui/skeleton";

export default function LoadingEuroReal() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. HEADER (Carga instantánea) */}
      <div className="w-full bg-white dark:bg-[#111827] border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <Header />
        </div>
      </div>

      <main className="flex-1 px-4 pt-4 pb-12 md:px-8 md:pt-6 max-w-5xl mx-auto w-full relative overflow-hidden">
        
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[30%] right-[-5%] w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[90%] w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-60%] right-[-10%] w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="space-y-12 relative z-10">
          
          <section className="space-y-6">
            <Skeleton className="h-8 w-24" />
            
            <div className="flex gap-8">
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-8 w-32" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" /> 
                <Skeleton className="h-8 w-32" /> 
              </div>
            </div>

            <Skeleton className="h-24 w-full rounded-xl" />
            <Skeleton className="h-[350px] w-full rounded-xl" /> 
            <Skeleton className="h-3 w-48" /> 
          </section>

          <hr className="border-border" />

          <section className="space-y-6">
            <Skeleton className="h-8 w-24" /> 
            
            <div className="flex gap-8">
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-8 w-32" /> 
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" /> 
                <Skeleton className="h-8 w-32" /> 
              </div>
            </div>

            <Skeleton className="h-24 w-full rounded-xl" />
            <Skeleton className="h-[350px] w-full rounded-xl" /> 
            <Skeleton className="h-3 w-48" /> 
          </section>

        </div>
      </main>

      <Footer />
      
    </div>
  );
}