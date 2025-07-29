"use client"

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
import { formGroupAction, formSiteAction } from "../../server/form-action"
import { toast } from "sonner"
import { Plus } from "lucide-react"

export function SiteForm(props:{name:string}) {

   const handlerSubmit = (formatData: FormData) => {
      // formSiteAction(formatData)
      // .then(r => {
      //    if (r.error) {
      //       toast.error("vérifier le champs ..")
      //    }
      //    if (r.success) {
      //       toast.success("Ajout réussir..")
      //    }
      // })
      formSiteAction(formatData)
   }

   return(
       <Dialog>
            <DialogTrigger asChild>
                <Label>
                  Ajouter
                  <Button size={"sm"} variant={"outline"}>
                    <Plus />
                  </Button>
                </Label>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
               <DialogHeader>
                  <DialogTitle>Ajout groupe</DialogTitle>
                  <DialogDescription>
                     Vous pouvez ajouter plusieurs sites pour organiser vos projets.
                  </DialogDescription>
               </DialogHeader>
               <form action={handlerSubmit}>
                  <div className="grid gap-4 my-2">
                     <div className="grid gap-3">
                     <Label htmlFor="title">Titre</Label>
                     <Input id="title" name="name" placeholder="ex: installer Nextjs" required/>
                     </div>
                     <div className="grid gap-3">
                     <Label htmlFor="title">Description</Label>
                     <Input id="title" name="title" placeholder="ex: Nextjs" required/>
                     </div>
                     <div className="grid gap-3">
                     <Label htmlFor="title">Titre</Label>
                     <Input id="title" name="title" placeholder="ex: Nextjs" required/>
                     </div>
                  </div>
                  <DialogFooter>
                     <DialogClose asChild>
                        <Button variant="outline">Annuler</Button>
                     </DialogClose>
                     <DialogClose asChild>
                        <Button type="submit">Enregister</Button>
                     </DialogClose>
                  </DialogFooter>
               </form>
            </DialogContent>
      </Dialog>
   )
}