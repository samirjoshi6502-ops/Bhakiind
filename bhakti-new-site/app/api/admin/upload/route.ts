import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { isAdminRequestAllowed } from "@/app/lib/admin-access";
import { readSiteContent } from "@/app/lib/content-store";

export const dynamic = "force-dynamic";

const allowedTypes: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "video/mp4": ".mp4",
  "video/webm": ".webm",
  "application/pdf": ".pdf",
};

export async function POST(request: NextRequest) {
  const content = await readSiteContent();
  if (!isAdminRequestAllowed(request, content.adminAccess?.allowedIps ?? [])) {
    return new NextResponse("Admin authentication required", { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Choose a file first." }, { status: 400 });
  }

  const extension = allowedTypes[file.type];
  if (!extension) {
    return NextResponse.json({ error: "This file type is not supported." }, { status: 415 });
  }
  if (file.size > 50 * 1024 * 1024) {
    return NextResponse.json({ error: "Files must be smaller than 50 MB." }, { status: 413 });
  }

  const fileName = `${Date.now()}-${randomUUID()}${extension}`;
  const uploadDirectory = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadDirectory, { recursive: true });
  await fs.writeFile(path.join(uploadDirectory, fileName), Buffer.from(await file.arrayBuffer()));

  return NextResponse.json({ url: `/uploads/${fileName}`, name: file.name, type: file.type });
}