import { getMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = getMetadata({
  title: "Satoru | Precice Rendering Studio",
  description:
    "Experience the next level of HTML to Image synthesis. Zero-latency, native Skia performance.",
  path: "/",
});

export default function Home() {
  return (
    <div className="relative bg-background studio-grid">
      <main className="px-8 md:px-24 pt-48 pb-24 z-10 w-full max-w-[1800px] mx-auto">
        <div className="animate-reveal">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-studio-muted mb-8 block">
            Synthesized for the Edge
          </span>
          <h1 className="text-[14vw] md:text-[10vw] font-serif italic leading-[0.85] tracking-tighter text-white mb-16">
            Everything is <br />
            <span className="text-accent not-italic">Precise.</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mt-32">
          <div className="max-w-xl animate-reveal delay-100">
            <p className="text-lg md:text-2xl text-studio-muted leading-[1.4] tracking-tight">
              A high-performance HTML-to-Image synthesis engine. Native Skia
              backend. Optimized for Next.js and Edge runtimes. No headless
              overhead, just pure layout execution.
            </p>
          </div>

          <div className="flex flex-col items-start gap-12 animate-reveal delay-200">
            <div className="grid grid-cols-2 gap-12 md:gap-24">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-studio-muted block mb-4">
                  Core
                </span>
                <span className="text-sm font-medium tracking-tight text-white block">
                  Skia Engine
                </span>
                <span className="text-sm font-medium tracking-tight text-white block">
                  litehtml Parser
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-studio-muted block mb-4">
                  Runtime
                </span>
                <span className="text-sm font-medium tracking-tight text-white block">
                  WebAssembly
                </span>
                <span className="text-sm font-medium tracking-tight text-white block">
                  Edge API Ready
                </span>
              </div>
            </div>

            <div className="flex gap-8">
              <Link
                href="/showcase"
                className="group relative text-[10px] uppercase tracking-[0.4em] font-bold text-white pt-2"
              >
                Enter Showcase
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              <a
                href="https://github.com/SoraKumo001/satoru"
                target="_blank"
                className="group relative text-[10px] uppercase tracking-[0.4em] font-bold text-studio-muted pt-2 hover:text-white transition-colors"
              >
                Source Code
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
