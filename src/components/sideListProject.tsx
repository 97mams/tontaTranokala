"use client";

import { useProject } from "../../store/project-store";

export function TopProjects() {
  const visits = useProject((state) => state.visits);
  if (visits.length === 0) return null;

  return (
    <div className=" md:w-[20rem] p-4 fixed right-0 flex-1">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
        Top projets
      </h3>
      <p className="text-muted-foreground text-sm">
        Retrouvez ici vos projets les plus utilisés.
      </p>
      <ul className="mt-4 my-6 ml-6 list-disc [&>li]:mt-2">
        {visits.map((project) => (
          <li key={project.id}>
            <a
              href={`/tranokala/site/${project.id}-${project.title}`}
              className="hover:underline"
            >
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
