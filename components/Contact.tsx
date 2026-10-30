import { CopyEmail } from "@/components/CopyEmail";
import { closing, emailHref, profile } from "@/data/portfolio";

export function Contact() {
  return (
    <footer id="contact" className="on-signal bg-signal text-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <h2 className="max-w-[12ch] font-display text-6xl leading-[0.92] font-extrabold uppercase md:text-8xl">
          Let&rsquo;s talk.
        </h2>
        <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={emailHref}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-medium break-all underline underline-offset-4 hover:no-underline md:text-3xl"
          >
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
        </p>

        {profile.links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-6 font-mono text-sm">
            {profile.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-14 max-w-[62ch] text-sm leading-relaxed">{closing}</p>

        <div className="mt-8 flex flex-wrap justify-between gap-x-6 gap-y-1 border-t border-ink/30 pt-4 font-mono text-xs tracking-wide uppercase">
          <p>
            {profile.name} · {profile.role}
          </p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
