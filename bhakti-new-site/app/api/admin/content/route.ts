import { NextResponse, type NextRequest } from "next/server";
import { getRequestIp, isAdminRequestAllowed } from "@/app/lib/admin-access";
import { getAdminProductCatalog, readSiteContent, writeSiteContent, type SiteContent } from "@/app/lib/content-store";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const content = await readSiteContent();
  if (!isAdminRequestAllowed(request, content.adminAccess?.allowedIps ?? [])) {
    return new NextResponse("Admin authentication required", { status: 401 });
  }

  return NextResponse.json({ ...content, requestIp: getRequestIp(request), products: await getAdminProductCatalog() });
}

export async function PUT(request: NextRequest) {
  const currentContent = await readSiteContent();
  if (!isAdminRequestAllowed(request, currentContent.adminAccess?.allowedIps ?? [])) {
    return new NextResponse("Admin authentication required", { status: 401 });
  }

  try {
    const content = (await request.json()) as SiteContent;
    const saved = await writeSiteContent(content);
    return NextResponse.json({ ...saved, products: await getAdminProductCatalog() });
  } catch {
    return NextResponse.json({ error: "Invalid content payload" }, { status: 400 });
  }
}
