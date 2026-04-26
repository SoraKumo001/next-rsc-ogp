import { NextResponse } from "next/server";
import { render } from "satoru-render";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const baseUrl = url.origin;
    const targetPath = url.searchParams.get("path") || "/";

    // ターゲットURLの構築
    const targetUrl = new URL(targetPath, baseUrl);

    // 'path' 以外の全てのクエリパラメータをターゲットURLに引き継ぐ
    url.searchParams.forEach((value, key) => {
      if (key !== "path") {
        targetUrl.searchParams.set(key, value);
      }
    });

    // HTTP経由で表示対象のHTMLを取得
    const response = await fetch(targetUrl.toString());

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
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=3600",
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
