import Link from "next/link"
import { Separator } from "./ui/separator"

export async function CardListSite(props: 
  {
    name: string, 
    desciption: string,
    url: string | null
  }
) {
    //I am lazy for change type of url 😅
    if(!props.url) {
      return ''
    }

  return (
      <div className="my-8 mx-2">
        <Separator className="my-8"/>
        <div className="w-md flex justify-between">
          <h2 className="text-lg font-semibold flex before:mr-2 before:content-['🔗']">
            {props.name}
          </h2>
          <Link  href={props.url} target="_blank" className="text-muted-foreground text-sm hover:bg-accent border border-ring rounded-md px-1">ouvrir</Link>
        </div>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          {props.desciption}
        </blockquote>
      </div>
  
  )
}