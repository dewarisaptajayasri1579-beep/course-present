import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) return NextResponse.json({ embeddable: false });

  try {
    // We use a GET or HEAD request. Some sites block HEAD, so we use GET but abort it early to save bandwidth if possible, or just standard GET.
    // To be safe with sites like ChatGPT, a normal fetch with a User-Agent might be needed, but we'll try a simple fetch first.
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AIOneDayBot/1.0)',
      }
    });

    const xFrameOptions = response.headers.get('x-frame-options');
    const csp = response.headers.get('content-security-policy');

    let embeddable = true;

    if (xFrameOptions) {
      const xfo = xFrameOptions.toLowerCase();
      if (xfo === 'deny' || xfo === 'sameorigin') {
        embeddable = false;
      }
    }

    if (csp) {
      const cspLower = csp.toLowerCase();
      if (cspLower.includes("frame-ancestors 'none'") || cspLower.includes("frame-ancestors 'self'")) {
        embeddable = false;
      }
    }

    return NextResponse.json({ embeddable, status: response.status });
  } catch (error) {
    // Network error or blocked entirely (e.g., Cloudflare JS challenge)
    return NextResponse.json({ embeddable: false, error: 'Failed to fetch headers' });
  }
}
