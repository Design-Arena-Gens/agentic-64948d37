import type { Chapter } from "@/lib/content";

type ChapterCardProps = {
  chapter: Chapter;
};

export function ChapterCard({ chapter }: ChapterCardProps) {
  return (
    <section
      id={chapter.id}
      className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white/80 p-10 shadow-lg"
    >
      <div className="absolute inset-0 bg-[linear-gradient(140deg,_rgba(15,15,24,0.05),_rgba(236,140,18,0.08))]" />
      <div className="relative space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-ink-500">
            {chapter.subtitle}
          </p>
          <h2 className="font-display text-3xl text-ink-900">{chapter.title}</h2>
          <p className="text-base text-ink-600 leading-relaxed max-w-3xl">
            {chapter.summary}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-ink-200 bg-white/80 p-6">
            <h3 className="font-semibold uppercase tracking-[0.2em] text-xs text-ink-500">
              Key Ideas
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-ink-600 leading-relaxed">
              {chapter.keyIdeas.map((idea) => (
                <li key={idea} className="relative pl-4">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gold-500" />
                  {idea}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-200 bg-white/80 p-6">
            <h3 className="font-semibold uppercase tracking-[0.2em] text-xs text-ink-500">
              Field Strategies
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-ink-600 leading-relaxed">
              {chapter.strategies.map((strategy) => (
                <li key={strategy} className="relative pl-4">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-ink-800" />
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-200 bg-white/80 p-6">
            <h3 className="font-semibold uppercase tracking-[0.2em] text-xs text-ink-500">
              Reflection Prompts
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-ink-600 leading-relaxed">
              {chapter.reflectiveQuestions.map((question) => (
                <li key={question} className="relative pl-4">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gold-400" />
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
