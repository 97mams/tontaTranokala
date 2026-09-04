import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MockWebsite } from "@/components/landing/mock-data";

export function WebsiteCard({
  website,
  className,
}: {
  website: MockWebsite;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900/80 p-3.5 transition-colors hover:border-neutral-700",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg text-xs font-semibold text-neutral-100",
          website.tone,
        )}
      >
        {website.initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-medium text-neutral-100">
            {website.name}
          </h3>
          <span className="text-xs text-neutral-500">{website.url}</span>
        </div>
        <p className="mt-0.5 truncate text-xs text-neutral-400">
          {website.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {website.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-neutral-800 bg-neutral-800/50 px-1.5 py-0.5 text-[0.6875rem] text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Bookmark className="mt-0.5 size-3.5 shrink-0 text-neutral-600" />
    </article>
  );
}