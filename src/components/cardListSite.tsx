import Link from "next/link"
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip"
import { SiteButtonActions } from "./siteButtonActions"

export async function CardListSite(props: 
  {
    id: number,
    name: string, 
    description: string,
    url: string
  }
) {

  return (
      <div className="my-8 mb-8">
        <div className="w-full flex justify-between">
          <Tooltip>
            <TooltipTrigger>
              <Link  href={props.url} target="_blank" className="text-lg font-semibold flex hover:before:content-['#'] hover:before:text-muted-foreground before:text-transparent before:content-['#'] before:mr-2">
                {props.name}
              </Link>
            </TooltipTrigger>
            <TooltipContent>Ouvrir {props.name}</TooltipContent>
          </Tooltip>
          <SiteButtonActions id={props.id} site={props}/>
        </div>
        <p className="text-muted-foreground text-sm pl-4">
          {props.description}
        </p>
      </div>
  
  )
}