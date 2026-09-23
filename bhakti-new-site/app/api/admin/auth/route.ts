import { NextResponse, type NextRequest } from "next/server";
import { getConfiguredAdminIps, getRequestIp, isAdminIpAllowed, isAdminRequestAllowed } from "@/app/lib/admin-access";
import { readSiteContent } from "@/app/lib/content-store";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const content = await readSiteContent();
  const savedIps = content.adminAccess?.allowedIps ?? [];
  const ipAllowed = isAdminIpAllowed(request, savedIps);
  return NextResponse.json({ authenticated: ipAllowed && isAdminRequestAllowed(request, savedIps), ipAllowed, requestIp: getRequestIp(request), allowedIps: [...new Set([...getConfiguredAdminIps(), ...savedIps])] });
}

export async function POST(request: NextRequest) {
  const content = await readSiteContent();
  if (!isAdminIpAllowed(request, content.adminAccess?.allowedIps ?? [])) {
    return NextResponse.json({ error: `This IP (${getRequestIp(request) || "unknown"}) is not on the admin allowlist.` }, { status: 403 });
  }

  const adminSecret = process.env.ADMIN_SECRET || (process.env.NODE_ENV === "production" ? "" : "local-development-admin-session");
  if (!adminSecret) {
    return NextResponse.json({ error: "ADMIN_SECRET is not configured on this deployment." }, { status: 503 });
  }

  const body = await request.json().catch(() => null) as { email?: string; password?: string } | null;
  const expectedEmail = process.env.ADMIN_EMAIL || "admin@example.com";
  const expectedPassword = process.env.ADMIN_PASSWORD || "admin123";
  if (body?.email !== expectedEmail || body.password !== expectedPassword) {
    return NextResponse.json({ error: "Invalid admin email or password." }, { status: 401 });
  }

  const response = NextResponse.json({ authenticated: true });
  response.cookies.set("bhakti_admin_session", adminSecret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.set("bhakti_admin_session", "", { httpOnly: true, expires: new Date(0), path: "/" });
  return response;
}