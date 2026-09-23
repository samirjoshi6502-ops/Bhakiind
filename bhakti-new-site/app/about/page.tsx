import { CheckCircle2, Factory, ShieldCheck, Users } from "lucide-react";
import { CTAButton, SectionEyebrow, SiteShell } from "@/app/components/site-shell";
import { readSiteContent } from "@/app/lib/content-store";

export default async function AboutPage() {
  const page = (await readSiteContent()).pageContent.about;
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
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionEyebrow theme={theme}>{page.eyebrow}</SectionEyebrow>
            <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] md:text-6xl" style={{ color: theme.panel }}>
              {page.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8" style={{ color: theme.text }}>
              {page.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/products" theme={theme}>Our products</CTAButton>
              <CTAButton href="/contact" theme={theme} outline>Talk to us</CTAButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border" style={{ borderColor: `${theme.accent}24`, background: theme.baseSoft }}>
            <img src={page.image} alt="Industrial production space" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y" style={{ borderColor: `${theme.accent}20`, background: theme.baseSoft }}>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-3 lg:px-10">
          {page.pillars.map(({ title, text }, index) => {
            const Icon = [Factory, ShieldCheck, Users][index % 3];
            return (
            <div key={title} className="rounded-[28px] border p-6" style={{ borderColor: `${theme.accent}22`, background: theme.base }}>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${theme.accent}15`, color: theme.accent }}>
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold" style={{ color: theme.panel }}>{title}</h2>
              <p className="mt-3 text-base leading-7" style={{ color: theme.text }}>{text}</p>
            </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <SectionEyebrow theme={theme}>Our approach</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: theme.panel }}>
            {page.approachTitle}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {page.approachPoints.map((point) => (
            <div key={point} className="flex gap-4 rounded-[24px] border p-5" style={{ borderColor: `${theme.accent}22`, background: theme.baseSoft }}>
              <div className="mt-0.5 text-cyan-600"><CheckCircle2 className="h-5 w-5" style={{ color: theme.accent }} /></div>
              <p className="text-base leading-7" style={{ color: theme.text }}>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <div className="rounded-[30px] border p-8" style={{ borderColor: `${theme.accent}22`, background: theme.baseSoft }}>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionEyebrow theme={theme}>What matters</SectionEyebrow>
              <h3 className="mt-4 text-3xl font-black" style={{ color: theme.panel }}>Quality that keeps your production moving.</h3>
            </div>
            <div className="space-y-5 text-lg leading-8" style={{ color: theme.text }}>
              <p>From kulfi and ice cream production to more specialized dairy equipment, Bhakti works with businesses that need real-world reliability.</p>
              <p>We focus on strong mechanical construction, long service life, and products that help customers deliver consistent results every day.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
