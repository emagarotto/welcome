import { Star, GitFork, ExternalLink } from "lucide-react";

const repos = [
  {
    name: "Scanably",
    description:
      "AI-visibility scanner for websites. Evaluates how well sites are optimized for next-generation search including Google, ChatGPT, Perplexity, Claude, and AI Overviews.",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    url: "https://github.com/emagarotto/Scanably-Project-ReadMe",
    tag: "SEO, AEO, GEO, AIO",
  },
  {
    name: "Participant Forge",
    description:
      "AI-powered synthetic UX research participant generator. Create realistic profiles, run scenario-based usability tests, and chat with AI participants staying in character.",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    url: "https://github.com/emagarotto/Participant-Forge-Project-ReadMe",
    tag: "UX Research",
  },
  {
    name: "Sprint-Bot",
    description:
      "Platform offering 27 production-ready AI agents automating the UX/UCD process from discovery through validation with plug-and-play Claude Skills, Gemini Gems, or ChatGPTs.",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    url: "https://github.com/emagarotto/Sprint-Bot-Project-ReadMe",
    tag: "AI Agents",
  },
  {
    name: "AI Skills Library",
    description:
      "An AI agent built for the full UX lifecycle: strategy, discovery, research, and prototyping, so nothing falls through the cracks.",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    url: "https://github.com/emagarotto/Ask-Alix-Project-ReadMe",
    tag: "AI Agents",
  },
  {
    name: "Patterine",
    description:
      "A production-ready, multi-tenant SaaS backend for knitters and crocheters. Platform enables authenticated users to generate, edit, save, and share patterns.",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    url: "https://github.com/emagarotto/Patterine-Project-ReadMe",
    tag: "SaaS",
  },
  {
    name: "Alix",
    description:
      "An AI agent built for the full UX lifecycle: strategy, discovery, research, and prototyping, so nothing falls through the cracks.",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    url: "https://github.com/emagarotto/Ask-Alix-Project-ReadMe",
    tag: "AI Agents",
  },
  {
    name: "AI Native Design Patterns",
    description:
      "Documentation and patterns for AI-native product design - a framework for building products that are designed for AI from the ground up.",
    stars: 0,
    forks: 0,
    language: null,
    url: "https://github.com/emagarotto/AI-Native-Design-Patterns-ReadMe",
    tag: "Design Systems",
  },
];

const tagColors: Record<string, string> = {
  "Open Source": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "AI Agents": "bg-blue-50 text-blue-700 border-blue-200",
  SaaS: "bg-amber-50 text-amber-700 border-amber-200",
  "SEO, AEO, GEO, AIO": "bg-teal-50 text-teal-700 border-teal-200",
  "UX Research": "bg-rose-50 text-rose-700 border-rose-200",
  "Design Systems": "bg-stone-100 text-stone-600 border-stone-200",
};

export default function Projects() {
  return (
    <section id="projects" className="pb-[46px] lg:pb-[78px] pt-[46px] lg:pt-[78px]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-stone-900 tracking-tight">
            Projects &amp; <span className="font-semibold">Repositories</span>
          </h2>
          <p className="mt-3 text-stone-500 max-w-xl">
            A curated selection of production-grade projects spanning SaaS platforms, AI tooling, and open-source resources.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-white border border-stone-200 rounded-2xl p-6 hover:border-stone-400 hover:shadow-lg transition-all duration-300"
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tagColors[repo.tag] ?? "bg-stone-100 text-stone-500 border-stone-200"}`}
                >
                  {repo.tag}
                </span>
                <ExternalLink
                  size={14}
                  className="text-stone-300 group-hover:text-stone-500 transition-colors duration-200"
                />
              </div>

              {/* Name */}
              <h3 className="text-base font-semibold text-stone-900 mb-2 group-hover:text-stone-700 transition-colors">
                {repo.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-stone-500 leading-relaxed flex-1 line-clamp-3">
                {repo.description ?? "No description provided."}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-4 mt-5 pt-4 border-t border-stone-100">
                {repo.language && (
                  <span className="text-xs text-stone-400 font-medium">{repo.language}</span>
                )}
                <div className="flex items-center gap-3 ml-auto">
                  <span className="flex items-center gap-1 text-xs text-stone-400">
                    <Star size={12} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-stone-400">
                    <GitFork size={12} />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/emagarotto?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200 border-b border-stone-300 hover:border-stone-600 pb-0.5"
          >
            View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
