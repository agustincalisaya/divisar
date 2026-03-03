import { Header } from "@/components/shared/header";

export default async function DolarPage() {
 
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full bg-white dark:bg-[#111827] border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <Header />
        </div>
      </div>
    </div>
  );
}