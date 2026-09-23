import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { CTAButton, SectionEyebrow, SiteShell, paletteOptions } from "@/app/components/site-shell";

export default function ContactPage() {
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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionEyebrow theme={theme}>Contact</SectionEyebrow>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-6xl" style={{ color: theme.panel }}>
              Let’s build the right production setup for your business.
            </h1>
            <p className="mt-6 text-lg leading-8" style={{ color: theme.text }}>
              Whether you need equipment guidance, a custom recommendation, or a direct quotation, our team can help you plan the right machine for your manufacturing goals.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { icon: Mail, label: "Email", value: "sales@bhaktienterprise.in" },
                { icon: Phone, label: "Phone", value: "+91 96648 38705" },
                { icon: MapPin, label: "Location", value: "Yogi Nagar, Gondal, Gujarat 360311, India" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 rounded-[22px] border p-4" style={{ borderColor: `${theme.accent}22`, background: theme.baseSoft }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${theme.accent}15`, color: theme.accent }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: theme.accent }}>{label}</div>
                    <div className="mt-1 font-semibold" style={{ color: theme.panel }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border p-6" style={{ borderColor: `${theme.accent}22`, background: theme.baseSoft }}>
            <form className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: theme.panel }}>Full name</label>
                <input required name="fullName" className="w-full rounded-xl border px-4 py-3 text-slate-900 outline-none" style={{ borderColor: `${theme.accent}30`, background: theme.base }} placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: theme.panel }}>Phone number</label>
                <input required name="phone" type="tel" className="w-full rounded-xl border px-4 py-3 text-slate-900 outline-none" style={{ borderColor: `${theme.accent}30`, background: theme.base }} placeholder="+91 98xxxxxx" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: theme.panel }}>Email</label>
                <input required name="email" type="email" className="w-full rounded-xl border px-4 py-3 text-slate-900 outline-none" style={{ borderColor: `${theme.accent}30`, background: theme.base }} placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: theme.panel }}>Business type</label>
                <input name="businessType" className="w-full rounded-xl border px-4 py-3 text-slate-900 outline-none" style={{ borderColor: `${theme.accent}30`, background: theme.base }} placeholder="Manufacturer / distributor / dealer" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium" style={{ color: theme.panel }}>Requirement</label>
                <textarea required name="requirement" className="min-h-32 w-full rounded-xl border px-4 py-3 text-slate-900 outline-none" style={{ borderColor: `${theme.accent}30`, background: theme.base }} placeholder="Tell us your production requirement" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold" style={{ background: theme.accent, color: theme.panel }}>
                Send enquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
