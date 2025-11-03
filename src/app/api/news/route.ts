import { NextRequest, NextResponse } from "next/server";

const NEWS_API_URL = "https://newsapi.org/v2/everything";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const q = searchParams.get("q") || "news";
  const language = searchParams.get("language") || "en";
  const sortBy = searchParams.get("sortBy") || "relevancy";
  const pageSize = searchParams.get("pageSize") || "30";
  const searchIn = searchParams.get("searchIn") || "title,description";

  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { message: "Server misconfiguration: NEWS_API_KEY is not set." },
      { status: 500 }
    );
  }

  const url = new URL(NEWS_API_URL);
  url.searchParams.set("q", q);
  url.searchParams.set("language", language);
  url.searchParams.set("sortBy", sortBy);
  url.searchParams.set("pageSize", pageSize);
  url.searchParams.set("searchIn", searchIn);

  try {
    const response = await fetch(url.toString(), {
      headers: { "X-Api-Key": apiKey },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { message: "Upstream error from NewsAPI", statusText: response.statusText, details: text },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Failed to fetch from NewsAPI", error: err?.message || String(err) },
      { status: 502 }
    );
  }
}


