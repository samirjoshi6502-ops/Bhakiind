import { NextResponse, type NextRequest } from "next/server";
import { isAdminIpAllowed } from "@/app/lib/admin-access";

export function proxy(request: NextRequest) {
  const isAdminPath = request.nextUrl.pathname.startsWith("/admin") || request.nextUrl.pathname.startsWith("/api/admin");
  if (isAdminPath && !isAdminIpAllowed(request)) {
    return new NextResponse("Not found", { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};