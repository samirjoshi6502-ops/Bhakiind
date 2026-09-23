import type { NextRequest } from "next/server";

const allowedIps = new Set(["127.0.0.1", "::1", "::ffff:127.0.0.1"]);

export function getRequestIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return request.headers.get("cf-connecting-ip")?.trim() || request.headers.get("x-real-ip")?.trim() || forwarded || "";
}

export function getConfiguredAdminIps(): string[] {
  return (process.env.ADMIN_ALLOWED_IPS ?? "").split(",").map((ip) => ip.trim()).filter(Boolean);
}

export function isAdminIpAllowed(request: NextRequest, extraIps: string[] = []): boolean {
  const requestIp = getRequestIp(request);
  if (allowedIps.has(requestIp)) return true;
  return [...getConfiguredAdminIps(), ...extraIps].includes(requestIp);
}

export function isAdminRequestAllowed(request: NextRequest, extraIps: string[] = []): boolean {
  if (!isAdminIpAllowed(request, extraIps)) return false;

  const adminSecret = process.env.ADMIN_SECRET || (process.env.NODE_ENV === "production" ? "" : "local-development-admin-session");
  if (!adminSecret) return false;

  const cookieToken = request.cookies.get("bhakti_admin_session")?.value;
  const headerToken = request.headers.get("x-admin-token") ?? request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  return cookieToken === adminSecret || headerToken === adminSecret;
}
