
import TransparentContainerReusable from "@/app/components/TransparentContainerReusable";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Sex laxar i en laxask</h1>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8 overflow-hidden text-white">
        <div className="relative z-10 max-w-4xl mx-auto flex items-center justify-center min-h-[80vh]">
          <TransparentContainerReusable className="p-10 shadow-2xl opacity-50 bg-black/50 border border-white/30 rounded-xl">
            <h1 className="text-4xl font-bold text-center">Sex laxar i en laxask</h1>
          </TransparentContainerReusable>
        </div>
      </div>
    </div>
  );
}
