import type { Project } from "@/data/portfolio";

export function StatusBadge({ status }: { status: Project["status"] }) {
  const live = status === "live";
  return (
    <span className={`flex items-center gap-2 ${live ? "text-live" : "text-signal"}`}>
      <span
        aria-hidden
        className={`size-2 rounded-full ${live ? "bg-live" : "bg-signal"}`}
      />
      {live ? "Live" : "Private"}
    </span>
  );
}
