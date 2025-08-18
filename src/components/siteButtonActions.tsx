"use client"

import { 
  Dialog, 
  DialogContent, 
  DialogClose, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader,
  DialogTitle,
  DialogTrigger 
} from "./ui/dialog"
import { Button } from "./ui/button"
import { EllipsisVertical, TriangleAlert } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { propsSite, SiteForm } from "./siteForm"
import { deleteSite } from "../../server/site-action"
import { toast } from "sonner"

export function SiteButtonActions(props: {id:number, site: propsSite}) {

  return (<Popover>
    <PopoverTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <EllipsisVertical />
        </Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="w-full flex justify-around">
        <SiteForm id={props.id} site={props.site}/>
        <DeleteCard id={props.id} />
      </div>
    </PopoverContent>
  </ Popover>)

}

const DeleteCard = (props: {id: number}) => {
  const handleDeleteSite = () => {
    deleteSite(props.id)
    .then((response) => {
      if(response.error) {
        toast.error("suppression échouée")
      }
      if(response.success) {
        toast.success("suppression réussie");
      }
    }).catch((error) => {
      throw new Error("Failed to delete site: " + error.message);
    });
  }

  return (
      <Dialog>
        <DialogTrigger asChild>
            <Button variant={"destructive"}>Supprimer</Button>
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
              <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Non</Button>
                  </DialogClose>
                    <DialogClose asChild>
                      <Button type="submit" variant={"destructive"} onClick={handleDeleteSite}>
                        Oui
                      </Button>
                    </DialogClose>
              </DialogFooter>
        </DialogContent>
      </Dialog>)
}