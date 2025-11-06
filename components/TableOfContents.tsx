import { chapters } from "@/lib/content";

export function TableOfContents() {
  return (
    <nav className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white/80 p-8 shadow-lg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(17,24,39,0.08),_transparent_65%)]" />
      <div className="relative space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-ink-500">
            Navigate
          </p>
          <h2 className="mt-2 font-display text-2xl text-ink-900">
            Table of Contents
          </h2>
        </div>
        <ol className="space-y-4 text-sm text-ink-600">
          {chapters.map((chapter, index) => (
            <li key={chapter.id} className="group flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-ink-200 bg-white text-xs font-semibold text-ink-500">
                {index + 1}
              </span>
              <a
                href={`#${chapter.id}`}
                className="flex-1 transition-colors group-hover:text-ink-900"
              >
                <span className="block font-semibold text-ink-800">{chapter.title}</span>
                <span className="block text-xs uppercase tracking-[0.25em] text-ink-400">
                  {chapter.subtitle}
                </span>
              </a>
            </li>
          ))}
        </ol>
        <div className="rounded-2xl border border-dashed border-ink-300 bg-white/70 p-4 text-xs text-ink-500">
          <p className="font-semibold uppercase tracking-[0.3em] text-ink-400">
            Reading Ritual
          </p>
          <p className="mt-2 leading-relaxed">
            Begin each session by scanning the chapter intention. Choose one
            strategy to apply immediately and one reflection to journal on by
            evening.
          </p>
        </div>
      </div>
    </nav>
  );
}
