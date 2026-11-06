import { skillCategories } from '@/data/skills';

const FEATURED = ['Languages & Query Tools', 'Frontend', 'Backend', 'Databases', 'Generative AI & LLMs'];

const items = Array.from(
  new Set(skillCategories.filter((c) => FEATURED.includes(c.title)).flatMap((c) => c.skills)),
);

export default function Marquee() {
  const row = (
    <ul className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((s, i) => (
        <li
          key={`${s}-${i}`}
          className="flex items-center gap-10 font-mono text-sm uppercase tracking-widest text-muted-foreground"
        >
          {s}
          <span className="size-1 rounded-full bg-brand-gradient" />
        </li>
      ))}
    </ul>
  );
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y bg-card/30 py-5 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
    >
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
