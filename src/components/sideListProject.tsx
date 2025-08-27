import { prisma } from "@/lib/prisma";

export async function TopProjects() {
  const projects = await prisma.groupSite.findMany({
    orderBy: {
      visits: "desc",
    },
    select: { id: true, title: true, visits: true },
    take: 3,
  });

  const projectIsVisited = projects.filter((project) => project.visits >= 3);

  return (
    <div className="w-md p-4 fixed z-50 right-0 flex-1">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
        Top projets
      </h3>
      <p className="text-muted-foreground text-sm">
        Retrouvez ici vos projets les plus utilisés.
      </p>
      <ul className="mt-4 my-6 ml-6 list-disc [&>li]:mt-2">
        {projectIsVisited.map((project) => (
          <li key={project.id}>
            <a
              href={`/site/${project.id}-${project.title}`}
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
