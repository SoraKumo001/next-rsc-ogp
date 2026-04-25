import { getMetadata } from "@/lib/metadata";
export const metadata = getMetadata({
  title: "Satoru Render OGP Showcase",
  description:
    "Next.js RSC環境での高精度な動的OGP生成の解説とデモンストレーション",
  path: "/",
});

export default function Page() {
  return (
    <main className="min-h-screen studio-grid selection:bg-indigo-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end px-8 py-6 pointer-events-none">
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
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 text-center space-y-8 animate-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider uppercase text-indigo-300 mb-4">
            Next.js RSC + Satoru Render
          </div>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight leading-[1.1]">
            <span className="text-gradient-aurora">Dynamic OGP</span>
            <br />
            <span className="italic text-gradient">at the Speed of Light</span>
          </h1>
          <p className="text-xl text-studio-muted max-w-2xl mx-auto font-sans leading-relaxed">
            satoru-render は、HTMLを直接画像に変換する強力なエンジンです。
            サーバーサイドでのレンダリングにより、開発者は使い慣れたCSSでOGPを完全にコントロールできます。
          </p>
        </div>
      </section>
      <div className="flex justify-center pb-20 animate-reveal delay-300">
        <a
          href="/api/og?path=/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
          <span className="relative text-lg font-medium text-white tracking-wide">
            OGPイメージをプレビュー
          </span>
          <svg
            className="relative w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Mechanism Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-t border-white/5">
        <div className="space-y-4 animate-reveal delay-200">
          <div className="text-3xl font-serif italic text-gradient-aurora">
            01.
          </div>
          <h3 className="text-xl font-bold font-sans">Fetch HTML</h3>
          <p className="text-studio-muted text-sm leading-relaxed">
            APIルートがリクエストを受け取ると、対象のURLのHTMLをサーバーサイドでフェッチします。
            Next.jsのRSCにより、最新の状態が反映されます。
          </p>
        </div>
        <div
          className="space-y-4 animate-reveal delay-200"
          style={{ animationDelay: "300ms" }}
        >
          <div className="text-3xl font-serif italic text-gradient-aurora">
            02.
          </div>
          <h3 className="text-xl font-bold font-sans">Satoru Render</h3>
          <p className="text-studio-muted text-sm leading-relaxed">
            satoru-render
            エンジンがHTML/CSSを解析し、Skiaベースの描画パイプラインを通じて
            ピクセルパーフェクトな画像を生成します。
          </p>
        </div>
        <div
          className="space-y-4 animate-reveal delay-200"
          style={{ animationDelay: "400ms" }}
        >
          <div className="text-3xl font-serif italic text-gradient-aurora">
            03.
          </div>
          <h3 className="text-xl font-bold font-sans">Response</h3>
          <p className="text-studio-muted text-sm leading-relaxed">
            生成されたPNGバイナリが適切なキャッシュヘッダーと共に返され、
            各種SNSでリッチなプレビューとして表示されます。
          </p>
        </div>
      </section>

      {/* Code Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 animate-reveal delay-300">
          <h3 className="text-2xl font-serif text-gradient">Implementation</h3>
          <div className="font-mono text-sm overflow-x-auto p-6 bg-black/40 rounded-xl border border-white/5 leading-relaxed">
            <pre className="text-indigo-300">
              {`// lib/metadata.ts
// OGPイメージの埋め込み
export function getMetadata({ title, path }: Options) {
  const ogImage = \`/api/og?path=\${encodeURIComponent(path)}\`;
  return {
    title,
    openGraph: { images: [ogImage] }
  };
}

// app/api/og/route.tsx
// OGPイメージの生成
import { NextResponse } from "next/server";
import { render } from "satoru-render";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const baseUrl = url.origin;
    const path = url.searchParams.get("path") || "/";

    // HTTP経由で表示対象のHTMLを取得
    const targetUrl = new URL(path, baseUrl).toString();
    const response = await fetch(targetUrl);

    if (!response.ok) {
      throw new Error(
        \`Failed to fetch HTML: \${response.status} \${response.statusText}\`,
      );
    }

    const html = await response.text();

    // 画像化 (satoru-renderへ取得したHTML文字列をそのまま渡す)
    const png = await render({
      value: html,
      width: 1200,
      // 先頭部分を切り抜く
      crop: {
        x: 0,
        y: 0,
        width: 1200,
        height: 630,
      },
      baseUrl,
      format: "png",
    });

    return new NextResponse(Buffer.from(png), {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Error generating OGP image:", errorMessage);
    return NextResponse.json(
      { error: "Failed to generate image", details: errorMessage },
      { status: 500 },
    );
  }
}

`}
            </pre>
          </div>
          <p className="text-studio-muted text-sm font-sans">
            メタデータヘルパーを使用することで、各ページでわずか数行のコードを追加するだけで
            動的なOGP対応が可能になります。
          </p>
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
