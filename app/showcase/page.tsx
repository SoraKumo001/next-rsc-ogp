import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "The Gallery | satoru-render",
  description: "A showcase of technical excellence and visual precision.",
  path: "/showcase",
});

const features = [
  { id: "01", title: "WebAssembly Architecture", desc: "Compiled for the modern web. Executed with native efficiency." },
  { id: "02", title: "Skia Vector Backend", desc: "The gold standard for pixel-perfect graphics and complex typography." },
  { id: "03", title: "Zero Browser Overhead", desc: "Eliminating the need for headless orchestration. Just pure code." },
  { id: "04", title: "Sub-pixel Precision", desc: "Rendering at 2x, 3x, and beyond. Designed for ultra-high-definition displays." },
  { id: "05", title: "Native Font Shaping", desc: "Advanced BiDi and RTL support via enterprise-grade text engines." },
  { id: "06", title: "Edge Synthesis", desc: "Designed to run at the edge of the network. Milliseconds matter." },
];

export default function Showcase() {
  return (
    <div className="relative bg-background studio-grid">
      <main className="px-8 md:px-24 pt-48 pb-32 w-full max-w-[1800px] mx-auto overflow-hidden">
        <header className="mb-32 animate-reveal">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-studio-muted mb-8 block">
            Technical Exhibition
          </span>
          <h2 className="text-[8vw] md:text-[6vw] font-serif italic leading-none tracking-tighter text-white">
            Form & <br />
            <span className="text-accent not-italic">Infrastructure.</span>
          </h2>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {features.map((f, i) => (
            <div key={f.id} className={`group animate-reveal delay-${(i + 1) * 100} border-t border-white/10 pt-8`}>
              <span className="text-[10px] font-mono text-studio-muted mb-4 block">[{f.id}]</span>
              <h3 className="text-xl font-bold tracking-tight text-white mb-4 group-hover:italic transition-all duration-500">
                {f.title}
              </h3>
              <p className="text-studio-muted leading-relaxed tracking-tight group-hover:text-white/60 transition-colors">
                {f.desc}
              </p>
            </div>
          ))}
        </section>

        <div className="mt-48 py-24 border-y border-white/5 animate-reveal delay-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-8">
              <h4 className="text-3xl font-serif italic text-white leading-tight">
                "Speed is the bridge between imagination and reality."
              </h4>
              <div className="w-12 h-[1px] bg-white/40" />
            </div>
            <div>
              <p className="text-studio-muted text-lg leading-relaxed mb-12">
                satoru-render is more than a tool; it's an infrastructural evolution. 
                By reimagining the rendering pipeline from the ground up in C++, 
                we've enabled possibilities that were previously blocked by 
                the constraints of the browser environment.
              </p>
              <button className="px-10 py-4 border border-white/20 hover:border-white transition-colors text-[10px] uppercase tracking-[0.4em] font-bold text-white">
                Read Documentation
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
