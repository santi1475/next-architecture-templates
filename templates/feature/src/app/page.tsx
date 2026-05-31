export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-8">
        {/* Badge */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-xs font-mono border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 rounded-full">
            Feature-Driven System
          </span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">
            Next.js{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              FDS
            </span>{" "}
            Template
          </h1>
          <p className="text-zinc-400 text-lg">
            Feature-Driven System architecture. Modular, scalable, domain-centric.
          </p>
        </div>

        {/* CLI command */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 font-mono">
          <p className="text-xs text-zinc-500 mb-2">// generate with</p>
          <p className="text-sm text-cyan-400">
            <span className="text-zinc-500">$</span> npx create-next-arch my-app{" "}
            <span className="text-yellow-400">--template feature</span>
          </p>
        </div>

        {/* Architecture overview */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "features/auth", desc: "Auth domain module" },
            { label: "features/dashboard", desc: "Dashboard domain module" },
            { label: "shared/components", desc: "Reusable UI components" },
            { label: "shared/lib", desc: "HTTP client & utilities" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 hover:border-cyan-500/30 transition-colors"
            >
              <p className="font-mono text-sm text-cyan-400">{item.label}</p>
              <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
