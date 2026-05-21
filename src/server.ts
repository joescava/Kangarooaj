import "@/server-utils/errorCapture";
import { consumeLastCapturedError } from "@/server-utils/errorCapture";
import { renderErrorPage } from "@/server-utils/errorPage";

type ServerEntry = {
  fetch: (
    request: Request,
    env: unknown,
    ctx: unknown,
  ) => Promise<Response> | Response;
};
let serverEntryPromise: Promise<ServerEntry> | undefined;
async function getServerEntry() {
  serverEntryPromise ??= import("@tanstack/react-start/server-entry").then(
    (m) =>
      (m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry),
  );
  return serverEntryPromise;
}
const SECURITY_HEADERS = {
  "content-security-policy":
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' ws: http://localhost:* http://127.0.0.1:* https://www.google-analytics.com https://region1.google-analytics.com; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline'; font-src 'self' data: https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
};
function withSecurityHeaders(response: Response) {
  const secured = new Response(response.body, response);
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) =>
    secured.headers.set(key, value),
  );
  return secured;
}
function brandedErrorResponse() {
  return withSecurityHeaders(
    new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    }),
  );
}
async function normalizeCatastrophicSsrResponse(response: Response) {
  if (
    response.status < 500 ||
    !(response.headers.get("content-type") ?? "").includes("application/json")
  )
    return response;
  const body = await response.clone().text();
  if (!body.includes('"unhandled":true')) return response;
  console.error(consumeLastCapturedError() ?? new Error(`SSR error: ${body}`));
  return brandedErrorResponse();
}
export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      return withSecurityHeaders(
        await normalizeCatastrophicSsrResponse(
          await handler.fetch(request, env, ctx),
        ),
      );
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
