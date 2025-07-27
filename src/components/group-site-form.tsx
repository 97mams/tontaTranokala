import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function GroupSiteForm() {
  return (
        <form action="" className="my-3 w-md">
            <Label htmlFor="input">Tritre de technologie</Label>
           <div className="flex gp-2">
              <Input id="input" name="groupe"/>
              <Button className="ml-2">Ajouter</Button>
           </div>
        </form>
      )
}