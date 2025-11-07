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
export function Summary(props: { projects?: plateform[] }) {
  if (!props.projects) {
    return null;
  }

  return (
    <Card className="hidden md:block w-72 absolute right-8 top-72">
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
        <ul className="flex flex-col gap-2 pl-4 mt-2">
          {props.projects.map((project) => (
            <li className="list-decimal" key={project.id}>
              <a
                href={"#project-" + project.id}
                className="cursor-pointer hover:underline"
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
