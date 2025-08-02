import { CardListSite } from "@/components/cardListSite"
import { SiteForm } from "@/components/siteForm"
import { prisma } from "@/lib/prisma"
import { castToString, stringToArray } from "@/lib/urlHelper"

export default async function Page(props: {
  params:Promise<{siteName: string}>
}) {
  const params = await props.params
  const newParams = stringToArray(params.siteName)

  const sitesByGroupId = await prisma.site.findMany({
    where: {GroupSiteId: Number(newParams[0])},
    select: { id: true, name: true, description: true, url: true }
  })

  return(
  <div className="flex flex-col gap-2">
    <h1 className="scroll-m-20 uppercase text-4xl font-extrabold tracking-tight text-balance">  
      {castToString(newParams[1])}
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      Ici, retrouvez tous les sites dédiés à {castToString(newParams[1])}.
    </p>
    <div>
      { sitesByGroupId.map(site => (
        <CardListSite 
          key={site.id}
          name={site.name}
          desciption={site.description}
          url={site.url}
        />
      )) }
    </div>
    <div className="flex gap-4 mt-8">
      <SiteForm id={Number(newParams[0])}/>
    </div>
    </div>
  )
}