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
        `Failed to fetch HTML: ${response.status} ${response.statusText}`,
      );
    }

    const html = await response.text();

    // 画像化 (satoru-renderへ取得したHTML文字列をそのまま渡す)
    const png = await render({
      value: html,
      width: 1200,
      // height: 800, // 典型的なOGPサイズ
      outputWidth: 1200,
      outputHeight: 630,
      // crop: {
      //   x: 0,
      //   y: 0,
      //   width: 1200,
      //   height: 630,
      // },
      fit: "cover",
      fitPosition: {
        x: 0.5,
        y: 0,
      },
      baseUrl,
      format: "png",
    });

    return new NextResponse(Buffer.from(png), {
      status: 200,
      // headers: {
      //   "Content-Type": "image/png",
      //   "Cache-Control": "public, max-age=3600, s-maxage=3600",
      // },
      // Note: Edge compatibility: in NextJS 16 'Buffer.from' works on Node and Edge (as Uint8Array wrapper)
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
