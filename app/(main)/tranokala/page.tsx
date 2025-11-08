import { GroupeSiteForm } from "@/components/groupForm";
import { getUser } from "@/lib/auth-server";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
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
    <div className="h-[calc(100vh-7rem)] w-full justify-center flex flex-col items-center">
      <Image alt="logo" width={300} height={300} src={"/tranokalaMd.png"} />
      <div className="text-center">
        {isGroup ? (
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Organisez vos idées autrement : créez un nouveau groupe en un clic
          </p>
        ) : (
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Bienvenue <span className="capitalize">{user.name}</span>. <br />{" "}
            Ajoute ton premier enregistrement et garde tout à portée de main !
          </p>
        )}
        <GroupeSiteForm />
      </div>
    </div>
  );
}
