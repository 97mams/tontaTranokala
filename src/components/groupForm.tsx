import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function GroupeSiteForm() {
   return(
       <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Nouvelle groupe</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ajout groupe</DialogTitle>
            <DialogDescription>
               Entrez le nom du groupe que vous voulez ajouter.
               <br />
               Vous pouvez ajouter plusieurs groupes pour organiser vos projets.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Titre</Label>
              <Input id="title" name="title" placeholder="ex: Nextjs"/>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Annuler</Button>
            </DialogClose>
            <Button type="submit">Enregister</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
   )
}