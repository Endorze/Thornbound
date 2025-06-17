import TransparentContainerReusable from "@/app/components/TransparentContainerReusable";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8">
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12 tracking-wider">
          REUSABLE TRANSPARENT CONTAINER
        </h1>

        <TransparentContainerReusable>
          <h2 className="text-2xl font-semibold text-white mb-4">Default 50% Opacity</h2>
          <p className="text-gray-200 leading-relaxed">
            This is our reusable transparent container component with 50% opacity by default.
            we can use this component anywhere in our project!
          </p>
        </TransparentContainerReusable>
      </div>
    </div>
  );
}
