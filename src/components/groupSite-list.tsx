import Link from "next/link";
import { prisma } from "@/lib/prisma";



export async function GroupeSiteList() {
  const groups = await prisma.groupSite.findMany({
    select: {id: true, title: true}
  })
  
  return (
    <div className="w-full flex flex-col">
      {groups.map(group =>(
          <Link 
            key={group.id} 
            href={'/'+group.title}
            className="hover:bg-muted pl-2 rounded text-sm p-3"
          >
            {group.title}
          </Link>
      ))}
    </div>
  )
}