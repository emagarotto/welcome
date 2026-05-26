import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-100 bg-stone-50 py-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/33375863?v=4"
            alt="Ezio Magarotto"
            className="w-7 h-7 rounded-lg ring-1 ring-stone-200"
          />
          <span className="text-sm text-stone-500">
            <span className="font-medium text-stone-700">Ezio Magarotto</span> - Fullstack AI Product Designer &amp; Strategist
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/emagarotto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-700 transition-colors duration-200"
          >
            <Github size={13} />
            github.com/emagarotto
          </a>
          <span className="text-xs text-stone-300">&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
