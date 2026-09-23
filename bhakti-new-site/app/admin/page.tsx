"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

type Review = { id: string; name: string; role: string; comment: string; rating: number; visible: boolean };
type Customer = { id: string; name: string; logo: string; visible: boolean };
type Product = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  specs: Array<{ label: string; value: string }>;
  useCases: string[];
  videoUrl?: string;
  videos: string[];
  visible?: boolean;
};
type Content = {
  hero: { badge: string; title: string; description: string; image: string };
  media: { logo: string; brochure: string };
  pageContent: {
    home: { stats: Array<{ label: string; value: string }>; aboutTitle: string; aboutParagraphs: string[]; advantagesTitle: string; videoUrl: string };
    about: { eyebrow: string; title: string; description: string; image: string; pillars: Array<{ title: string; text: string }>; approachTitle: string; approachPoints: string[] };
    products: { eyebrow: string; title: string; description: string };
    contact: { eyebrow: string; title: string; description: string; email: string; phone: string; location: string };
  };
  adminAccess: { allowedIps: string[] };
  requestIp?: string;
  sectionVisibility: Record<string, boolean>;
  customers: Customer[];
  reviews: Review[];
  productOverrides: Array<Partial<Product> & { slug: string; visible?: boolean }>;
  products?: Product[];
};

function MediaPicker({ label, value, accept, onChange }: { label: string; value: string; accept: string; onChange: (value: string) => void }) {
  const [status, setStatus] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const isEmbeddedVideo = /youtube\.com|youtu\.be|vimeo\.com/i.test(value);
  const isVideo = (accept.includes("video") || /\.(mp4|webm)$/i.test(value)) && !isEmbeddedVideo;
  const isPdf = accept.includes("pdf") || /\.pdf$/i.test(value);

  async function upload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    setStatus("Uploading...");
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const result = await response.json() as { url?: string; error?: string };
      if (!response.ok || !result.url) throw new Error(result.error ?? "Upload failed.");
      onChange(result.url);
      setStatus("Uploaded and ready to save");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  }

  return (
    <div className="media-picker">
      <div className="media-picker-head"><span>{label}</span><span className="media-picker-hint">{status || "Upload from this PC or paste a URL"}</span></div>
      <div className="media-picker-row">
        <label className="media-upload-button">
          {isUploading ? "Uploading..." : "Choose file"}
          <input type="file" accept={accept} disabled={isUploading} onChange={upload} />
        </label>
        <input className="media-url-input" value={value} placeholder="/uploads/your-file.jpg or https://..." onChange={(event) => onChange(event.target.value)} />
      </div>
      {value && !isPdf ? <div className="media-preview">{isVideo ? <video src={value} controls /> : isEmbeddedVideo ? <iframe src={value} title={`${label} preview`} /> : <img src={value} alt="Selected media preview" />}</div> : null}
      {value && isPdf ? <a className="media-file-link" href={value} target="_blank" rel="noreferrer">Open selected PDF</a> : null}
    </div>
  );
}

function MediaList({ label, values, accept, onChange }: { label: string; values: string[]; accept: string; onChange: (values: string[]) => void }) {
  return (
    <div className={`media-list ${accept.includes("video") ? "media-list-video" : "media-list-images"}`}>
      <div className="media-list-heading"><strong>{label}</strong><button type="button" className="admin-add" onClick={() => onChange([...values, ""])}>Add another</button></div>
      {values.map((value, index) => <div className="media-list-item" key={`${label}-${index}`}><MediaPicker label={`${label} ${index + 1}`} accept={accept} value={value} onChange={(next) => onChange(values.map((item, itemIndex) => itemIndex === index ? next : item))} /><button type="button" className="admin-remove" onClick={() => onChange(values.filter((_, itemIndex) => itemIndex !== index))}>Remove</button></div>)}
      {!values.length ? <button type="button" className="admin-add" onClick={() => onChange([""])}>Add first {label.toLowerCase()}</button> : null}
    </div>
  );
}

const sectionLabels: Record<string, string> = {
  about: "About",
  products: "Products",
  advantages: "Advantages",
  trust: "Trust & proof",
  process: "Process",
  video: "Video",
  clients: "Clients",
  reviews: "Reviews",
  contact: "Contact",
};

export default function AdminPage() {
  const [content, setContent] = useState<Content | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState("Loading protected editor...");
  const [activeTab, setActiveTab] = useState<"home" | "about" | "products" | "contact">("home");
  const [requiresLogin, setRequiresLogin] = useState(false);
  const [adminEmail, setAdminEmail] = useState("admin@example.com");
  const [adminPassword, setAdminPassword] = useState("admin123");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [newAdminIp, setNewAdminIp] = useState("");

  useEffect(() => {
    fetch("/api/admin/content")
      .then(async (response) => {
        if (response.status === 401 || response.status === 403) {
          setRequiresLogin(true);
          throw new Error(response.status === 403 ? "This IP is not approved for admin access." : "Sign in with your admin account to continue.");
        }
        if (!response.ok) throw new Error("Unable to load the admin editor.");
        return response.json();
      })
      .then((data: Content) => {
        setContent(data);
        setProducts(data.products ?? []);
        setStatus("Ready. Upload media, edit fields, then save all changes.");
      })
      .catch((error: Error) => setStatus(error.message));
  }, []);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoggingIn(true);
    setStatus("Checking admin account and IP...");
    const response = await fetch("/api/admin/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: adminEmail, password: adminPassword }) });
    if (!response.ok) {
      const result = await response.json().catch(() => null) as { error?: string } | null;
      setStatus(result?.error ?? "Invalid admin secret.");
      setIsLoggingIn(false);
      return;
    }
    window.location.reload();
  }

  function addAdminIp() {
    if (!content || !newAdminIp.trim()) return;
    const ip = newAdminIp.trim();
    if (content.adminAccess.allowedIps.includes(ip)) return;
    updateContent({ adminAccess: { allowedIps: [...content.adminAccess.allowedIps, ip] } });
    setNewAdminIp("");
    setStatus(`${ip} added. Save all changes to activate it.`);
  }

  function updateContent(patch: Partial<Content>) {
    setContent((current) => current ? { ...current, ...patch } : current);
  }

  function updateProduct(product: Product) {
    setProducts((current) => current.map((item) => item.slug === product.slug ? product : item));
    setContent((current) => {
      if (!current) return current;
      const existing = current.productOverrides.filter((item) => item.slug !== product.slug);
      return { ...current, productOverrides: [...existing, product] };
    });
  }

  function addReview() {
    if (!content) return;
    const review = { id: `review-${Date.now()}`, name: "", role: "", comment: "", rating: 5, visible: true };
    updateContent({ reviews: [...content.reviews, review] });
  }

  function addCustomer() {
    if (!content) return;
    const customer = { id: `customer-${Date.now()}`, name: "New customer", logo: "", visible: true };
    updateContent({ customers: [...content.customers, customer] });
  }

  async function save() {
    if (!content) return;
    setStatus("Saving...");
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    setStatus(response.ok ? "Saved. Refresh the public site to see changes." : "Save failed.");
  }

  if (requiresLogin) {
    return <main className="admin-shell"><form className="admin-card admin-login-card" onSubmit={login}><p className="admin-kicker">Protected admin access</p><h1>Sign in to edit the site</h1><p className="admin-muted">Your request IP must be approved before the account can sign in.</p><label>Email<input autoFocus type="email" value={adminEmail} onChange={(event) => setAdminEmail(event.target.value)} /></label><label>Password<input type="password" value={adminPassword} onChange={(event) => setAdminPassword(event.target.value)} /></label><button className="admin-save" type="submit" disabled={isLoggingIn}>{isLoggingIn ? "Checking..." : "Sign in"}</button><p className="admin-status">{status}</p></form></main>;
  }

  if (!content) {
    return <main className="admin-shell"><div className="admin-card"><p>{status}</p></div></main>;
  }

  return (
    <main className="admin-shell">
      <div className="admin-header">
        <div>
          <p className="admin-kicker">Private content studio</p>
          <h1>Bhakti Enterprise Admin</h1>
          <p className="admin-muted">Protected editor. This route is intentionally absent from public navigation.</p>
        </div>
        <button className="admin-save" type="button" onClick={save}>Save all changes</button>
      </div>

      <p className="admin-status">{status}</p>

      <nav className="admin-tabs" aria-label="Edit site page">
        {(["home", "about", "products", "contact"] as const).map((tab) => <button key={tab} type="button" className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>{tab[0].toUpperCase() + tab.slice(1)}</button>)}
      </nav>

      <section className={activeTab === "home" ? "admin-grid" : "hidden"}>
        <div className="admin-card admin-wide">
          <div className="admin-card-heading"><div><p className="admin-kicker">Homepage</p><h2>Hero content</h2></div></div>
          <label>Badge<input value={content.hero.badge} onChange={(event) => updateContent({ hero: { ...content.hero, badge: event.target.value } })} /></label>
          <label>Headline<input value={content.hero.title} onChange={(event) => updateContent({ hero: { ...content.hero, title: event.target.value } })} /></label>
          <label>Description<textarea value={content.hero.description} onChange={(event) => updateContent({ hero: { ...content.hero, description: event.target.value } })} /></label>
          <MediaPicker label="Hero photo" accept="image/*" value={content.hero.image} onChange={(image) => updateContent({ hero: { ...content.hero, image } })} />
          <label>Home About heading<input value={content.pageContent.home.aboutTitle} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, home: { ...content.pageContent.home, aboutTitle: event.target.value } } })} /></label>
          <label>Home About paragraphs <span className="admin-field-hint">One paragraph per line</span><textarea value={content.pageContent.home.aboutParagraphs.join("\n")} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, home: { ...content.pageContent.home, aboutParagraphs: event.target.value.split("\n").map((item) => item.trim()).filter(Boolean) } } })} /></label>
          <label>Advantages heading<input value={content.pageContent.home.advantagesTitle} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, home: { ...content.pageContent.home, advantagesTitle: event.target.value } } })} /></label>
          <MediaPicker label="Home showcase video" accept="video/*" value={content.pageContent.home.videoUrl} onChange={(videoUrl) => updateContent({ pageContent: { ...content.pageContent, home: { ...content.pageContent.home, videoUrl } } })} />
          <div className="admin-list-item">
            <strong>Home statistics</strong>
            {content.pageContent.home.stats.map((stat, index) => <div className="admin-form-grid admin-form-grid-two" key={`stat-${index}`}><label>Label<input value={stat.label} onChange={(event) => { const stats = [...content.pageContent.home.stats]; stats[index] = { ...stat, label: event.target.value }; updateContent({ pageContent: { ...content.pageContent, home: { ...content.pageContent.home, stats } } }); }} /></label><label>Value<input value={stat.value} onChange={(event) => { const stats = [...content.pageContent.home.stats]; stats[index] = { ...stat, value: event.target.value }; updateContent({ pageContent: { ...content.pageContent, home: { ...content.pageContent.home, stats } } }); }} /></label></div>)}
          </div>
        </div>

        <div className="admin-card">
          <p className="admin-kicker">Visibility</p>
          <h2>Show or hide sections</h2>
          <div className="admin-toggle-list">
            {Object.entries(content.sectionVisibility).map(([key, visible]) => (
              <label className="admin-toggle" key={key}><span>{sectionLabels[key] ?? key}</span><input type="checkbox" checked={visible} onChange={(event) => updateContent({ sectionVisibility: { ...content.sectionVisibility, [key]: event.target.checked } })} /></label>
            ))}
          </div>
        </div>
      </section>

      <section className={activeTab === "home" ? "admin-card" : "hidden"}>
        <div className="admin-card-heading"><div><p className="admin-kicker">Security</p><h2>Admin IP allowlist</h2></div><span className="admin-chip">Current: {content.requestIp || "unknown"}</span></div>
        <p className="admin-muted">Only requests from these IP addresses can sign in or use the editor. Add the public IP of another administrator, then save.</p>
        <div className="admin-ip-add"><input value={newAdminIp} placeholder="203.0.113.10" onChange={(event) => setNewAdminIp(event.target.value)} /><button type="button" className="admin-add" onClick={addAdminIp}>Add IP</button></div>
        <div className="admin-ip-list">{content.adminAccess.allowedIps.length ? content.adminAccess.allowedIps.map((ip) => <div className="admin-ip-row" key={ip}><span>{ip}</span><button type="button" className="admin-remove admin-remove-inline" onClick={() => updateContent({ adminAccess: { allowedIps: content.adminAccess.allowedIps.filter((item) => item !== ip) } })}>Remove</button></div>) : <p className="admin-muted">No saved IPs. Use ADMIN_ALLOWED_IPS for the first hosted administrator.</p>}</div>
      </section>

      <section className={activeTab === "home" ? "admin-card" : "hidden"}>
        <div className="admin-card-heading"><div><p className="admin-kicker">Brand library</p><h2>Logo and brochure</h2></div><span className="admin-chip">Used across site</span></div>
        <div className="admin-form-grid admin-form-grid-two">
          <MediaPicker label="Brand logo" accept="image/*" value={content.media.logo} onChange={(logo) => updateContent({ media: { ...content.media, logo } })} />
          <MediaPicker label="Brochure PDF" accept="application/pdf" value={content.media.brochure} onChange={(brochure) => updateContent({ media: { ...content.media, brochure } })} />
        </div>
      </section>

      <section className={activeTab === "home" ? "admin-card" : "hidden"}>
        <div className="admin-card-heading"><div><p className="admin-kicker">Social proof</p><h2>Customer reviews</h2></div><button type="button" className="admin-add" onClick={addReview}>Add review</button></div>
        <div className="admin-list">
          {content.reviews.map((review, index) => (
            <div className="admin-list-item" key={review.id}>
              <div className="admin-list-top"><strong>{review.name || "New review"}</strong><div className="admin-list-actions"><label className="admin-inline-toggle">Visible <input type="checkbox" checked={review.visible} onChange={(event) => { const reviews = [...content.reviews]; reviews[index] = { ...review, visible: event.target.checked }; updateContent({ reviews }); }} /></label><button type="button" className="admin-remove admin-remove-inline" onClick={() => updateContent({ reviews: content.reviews.filter((_, reviewIndex) => reviewIndex !== index) })}>Remove</button></div></div>
              <div className="admin-form-grid">
                <label>Name<input value={review.name} onChange={(event) => { const reviews = [...content.reviews]; reviews[index] = { ...review, name: event.target.value }; updateContent({ reviews }); }} /></label>
                <label>Role<input value={review.role} onChange={(event) => { const reviews = [...content.reviews]; reviews[index] = { ...review, role: event.target.value }; updateContent({ reviews }); }} /></label>
                <label>Stars<input type="number" min="1" max="5" value={review.rating} onChange={(event) => { const reviews = [...content.reviews]; reviews[index] = { ...review, rating: Number(event.target.value) }; updateContent({ reviews }); }} /></label>
              </div>
              <label>Comment<textarea value={review.comment} onChange={(event) => { const reviews = [...content.reviews]; reviews[index] = { ...review, comment: event.target.value }; updateContent({ reviews }); }} /></label>
            </div>
          ))}
        </div>
      </section>

      <section className={activeTab === "home" ? "admin-card" : "hidden"}>
        <div className="admin-card-heading"><div><p className="admin-kicker">Customer marquee</p><h2>Companies using our machines</h2></div><button type="button" className="admin-add" onClick={addCustomer}>Add customer</button></div>
        <p className="admin-muted">Cards move right to left on the homepage. Add a company name and one logo for each customer.</p>
        <div className="admin-list">{content.customers.map((customer, index) => <div className="admin-list-item" key={customer.id}>
          <div className="admin-list-top"><strong>{customer.name || "New customer"}</strong><div className="admin-list-actions"><label className="admin-inline-toggle">Visible <input type="checkbox" checked={customer.visible} onChange={(event) => { const customers = [...content.customers]; customers[index] = { ...customer, visible: event.target.checked }; updateContent({ customers }); }} /></label><button type="button" className="admin-remove admin-remove-inline" onClick={() => updateContent({ customers: content.customers.filter((_, customerIndex) => customerIndex !== index) })}>Remove</button></div></div>
          <label>Company name<input value={customer.name} onChange={(event) => { const customers = [...content.customers]; customers[index] = { ...customer, name: event.target.value }; updateContent({ customers }); }} /></label>
          <MediaPicker label="Customer logo" accept="image/*" value={customer.logo} onChange={(logo) => { const customers = [...content.customers]; customers[index] = { ...customer, logo }; updateContent({ customers }); }} />
        </div>)}</div>
      </section>

      <section className={activeTab === "products" ? "admin-card" : "hidden"}>
        <div className="admin-card-heading"><div><p className="admin-kicker">Catalog</p><h2>Products, photos and videos</h2></div></div>
        <p className="admin-muted">Choose files from this PC or paste an external URL. Uploaded media becomes active after saving.</p>
        <div className="admin-list">
          {products.map((product) => (
            <div className="admin-list-item admin-product-item" key={product.slug}>
              <div className="admin-product-top"><div><p className="admin-kicker">Product editor</p><strong>{product.title}</strong><span className="admin-product-slug">/{product.slug}</span></div><label className="admin-inline-toggle">Visible <input type="checkbox" checked={product.visible !== false} onChange={(event) => updateProduct({ ...product, visible: event.target.checked })} /></label></div>
              <div className="admin-form-grid">
                <label>Title<input value={product.title} onChange={(event) => updateProduct({ ...product, title: event.target.value })} /></label>
                <div />
              </div>
              <label>Summary<textarea value={product.summary} onChange={(event) => updateProduct({ ...product, summary: event.target.value })} /></label>
              <label>Detailed overview<textarea value={product.overview} onChange={(event) => updateProduct({ ...product, overview: event.target.value })} /></label>
              <div className="admin-form-grid admin-form-grid-two">
                <label>Highlights <span className="admin-field-hint">One item per line</span><textarea value={product.highlights.join("\n")} onChange={(event) => updateProduct({ ...product, highlights: event.target.value.split("\n").map((item) => item.trim()).filter(Boolean) })} /></label>
                <label>Use cases <span className="admin-field-hint">One item per line</span><textarea value={product.useCases.join("\n")} onChange={(event) => updateProduct({ ...product, useCases: event.target.value.split("\n").map((item) => item.trim()).filter(Boolean) })} /></label>
              </div>
              <div className="admin-product-media-grid">
                <MediaPicker label="Cover photo" accept="image/*" value={product.image} onChange={(image) => updateProduct({ ...product, image })} />
                <MediaList label="Product photos" accept="image/*" values={product.gallery} onChange={(gallery) => updateProduct({ ...product, gallery })} />
              </div>
              <MediaList label="Product videos" accept="video/*,.mp4,.webm" values={product.videos} onChange={(videos) => updateProduct({ ...product, videos, videoUrl: videos[0] })} />
            </div>
          ))}
        </div>
      </section>

      <section className={activeTab === "about" ? "admin-card" : "hidden"}>
        <div className="admin-card-heading"><div><p className="admin-kicker">About page</p><h2>Page copy and proof points</h2></div></div>
        <label>Eyebrow<input value={content.pageContent.about.eyebrow} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, about: { ...content.pageContent.about, eyebrow: event.target.value } } })} /></label>
        <label>Headline<input value={content.pageContent.about.title} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, about: { ...content.pageContent.about, title: event.target.value } } })} /></label>
        <label>Description<textarea value={content.pageContent.about.description} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, about: { ...content.pageContent.about, description: event.target.value } } })} /></label>
        <MediaPicker label="About page photo" accept="image/*" value={content.pageContent.about.image} onChange={(image) => updateContent({ pageContent: { ...content.pageContent, about: { ...content.pageContent.about, image } } })} />
        <label>Approach heading<input value={content.pageContent.about.approachTitle} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, about: { ...content.pageContent.about, approachTitle: event.target.value } } })} /></label>
        <label>Approach points <span className="admin-field-hint">One item per line</span><textarea value={content.pageContent.about.approachPoints.join("\n")} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, about: { ...content.pageContent.about, approachPoints: event.target.value.split("\n").map((item) => item.trim()).filter(Boolean) } } })} /></label>
        <div className="admin-list">{content.pageContent.about.pillars.map((pillar, index) => <div className="admin-list-item" key={`pillar-${index}`}><label>Point title<input value={pillar.title} onChange={(event) => { const pillars = [...content.pageContent.about.pillars]; pillars[index] = { ...pillar, title: event.target.value }; updateContent({ pageContent: { ...content.pageContent, about: { ...content.pageContent.about, pillars } } }); }} /></label><label>Point text<textarea value={pillar.text} onChange={(event) => { const pillars = [...content.pageContent.about.pillars]; pillars[index] = { ...pillar, text: event.target.value }; updateContent({ pageContent: { ...content.pageContent, about: { ...content.pageContent.about, pillars } } }); }} /></label></div>)}</div>
      </section>

      <section className={activeTab === "contact" ? "admin-card" : "hidden"}>
        <div className="admin-card-heading"><div><p className="admin-kicker">Contact page</p><h2>Contact copy and details</h2></div></div>
        <label>Eyebrow<input value={content.pageContent.contact.eyebrow} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, contact: { ...content.pageContent.contact, eyebrow: event.target.value } } })} /></label>
        <label>Headline<input value={content.pageContent.contact.title} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, contact: { ...content.pageContent.contact, title: event.target.value } } })} /></label>
        <label>Description<textarea value={content.pageContent.contact.description} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, contact: { ...content.pageContent.contact, description: event.target.value } } })} /></label>
        <div className="admin-form-grid"><label>Email<input value={content.pageContent.contact.email} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, contact: { ...content.pageContent.contact, email: event.target.value } } })} /></label><label>Phone<input value={content.pageContent.contact.phone} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, contact: { ...content.pageContent.contact, phone: event.target.value } } })} /></label><label>Location<input value={content.pageContent.contact.location} onChange={(event) => updateContent({ pageContent: { ...content.pageContent, contact: { ...content.pageContent.contact, location: event.target.value } } })} /></label></div>
      </section>
    </main>
  );
}
