import { education, experience, projects, skills } from "@/data/portfolio";

export function Experience() {
  const awarded = projects.filter((project) => project.award);

  return (
    <section id="experience" className="mx-auto max-w-[1440px] px-4 py-20 md:px-8 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[20rem_1fr] lg:gap-8">
        <h2 className="font-display text-5xl leading-none font-extrabold uppercase md:text-6xl">
          Experience
        </h2>

        <div className="min-w-0">
          {experience.map((job) => (
            <article key={job.company} className="border-t border-line py-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-3xl font-bold uppercase">{job.company}</h3>
                <p className="font-mono text-xs tracking-wide text-muted uppercase">{job.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted">
                {[job.role, job.place, job.about].filter(Boolean).join(" · ")}
              </p>
              {job.points.length > 0 && (
                <ul className="mt-4 space-y-2.5 leading-relaxed">
                  {job.points.map((point) => (
                    <li key={point} className="border-l-2 border-line pl-3">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {job.tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                  {job.tags.map((tag) => (
                    <li key={tag} className="rounded-[3px] bg-tile px-2.5 py-1.5">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          {awarded.map(
            ({ id, name, award }) =>
              award && (
                <article key={id} className="border-t border-line py-7">
                  <p className="font-mono text-xs tracking-wide text-signal uppercase">Recognition</p>
                  <h3 className="mt-2 font-display text-3xl font-bold uppercase">{award.title}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {award.event}, for {name}. {award.detail}{" "}
                    <a
                      href={award.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-signal underline underline-offset-4 hover:no-underline"
                    >
                      See the results ↗
                    </a>
                  </p>
                </article>
              ),
          )}

          <article className="border-t border-line py-7">
            <p className="font-mono text-xs tracking-wide text-signal uppercase">Education</p>
            <h3 className="mt-2 font-display text-3xl font-bold uppercase">{education.degree}</h3>
            <p className="mt-1 text-sm text-muted">
              {education.school}, {education.place}
            </p>
          </article>
        </div>
      </div>

      <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-[20rem_1fr] lg:gap-8">
        <h2 className="font-display text-5xl leading-none font-extrabold uppercase md:text-6xl">
          Toolkit
        </h2>
        <dl className="min-w-0 border-b border-line">
          {skills.map((skill) => (
            <div
              key={skill.group}
              className="grid gap-1 border-t border-line py-4 sm:grid-cols-[10rem_1fr] sm:gap-4"
            >
              <dt className="font-mono text-xs leading-6 tracking-wide text-muted uppercase">
                {skill.group}
              </dt>
              <dd>{skill.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
