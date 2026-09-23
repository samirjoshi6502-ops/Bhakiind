import Link from "next/link";
import { ArrowRight, ChevronRight, Factory, Ruler, Sparkles, Wrench } from "lucide-react";
import { notFound } from "next/navigation";
import { CTAButton, SectionEyebrow, SiteShell } from "@/app/components/site-shell";
import { getPublishedProductCatalog } from "@/app/lib/content-store";

export const dynamic = "force-dynamic";

const iconMap = {
  sparkles: Sparkles,
  factory: Factory,
  wrench: Wrench,
};

export async function generateStaticParams() {
  return (await getPublishedProductCatalog()).map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const productCatalog = await getPublishedProductCatalog();
  const product = productCatalog.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const Icon = iconMap[product.icon];
  const specIconMap = {
    height: Ruler,
    width: Ruler,
    length: Ruler,
    capacity: Factory,
    application: Sparkles,
    machine: Factory,
    body: Wrench,
    material: Wrench,
    production: Factory,
    default: Sparkles,
  } as const;

  const theme = {
    name: "Azure Build",
    accent: "#4AA9D8",
    accentDark: "#2F6FA0",
    base: "#F5FAFF",
    baseSoft: "#EAF4FF",
    panel: "#163B59",
    text: "#163B59",
    swatches: ["#F5FAFF", "#EAF4FF", "#4AA9D8", "#163B59", "#C7E4FA"],
  };

  return (
    <SiteShell activeThemeName={theme.name}>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
        <div className="mb-6">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: theme.accent }}>
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to products
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <SectionEyebrow theme={theme}>{product.shortTitle}</SectionEyebrow>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-6xl" style={{ color: theme.panel }}>
              {product.title}
            </h1>
            <p className="mt-6 text-lg leading-8" style={{ color: theme.text }}>
              {product.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/contact" theme={theme}>Request a quote</CTAButton>
              <Link href="/products" className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold" style={{ borderColor: `${theme.accent}45`, background: theme.baseSoft, color: theme.panel }}>
                View all products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border" style={{ borderColor: `${theme.accent}26`, background: theme.baseSoft }}>
            <div className="overflow-hidden border-b" style={{ borderColor: `${theme.accent}20` }}>
              <img src={product.image} alt={product.title} className="h-[460px] w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="p-6">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: `${theme.accent}14`, color: theme.accent }}>
                <Icon className="h-7 w-7" />
              </div>
              <p className="text-base leading-7" style={{ color: theme.text }}>{product.overview}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y" style={{ borderColor: `${theme.accent}20`, background: theme.baseSoft }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <div className="mb-8 max-w-3xl">
            <SectionEyebrow theme={theme}>Media gallery</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: theme.panel }}>
              Product images and video overview
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {product.gallery.map((item, index) => (
                <div key={`${item}-${index}`} className="overflow-hidden rounded-[24px] border" style={{ borderColor: `${theme.accent}20`, background: theme.base }}>
                  <img src={item} alt={`${product.title} ${index + 1}`} className="h-56 w-full object-cover" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>

            {product.videos?.length ? (
              <div className="grid gap-4">
                {product.videos.map((video, index) => (
                  <div key={`${video}-${index}`} className="overflow-hidden rounded-[28px] border" style={{ borderColor: `${theme.accent}20`, background: theme.base }}>
                    <div className="relative aspect-video w-full overflow-hidden">
                      {video.match(/\.(mp4|webm)(\?.*)?$/i) ? <video src={video} controls className="h-full w-full" /> : <iframe src={video} title={`${product.title} product video ${index + 1}`} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="border-y" style={{ borderColor: `${theme.accent}20`, background: theme.baseSoft }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <SectionEyebrow theme={theme}>Key strengths</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: theme.panel }}>
              Built for practical production performance.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {product.highlights.map((point) => (
              <div key={point} className="rounded-[28px] border p-6" style={{ borderColor: `${theme.accent}22`, background: theme.base }}>
                <div className="mb-4 h-10 w-10 rounded-full" style={{ background: `${theme.accent}18` }} />
                <p className="text-base leading-7" style={{ color: theme.text }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border p-6" style={{ borderColor: `${theme.accent}20`, background: theme.baseSoft }}>
            <SectionEyebrow theme={theme}>Technical details</SectionEyebrow>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.05em]" style={{ color: theme.panel }}>
              Quick specification overview
            </h3>
            <div className="mt-6 grid gap-4">
              {product.specs.map(({ label, value }) => {
                const normalizedKey = label.toLowerCase();
                const Icon = specIconMap[normalizedKey.includes("height") || normalizedKey.includes("width") || normalizedKey.includes("length") ? "height" : normalizedKey.includes("capacity") ? "capacity" : normalizedKey.includes("material") || normalizedKey.includes("body") ? "material" : normalizedKey.includes("application") || normalizedKey.includes("machine") || normalizedKey.includes("production") ? "application" : "default"];

                return (
                  <div key={label} className="flex items-center gap-4 rounded-[20px] border p-4" style={{ borderColor: `${theme.accent}15`, background: theme.base }}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: `${theme.accent}14`, color: theme.accent }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: theme.accent }}>{label}</div>
                      <div className="mt-1 text-sm font-medium" style={{ color: theme.text }}>{value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <SectionEyebrow theme={theme}>Typical usage</SectionEyebrow>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.05em]" style={{ color: theme.panel }}>
              Where this machinery fits best
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {product.useCases.map((useCase) => (
                <div key={useCase} className="rounded-[24px] border p-5" style={{ borderColor: `${theme.accent}22`, background: theme.base }}>
                  <p className="text-base leading-7" style={{ color: theme.text }}>{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: `${theme.accent}20`, background: theme.base }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <div className="rounded-[30px] border p-8" style={{ borderColor: `${theme.accent}22`, background: theme.baseSoft }}>
            <SectionEyebrow theme={theme}>Need a solution?</SectionEyebrow>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: theme.panel }}>
              Talk to us about the right setup for your production requirements.
            </h3>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/contact" theme={theme}>Contact sales</CTAButton>
              <Link href="/products" className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold" style={{ borderColor: `${theme.accent}45`, background: theme.base, color: theme.panel }}>
                Explore product range
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
