import { getForecast } from "@/lib/jma";
import { getMetadata } from "@/lib/metadata";
import { WeatherIcon } from "@/app/components/WeatherIcon";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ code: string }>;
}) {
  const params = await props.params;
  const code = params.code;
  try {
    const forecast = await getForecast(code);
    const areaName = forecast[0].timeSeries[0].areas[0].area.name;
    return getMetadata({
      title: `${areaName}の天気予報`,
      description: `${areaName}の直近の天気予報を表示します。`,
      path: `/forecast/${code}`,
    });
  } catch {
    return getMetadata({ title: "天気予報", path: `/forecast/${code}` });
  }
}

export default async function ForecastPage(props: {
  params: Promise<{ code: string }>;
}) {
  const params = await props.params;
  const code = params.code;
  let forecast;
  try {
    forecast = await getForecast(code);
  } catch {
    notFound();
  }

  const officeName = forecast[0].publishingOffice;
  const areaForecast = forecast[0].timeSeries[0].areas[0];
  const timeDefines = forecast[0].timeSeries[0].timeDefines;

  return (
    <main className="min-h-screen studio-grid selection:bg-indigo-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between px-8 py-6 pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
        >
          <svg
            className="w-4 h-4 text-white/70 group-hover:text-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
            戻る
          </span>
        </Link>

        <div className="flex gap-3 pointer-events-none">
          <a
            href={`/api/og?path=/forecast/${code}`}
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
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 text-center space-y-8 animate-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider uppercase text-indigo-300 mb-4">
            {officeName} 発表
          </div>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight leading-[1.1]">
            <span className="text-gradient-aurora">
              {areaForecast.area.name}
            </span>
            <br />
            <span className="italic text-gradient">Weather Forecast</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {timeDefines.slice(0, 3).map((time, i) => (
              <div
                key={time}
                className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl min-w-[200px] group hover:bg-white/10 transition-all duration-500"
              >
                <p className="text-studio-muted mb-4 font-sans text-sm">
                  {new Date(time).toLocaleDateString("ja-JP", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <WeatherIcon
                  code={areaForecast.weatherCodes?.[i] || "100"}
                  className="w-20 h-20 mb-6 group-hover:scale-110 transition-transform duration-500"
                />
                <p className="text-xl font-bold font-sans text-white/90">
                  {areaForecast.weathers?.[i]?.split("　")[0] || "不明"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-serif text-indigo-300 italic">
              Wind & Waves
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-white/30">
                  風の予報
                </span>
                <p className="text-white/80 leading-relaxed">
                  {areaForecast.winds?.[0]}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-white/30">
                  波の予報
                </span>
                <p className="text-white/80 leading-relaxed">
                  {areaForecast.waves?.[0] || "なし"}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-serif text-purple-300 italic">
              Regional Context
            </h3>
            <p className="text-studio-muted leading-relaxed">
              この予報は {officeName} によって提供されています。
              最新の情報は気象庁の公式サイトをご確認ください。
            </p>
            <div className="pt-4">
              <a
                href={`https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=${code}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2"
              >
                気象庁公式サイトで見る
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-xs tracking-[0.2em] text-white/20 uppercase font-sans">
          Powered by JMA API & satoru-render
        </p>
      </footer>
    </main>
  );
}
