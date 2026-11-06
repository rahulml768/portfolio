import { blockchain } from "@/data/portfolio";

export function Blockchain() {
  return (
    <section id="blockchain" className="mx-auto max-w-[1440px] px-4 pt-20 md:px-8 md:pt-32">
      <p className="font-mono text-xs tracking-wide text-signal uppercase">Web3</p>
      <h2 className="mt-3 font-display text-5xl leading-none font-extrabold uppercase md:text-6xl">
        {blockchain.headline}
      </h2>
      <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">{blockchain.intro}</p>

      <ul className="mt-8 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
        {blockchain.skills.map((skill) => (
          <li key={skill.name} className="rounded-[3px] bg-tile p-6">
            <h3 className="font-display text-3xl leading-none font-bold uppercase">{skill.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{skill.detail}</p>
          </li>
        ))}
      </ul>

      <p className="mt-5 font-mono text-xs tracking-wide text-muted uppercase">
        Seen in: {blockchain.proof}
      </p>
    </section>
  );
}
