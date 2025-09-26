export { renderers } from '../../renderers.mjs';

const prerender = false;
async function GET(context) {
  const host = context.request.headers.get("host") || "localhost:4321";
  const url = new URL(context.request.url, `http://${host}`);
  const target = url.searchParams.get("url");
  if (!target) {
    return new Response("Missing url param", { status: 400 });
  }
  try {
    const res = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });
    const contentType = res.headers.get("content-type") || "text/html";
    const data = await res.text();
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch {
    return new Response("Proxy error", { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
