"use client"

import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { XIcon } from "lucide-react"

export function ButtonAction (props: {id: number}) {

  const handlerSubmit = (formdata:FormData) => {
    console.log('formdata', formdata);
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
                  <DialogTitle className="text-red-500">Confirmation</DialogTitle>
                  <DialogDescription>
                     Vous voulez vraiment le supprimer ?
                  </DialogDescription>
               </DialogHeader>
               <form action={handlerSubmit}>
                  <input type="text"  hidden/>
                  <DialogFooter>
                     <DialogClose asChild>
                        <Button variant="outline">Non</Button>
                     </DialogClose>
                     <DialogClose asChild>
                        <Button type="submit" variant={"destructive"}>Oui</Button>
                     </DialogClose>
                  </DialogFooter>
               </form>
            </DialogContent>
      </Dialog>)
}