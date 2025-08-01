"use client"

import { toast} from "sonner"
import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { XIcon, TriangleAlert } from "lucide-react"
import { groupSiteDeleteAction } from "../../server/form-action"

export function ButtonAction (props: {id: number}) {

  const handlerSubmit = (formdata:FormData) => {
    groupSiteDeleteAction(formdata)
    .then(respose => {
      if(respose.success) {
         toast.success('Suppression réussir...')
      }
      if (respose.error) {
         toast.error('Echec de suppression...')
      }
    })
    .catch(error => {
      throw new Error(error)
   })
  }

  const handlerCancle = () => {
   toast.error('Suppression annuler')
  }

  return ( 
          <Dialog>
            <DialogTrigger asChild>
               <Button variant={"ghost"} size={"sm"} className="text-ring hover:text-foreground">
                <XIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
               <DialogHeader>
                  <DialogTitle className="text-red-500">
                     <div className="flex gap-2">
                        <p>Confirmation</p> 
                        <TriangleAlert />
                     </div>
                  </DialogTitle>
                  <DialogDescription>
                     Vous voulez vraiment le supprimer ?
                  </DialogDescription>
               </DialogHeader>
               <form action={handlerSubmit}>
                  <input type="number" defaultValue={props.id} name="id"  hidden/>
                  <DialogFooter>
                     <DialogClose asChild>
                        <Button variant="outline" onClick={handlerCancle}>Non</Button>
                     </DialogClose>
                     <DialogClose asChild>
                        <Button type="submit" variant={"destructive"}>Oui</Button>
                     </DialogClose>
                  </DialogFooter>
               </form>
            </DialogContent>
      </Dialog>)
}