import { GroupeSiteForm } from "@/components/groupForm";
import { getUser } from "@/lib/auth-server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getUser();
  if (!user) {
    redirect("/auth/sigin");
  }
  return (
    <div className="h-[calc(100vh-7rem)] w-3xl flex flex-col items-center justify-start">
      <Image alt="logo" width={300} height={300} src={"/tranokalaMd.png"} />
      <div className="text-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Bienvenue <span className="capitalize">{user.name}</span>. <br />{" "}
          Ajoute ton premier enregistrement et garde tout à portée de main !
        </p>
        <GroupeSiteForm />
      </div>
    </div>
  );
}
