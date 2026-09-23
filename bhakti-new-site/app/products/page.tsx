import Link from "next/link";
import { ArrowRight, ChevronRight, Factory, Landmark, Wrench, Sparkles } from "lucide-react";
import { CTAButton, SectionEyebrow, SiteShell } from "@/app/components/site-shell";
import { productCatalog } from "@/app/products/data";

const iconMap = {
  sparkles: Sparkles,
  factory: Factory,
  wrench: Wrench,
};

export default function ProductsPage() {
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
        <div className="max-w-3xl">
          <SectionEyebrow theme={theme}>Our products</SectionEyebrow>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-6xl" style={{ color: theme.panel }}>
            Commercial equipment engineered for dependable dairy and frozen dessert production.
          </h1>
          <p className="mt-6 text-lg leading-8" style={{ color: theme.text }}>
            From kulfi manufacturing lines to high-output ice cream systems, each solution is shaped around practical factory performance and long-term reliability.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/contact" theme={theme}>Request a quote</CTAButton>
            <CTAButton href="/about" theme={theme} outline>Learn more</CTAButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {productCatalog.map(({ slug, title, summary, image, icon }) => {
            const Icon = iconMap[icon];

            return (
              <article key={title} className="overflow-hidden rounded-[30px] border" style={{ borderColor: `${theme.accent}24`, background: theme.base }}>
                <div className="overflow-hidden border-b" style={{ borderColor: `${theme.accent}20` }}>
                  <img src={image} alt={title} className="h-64 w-full object-cover transition duration-500 hover:scale-[1.02]" />
                </div>
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${theme.accent}15`, color: theme.accent }}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: theme.panel }}>{title}</h2>
                  <p className="mt-3 text-base leading-7" style={{ color: theme.text }}>{summary}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <Link href={`/products/${slug}`} className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: theme.panel }}>
                      View details
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: theme.accent }}>
                      Enquire now
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y" style={{ borderColor: `${theme.accent}20`, background: theme.baseSoft }}>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-3 lg:px-10">
          {[
            { title: "Production-ready design", text: "Equipment built for smooth operation and day-to-day consistency.", icon: Factory },
            { title: "Process flexibility", text: "Suitable for various scale requirements and production planning needs.", icon: Wrench },
            { title: "Operational confidence", text: "Thoughtful engineering helps reduce downtime and improve equipment reliability.", icon: Landmark },
          ].map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-[28px] border p-6" style={{ borderColor: `${theme.accent}22`, background: theme.base }}>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${theme.accent}15`, color: theme.accent }}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold" style={{ color: theme.panel }}>{title}</h3>
              <p className="mt-3 text-base leading-7" style={{ color: theme.text }}>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
