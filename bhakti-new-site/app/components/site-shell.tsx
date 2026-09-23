"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Download,
  Factory,
  Gauge,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M13.5 21v-8h2.5l.5-3h-3V7.5c0-.9.5-1.5 1.5-1.5H16V3.2c-.5-.1-1.3-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4V10H8v3h2.8v8h2.7Z" fill="#1877F2" />
      <path d="M13.5 21v-8h2.5l.5-3h-3V7.5c0-.9.5-1.5 1.5-1.5H16V3.2c-.5-.1-1.3-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4V10H8v3h2.8v8h2.7Z" fill="white" opacity={0.18} />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <defs>
        <linearGradient id="instagramGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FEE571" />
          <stop offset="25%" stopColor="#F15A24" />
          <stop offset="50%" stopColor="#D92E7F" />
          <stop offset="80%" stopColor="#A32CFF" />
          <stop offset="100%" stopColor="#4C5CFF" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#instagramGradient)" />
      <rect x="7" y="7" width="10" height="10" rx="3" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.8" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="16.2" cy="7.8" r="1.1" fill="white" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <rect x="3" y="6" width="18" height="12" rx="3" fill="#FF0000" />
      <path d="M10 9.5v5l5-2.5-5-2.5Z" fill="white" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M21.4 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4A4.6 4.6 0 0 1 7.8 12a4.7 4.7 0 0 1 8.1-3.5l2.7-2.7A8 8 0 0 0 4 12a8 8 0 0 0 13.6 5.7l-2.7-2.7A5.2 5.2 0 0 1 21.4 12.2Z" fill="#4285F4" />
      <path d="M7.9 12A4.7 4.7 0 0 1 12 7.7c1.2 0 2.3.4 3.2 1.2l2.4-2.4A7.9 7.9 0 0 0 4 12a7.9 7.9 0 0 0 13.5 5.3l-2.4-2.3A4.9 4.9 0 0 1 7.9 12Z" fill="#34A853" opacity="0.2" />
      <path d="M12 7.7a4.7 4.7 0 0 1 4.1 2.3L18.5 7.6A8 8 0 0 0 4 12h3.3A4.7 4.7 0 0 1 12 7.7Z" fill="#FBBC05" opacity="0.28" />
      <path d="M4 12a8 8 0 0 0 13.5 5.3l-2.4-2.3a4.9 4.9 0 0 1-7.9-3.7H4Z" fill="#EA4335" opacity="0.2" />
      <path d="M12 7.7c1.2 0 2.3.4 3.2 1.2l2.5-2.4A8 8 0 0 0 4 12h3.2A4.7 4.7 0 0 1 12 7.7Z" fill="#FBBC05" />
      <path d="M7.9 12a4.8 4.8 0 0 1 8.1-3.5l2.6-2.7A8 8 0 0 0 4 12h3.9Z" fill="#EA4335" />
    </svg>
  );
}

function SocialIcon({ brand }: { brand: "facebook" | "instagram" | "youtube" | "google" }) {
  switch (brand) {
    case "facebook":
      return <FacebookIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "youtube":
      return <YouTubeIcon />;
    case "google":
      return <GoogleIcon />;
    default:
      return null;
  }
}

export const paletteOptions = [
  {
    name: "Azure Build",
    accent: "#4AA9D8",
    accentDark: "#2F6FA0",
    base: "#F5FAFF",
    baseSoft: "#EAF4FF",
    panel: "#163B59",
    text: "#163B59",
    swatches: ["#F5FAFF", "#EAF4FF", "#4AA9D8", "#163B59", "#C7E4FA"],
  },
  {
    name: "Bhakti Classic",
    accent: "#38D0D2",
    accentDark: "#1A8D9A",
    base: "#F7FBFC",
    baseSoft: "#EAF7F9",
    panel: "#123B56",
    text: "#123B56",
    swatches: ["#F7FBFC", "#EAF7F9", "#38D0D2", "#123B56", "#B5E8EE"],
  },
  {
    name: "Ocean Heritage",
    accent: "#2BB8C2",
    accentDark: "#1E7E89",
    base: "#F2FBFA",
    baseSoft: "#DFF4F4",
    panel: "#143E58",
    text: "#143E58",
    swatches: ["#F2FBFA", "#DFF4F4", "#2BB8C2", "#143E58", "#BEEDEC"],
  },
  {
    name: "Sapphire Light",
    accent: "#4EA3D9",
    accentDark: "#2D6EAF",
    base: "#F8FBFF",
    baseSoft: "#EAF3FF",
    panel: "#183B5C",
    text: "#183B5C",
    swatches: ["#F8FBFF", "#EAF3FF", "#4EA3D9", "#183B5C", "#C7DDFB"],
  },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/icecreammachineries/", brand: "facebook" as const },
  { label: "Instagram", href: "https://www.instagram.com/invites/contact/?i=1rp3605x0umji&utm_content=fnz7v18", brand: "instagram" as const },
  { label: "YouTube", href: "https://youtube.com/@bhaktienterpriseicecreamku3002", brand: "youtube" as const },
  { label: "Google", href: "https://g.co/kgs/r8YrJX", brand: "google" as const },
];

export const stats = [
  { label: "Machines delivered", value: "5000+" },
  { label: "Industries served", value: "40+" },
  { label: "Export footprint", value: "18 countries" },
  { label: "Customer retention", value: "95%" },
];

export const specialtyCards = [
  {
    title: "Kulfi machines",
    description: "Precision engineered for high-volume kulfi production with clean, consistent output.",
    icon: Sparkles,
    image: "/images/kulfi-machine-1.webp",
  },
  {
    title: "Ice cream machines",
    description: "Built for commercial production schedules, stability, and dependable batch quality.",
    icon: Factory,
    image: "/images/kulfi-machine-main.webp",
  },
  {
    title: "Khava plants",
    description: "Robust processing equipment for dairy operations that demand reliability and scale.",
    icon: Wrench,
    image: "/images/kulfi-machine-4.webp",
  },
];

export const advantages = [
  { title: "Built for performance", text: "Engineered for durability, consistency, and industrial productivity.", icon: Gauge },
  { title: "Trusted quality", text: "Each machine is built with precision and tested for commercial operation.", icon: ShieldCheck },
  { title: "Client-first support", text: "Technical guidance, consultation, and mechanical support from setup to scale.", icon: Users },
  { title: "Proven reputation", text: "A growing legacy of repeat clients and long-term manufacturing partnerships.", icon: Trophy },
];

export function BrandMark({ theme }: { theme: (typeof paletteOptions)[number] }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white/5" style={{ background: theme.panel }}>
        <img src="/images/bhakti-logo.jpg" alt="Bhakti Enterprise" className="h-full w-full object-contain p-1" loading="lazy" decoding="async" />
      </div>
      <div className="leading-none">
        <div className="text-xs font-black uppercase tracking-[0.32em]" style={{ color: theme.panel }}>Bhakti</div>
        <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.42em]" style={{ color: theme.accent }}>Enterprise</div>
      </div>
    </Link>
  );
}

export function SiteShell({ children, activeThemeName = "Azure Build" }: { children: ReactNode; activeThemeName?: string }) {
  const activeTheme =
    paletteOptions.find((theme) => theme.name === activeThemeName) ??
    {
      name: "Azure Build",
      accent: "#4AA9D8",
      accentDark: "#2F6FA0",
      base: "#F5FAFF",
      baseSoft: "#EAF4FF",
      panel: "#163B59",
      text: "#163B59",
      swatches: ["#F5FAFF", "#EAF4FF", "#4AA9D8", "#163B59", "#C7E4FA"],
    };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [siteMedia, setSiteMedia] = useState({ logo: "/images/bhakti-logo.jpg", brochure: "/files/Bhakti-Brochure.pdf" });

  useEffect(() => {
    fetch("/api/admin/content")
      .then((response) => response.ok ? response.json() : null)
      .then((content) => content?.media && setSiteMedia(content.media))
      .catch(() => undefined);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: activeTheme.base, color: activeTheme.text }}>
      <header className="sticky top-0 z-40 border-b backdrop-blur-sm" style={{ borderColor: `${activeTheme.accent}20`, background: `${activeTheme.base}ee` }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <BrandMark theme={activeTheme} />

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex" style={{ color: activeTheme.panel }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:opacity-80">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={siteMedia.brochure} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold" style={{ borderColor: `${activeTheme.accent}40`, background: activeTheme.baseSoft, color: activeTheme.panel }}>
              <Download className="h-4 w-4" />
              Brochure
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold" style={{ background: activeTheme.accent, color: activeTheme.panel }}>
              Enquire now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden" style={{ borderColor: `${activeTheme.accent}30`, background: activeTheme.baseSoft, color: activeTheme.panel }} aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((open) => !open)}>
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t md:hidden" style={{ borderColor: `${activeTheme.accent}20`, background: activeTheme.base }}>
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl px-3 py-2 text-sm font-medium" style={{ background: `${activeTheme.accent}10`, color: activeTheme.panel }} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <a href={siteMedia.brochure} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold" style={{ borderColor: `${activeTheme.accent}40`, background: activeTheme.baseSoft, color: activeTheme.panel }}>
                <Download className="h-4 w-4" />
                Brochure
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold" style={{ background: activeTheme.accent, color: activeTheme.panel }} onClick={() => setMobileOpen(false)}>
                Enquire now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t" style={{ background: activeTheme.panel, borderColor: `${activeTheme.accent}25`, color: "#edf7fd" }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_0.75fr_0.9fr_1fr] lg:px-10">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white/5">
                <img src={siteMedia.logo} alt="Bhakti Enterprise" className="h-full w-full object-contain p-1" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-[0.32em]">Bhakti</div>
                <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.42em] text-cyan-300">Enterprise</div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-200">
              Manufacturing durable, high-performance ice cream and kulfi equipment for businesses that need quality, uptime, and long-term trust.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, brand }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-300">
                  <SocialIcon brand={brand} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Quick links</div>
            <div className="space-y-3 text-sm text-slate-200">
              {navItems.map((item) => (
                <div key={item.href}><Link href={item.href} className="transition hover:text-white">{item.label}</Link></div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Contact</div>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-cyan-300" /><span>Yogi Nagar, Gondal, Gujarat 360311, India</span></div>
              <a href="tel:+919664838705" className="flex items-center gap-2 transition hover:text-white"><Phone className="h-4 w-4 text-cyan-300" /> +91 96648 38705</a>
              <a href="mailto:sales@bhaktienterprise.in" className="flex items-center gap-2 transition hover:text-white"><BadgeCheck className="h-4 w-4 text-cyan-300" /> sales@bhaktienterprise.in</a>
              <a href={siteMedia.brochure} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white"><Download className="h-4 w-4" /> Brochure PDF</a>
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Certifications</div>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-cyan-300" /> Quality-first manufacturing</div>
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-cyan-300" /> ISO-aligned production standards</div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export function SectionEyebrow({ children, theme }: { children: ReactNode; theme: (typeof paletteOptions)[number] }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-[0.28em]" style={{ color: theme.accent }}>{children}</div>
  );
}

export function ThemePreview({ theme }: { theme: (typeof paletteOptions)[number] }) {
  return (
    <div className="rounded-[28px] border p-5" style={{ borderColor: `${theme.accent}26`, background: theme.baseSoft }}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold" style={{ color: theme.panel }}>{theme.name}</h3>
        <span className="h-4 w-4 rounded-full border" style={{ background: theme.accent, borderColor: theme.panel }} />
      </div>
      <div className="mb-5 grid grid-cols-5 gap-2">
        {theme.swatches.map((swatch) => (
          <div key={swatch} className="h-12 rounded-xl border border-slate-500/20" style={{ background: swatch }} />
        ))}
      </div>
      <div className="rounded-2xl border p-4 text-sm" style={{ borderColor: `${theme.accent}22`, background: theme.base, color: theme.text }}>
        <div className="flex items-center justify-between">
          <span>Primary</span>
          <span style={{ color: theme.accent }}>{theme.accent}</span>
        </div>
      </div>
    </div>
  );
}

export function ProcessStep({ step, title, text, theme }: { step: string; title: string; text: string; theme: (typeof paletteOptions)[number] }) {
  return (
    <div className="rounded-[28px] border p-6" style={{ borderColor: `${theme.accent}24`, background: theme.baseSoft }}>
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full text-sm font-black" style={{ background: `${theme.accent}18`, color: theme.panel }}>{step}</div>
      <h3 className="text-xl font-bold" style={{ color: theme.panel }}>{title}</h3>
      <p className="mt-3 text-base leading-7" style={{ color: theme.text }}>{text}</p>
    </div>
  );
}

export function CTAButton({ href, children, theme, outline = false }: { href: string; children: ReactNode; theme: (typeof paletteOptions)[number]; outline?: boolean }) {
  const className = `inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5`;

  if (outline) {
    return (
      <Link href={href} className={className} style={{ border: `1px solid ${theme.accent}40`, background: theme.baseSoft, color: theme.panel }}>
        {children}
        <ChevronRight className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <Link href={href} className={className} style={{ background: theme.accent, color: theme.panel }}>
      {children}
      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

export function VideoCard({ theme, videoUrl = "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0" }: { theme: (typeof paletteOptions)[number]; videoUrl?: string }) {
  return (
    <div className="overflow-hidden rounded-[32px] border" style={{ borderColor: `${theme.accent}26`, background: theme.baseSoft }}>
      <div className="relative aspect-video w-full overflow-hidden">
        <iframe
          src={videoUrl}
          title="Bhakti production video showcase"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function HeroBadge({ theme, children = "Industrial ice cream machinery" }: { theme: (typeof paletteOptions)[number]; children?: ReactNode }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ borderColor: `${theme.accent}44`, background: theme.baseSoft, color: theme.panel }}>
      <Star className="h-3.5 w-3.5 fill-current" style={{ color: theme.accent }} />
      {children}
    </div>
  );
}

export function PremiumMotion({ children, theme, className = "" }: { children: ReactNode; theme: (typeof paletteOptions)[number]; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
      style={{ color: theme.text }}
    >
      {children}
    </motion.div>
  );
}
