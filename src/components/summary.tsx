"use client";

import { Card, CardContent } from "./ui/card";
type plateform = {
  id: number;
  name: string;
  email: string;
  passWord: string;
  description: string;
  url: string | null;
  GroupSite: {
    id: number;
    type: string;
    title: string;
  };
};
export function Summary(props: { projects?: plateform[]; active: number }) {
  if (!props.projects) {
    return;
  }

  return (
    <Card className="w-70 absolute right-8 top-70">
      <CardContent>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
          Résumé
        </h3>
        <p className="text-muted-foreground text-sm">
          Voici un aperçu de vos projets.
        </p>
        <h4 className="capitalize text-xl">
          {props.projects[0].GroupSite.title}
        </h4>
        <ul>
          {props.projects.map((project) => (
            <li
              key={project.id}
              className={`
                text-sm ml-3 mb-2 capitalize
              `}
              onClick={() =>
                document
                  .getElementById(project.name + project.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <a
                href={"#" + project.name + project.id}
                className={props.active === project.id ? "underline" : ""}
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
