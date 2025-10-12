"use client";

import { useEffect, useState } from "react";
import { TextMorph } from "../../components/motion-primitives/text-morph";
import { useVisitStore } from "../../store/project-store";

export function TopProjects(props: { userId: string }) {
  const fetchVisits = useVisitStore((state) => state.fetchVisits);
  const visits = useVisitStore((state) => state.visits);
  const [text, setText] = useState("continue");

  useEffect(() => {
    fetchVisits(props.userId);
    setText(text === "Continue" ? "Confirm" : "Continue");
  }, [fetchVisits]);

  return (
    <div className=" md:w-[20rem] p-4 fixed right-0 flex-1">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
        Top projets
      </h3>
      <p className="text-muted-foreground text-sm">
        Retrouvez ici vos projets les plus utilisés.
      </p>
      {visits.map((project) => (
        <a
          key={project.id}
          href={`/tranokala/site/${project.id}-${project.title}`}
          className="hover:text-primary my-6 ml-6 list-disc [&>li]:mt-2"
        >
          - <TextMorph className="hover:underline">{project.title}</TextMorph>
        </a>
      ))}
    </div>
  );
}
