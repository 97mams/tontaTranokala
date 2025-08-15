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
import { formSiteAction } from "../../server/form-action"
import { toast } from "sonner"
import { Plus } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { redirect, useParams } from "next/navigation"
import { updateSite } from "../../server/site-action"
import { use, useState } from "react"

export type propsSite = {
   id:number,
   name:string,
   description: string,
   url: string
}

export function SiteForm(props:{id:number, site?:propsSite}) {

   const [validate, setValidate] = useState("") 

   const params = useParams()
   const handlerSubmit = (formData: FormData) => {

      if(formData.get('id')){
         updateSite(formData)
         .then(response => {
            if (response.error) {
               toast.error("modification échouée")
            }
            if(response.success) {
               toast.success("Mise à jour réussie.")
               redirect('/site/' + params.siteName)
            }
         })
      } else {
      formSiteAction(formData)
      .then(r => {
         if (r.error) {
            console.log(r);
            
            // setValidate(r.message[0].message)
         }
         if (r.success) {
            toast.success("Ajout réussir..")
            redirect('/site/' + params.siteName)
         }
      })
   }
   }

   console.log('erro:', validate)

   return(
       <Dialog>
            <DialogTrigger asChild>
                <Label>
                  { props.site ? "": "Ajouter"}
                  <Button size={props.site ? "lg" : "sm"} variant={props.site ? "default" : "outline"}>
                     {props.site ? "Modifier" : <Plus />}
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
                     <input type="number" name="id" hidden defaultValue={props.site?.id}/>
                     <div className="grid gap-3">
                        <Label htmlFor="siteName-input">Nom site</Label>
                        <Input id="siteName-input" defaultValue={props.site?.name} name="nameSite" placeholder="ex: installer Nextjs" required/>
                     </div>
                     <div className="grid gap-3">
                     <Label htmlFor="desc-input">Description</Label>
                     <Textarea id="desc-input" defaultValue={props.site?.description} placeholder="ex: Mon super site..." name="description" />
                     </div>
                     <div className="grid gap-3">
                     <Label htmlFor="link-input">Url</Label>
                     <Input id="link-input" defaultValue={props.site?.url} name="urlSite" placeholder="ex: https://exemple.com" required/>
                     </div>
                     <input type="text" hidden name="groupeSite" defaultValue={props.id} />
                  </div>
                  <DialogFooter>
                     <DialogClose asChild>
                        <Button variant="outline">Annuler</Button>
                     </DialogClose>
                     <DialogClose asChild={false}>
                        <Button type="submit">Enregister</Button>
                     </DialogClose>
                  </DialogFooter>
               </form>
            </DialogContent>
      </Dialog>
   )
}