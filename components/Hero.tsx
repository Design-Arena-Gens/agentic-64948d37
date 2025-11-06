export function Hero() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white/70 p-10 shadow-2xl backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,140,18,0.18),_transparent_60%)]" />
      <div className="relative grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="uppercase tracking-[0.4em] text-xs font-semibold text-ink-500">
            A self-guided field manual
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-ink-900 leading-tight">
            Pillars of Discipline
          </h1>
          <p className="text-lg text-ink-600 leading-relaxed max-w-xl">
            Discipline is the art of aligning today&apos;s behavior with
            tomorrow&apos;s identity. This living document equips you with
            rituals, rules, and reflections to build unshakable focus and
            sustainable success.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="rounded-full border border-ink-200 bg-white px-4 py-2 text-ink-700 shadow-sm">
              Four core pillars
            </div>
            <div className="rounded-full border border-ink-200 bg-white px-4 py-2 text-ink-700 shadow-sm">
              Field-tested rituals
            </div>
            <div className="rounded-full border border-ink-200 bg-white px-4 py-2 text-ink-700 shadow-sm">
              Reflection frameworks
            </div>
          </div>
        </div>
        <aside className="relative rounded-2xl bg-ink-900 text-white p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <h2 className="font-display text-lg tracking-wide uppercase text-gold-300">
            Field Note
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Discipline is less about intensity and more about identity. When you
            define who you are with precision, your habits snap into alignment.
            This book invites you to craft that definition with intention and
            to live it with integrity.
          </p>
          <div className="mt-8 border-t border-white/20 pt-4 text-xs uppercase tracking-[0.4em] text-white/60">
            Read with a pen. Apply with urgency.
          </div>
        </aside>
      </div>
    </header>
  );
}
