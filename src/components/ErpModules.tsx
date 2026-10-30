import Image from "next/image";
import { erp } from "@/data/portfolio";

export function ErpModules() {
  return (
    <section id="erp" className="mt-12 bg-panel md:mt-20">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="font-mono text-xs tracking-wide text-signal uppercase">
              {erp.company}, formerly {erp.formerly}
            </p>
            <h2 className="mt-3 max-w-[16ch] font-display text-5xl leading-[0.95] font-extrabold uppercase md:text-6xl text-balance">
              {erp.headline}
            </h2>
            <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-muted">{erp.intro}</p>
            <p className="mt-5 max-w-[24ch] font-display text-3xl leading-none font-bold uppercase text-signal text-balance text-signal">
              {erp.reach}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
              {erp.tags.map((tag) => (
                <li key={tag} className="rounded-[3px] bg-tile px-2.5 py-1.5">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <figure className="no-print self-end">
            <Image
              src={erp.image.src}
              alt={erp.image.alt}
              width={1080}
              height={450}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full rounded-[3px]"
            />
            <figcaption className="mt-2 font-mono text-xs text-muted">
              Product pages from onfinity.io
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid gap-1.5 md:mt-14 lg:grid-cols-2">
          <article className="flex flex-col justify-between gap-8 rounded-[3px] bg-signal p-6 text-ink md:p-8">
            <div>
              <Image
                src={erp.featured.image.src}
                alt={erp.featured.image.alt}
                width={1080}
                height={450}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="no-print mb-6 h-auto w-full rounded-[3px]"
              />
              <h3 className="font-display text-4xl leading-none font-extrabold uppercase lg:text-5xl">
                {erp.featured.name}
              </h3>
              <p className="mt-3">{erp.featured.summary}</p>
              <p className="mt-6 font-mono text-xs tracking-wide uppercase">The thinking</p>
              <p className="mt-2 text-lg leading-snug font-medium">{erp.featured.thinking}</p>
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed">
              {erp.featured.points.map((point) => (
                <li key={point} className="border-l-2 border-ink/40 pl-3">
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-1.5">
            {erp.modules.map((module) => (
              <article
                key={module.name}
                className="grid items-center gap-5 rounded-[3px] bg-tile p-6 sm:grid-cols-2 md:p-8"
              >
                <div>
                  <h3 className="font-display text-4xl leading-none font-extrabold uppercase xl:text-5xl">
                    {module.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{module.summary}</p>
                </div>
                <Image
                  src={module.image.src}
                  alt={module.image.alt}
                  width={1080}
                  height={450}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="no-print h-auto w-full rounded-[3px]"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
