import fs from "node:fs/promises";
import path from "node:path";
import { get, put } from "@vercel/blob";
import { productCatalog, type ProductCatalogItem } from "@/app/products/data";

export type Review = {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  visible: boolean;
};

export type Customer = {
  id: string;
  name: string;
  logo: string;
  visible: boolean;
};

export type ProductOverride = Partial<ProductCatalogItem> & { slug: string; visible?: boolean };

export type PageContent = {
  home: {
    stats: Array<{ label: string; value: string }>;
    aboutTitle: string;
    aboutParagraphs: string[];
    advantagesTitle: string;
    videoUrl: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    pillars: Array<{ title: string; text: string }>;
    approachTitle: string;
    approachPoints: string[];
  };
  products: { eyebrow: string; title: string; description: string };
  contact: { eyebrow: string; title: string; description: string; email: string; phone: string; location: string };
};

export type SiteContent = {
  hero: {
    badge: string;
    title: string;
    description: string;
    image: string;
  };
  media: {
    logo: string;
    brochure: string;
  };
  pageContent: PageContent;
  adminAccess: { allowedIps: string[] };
  sectionVisibility: Record<string, boolean>;
  customers: Customer[];
  reviews: Review[];
  productOverrides: ProductOverride[];
};

const contentPath = path.join(process.cwd(), "data", "site-content.json");
const contentBlobPath = "site-content.json";

function hasBlobStorage() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export const defaultSiteContent: SiteContent = {
  hero: {
    badge: "Industrial ice cream machinery",
    title: "Industrial ice cream machinery built for serious production.",
    description: "Bhakti Enterprise designs and manufactures dependable kulfi and ice cream equipment for businesses that need reliable output, quality consistency, and long-term trust.",
    image: "/images/legacy/home-be.jpeg",
  },
  pageContent: {
    home: {
      stats: [
        { label: "Machines delivered", value: "5000+" },
        { label: "Industries served", value: "40+" },
        { label: "Export footprint", value: "18 countries" },
        { label: "Customer retention", value: "95%" },
      ],
      aboutTitle: "A manufacturing partner built around dependable performance.",
      aboutParagraphs: [
        "Bhakti Enterprise has grown by focusing on what matters most for commercial production: consistency, machine durability, and practical support that helps businesses keep moving.",
        "We work across kulfi, ice cream, and dairy equipment applications where uptime and quality are essential to daily operations.",
      ],
      advantagesTitle: "Built for reliability, quality, and long-term confidence.",
      videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    },
    about: {
      eyebrow: "About Bhakti",
      title: "A manufacturing partner built around trust, scale, and dependable performance.",
      description: "Bhakti Enterprise has grown by building industrial equipment that helps food producers operate consistently, efficiently, and with confidence.",
      image: "/images/hero-bg.jpg",
      pillars: [
        { title: "Industrial focus", text: "Every system is designed to meet the practical realities of manufacturing environments." },
        { title: "Quality-led", text: "We prioritize durability, safety, and repeatable production performance." },
        { title: "Client-centered", text: "We support businesses from machine selection through after-sales guidance." },
      ],
      approachTitle: "Built to support consistent output, smooth operations, and long-term business growth.",
      approachPoints: [
        "We understand the requirements of food processing businesses who need machines that are reliable under heavy use.",
        "Our equipment is designed for operational simplicity, robust build quality, and practical maintenance support.",
        "Production planning, machine matching, and customer guidance are part of how we work with each buyer.",
        "The focus remains on dependable output, trust, and sustainable manufacturing relationships.",
      ],
    },
    products: {
      eyebrow: "Our products",
      title: "Commercial equipment engineered for dependable dairy and frozen dessert production.",
      description: "From kulfi manufacturing lines to high-output ice cream systems, each solution is shaped around practical factory performance and long-term reliability.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build the right production setup for your business.",
      description: "Whether you need equipment guidance, a custom recommendation, or a direct quotation, our team can help you plan the right machine for your manufacturing goals.",
      email: "sales@bhaktienterprise.in",
      phone: "+91 96648 38705",
      location: "Yogi Nagar, Gondal, Gujarat 360311, India",
    },
  },
  adminAccess: { allowedIps: [] },
  media: {
    logo: "/images/bhakti-logo.jpg",
    brochure: "/files/Bhakti-Brochure.pdf",
  },
  sectionVisibility: {
    about: true,
    products: true,
    advantages: true,
    trust: true,
    process: true,
    video: true,
    clients: true,
    reviews: true,
    contact: true,
  },
  customers: [
    { id: "bhakti-enterprise", name: "Bhakti Enterprise", logo: "/images/brand/bhakti-image.jpg", visible: true },
    { id: "customer-trust", name: "Customer Trust", logo: "/images/legacy/Trusted-By-Customers1.png", visible: true },
    { id: "quality-support", name: "Quality Support", logo: "/images/legacy/Product-Warranty1.png", visible: true },
    { id: "service-network", name: "Service Network", logo: "/images/legacy/24-x-7-customer-support.png", visible: true },
    { id: "factory-team", name: "Factory Team", logo: "/images/legacy/Team1.png", visible: true },
    { id: "certified", name: "Certified", logo: "/images/legacy/tuv_sud_certification-removebg-preview.png", visible: true },
    { id: "member-logo", name: "Member Logo", logo: "/images/legacy/Member-Logo-removebg-preview1.png", visible: true },
  ],
  reviews: [
    { id: "rajesh-patel", name: "Rajesh Patel", role: "Factory owner", comment: "The machine quality and after-sales support were exactly what we needed for our kulfi production line. Reliable, practical, and easy to scale.", rating: 5, visible: true },
    { id: "anand-mehta", name: "Anand Mehta", role: "Dairy operations head", comment: "Very professional team with strong technical guidance. Their equipment helped us improve consistency and daily output without unnecessary complications.", rating: 5, visible: true },
    { id: "nikita-shah", name: "Nikita Shah", role: "Frozen dessert entrepreneur", comment: "From recommendation to setup, the process felt honest and efficient. Product quality and service support gave us confidence to expand faster.", rating: 5, visible: true },
  ],
  productOverrides: [],
};

function mergeContent(value: Partial<SiteContent>): SiteContent {
  return {
    ...defaultSiteContent,
    ...value,
    hero: { ...defaultSiteContent.hero, ...(value.hero ?? {}) },
    media: { ...defaultSiteContent.media, ...(value.media ?? {}) },
    pageContent: {
      ...defaultSiteContent.pageContent,
      ...(value.pageContent ?? {}),
      home: { ...defaultSiteContent.pageContent.home, ...(value.pageContent?.home ?? {}) },
      about: { ...defaultSiteContent.pageContent.about, ...(value.pageContent?.about ?? {}) },
      products: { ...defaultSiteContent.pageContent.products, ...(value.pageContent?.products ?? {}) },
      contact: { ...defaultSiteContent.pageContent.contact, ...(value.pageContent?.contact ?? {}) },
    },
    adminAccess: { ...defaultSiteContent.adminAccess, ...(value.adminAccess ?? {}) },
    sectionVisibility: { ...defaultSiteContent.sectionVisibility, ...(value.sectionVisibility ?? {}) },
    customers: Array.isArray(value.customers) ? value.customers : defaultSiteContent.customers,
    reviews: Array.isArray(value.reviews) ? value.reviews : defaultSiteContent.reviews,
    productOverrides: Array.isArray(value.productOverrides) ? value.productOverrides : [],
  };
}

export async function readSiteContent(): Promise<SiteContent> {
  try {
    if (hasBlobStorage()) {
      const blob = await get(contentBlobPath, { access: "public", useCache: false });
      if (!blob || blob.statusCode !== 200) return defaultSiteContent;
      return mergeContent(JSON.parse(await new Response(blob.stream).text()) as Partial<SiteContent>);
    }
    const file = await fs.readFile(contentPath, "utf8");
    return mergeContent(JSON.parse(file) as Partial<SiteContent>);
  } catch {
    return defaultSiteContent;
  }
}

export async function writeSiteContent(value: SiteContent): Promise<SiteContent> {
  const nextContent = mergeContent(value);
  if (hasBlobStorage()) {
    await put(contentBlobPath, JSON.stringify(nextContent, null, 2), {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/json",
    });
    return nextContent;
  }
  await fs.mkdir(path.dirname(contentPath), { recursive: true });
  await fs.writeFile(contentPath, `${JSON.stringify(nextContent, null, 2)}\n`, "utf8");
  return nextContent;
}

export async function getAdminProductCatalog(): Promise<Array<ProductCatalogItem & { visible: boolean }>> {
  const content = await readSiteContent();
  return productCatalog
    .map((product) => {
      const override = content.productOverrides.find((item) => item.slug === product.slug);
      return {
        ...product,
        ...(override ?? {}),
        videos: override?.videos ?? product.videos ?? (product.videoUrl ? [product.videoUrl] : []),
        visible: override?.visible !== false,
      };
    });
}

export async function getPublishedProductCatalog(): Promise<ProductCatalogItem[]> {
  return (await getAdminProductCatalog()).filter((product) => product.visible);
}
