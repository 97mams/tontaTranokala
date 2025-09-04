import { Card, CardContent } from "./ui/card";

export function Summary(props: {
  projects: Array<{ id: number; name: string; GroupSite: { title: string } }>;
  active: number;
}) {
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
            <li key={project.id} className="text-sm ml-3 mb-2 capitalize">
              <a href="#">{project.name}</a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
