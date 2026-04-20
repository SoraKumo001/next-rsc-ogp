import type { Metadata } from "next";

interface MetadataOptions {
  title?: string;
  description?: string;
  path?: string;
}

/**
 * 共通のメタデータを生成するヘルパー関数
 * 画像生成URLに自動的にパスを付与します。
 */
export function getMetadata({ title, description, path = "/" }: MetadataOptions): Metadata {
  const ogImage = `/api/og?path=${encodeURIComponent(path)}`;
  const displayTitle = title ? `${title} | Satoru Render` : "Satoru Render Demo";

  return {
    title: displayTitle,
    description: description || "Generate OGP images dynamically using satoru-render.",
    openGraph: {
      title: displayTitle,
      description: description || "Generate OGP images dynamically using satoru-render.",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description: description || "Generate OGP images dynamically using satoru-render.",
      images: [ogImage],
    },
  };
}
