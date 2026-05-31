export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-xs font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 rounded-full">
            Domain-Driven Design Lite
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">
            Next.js{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              DDD
            </span>{" "}
            Template
          </h1>
          <p className="text-zinc-400 text-lg">
            Domain, application & infrastructure separation. Enterprise-grade.
          </p>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 font-mono">
          <p className="text-xs text-zinc-500 mb-2">// generate with</p>
          <p className="text-sm text-emerald-400">
            <span className="text-zinc-500">$</span> npx create-next-arch my-app{" "}
            <span className="text-yellow-400">--template ddd</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "domain/", desc: "Entities, repos & value objects" },
            { label: "application/", desc: "Use cases & orchestration" },
            { label: "infrastructure/", desc: "API, storage & DB adapters" },
            { label: "presentation/", desc: "Components & UI hooks" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 hover:border-emerald-500/30 transition-colors"
            >
              <p className="font-mono text-sm text-emerald-400">{item.label}</p>
              <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
