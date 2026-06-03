const tools = [
  {
    name: "Replit",
    badge: "Level 4 Certified",
    description: "Cloud-based IDE for rapid prototyping and full-stack deployment with built-in AI assistance.",
    category: "Build",
    icon: "R",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    accentBorder: "border-l-orange-400",
  },
  {
    name: "Lovable",
    badge: "Level 4 Certified",
    description: "AI-powered product development platform for shipping beautiful, production-ready apps fast.",
    category: "Build",
    icon: "L",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    accentBorder: "border-l-rose-400",
  },
  {
    name: "Claude Code",
    badge: null,
    description: "Agentic coding with Anthropic's Claude - precise, context-aware, and built for complex codebases.",
    category: "AI",
    icon: "C",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
    accentBorder: "border-l-amber-400",
  },
  {
    name: "Storybook",
    badge: null,
    description: "Component-driven UI development and documentation. The standard for design system work.",
    category: "Design",
    icon: "S",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    accentBorder: "border-l-pink-400",
  },
  {
    name: "Vercel",
    badge: null,
    description: "Edge-first deployment platform with instant previews, rollbacks, and global CDN distribution.",
    category: "Deploy",
    icon: "V",
    iconBg: "bg-stone-100",
    iconColor: "text-stone-700",
    accentBorder: "border-l-stone-500",
  },
  {
    name: "Supabase",
    badge: null,
    description: "Open-source Firebase alternative with Postgres, Auth, Edge Functions, and real-time subscriptions.",
    category: "Data",
    icon: "S",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    accentBorder: "border-l-emerald-400",
  },
  {
    name: "Clerk",
    badge: null,
    description: "Complete user management and authentication - from signup to multi-org enterprise flows.",
    category: "Auth",
    icon: "C",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-700",
    accentBorder: "border-l-sky-400",
  },
  {
    name: "Resend",
    badge: null,
    description: "Developer-first email infrastructure with high deliverability and a clean API.",
    category: "Comms",
    icon: "R",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
    accentBorder: "border-l-teal-400",
  },
  {
    name: "Stripe",
    badge: null,
    description: "The gold standard for payments. Subscriptions, one-time charges, metered billing, and more.",
    category: "Revenue",
    icon: "S",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
    accentBorder: "border-l-blue-400",
  },
];

const categoryOrder = ["Build", "AI", "Design", "Deploy", "Data", "Auth", "Comms", "Revenue"];

const categoryColors: Record<string, string> = {
  Build: "bg-orange-50 text-orange-700 border-orange-200",
  AI: "bg-amber-50 text-amber-700 border-amber-200",
  Design: "bg-pink-50 text-pink-700 border-pink-200",
  Deploy: "bg-stone-100 text-stone-600 border-stone-300",
  Data: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Auth: "bg-sky-50 text-sky-700 border-sky-200",
  Comms: "bg-teal-50 text-teal-700 border-teal-200",
  Revenue: "bg-blue-50 text-blue-700 border-blue-200",
};

export default function Stack() {
  return (
    <section id="stack" className="pt-[25px] lg:pt-[53px] pb-[46px] lg:pb-[78px] bg-white border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-3">
            Tools &amp; Platforms
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-stone-900 tracking-tight">
            Agentic Coding <span className="font-semibold">Stack</span>
          </h2>
          <p className="mt-3 text-stone-500 max-w-xl">
            A deliberate, end-to-end toolkit for building, shipping, and scaling AI-native products.
          </p>
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...tools].sort(
            (a, b) =>
              categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
          ).map((tool) => (
            <div
              key={tool.name}
              className={`group relative flex gap-4 bg-stone-50 border border-stone-200 border-l-4 ${tool.accentBorder} rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all duration-300`}
            >
              {/* Icon */}
              <div
                className={`shrink-0 w-10 h-10 rounded-xl ${tool.iconBg} flex items-center justify-center`}
              >
                <span className={`text-sm font-bold ${tool.iconColor}`}>{tool.icon}</span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-stone-900">{tool.name}</span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColors[tool.category]}`}
                  >
                    {tool.category}
                  </span>
                  {tool.badge && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
