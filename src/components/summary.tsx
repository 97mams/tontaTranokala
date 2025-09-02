import { Card, CardContent } from "./ui/card";

export function Summary(props: {
  projects: Array<{ id: number; name: string }>;
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
        <ul>
          {props.projects.map((project) => (
            <li key={project.id}>
              <a href="#">{project.name}</a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
