"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Factory,
  Gauge,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import { CTAButton, HeroBadge, SectionEyebrow, SiteShell, VideoCard } from "@/app/components/site-shell";

const featureProducts = [
  { title: "Kulfi Making Machines", summary: "6, 12 and 14 mould configurations built for commercial production and repeatable frozen dessert output.", image: "/images/kulfi-machine-4.webp" },
  { title: "Ice Cream Batch Freezers", summary: "Commercial batch freezers for hard ice cream, gelato, sherbet, sorbet and frozen yogurt production.", image: "/images/kulfi-machine-main.webp" },
  { title: "Popsicle & Candy Equipment", summary: "Reliable frozen-confection machinery for popsicle production and broader product ranges.", image: "/images/legacy/home-be.jpeg" },
];

const process = [
  { step: "01", title: "Understand your production need", text: "We review your output target, operating conditions, and product type before recommending a machine." },
  { step: "02", title: "Recommend the right fit", text: "Our guidance is grounded in commercial realities, product quality, and long-run operational efficiency." },
  { step: "03", title: "Support from setup to service", text: "We stay involved through installation support, equipment confidence, and dependable after-sales service." },
];

const clients = [
  { name: "Bhakti Enterprise", monogram: "BE", logo: "/images/brand/bhakti-image.jpg" },
  { name: "Customer Trust", monogram: "CT", logo: "/images/legacy/Trusted-By-Customers1.png" },
  { name: "Quality Support", monogram: "QS", logo: "/images/legacy/Product-Warranty1.png" },
  { name: "Service Network", monogram: "SN", logo: "/images/legacy/24-x-7-customer-support.png" },
  { name: "Factory Team", monogram: "FT", logo: "/images/legacy/Team1.png" },
  { name: "Certified", monogram: "CERT", logo: "/images/legacy/tuv_sud_certification-removebg-preview.png" },
  { name: "Member Logo", monogram: "ML", logo: "/images/legacy/Member-Logo-removebg-preview1.png" },
];

const reviews = [
  { name: "Rajesh Patel", role: "Factory owner", comment: "The machine quality and after-sales support were exactly what we needed for our kulfi production line. Reliable, practical, and easy to scale.", rating: 5 },
  { name: "Anand Mehta", role: "Dairy operations head", comment: "Very professional team with strong technical guidance. Their equipment helped us improve consistency and daily output without unnecessary complications.", rating: 5 },
  { name: "Nikita Shah", role: "Frozen dessert entrepreneur", comment: "From recommendation to setup, the process felt honest and efficient. Product quality and service support gave us confidence to expand faster.", rating: 5 },
];

const trustAssets = [
  {
    title: "Quality assurance",
    text: "Built around reliable fabrication, practical performance, and production-focused design for commercial operations.",
    image: "/images/legacy/Product-Warranty1.png",
  },
  {
    title: "Customer trust",
    text: "We work closely with plant operators and buyers to match every machine to the right commercial use case.",
    image: "/images/legacy/Trusted-By-Customers1.png",
  },
  {
    title: "24/7 service support",
    text: "From machine choice to long-term service support, Bhakti Enterprise focuses on dependable output and trust.",
    image: "/images/legacy/24-x-7-customer-support.png",
  },
];

export default function HomePage() {
  const activeTheme = {
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
    <SiteShell activeThemeName={activeTheme.name}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 15% 15%, ${activeTheme.accent}22 0%, transparent 25%), radial-gradient(circle at 80% 20%, ${activeTheme.accent}16 0%, transparent 30%)` }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <HeroBadge theme={activeTheme} />
            <h1 className="max-w-xl text-4xl font-black leading-[0.9] tracking-[-0.07em] md:text-6xl" style={{ color: activeTheme.panel }}>
              Industrial ice cream machinery built for serious production.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8" style={{ color: activeTheme.text }}>
              Bhakti Enterprise designs and manufactures dependable kulfi and ice cream equipment for businesses that need reliable output, quality consistency, and long-term trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton href="/products" theme={activeTheme}>Explore products</CTAButton>
              <CTAButton href="/contact" theme={activeTheme} outline>Talk to sales</CTAButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Machines delivered", value: "5000+" },
                { label: "Industries served", value: "40+" },
                { label: "Export footprint", value: "18 countries" },
                { label: "Customer retention", value: "95%" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border p-4" style={{ borderColor: `${activeTheme.accent}20`, background: activeTheme.baseSoft }}>
                  <div className="text-2xl font-black" style={{ color: activeTheme.panel }}>{stat.value}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.18em]" style={{ color: activeTheme.text }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="relative">
            <div className="absolute -left-10 top-8 h-20 w-20 rounded-full blur-3xl" style={{ background: `${activeTheme.accent}30` }} />
            <div className="relative overflow-hidden rounded-[32px] border p-3 shadow-[0_25px_65px_rgba(10,25,40,0.12)] md:p-4" style={{ borderColor: `${activeTheme.accent}26`, background: activeTheme.baseSoft }}>
              <div className="overflow-hidden rounded-[26px] border" style={{ borderColor: `${activeTheme.accent}26`, background: activeTheme.base }}>
                <img src="/images/legacy/home-be.jpeg" alt="Bhakti production environment" className="h-[360px] w-full object-cover md:h-[560px]" />
              </div>
              <div className="absolute bottom-5 left-5 max-w-[250px] rounded-[20px] border p-4 backdrop-blur-sm md:bottom-8 md:left-8 md:max-w-[280px] md:p-5" style={{ borderColor: `${activeTheme.accent}28`, background: `${activeTheme.base}d6` }}>
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[9px] uppercase tracking-[0.22em] md:text-[10px]" style={{ color: activeTheme.accent }}>Production focus</div>
                    <div className="mt-2 text-lg font-black leading-tight md:text-2xl" style={{ color: activeTheme.panel }}>Trusted output</div>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border md:h-12 md:w-12" style={{ borderColor: `${activeTheme.accent}30`, background: `${activeTheme.accent}14`, color: activeTheme.accent }}>
                    <Building2 className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="rounded-[30px] border p-8" style={{ borderColor: `${activeTheme.accent}24`, background: activeTheme.baseSoft }}>
            <SectionEyebrow theme={activeTheme}>About Bhakti</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: activeTheme.panel }}>
              A manufacturing partner built around dependable performance.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8" style={{ color: activeTheme.text }}>
            <p>Bhakti Enterprise has grown by focusing on what matters most for commercial production: consistency, machine durability, and practical support that helps businesses keep moving.</p>
            <p>We work across kulfi, ice cream, and dairy equipment applications where uptime and quality are essential to daily operations.</p>
          </div>
        </div>
      </section>

      <section className="border-y" style={{ borderColor: `${activeTheme.accent}20`, background: activeTheme.baseSoft }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <SectionEyebrow theme={activeTheme}>Core products</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: activeTheme.panel }}>
              Equipment designed for real production environments.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featureProducts.map(({ title, summary, image }) => (
              <article key={title} className="overflow-hidden rounded-[30px] border" style={{ borderColor: `${activeTheme.accent}22`, background: activeTheme.base }}>
                <div className="aspect-[4/3] overflow-hidden border-b" style={{ borderColor: `${activeTheme.accent}20` }}>
                  <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]" />
                </div>
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${activeTheme.accent}14`, color: activeTheme.accent }}>
                    <Factory className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: activeTheme.panel }}>{title}</h3>
                  <p className="mt-3 text-base leading-7" style={{ color: activeTheme.text }}>{summary}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: activeTheme.panel }}>
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <SectionEyebrow theme={activeTheme}>Why choose us</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: activeTheme.panel }}>
            Built for reliability, quality, and long-term confidence.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Built for performance", text: "Engineered for industrial consistency and daily production efficiency.", icon: Gauge },
            { title: "Trusted quality", text: "Every system is designed with sturdy build quality and practical use in mind.", icon: ShieldCheck },
            { title: "Client-first support", text: "We help clients match the right machine to real operating requirements.", icon: Users },
            { title: "Proven reputation", text: "Our long-standing client relationships reflect trust in the work we deliver.", icon: Trophy },
          ].map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-[26px] border p-6" style={{ borderColor: `${activeTheme.accent}22`, background: activeTheme.baseSoft }}>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border" style={{ background: `${activeTheme.accent}12`, color: activeTheme.accent, borderColor: `${activeTheme.accent}2c` }}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold" style={{ color: activeTheme.panel }}>{title}</h3>
              <p className="mt-3 text-base leading-7" style={{ color: activeTheme.text }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y" style={{ borderColor: `${activeTheme.accent}20`, background: activeTheme.baseSoft }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <SectionEyebrow theme={activeTheme}>Trust & proof</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: activeTheme.panel }}>
              Built around reliability, support, and real production confidence.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {trustAssets.map(({ title, text, image }) => (
              <div key={title} className="flex h-full flex-col overflow-hidden rounded-[28px] border" style={{ borderColor: `${activeTheme.accent}22`, background: activeTheme.base }}>
                <div className="flex h-48 items-center justify-center border-b bg-white/80 p-4" style={{ borderColor: `${activeTheme.accent}18` }}>
                  <img src={image} alt={title} className="max-h-32 w-full object-contain" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold" style={{ color: activeTheme.panel }}>{title}</h3>
                  <p className="mt-3 text-base leading-7" style={{ color: activeTheme.text }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y" style={{ borderColor: `${activeTheme.accent}20`, background: activeTheme.base }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <SectionEyebrow theme={activeTheme}>How we work</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: activeTheme.panel }}>
              A clear path from requirement to reliable production.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {process.map(({ step, title, text }) => (
              <div key={step} className="rounded-[28px] border p-6" style={{ borderColor: `${activeTheme.accent}22`, background: activeTheme.baseSoft }}>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full text-sm font-black" style={{ background: `${activeTheme.accent}14`, color: activeTheme.panel }}>{step}</div>
                <h3 className="text-xl font-bold" style={{ color: activeTheme.panel }}>{title}</h3>
                <p className="mt-3 text-base leading-7" style={{ color: activeTheme.text }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y" style={{ borderColor: `${activeTheme.accent}20`, background: activeTheme.base }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <div className="mb-10 text-center">
            <SectionEyebrow theme={activeTheme}>Video showcase</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: activeTheme.panel }}>
              See the machinery and production feel in motion.
            </h2>
          </div>
          <div className="mx-auto max-w-5xl">
            <VideoCard theme={activeTheme} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="mb-10 text-center">
          <SectionEyebrow theme={activeTheme}>Client trust</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: activeTheme.panel }}>
            Businesses that value reliability and long-term partnerships.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
          {clients.map(({ name, monogram, logo }) => (
            <div key={name} className="flex min-h-[132px] flex-col items-center justify-center gap-3 rounded-[26px] border p-4 text-center" style={{ borderColor: `${activeTheme.accent}22`, background: activeTheme.baseSoft }}>
              {logo ? (
                <div className="flex h-16 w-20 items-center justify-center overflow-hidden rounded-2xl border bg-white p-2" style={{ borderColor: `${activeTheme.accent}24` }}>
                  <img src={logo} alt={name} className="h-full w-full object-contain" />
                </div>
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-black" style={{ background: `${activeTheme.accent}18`, color: activeTheme.panel }}>
                  {monogram}
                </div>
              )}
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: activeTheme.panel }}>{name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y" style={{ borderColor: `${activeTheme.accent}20`, background: activeTheme.baseSoft }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <SectionEyebrow theme={activeTheme}>Customer reviews</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: activeTheme.panel }}>
              Real feedback from businesses we support.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {reviews.map(({ name, role, comment, rating }) => (
              <div key={name} className="group rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(22,59,89,0.12)]" style={{ borderColor: `${activeTheme.accent}22`, background: activeTheme.base }}>
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: rating }).map((_, index) => (
                    <Star key={`${name}-${index}`} className="h-4 w-4 fill-current drop-shadow-sm" style={{ color: activeTheme.accent }} />
                  ))}
                </div>
                <p className="text-base leading-7 text-slate-700 transition-colors duration-300 group-hover:text-slate-900" style={{ color: activeTheme.text }}>{comment}</p>
                <div className="mt-6 border-t pt-4" style={{ borderColor: `${activeTheme.accent}15` }}>
                  <div className="text-lg font-bold" style={{ color: activeTheme.panel }}>{name}</div>
                  <div className="text-sm" style={{ color: activeTheme.text }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: `${activeTheme.accent}20`, background: activeTheme.baseSoft }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.8fr] lg:px-10">
          <div>
            <SectionEyebrow theme={activeTheme}>Contact</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-5xl" style={{ color: activeTheme.panel }}>
              Let’s plan the right production setup for your business.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8" style={{ color: activeTheme.text }}>
              Whether you need a capable kulfi machine, an industrial freezer, or support choosing the best equipment for your production goals, we’re ready to help.
            </p>
          </div>

          <div className="rounded-[30px] border p-6" style={{ borderColor: `${activeTheme.accent}22`, background: activeTheme.base }}>
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: activeTheme.panel }}>Full name</label>
                <input required name="fullName" className="w-full rounded-xl border px-4 py-3 text-slate-900 outline-none" style={{ borderColor: `${activeTheme.accent}26`, background: activeTheme.baseSoft }} placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: activeTheme.panel }}>Phone number</label>
                <input required name="phone" type="tel" className="w-full rounded-xl border px-4 py-3 text-slate-900 outline-none" style={{ borderColor: `${activeTheme.accent}26`, background: activeTheme.baseSoft }} placeholder="+91 98xxxxxx" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: activeTheme.panel }}>Email</label>
                <input required name="email" type="email" className="w-full rounded-xl border px-4 py-3 text-slate-900 outline-none" style={{ borderColor: `${activeTheme.accent}26`, background: activeTheme.baseSoft }} placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: activeTheme.panel }}>Requirement</label>
                <textarea required name="requirement" className="min-h-28 w-full rounded-xl border px-4 py-3 text-slate-900 outline-none" style={{ borderColor: `${activeTheme.accent}26`, background: activeTheme.baseSoft }} placeholder="Tell us what you need" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold" style={{ background: activeTheme.accent, color: activeTheme.panel }}>
                Send enquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
