# Satoru Render Showcase (next-rsc-ogp)

`satoru-render` を使用した、Next.js (App Router) における動的 OGP 画像生成のショーケースプロジェクトです。
Skia バックエンドと WebAssembly を活用し、ヘッドレスブラウザ（Puppeteer 等）を使用せずに高速かつ高精度な HTML to Image レンダリングを実現します。

## 🌟 主な特徴

- **動的 OGP 生成**: ページの HTML をリアルタイムで取得し、`satoru-render` で PNG 画像に変換。
- **高パフォーマンス**: Skia + WASM によるネイティブ級のパフォーマンス。Edge Runtime への対応も容易。
- **Next.js 統合**: App Router の `Metadata API` と連携し、`/api/og?path=...` 形式で動的に画像を紐付け。
- **プレミアム・デザイン**: ミニマリストで洗練された「Studio」スタイルの UI デザイン。

## 🚀 技術スタック

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Rendering Engine**: [satoru-render](https://github.com/SoraKumo001/satoru) (Skia / litehtml / WASM)
- **Styling**: Vanilla CSS / Tailwind CSS (Lucide Icons 等)
- **Language**: TypeScript

## 🛠️ セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

[http://localhost:3000](http://localhost:3000) を開いて結果を確認してください。

## 📁 プロジェクト構造

- `app/api/og/route.tsx`: OGP 画像生成のエンドポイント。
- `lib/metadata.ts`: メタデータ生成ヘルパー。各ページで動的 OGP を簡単に設定できます。
- `app/showcase/`: レンダリングの精度と品質を示すためのショーケースページ。
- `app/globals.css`: プレミアムな「Studio」体験を実現するためのカスタム CSS デザインシステム。

## 📖 使い方

### 動的 OGP の設定

`lib/metadata.ts` の `getMetadata` 関数を使用することで、任意のページに動的な OGP 画像を適用できます。

```tsx
// app/page.tsx
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "My Page Title",
  description: "Page description...",
  path: "/", // 画像生成のソースとなるパス
});
```

これにより、`<meta property="og:image" content="/api/og?path=%2F">` が自動的に挿入されます。

## 🔗 関連リンク

- [satoru-render Repository](https://github.com/SoraKumo001/satoru)
- [Next.js Documentation](https://nextjs.org/docs)

