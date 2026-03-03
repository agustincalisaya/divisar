import { Skeleton } from "@/src/components/ui/skeleton";
import { Header } from "@/src/components/shared/header";

export default function LoadingDolar() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full bg-white dark:bg-[#111827] border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-4">
          <Header />
        </div>
      </div>

      <main className="flex-1 px-4 pt-8 pb-12 md:px-8 md:pt-10 max-w-5xl mx-auto w-full">
        <div className="space-y-12">
          
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-10 w-24" /> 
            </div>
            
            <div className="flex gap-8 mb-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-8 w-32" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-8 w-32" />
              </div>
            </div>

            <Skeleton className="h-[350px] w-full rounded-xl" />
            <Skeleton className="h-3 w-48" />
          </section>

          <section className="space-y-4 pt-8">
            <Skeleton className="h-6 w-48 mb-4" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-32 w-full rounded-xl" />
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}