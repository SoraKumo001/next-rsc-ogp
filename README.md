# Weather Hub - Satoru Render Showcase

`satoru-render` を活用した、Next.js (App Router) における高精度な動的 OGP 生成のショーケースプロジェクトです。
気象庁（JMA）の公開APIから取得したリアルタイムな天気予報を、美しいデザインで表示し、そのページ自体をそのまま OGP 画像として提供します。

## 🌟 プロジェクトの概要

このプロジェクトは、ヘッドレスブラウザ（Puppeteerなど）を使用せずに、サーバーサイドで HTML を直接 PNG 画像に変換する `satoru-render` の実用例を示します。

### 1. 動的 OGP 生成の仕組み

一般的な OGP 生成（`@vercel/og` 等）は、専用の Canvas API や特定のサブセットを用いて画像を構築しますが、本プロジェクトでは**「ユーザーが見ているページそのもの」**を画像化します。

1. **メタデータ生成**: 各ページで `Metadata API` が実行され、OGP画像URLとして `/api/og?path=/target-path` を返します。
2. **画像リクエスト**: SNSやクローラーがこのURLにアクセスします。
3. **HTML取得**: `/api/og` エンドポイントが内部的にターゲットパスの HTML を `fetch` します。
4. **レンダリング**: 取得した HTML 文字列を `satoru-render` に渡します。
5. **画像変換**: Skia バックエンドと WebAssembly を用いて、CSSレイアウトを忠実に再現した PNG 画像を高速に生成し、レスポンスとして返します。
6. **キャッシュ戦略**: `stale-while-revalidate` を採用し、CDN でのキャッシュとバックグラウンドでの最新画像への更新を両立しています。

### 2. 気象庁 API の統合

`lib/jma.ts` を通じて、気象庁が提供する JSON データを取得しています。

- **地域リスト**: 全国約150箇所の地域情報を取得。
- **天気予報**: 特定地域の3日間の天気、風、波の予報を取得。
- **動的ルーティング**: `/forecast/[code]` 形式で、地域ごとの情報をオンデマンドで生成。

## 🚀 主な機能

- **Real-time Forecast**: 気象庁の最新データに基づいた天気表示。
- **Dynamic OGP**: ページの状態（天気や地域名）が反映された OGP 画像をリアルタイム生成。
- **Premium UI**: ガラスモーフィズム、カスタムグラデーション、アニメーションを多用したモダンな「Studio」デザイン。
- **Optimized Performance**: WASM ベースのレンダリングによる、エッジ環境でも動作可能な高速な画像生成。

## 🛠️ 技術スタック

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router / RSC)
- **Rendering Engine**: [satoru-render](https://github.com/SoraKumo001/satoru)
- **Data Source**: 気象庁 (JMA) 公開 API
- **Styling**: Vanilla CSS (CSS Variables) + Tailwind CSS
- **Icons**: Custom SVG + Animated Weather Icons

## 📁 プロジェクト構造

- `app/api/og/route.tsx`: OGP 画像生成の中核。HTMLをキャプチャし画像化。
- `app/forecast/[code]/`: 地域ごとの天気予報を表示する動的ルート。
- `lib/jma.ts`: 気象庁 API との通信ロジック。
- `lib/metadata.ts`: 各ページ共通のメタデータ生成ヘルパー。
- `app/layout.tsx`: `metadataBase` の設定や Google Fonts の最適化。

## 📖 開発と運用

### セットアップ

```bash
pnpm install
pnpm dev
```

### 使い方

新しいページを作成し、`getMetadata` を呼び出すだけで、そのページの動的 OGP が有効になります。

```tsx
export const metadata = getMetadata({
  title: "地域名 天気予報",
  description: "詳細な予報を表示します。",
  path: "/your-page-path",
});
```

## 🔗 関連リソース

- [satoru-render Repository](https://github.com/SoraKumo001/satoru) - レンダリングエンジンのコア。
