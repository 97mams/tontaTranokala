import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function GroupSiteForm() {
  return (
    <Card>
      <CardHeader>Titre techonologie</CardHeader>
      <CardContent>
        <form action="">
          <Label>Tritre de technologie</Label>
          <Input name="groupe"/>
          <Button>Ajouter</Button>
      </form>
      </CardContent>
    </Card>
  )
}