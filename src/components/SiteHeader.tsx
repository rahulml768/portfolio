import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { profile } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-20 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link
          href="/"
          aria-label={`${profile.name}, home`}
          className="grid size-9 shrink-0 place-items-center rounded-[3px] bg-signal font-display text-xl font-extrabold text-ink"
        >
          RM
        </Link>
        <SiteNav resumeUrl={profile.resumeUrl} />
      </div>
    </header>
  );
}
