import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/StatusBadge";
import { projects } from "@/data/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata(props: PageProps<"/work/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const project = projects.find((item) => item.id === id);
  if (!project) return {};
  const title = `${project.name}, ${project.sector}`;
  // Setting openGraph here replaces the root values, so the shared image is repeated.
  const images = [{ url: "/opengraph-image.png", width: 1200, height: 630 }];
  return {
    title,
    description: project.hook,
    openGraph: { title, description: project.hook, type: "article", images },
    twitter: { title, description: project.hook, images },
  };
}

export default async function CaseStudy(props: PageProps<"/work/[id]">) {
  const { id } = await props.params;
  const index = projects.findIndex((item) => item.id === id);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main id="main" className="mx-auto max-w-[1440px] px-4 pt-4 md:px-8">
      <Link
        href="/#work"
        className="no-print inline-block py-2 font-mono text-xs tracking-wide text-muted uppercase hover:text-paper"
      >
        ← All work
      </Link>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 bg-panel px-3 py-2.5 font-mono text-xs tracking-wide uppercase md:px-4">
        <p className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-signal">{String(index + 1).padStart(2, "0")}</span>
          <span>{project.sector}</span>
        </p>
        <StatusBadge status={project.status} />
      </div>

      <div className="grid gap-8 py-8 md:py-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h1 className="font-display text-6xl leading-none font-extrabold uppercase md:text-7xl">
            {project.name}
          </h1>
          {project.subtitle && (
            <p className="mt-2 font-mono text-sm text-muted">{project.subtitle}</p>
          )}
          <p className="mt-5 leading-relaxed">{project.summary}</p>

          {project.reach && (
            <p className="mt-5 font-display text-3xl leading-none font-bold uppercase text-signal text-signal">
              {project.reach}
            </p>
          )}

          {project.award && (
            <a
              href={project.award.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block rounded-[3px] bg-signal p-4 text-ink transition-opacity hover:opacity-85"
            >
              <span className="block font-display text-3xl leading-none font-bold uppercase">
                {project.award.title}, {project.award.event}
              </span>
              <span className="mt-2 block text-sm">{project.award.detail} ↗</span>
            </a>
          )}

          {project.role && (
            <>
              <h2 className="mt-7 font-mono text-xs tracking-wide text-signal uppercase">My role</h2>
              <p className="mt-3 leading-relaxed">{project.role}</p>
            </>
          )}

          <h2 className="mt-7 font-mono text-xs tracking-wide text-signal uppercase">The problem</h2>
          <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>

          <h2 className="mt-7 font-mono text-xs tracking-wide text-muted uppercase">
            {project.pointsLabel}
          </h2>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            {project.points.map((point) => (
              <li key={point} className="border-l-2 border-line pl-3">
                {point}
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-[3px] bg-tile px-2.5 py-1.5">
                {tag}
              </li>
            ))}
          </ul>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-mono text-sm text-signal underline underline-offset-4 hover:no-underline"
            >
              {project.urlLabel} ↗
            </a>
          )}
        </div>

        <div className="lg:col-span-7">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1440}
            height={900}
            sizes="(min-width: 1024px) 58vw, 100vw"
            loading="eager"
            className="h-auto w-full rounded-[3px]"
          />

          <h2 className="mt-8 font-mono text-xs tracking-wide text-signal uppercase">The thinking</h2>
          <dl className="mt-3 grid gap-6 sm:grid-cols-2">
            {project.thinking.map((item) => (
              <div key={item.title} className="border-t-2 border-signal pt-3">
                <dt className="font-display text-2xl leading-none font-bold uppercase">
                  {item.title}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted">{item.why}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Link
        href={`/work/${next.id}`}
        className="no-print group mb-16 flex items-center justify-between gap-6 border-t border-line pt-6"
      >
        <span>
          <span className="block font-mono text-xs tracking-wide text-muted uppercase">
            Next entry
          </span>
          <span className="mt-1 block font-display text-4xl leading-none font-extrabold uppercase md:text-5xl transition-colors group-hover:text-signal">
            {next.name}
          </span>
        </span>
        <span aria-hidden className="font-display text-4xl md:text-5xl text-signal">
          →
        </span>
      </Link>
    </main>
  );
}
