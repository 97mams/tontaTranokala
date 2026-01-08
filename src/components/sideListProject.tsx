"use client";

import { useEffect, useState } from "react";
import { useVisitStore } from "../../store/project-store";
import { TextMorph } from "./motion-primitives/text-morph";

export function TopProjects(props: { userId: string }) {
  const fetchVisits = useVisitStore((state) => state.fetchVisits);
  const visits = useVisitStore((state) => state.visits);
  const incrementVisit = useVisitStore((state) => state.incrementVisit);
  const [text, setText] = useState("continue");

  useEffect(() => {
    fetchVisits(props.userId);
    setText(text === "Continue" ? "Confirm" : "Continue");
  }, [fetchVisits]);

  if (visits.length === 0) {
    return null;
  }

  return (
    <div className="hidden md:block md:w-[20rem] p-4 fixed right-0 flex-1">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
        Top projets
      </h3>
      <p className="text-muted-foreground text-sm">
        Retrouvez ici vos projets les plus utilisés.
      </p>
      {visits.map((project) => (
        <a
          key={project.id}
          href={`/tranokala/${project.type}/${project.id}-${project.title}`}
          className="hover:text-primary my-6 ml-6 list-disc [&>li]:mt-2"
          onClick={() => incrementVisit(props.userId, parseInt(project.id))}
        >
          <TextMorph className="hover:underline">{project.title}</TextMorph>
        </a>
      ))}
    </div>
  );
}
