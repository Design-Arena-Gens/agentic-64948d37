import type { Pillar } from "@/lib/content";

type PillarCardProps = {
  pillar: Pillar;
  index: number;
};

export function PillarCard({ pillar, index }: PillarCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white/80 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,140,18,0.12),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-200 bg-gold-50 font-semibold text-gold-700">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl text-ink-900">{pillar.title}</h3>
        </div>
        <p className="text-ink-600 leading-relaxed">{pillar.description}</p>
        <ul className="space-y-3">
          {pillar.anchors.map((anchor) => (
            <li key={anchor} className="flex items-start gap-3 text-sm text-ink-600 leading-relaxed">
              <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-gold-500" />
              {anchor}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
