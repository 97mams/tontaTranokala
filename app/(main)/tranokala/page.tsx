import { GroupeSiteForm } from "@/components/groupForm";
import { getUser } from "@/lib/auth-server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getUser();
  if (!user) {
    redirect("/auth/sigin");
  }

  const isGroup = await prisma.user.findUnique({
    where: { id: user.id },
    select: { groupeSite: { select: { id: true } } },
  });

  return (
    <div className="w-full sm:w-[calc(100%-20rem)] m-auto h-[calc(100vh-7rem)] justify-center flex flex-col items-center">
      <div className="flex items-center flex-col gap-4">
        {isGroup ? (
          <p className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Organisez vos idées autrement : <br /> créez un nouveau groupe en un
            clic
          </p>
        ) : (
          <p className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Bienvenue <span className="capitalize">{user.name}</span>. <br />{" "}
            Ajoute ton premier enregistrement et garde tout à portée de main !
          </p>
        )}
        <GroupeSiteForm />
      </div>
    </div>
  );
}
