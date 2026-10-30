import { principles } from "@/data/portfolio";

export function Principles() {
  return (
    <section id="thinking" className="mx-auto max-w-[1440px] px-4 pt-20 md:px-8 md:pt-32">
      <h2 className="font-display text-5xl leading-none font-extrabold uppercase md:text-6xl">
        What I care about
      </h2>
      <ol className="mt-8 md:mt-12">
        {principles.map((principle, i) => (
          <li
            key={principle.title}
            className="grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-8"
          >
            <p className="font-mono text-xs text-signal md:col-span-1 md:leading-10">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display text-3xl leading-none font-bold uppercase md:text-4xl text-balance md:col-span-5">
              {principle.title}
            </h3>
            <div className="md:col-span-6">
              <p className="leading-relaxed">{principle.why}</p>
              <p className="mt-3 font-mono text-xs tracking-wide text-muted uppercase">
                Seen in: {principle.proof}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
