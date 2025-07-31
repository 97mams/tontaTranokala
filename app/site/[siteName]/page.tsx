import { SiteForm } from "@/components/siteForm"
import { castToString, stringToArray } from "@/lib/urlHelper"


export default async function Page(props: {
  params:Promise<{siteName: string}>
}) {
  const params = await props.params
  const newParams = stringToArray(params.siteName)
  return(
  <div className="flex flex-col gap-2">
    <div className="flex gap-4">
      <SiteForm id={Number(newParams[0])}/>
    </div>
    {castToString(newParams[1])}
    </div>
  )
}