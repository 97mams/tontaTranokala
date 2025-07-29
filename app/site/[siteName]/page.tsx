import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export default async function Page(props: {
  params:Promise<{siteName: string}>
}) {
  const params = await props.params
  const name = params.siteName
  return(
  <div className="flex flex-col gap-2">
    <div className="flex gap-4">
      <Label>Ajouter</Label>
      <Button size={"sm"} variant={"outline"}>
        <Plus />
      </Button>
    </div>
    {name}
    </div>
  )
}