import { Github, ArrowDown, Globe, Mail, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#78716c 1px, transparent 1px), linear-gradient(90deg, #78716c 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Warm ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100 rounded-full opacity-40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-200 rounded-full opacity-60 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-8 pb-16 lg:pt-10 lg:pb-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden ring-1 ring-stone-200 shadow-lg">
              <img
                src="https://avatars.githubusercontent.com/u/33375863?v=4"
                alt="Ezio Magarotto"
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href="https://github.com/emagarotto"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-3 -right-3 bg-stone-800 text-stone-50 rounded-xl p-2.5 shadow-md hover:bg-stone-700 transition-colors duration-200"
            >
              <Github size={16} />
            </a>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                Available for select projects
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-display text-4xl lg:text-6xl font-medium tracking-tight text-stone-900 leading-[1.1]">
                Ezio Magarotto
              </h1>
              <p className="font-display text-lg lg:text-xl text-stone-500 font-medium tracking-tight ml-[3px]">
                Fullstack AI Product Designer &amp; Strategist
              </p>
            </div>

            <p className="text-sm lg:text-base text-stone-600 font-light max-w-xl leading-relaxed -mt-[3px] ml-[3px]">
              Building production-grade software at the intersection of design
              thinking and AI-native development.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/emagarotto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Github size={15} />
                View GitHub
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white text-stone-700 border border-stone-200 px-5 py-2.5 rounded-xl text-sm font-medium hover:border-stone-400 hover:text-stone-900 transition-all duration-200 shadow-sm"
              >
                See projects
              </a>
              <a
                href="#stack"
                className="inline-flex items-center gap-2 bg-white text-stone-700 border border-stone-200 px-5 py-2.5 rounded-xl text-sm font-medium hover:border-stone-400 hover:text-stone-900 transition-all duration-200 shadow-sm"
              >
                See stack
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-stone-100">
              <a
                href="https://magarottos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200"
              >
                <Globe size={14} className="text-stone-400" />
                portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/eziomagarotto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200"
              >
                <Linkedin size={14} className="text-stone-400" />
                linkedin
              </a>
              <a
                href="mailto:ezio@magarottos.com"
                className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200"
              >
                <Mail size={14} className="text-stone-400" />
                ezio@magarottos.com
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 animate-bounce">
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
