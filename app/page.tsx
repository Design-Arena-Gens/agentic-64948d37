import { Hero } from "@/components/Hero";
import { PillarCard } from "@/components/PillarCard";
import { TableOfContents } from "@/components/TableOfContents";
import { ChapterCard } from "@/components/ChapterCard";
import { chapters, pillars } from "@/lib/content";

const keystoneHabits = [
  {
    title: "The 3-1-0 Planning Pulse",
    description:
      "Every evening list 3 priorities for tomorrow, 1 person to encourage, and 0 optional commitments before noon. Sleep with certainty, wake with clarity."
  },
  {
    title: "Focus Gate Ritual",
    description:
      "Before deep work, run the gate: breathe for 60 seconds, review success criteria, visualize completion, silence all non-essential inputs."
  },
  {
    title: "Nightly Integrity Audit",
    description:
      "Answer three prompts: What did I honor? Where did I drift? How will I close the gap tomorrow? Record in a single running log."
  }
];

const rulesForSuccess = [
  {
    name: "Rule of Singular Commitments",
    statement:
      "Only one initiative earns 'mission' status per quarter; everything else is a supporting project or a graceful no."
  },
  {
    name: "Energy Before Strategy",
    statement:
      "Protect sleep, movement, and nourishment before optimizing tactics—burnout erases the edge discipline creates."
  },
  {
    name: "Make It Visible",
    statement:
      "If a priority is invisible, it is optional. Every target lives where I can see and review it daily."
  },
  {
    name: "Feedback Loops Weekly",
    statement:
      "What gets measured gets managed: review outcomes, leading indicators, and emotional tone every Friday."
  }
];

const successScorecard = [
  {
    category: "Discipline",
    measures: [
      "Morning launch ritual completed before 8:00 a.m.",
      "Atomic habits executed ≥ 80% of planned frequency",
      "Stop Doing List honored (no violations)"
    ]
  },
  {
    category: "Focus",
    measures: [
      "Two 90-minute deep work blocks on priority work",
      "Notifications silenced during focus windows",
      "Closure checklist run before context switch"
    ]
  },
  {
    category: "Momentum",
    measures: [
      "Weekly Wins + Lessons journal entry captured",
      "Progress shared with accountability partner",
      "One act of celebration or gratitude completed"
    ]
  }
];

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-12 md:px-10 lg:px-12">
      <Hero />

      <section className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <TableOfContents />
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {keystoneHabits.map((habit) => (
          <article
            key={habit.title}
            className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white/80 p-8 shadow-lg"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(236,140,18,0.1),_transparent_70%)]" />
            <div className="relative space-y-4">
              <h3 className="font-display text-xl text-ink-900">{habit.title}</h3>
              <p className="text-sm leading-relaxed text-ink-600">{habit.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-8">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-ink-500">
            Core Manuscript
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink-900">
            Chapters for Intentional Success
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-ink-600">
            Work through each chapter sequentially or revisit the pillar you
            need most today. Highlight insights, apply one strategy within 24
            hours, and close the day with the reflection prompt that resonates
            most strongly.
          </p>
        </header>
        <div className="grid gap-8">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white/80 p-10 shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(17,24,39,0.08),_transparent_70%)]" />
          <div className="relative space-y-6">
            <h2 className="font-display text-3xl text-ink-900">Rules of Momentum</h2>
            <p className="text-sm leading-relaxed text-ink-600">
              Codify what keeps you performing at your best. Post these rules where
              you work, review them weekly, and edit them when your strategy evolves.
            </p>
            <ul className="space-y-5">
              {rulesForSuccess.map((rule) => (
                <li key={rule.name} className="rounded-2xl border border-ink-200 bg-white/80 p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-ink-400">
                    {rule.name}
                  </p>
                  <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                    {rule.statement}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <article className="relative overflow-hidden rounded-3xl border border-ink-200 bg-ink-900 p-10 text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(249,167,56,0.2),_transparent_70%)]" />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Success Scorecard
            </p>
            <h2 className="font-display text-3xl text-gold-200">
              The Discipline Dashboard
            </h2>
            <p className="text-sm leading-relaxed text-white/80">
              Each week, score your execution across the pillars. Look for patterns,
              not perfection. Celebrate streaks, troubleshoot breakdowns, and invite
              accountability.
            </p>
            <div className="space-y-6">
              {successScorecard.map((category) => (
                <div key={category.category} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.4em] text-gold-200">
                    {category.category}
                  </p>
                  <ul className="mt-3 space-y-3 text-sm text-white/85 leading-relaxed">
                    {category.measures.map((measure) => (
                      <li key={measure} className="relative pl-4">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gold-400" />
                        {measure}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-dashed border-ink-200 bg-white/80 p-10 text-center shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,140,18,0.12),_transparent_70%)]" />
        <div className="relative space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-ink-500">
            Integration Protocol
          </p>
          <h2 className="font-display text-3xl text-ink-900">
            The 7-Day Discipline Sprint
          </h2>
          <ol className="mx-auto max-w-3xl space-y-4 text-left text-sm leading-relaxed text-ink-600">
            <li>
              <span className="font-semibold text-ink-800">Day 1:</span> Declare your
              identity statement and design a morning activation ritual.
            </li>
            <li>
              <span className="font-semibold text-ink-800">Day 2:</span> Audit your
              environment; remove one distraction, add one focus anchor.
            </li>
            <li>
              <span className="font-semibold text-ink-800">Day 3:</span> Install the
              Focus Gate Ritual for your most important work block.
            </li>
            <li>
              <span className="font-semibold text-ink-800">Day 4:</span> Write three
              decision rules that protect your priorities.
            </li>
            <li>
              <span className="font-semibold text-ink-800">Day 5:</span> Track and
              celebrate micro-wins in your Momentum Dashboard.
            </li>
            <li>
              <span className="font-semibold text-ink-800">Day 6:</span> Conduct the
              Nightly Integrity Audit and share insights with an accountability partner.
            </li>
            <li>
              <span className="font-semibold text-ink-800">Day 7:</span> Reflect on
              lessons, refine rules, and plan the next sprint with intention.
            </li>
          </ol>
          <p className="mx-auto max-w-2xl text-sm text-ink-600">
            Repeat the sprint monthly, iterating on what works. The goal is not
            perfection—it is to keep the promise to yourself alive.
          </p>
        </div>
      </section>
    </main>
  );
}
