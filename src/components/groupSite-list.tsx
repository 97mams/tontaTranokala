import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { UrlHelper } from "@/lib/urlHelper";



export async function GroupeSiteList() {
  const groups = await prisma.groupSite.findMany({
    select: {id: true, title: true}
  })
  
  return (
    <div className="w-full flex flex-col">
      {groups.map(group =>(
          <Link 
            key={group.id} 
            href={'/site/' + UrlHelper(group.title)}
            className="hover:bg-muted pl-2 rounded text-sm p-3"
          >
            {group.title}
          </Link>
      ))}
    </div>
  )
}