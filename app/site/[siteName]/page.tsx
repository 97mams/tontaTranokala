import { SiteForm } from "@/components/siteForm"


export default async function Page(props: {
  params:Promise<{siteName: string}>
}) {
  const params = await props.params
  const name = params.siteName
  return(
  <div className="flex flex-col gap-2">
    <div className="flex gap-4">
      <SiteForm name={name}/>
    </div>
    {name}
    </div>
  )
}