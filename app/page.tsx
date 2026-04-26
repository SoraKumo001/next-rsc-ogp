import { getAreaList } from "@/lib/jma";
import { getMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = getMetadata({
  title: "全国天気予報 | Satoru Render",
  description: "気象庁の最新データに基づいた、全国各地の天気予報一覧です。",
  path: "/",
});

export default async function Page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const areas = await getAreaList();

  // クエリパラメータを構築
  const queryString = new URLSearchParams(searchParams as any).toString();
  const targetPath = `/${queryString ? `?${queryString}` : ""}`;
  const ogpUrl = `/api/og?path=${encodeURIComponent(targetPath)}`;

  return (
    <main className="min-h-screen studio-grid selection:bg-indigo-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end gap-3 px-8 py-6 pointer-events-none">
        <a
          href={ogpUrl}
          target="_blank"
          className="pointer-events-auto group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
        >
          <svg
            className="w-4 h-4 text-white/70 group-hover:text-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
            OGP Image
          </span>
        </a>
        <a
          href="https://github.com/SoraKumo001/next-rsc-ogp"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
        >
          <svg
            className="w-5 h-5 text-white/70 group-hover:text-white transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
            Source on GitHub
          </span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 space-y-8 animate-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider uppercase text-indigo-300 mb-4">
            JMA API + satoru-render
          </div>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight leading-[1.1]">
            <span className="text-gradient-aurora">Weather Hub</span>
            <br />
            <span className="italic text-gradient">Select your region</span>
          </h1>
          <p className="text-xl text-studio-muted max-w-2xl mx-auto font-sans leading-relaxed">
            日本各地の最新の天気予報をお届けします。
            地域を選択して、詳細な予報と美しいOGPプレビューを確認してください。
          </p>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {areas.map((area) => (
            <Link
              key={area.officeCode}
              href={`/forecast/${area.officeCode}`}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-2"
            >
              <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">
                {area.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
                {area.enName}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-xs tracking-[0.2em] text-white/20 uppercase font-sans">
          Built with satoru-render & Next.js
        </p>
      </footer>
    </main>
  );
}
