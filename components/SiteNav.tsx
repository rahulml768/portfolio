"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { id: "work", label: "Work" },
  { id: "erp", label: "ERP", desktopOnly: true },
  { id: "thinking", label: "Thinking", desktopOnly: true },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function SiteNav({ resumeUrl }: { resumeUrl: string }) {
  const pathname = usePathname();
  const [inView, setInView] = useState<string | null>(null);
  const active = pathname.startsWith("/work") ? "work" : inView;

  useEffect(() => {
    // A thin band across the middle of the screen decides the current section.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setInView(entry.target.id);
          else setInView((current) => (current === entry.target.id ? null : current));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const item of nav) {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav aria-label="Main">
      <ul className="flex items-center gap-x-4 font-mono text-xs tracking-wide uppercase md:gap-x-8">
        {nav.map((item) => (
          <li key={item.id} className={item.desktopOnly ? "hidden sm:block" : undefined}>
            <Link
              href={`/#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={`inline-block py-2 transition-colors ${
                active === item.id ? "text-signal" : "text-muted hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        {resumeUrl && (
          <li>
            <a href={resumeUrl} className="inline-block py-2 text-signal hover:underline">
              Resume
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
