"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface OGPLinkProps {
  path: string;
  className?: string;
  children: React.ReactNode;
}

export default function OGPLink({ path, className, children }: OGPLinkProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    try {
      const baseUrl = window.location.origin;
      const ogUrl = `/api/og?path=${encodeURIComponent(path)}`;
      const fullUrl = new URL(ogUrl, baseUrl).toString();

      // 画像の生成を待機（fetchしてレスポンスが返ってくるまで待つ）
      const res = await fetch(fullUrl);
      if (res.ok) {
        // 生成完了後、別タブで開く
        window.open(fullUrl, "_blank");
      } else {
        console.error("Failed to generate OGP image");
      }
    } catch (error) {
      console.error("Error generating OGP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <a
      href={`/api/og?path=${encodeURIComponent(path)}`}
      onClick={handleClick}
      className={`${className} flex items-center justify-center min-w-[120px]`}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="w-3 h-3 animate-spin opacity-50" />
          <span className="animate-pulse">Generating</span>
        </span>
      ) : (
        children
      )}
    </a>
  );
}
