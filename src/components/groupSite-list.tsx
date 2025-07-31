import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { UrlHelper } from "@/lib/urlHelper";
import { ButtonAction } from "./buttonActions";



export async function GroupeSiteList() {
  const groups = await prisma.groupSite.findMany({
    select: {id: true, title: true}
  })

  return (
    <div className="w-full flex flex-col">
      {groups.map(group =>(
          <div className="w-full rounded-sm px-2 flex items-center hover:bg-muted" key={group.id}>
            <Link 
              href={'/site/' + UrlHelper(`${group.id}-${group.title}`)}
              className="  w-full text-sm p-3"
            >
              {group.title}
            </Link>
            <ButtonAction id={group.id}/> 
          </div>
      ))}
    </div>
  )
}