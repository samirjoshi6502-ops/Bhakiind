export type ProductCatalogItem = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  image: string;
  gallery: string[];
  videoUrl?: string;
  videos?: string[];
  icon: "sparkles" | "factory" | "wrench";
  overview: string;
  highlights: string[];
  specs: Array<{ label: string; value: string }>;
  useCases: string[];
};

export const productCatalog: ProductCatalogItem[] = [
  {
    slug: "kulfi-making-machine",
    title: "Kulfi Making Machine",
    shortTitle: "Kulfi",
    summary: "Bhakti Enterprise’s core kulfi machines continue to anchor the business with stainless-steel construction, dependable freezing, and strong commercial output.",
    image: "/images/legacy/14-moulds-1.webp",
    gallery: [
      "/images/legacy/14-moulds-1.webp",
      "/images/legacy/Ice-Cream-Mixing-1.webp",
      "/images/legacy/home-be.jpeg",
    ],
    videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    icon: "sparkles",
    overview:
      "The legacy WordPress catalogue included multiple kulfi models, especially 6, 12 and 14 mould variants. These units were built around SS 304 construction, practical cleaning access, and consistent output for commercial dessert production.",
    highlights: [
      "SS 304 build for production durability and clean operation",
      "Popular 6, 12 and 14 mould formats from the old catalogue",
      "Designed for consistent kulfi output and retail-ready quality",
    ],
    specs: [
      { label: "Body material", value: "Stainless Steel 304" },
      { label: "Typical mould count", value: "6 / 12 / 14 moulds" },
      { label: "Capacity", value: "300–700 kulfi per batch" },
      { label: "Batch time", value: "25–40 minutes" },
    ],
    useCases: [
      "Commercial kulfi manufacturing",
      "Dessert production units",
      "Regional and retail frozen-food operations",
    ],
  },
  {
    slug: "ice-cream-mixing-machine",
    title: "Ice Cream Mixing Machine",
    shortTitle: "Mixing",
    summary: "The old catalogue included dedicated ice cream mixing equipment to support smooth blending before freezing and final processing.",
    image: "/images/legacy/Ice-Cream-Mixing-1.webp",
    gallery: [
      "/images/legacy/Ice-Cream-Mixing-1.webp",
      "/images/legacy/Ice-Cream-Batch-Freezer-1.webp",
      "/images/legacy/home-be.jpeg",
    ],
    videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    icon: "wrench",
    overview:
      "This product family reflects the broader dessert-production workflow behind commercial frozen goods. It supports mix preparation, consistency, and larger operational throughput in ice cream production setups.",
    highlights: [
      "Designed for uniform mix preparation and blending consistency",
      "Fits the broader production flow behind frozen dessert manufacturing",
      "Built for durable industrial and dairy food environments",
    ],
    specs: [
      { label: "Application", value: "Mixing and preparation" },
      { label: "Use case", value: "Frozen dessert production systems" },
      { label: "Construction", value: "Industrial stainless-steel build" },
      { label: "Best fit", value: "Production kitchens and dessert plants" },
    ],
    useCases: [
      "Base mix preparation",
      "Dessert manufacturing prep lines",
      "Dairy and ice cream operations",
    ],
  },
  {
    slug: "ice-candy-making-machine",
    title: "Ice Candy Making Machine",
    shortTitle: "Candy",
    summary: "The legacy product range included dedicated ice candy machinery, confirming a broader frozen confection offering beyond kulfi alone.",
    image: "/images/legacy/Ice-Candy-Making-1.webp",
    gallery: [
      "/images/legacy/Ice-Candy-Making-1.webp",
      "/images/legacy/4-Moulds-Popsicle-Machine-1.webp",
      "/images/legacy/home-be.jpeg",
    ],
    videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    icon: "sparkles",
    overview:
      "Legacy product exports reference multiple candy and frozen treat machines, including mould-count variations and specific formats used in frozen confection lines. This was an important segment of the company’s commercial product mix.",
    highlights: [
      "Supports frozen candy and confection manufacturing",
      "Multiple mould count offerings in the old catalogue",
      "Aligns with the broader dessert portfolio from the legacy site",
    ],
    specs: [
      { label: "Equipment family", value: "Candy / frozen treat production" },
      { label: "Typical format", value: "Multiple mould configurations" },
      { label: "Application", value: "Ice candy and frozen snack items" },
      { label: "Positioning", value: "Commercial dessert machinery" },
    ],
    useCases: [
      "Ice candy plants",
      "Frozen snack manufacturing",
      "Dessert kiosks and commercial production",
    ],
  },
  {
    slug: "batch-freezer",
    title: "Batch Freezer",
    shortTitle: "Freezer",
    summary: "Legacy batch freezers covered hard ice cream, gelato, sherbet and frozen yogurt production with strong operational consistency.",
    image: "/images/legacy/Ice-Cream-Batch-Freezer-1.webp",
    gallery: [
      "/images/legacy/Ice-Cream-Batch-Freezer-1.webp",
      "/images/legacy/14-moulds-1.webp",
      "/images/legacy/home-be.jpeg",
    ],
    videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    icon: "factory",
    overview:
      "The original site’s catalogue included both standard and automatic batch freezers. These machines were presented as major production equipment for industrial dessert makers and ice cream plants.",
    highlights: [
      "Built for hard ice cream, sorbet, gelato and sherbet output",
      "Commercial-grade freezing system with repeatable quality",
      "Designed for plant-floor reliability and consistent operation",
    ],
    specs: [
      { label: "Machine type", value: "Batch freezer" },
      { label: "Production range", value: "Hard ice cream, gelato, sorbet, frozen yogurt" },
      { label: "Operational focus", value: "Reliable output and consistent texture" },
      { label: "Legacy model", value: "Automatic Ice Cream Batch Freezer" },
    ],
    useCases: [
      "Ice cream manufacturing plants",
      "Frozen dessert production lines",
      "Commercial dessert processing facilities",
    ],
  },
  {
    slug: "popsicle-machine",
    title: "Popsicle Machine",
    shortTitle: "Popsicle",
    summary: "The legacy sales materials prominently included 4-mould and 12-mould popsicle machines, confirming a strong frozen-confection segment.",
    image: "/images/legacy/4-Moulds-Popsicle-Machine-1.webp",
    gallery: [
      "/images/legacy/4-Moulds-Popsicle-Machine-1.webp",
      "/images/legacy/Ice-Candy-Making-1.webp",
      "/images/legacy/home-be.jpeg",
    ],
    videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    icon: "factory",
    overview:
      "Popsicle and chocobar-machine listings from the old catalogue show Bhakti served a wider frozen confection category beyond kulfi alone. These models fit practical commercial and retail volumes.",
    highlights: [
      "Offered in multiple mould count variations",
      "Suitable for commercial frozen confection setup",
      "Matches the real product range in the old WordPress export",
    ],
    specs: [
      { label: "Machine type", value: "Popsicle / chocobar maker" },
      { label: "Legacy variation", value: "4 moulds and 12 moulds" },
      { label: "Category", value: "Frozen dessert equipment" },
      { label: "Use area", value: "Retail and manufacturing production" },
    ],
    useCases: [
      "Frozen novelty production",
      "Retail dessert businesses",
      "Short-run commercial processing",
    ],
  },
  {
    slug: "ice-cream-churner",
    title: "Ice Cream Churner",
    shortTitle: "Churner",
    summary: "The old machine family included churners suited to smooth, lower-overrun or medium-scale ice cream, gelato and sorbet production.",
    image: "/images/legacy/Ice-Cream-Mixing-1.webp",
    gallery: [
      "/images/legacy/Ice-Cream-Mixing-1.webp",
      "/images/legacy/Ice-Cream-Batch-Freezer-1.webp",
      "/images/legacy/Team1.png",
    ],
    videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    icon: "wrench",
    overview:
      "The legacy site positioned churners as core equipment for commercial dessert operations, covering key production methods for frozen dairy and specialty frozen treats.",
    highlights: [
      "Supports ice cream, gelato and sorbet preparation workflows",
      "Built for commercial frozen dessert production reliability",
      "Fits both lower- and medium-overrun production needs",
    ],
    specs: [
      { label: "Application", value: "Churning and blending" },
      { label: "Use case", value: "Commercial ice cream production" },
      { label: "Operational style", value: "Lower to medium overrun output" },
      { label: "Production fit", value: "Dessert manufacturing and retail plants" },
    ],
    useCases: [
      "Ice cream and gelato plants",
      "Frozen dessert line support",
      "Commercial production environments",
    ],
  },
  {
    slug: "ice-cream-mixing",
    title: "Ice Cream Mixing",
    shortTitle: "Processing",
    summary: "The broader legacy catalogue also positioned dedicated ice cream mixing systems as a practical production-stage solution.",
    image: "/images/legacy/Ice-Cream-Mixing-1.webp",
    gallery: [
      "/images/legacy/Ice-Cream-Mixing-1.webp",
      "/images/legacy/Ice-Cream-Batch-Freezer-1.webp",
      "/images/legacy/home-be.jpeg",
    ],
    videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    icon: "wrench",
    overview:
      "This machine family sits in the mix-prep stage of a dessert production operation, helping standardize formulation and ready the product for freezing and finishing.",
    highlights: [
      "Supports formulation consistency and smooth product preparation",
      "Essential stage in dessert production before freezing",
      "Matched to commercial and industrial ice cream workflows",
    ],
    specs: [
      { label: "Stage", value: "Mix preparation" },
      { label: "Use focus", value: "Frozen dessert production" },
      { label: "Design intent", value: "Commercial consistency and efficiency" },
      { label: "Workflow", value: "Before freezing and finishing" },
    ],
    useCases: [
      "Ice cream formulation",
      "Production line preparation",
      "Dairy and dessert manufacturing",
    ],
  },
  {
    slug: "ice-cream-candy-plant",
    title: "Ice Cream Candy Plant 6 Mould-1",
    shortTitle: "Candy plant",
    summary: "Product listings in the old site included specific candy-plant configurations such as 6-mould setups designed for frozen confection production.",
    image: "/images/legacy/Ice-Candy-Making-1.webp",
    gallery: [
      "/images/legacy/Ice-Candy-Making-1.webp",
      "/images/legacy/4-Moulds-Popsicle-Machine-1.webp",
      "/images/legacy/Team1.png",
    ],
    videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    icon: "sparkles",
    overview:
      "The old WordPress catalogue explicitly included ice cream candy plant machines, including 6-mould plant systems. This confirms the business served a more complete confectionery production ecosystem than a narrow kulfi-only model.",
    highlights: [
      "6-mould configuration aligned with the old export listings",
      "Suitable for broader frozen confection and candy workflows",
      "Confirms product depth beyond standard kulfi and freezer equipment",
    ],
    specs: [
      { label: "Configuration", value: "6 mould plant" },
      { label: "Category", value: "Frozen confection production" },
      { label: "Equipment goal", value: "Commercial candy and novelty output" },
      { label: "Legacy presence", value: "Confirmed in old catalogue" },
    ],
    useCases: [
      "Ice candy processing",
      "Frozen confection manufacturing",
      "Commercial candy production lines",
    ],
  },
  {
    slug: "ice-cream-homogenizer-machine",
    title: "Ice Cream Homogenizer Machine",
    shortTitle: "Homogenizer",
    summary: "The legacy product family included homogenizer machines as part of a complete processing ecosystem for dairy and ice cream production.",
    image: "/images/legacy/Ice-Cream-Mixing-1.webp",
    gallery: [
      "/images/legacy/Ice-Cream-Mixing-1.webp",
      "/images/legacy/Ice-Cream-Batch-Freezer-1.webp",
      "/images/legacy/Team1.png",
    ],
    videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    icon: "factory",
    overview:
      "The original catalogue shows homogenizer equipment for quality-focused dairy and frozen dessert production. This equipment helps standardize composition, smoothness, and processing stability across commercial production lines.",
    highlights: [
      "Supports consistent texture and product quality",
      "Implicitly part of a full dairy and dessert processing setup",
      "Matches the old-site product breadth and plant logic",
    ],
    specs: [
      { label: "Application", value: "Homogenization and processing" },
      { label: "Use case", value: "Dairy and frozen dessert lines" },
      { label: "Production goal", value: "Consistency, stability and quality" },
      { label: "Category", value: "Industrial processing equipment" },
    ],
    useCases: [
      "Ice cream processing lines",
      "Dairy preparation systems",
      "High-quality frozen dessert production",
    ],
  },
  {
    slug: "ice-cream-continuous-freezer",
    title: "Ice Cream Continuous Freezer",
    shortTitle: "Continuous",
    summary: "The legacy site also featured continuous freezers, reflecting the full range of commercial ice cream production systems and processing workflows.",
    image: "/images/legacy/Ice-Cream-Batch-Freezer-1.webp",
    gallery: [
      "/images/legacy/Ice-Cream-Batch-Freezer-1.webp",
      "/images/legacy/Ice-Cream-Mixing-1.webp",
      "/images/legacy/14-moulds-1.webp",
    ],
    videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    icon: "factory",
    overview:
      "Continuous freezer systems are a key part of industrial production for larger dessert operations. The old catalogue included these machines as part of the broader production line solution for commercial manufacturers.",
    highlights: [
      "Supports high-volume production workflows",
      "Fits continuous, plant-scale dessert operations",
      "Aligns with the legacy catalogue’s broader production focus",
    ],
    specs: [
      { label: "Machine type", value: "Continuous freezer" },
      { label: "Application", value: "Industrial ice cream production" },
      { label: "Production style", value: "Continuous and high-throughput" },
      { label: "Business fit", value: "Commercial manufacturing customers" },
    ],
    useCases: [
      "Large-scale ice cream plants",
      "High-output production operations",
      "Commercial food manufacturing facilities",
    ],
  },
  {
    slug: "milk-pasteurization-tank",
    title: "Milk Pasteurization Tank",
    shortTitle: "Dairy",
    summary: "The old catalogue includes milk pasteurization and processing equipment, showing the company’s broader dairy manufacturing footprint.",
    image: "/images/legacy/Milk-Pasteurization-Tank-1.webp",
    gallery: [
      "/images/legacy/Milk-Pasteurization-Tank-1.webp",
      "/images/legacy/Ice-Cream-Mixing-1.webp",
      "/images/legacy/home-be.jpeg",
    ],
    videoUrl: "https://www.youtube.com/embed/4H3HkTt_Cg4?autoplay=1&mute=1&rel=0",
    icon: "wrench",
    overview:
      "The real WordPress site includes milk pasteurization tank products, confirming the broader dairy and process equipment side of Bhakti Enterprise beyond frozen-dessert machines alone.",
    highlights: [
      "Part of the broader dairy production and processing portfolio",
      "Supports commercial food manufacturing and processing workflows",
      "Reflects the real breadth of the legacy business model",
    ],
    specs: [
      { label: "Application", value: "Milk processing and pasteurization" },
      { label: "Category", value: "Dairy equipment" },
      { label: "Market fit", value: "Commercial production businesses" },
      { label: "Production intent", value: "Process support and quality control" },
    ],
    useCases: [
      "Dairy processing plants",
      "Food manufacturing support",
      "Commercial production and quality assurance workflows",
    ],
  },
];
