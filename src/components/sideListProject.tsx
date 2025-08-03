import { prisma } from "@/lib/prisma";

export async function TopProjects() {

  const projects = await prisma.groupSite.findMany({
    orderBy: {
      visits: 'desc',
    },
    take: 3
  })



  return (
    <div className="w-md p-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">Top projets</h3>
      <p className="text-muted-foreground text-sm">Retrouvez ici vos projets les plus utilisés.</p>
      <ul className="mt-4 my-6 ml-6 list-disc [&>li]:mt-2">
        {projects.map((project) => (
          <li key={project.id}>
            <a href={`/site/${project.id}-${project.title}`} className="hover:underline">
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}