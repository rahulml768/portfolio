import Image from "next/image";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import { projects } from "@/data/portfolio";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1440px] px-4 pt-20 md:px-8 md:pt-32">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="font-display text-5xl leading-none font-extrabold uppercase md:text-6xl">
          Selected work
        </h2>
        <p className="shrink-0 pb-1 font-mono text-xs tracking-wide text-muted uppercase">
          {projects.length} entries
        </p>
      </div>

      <ol className="border-b border-line">
        {projects.map((project, i) => (
          <li key={project.id} className="border-t border-line">
            <Link
              href={`/work/${project.id}`}
              className="group grid gap-x-8 py-5 md:grid-cols-[3rem_1fr_16rem] md:items-center md:py-6"
            >
              <span className="hidden font-mono text-xs text-signal md:block">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-4xl leading-none font-extrabold uppercase transition-colors group-hover:text-signal md:text-5xl">
                    {project.name}
                  </h3>
                  <span aria-hidden className="font-mono text-signal md:hidden">
                    →
                  </span>
                </span>
                <span className="mt-2 block max-w-[60ch] leading-relaxed text-muted">
                  {project.hook}
                </span>
                <span className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs tracking-wide uppercase">
                  <span>{project.sector}</span>
                  <StatusBadge status={project.status} />
                  {project.award && (
                    <span className="rounded-[3px] border border-line px-2 py-1">
                      {project.award.title}
                    </span>
                  )}
                  {project.reach && (
                    <span className="rounded-[3px] border border-line px-2 py-1">{project.reach}</span>
                  )}
                </span>
              </span>

              <span className="no-print hidden overflow-hidden rounded-[3px] md:block">
                <Image
                  src={project.image.src}
                  alt=""
                  width={1440}
                  height={900}
                  sizes="16rem"
                  className="h-auto w-full rounded-[3px] transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
