import { CircleCheck } from "lucide-react";

const problems = [
  "Important URLs get forgotten over time",
  "Useful websites disappear into browser history",
  "Information is scattered across many places",
  "Time is wasted searching for the right link",
];

export function Problem() {
  return (
    <section className="border-b border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Too many websites. Too much scattered information.
          </h2>
          <p className="text-muted-foreground">
            You use dozens of websites every day. Without a system, the things
            that matter get buried and hard to find.
          </p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {problems.map((problem) => (
            <li
              key={problem}
              className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4"
            >
              <CircleCheck className="mt-0.5 size-4 shrink-0 text-neutral-500" />
              <span className="text-sm text-neutral-300">{problem}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}