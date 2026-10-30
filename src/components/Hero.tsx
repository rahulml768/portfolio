import Image from "next/image";
import type { CSSProperties } from "react";
import { emailHref, metrics, profile } from "@/data/portfolio";

export function Hero() {
  const letters = [...profile.name.toUpperCase()];

  return (
    <section className="mx-auto max-w-[1440px] px-4 pt-4 md:px-8 md:pt-6">
      <h1>
        <span className="sr-only">{profile.name}</span>
        <span aria-hidden className="grid grid-cols-6 gap-1 md:grid-cols-12 md:gap-1.5">
          {letters.map((letter, i) => (
            <span
              key={i}
              className={letter === " " ? "flap flap--blank" : "flap"}
              style={{ "--i": i } as CSSProperties}
            >
              {letter !== " " && <span>{letter}</span>}
            </span>
          ))}
        </span>
      </h1>
      <p className="mt-4 flex flex-wrap justify-between gap-x-6 gap-y-1 font-mono text-sm tracking-wide uppercase md:text-base">
        <span className="text-signal">{profile.role}</span>
        <span className="text-muted">{profile.location}</span>
      </p>

      <div className="grid gap-10 pt-10 pb-14 md:grid-cols-12 md:gap-8 md:pt-12 md:pb-20">
        <div className="md:col-span-8">
          <p className="max-w-[14ch] font-display text-5xl leading-[0.95] font-bold uppercase md:text-6xl xl:text-7xl text-balance">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-muted">{profile.intro}</p>
          <div className="no-print mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-[3px] bg-signal px-5 py-3 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-85"
            >
              See the work
            </a>
            <a
              href={emailHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-[3px] border border-line px-5 py-3 font-mono text-sm transition-colors hover:border-paper"
            >
              Email me
            </a>
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-line px-5 py-3 font-mono text-sm transition-colors hover:border-paper"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="self-end md:col-span-4">
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={480}
            height={480}
            sizes="240px"
            loading="eager"
            className="mb-6 size-40 md:size-52"
          />
          <dl className="border-t border-line">
            {profile.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 border-b border-line py-3"
              >
                <dt className="font-mono text-xs tracking-wide text-muted uppercase">{fact.label}</dt>
                <dd className="text-right text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <ul className="grid border-t border-line md:grid-cols-3">
        {metrics.map((metric) => (
          <li
            key={metric.value}
            className="border-b border-line py-6 md:border-b-0 md:border-l md:px-8 md:py-8 md:first:border-l-0 md:first:pl-0"
          >
            <p className="font-display text-6xl leading-none font-extrabold uppercase text-signal lg:text-7xl">
              {metric.value}
            </p>
            <p className="mt-3 font-medium">{metric.label}</p>
            <p className="mt-1 text-sm text-muted">{metric.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
