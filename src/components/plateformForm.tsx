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
import { toast } from "sonner"
import { Plus } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { redirect, useParams } from "next/navigation"
import { use, useState } from "react"
import { formPlateformAction } from "../../server/plateform-action"

export type propsPlateform = {
   id:number,
   name:string,
   description: string,
   url: string
}

export function plateformForm(props:{id:number, plateform?:propsPlateform}) {


   const params = useParams()
   const handlerSubmit = (formData: FormData) => {

      if(formData.get('id')){
         formPlateformAction(formData)
         .then(response => {
            if (response.error) {
               toast.error("modification échouée")
            }
            if(response.success) {
               toast.success("Mise à jour réussie.")
               redirect('/plateform/' + params.plateformName)
            }
         })
      } else {
      formPlateformAction(formData)
      .then(r => {
         if (r.error) {
            toast.error("Échec de l'ajout du plateform")
         }
         if (r.success) {
            toast.success("Ajout réussir..")
            redirect('/plateform/' + params.plateformName)
         }
      })
   }
   }

   return(
       <Dialog>
            <DialogTrigger asChild>
                <Label>
                  { props.plateform ? "": "Ajouter"}
                  <Button size={props.plateform ? "lg" : "sm"} variant={props.plateform ? "default" : "outline"}>
                     {props.plateform ? "Modifier" : <Plus />}
                  </Button>
               </Label>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
               <DialogHeader>
                  <DialogTitle>
                     {props.plateform ? "Modifier la plateform" : "Ajouter la plateform"}
                  </DialogTitle>
                  <DialogDescription>
                     {props.plateform ? "Vous pouvez modifier ce plateform." : "Vous pouvez ajouter plusieurs plateforms pour organiser vos projets."}
                  </DialogDescription>
               </DialogHeader>
               <form action={handlerSubmit}>
                  <div className="grid gap-4 my-2">
                     <input type="number" name="id" hidden defaultValue={props.plateform?.id}/>
                     <div className="grid gap-3">
                        <Label htmlFor="plateformName-input">Nom de la plateforme</Label>
                        <Input id="plateformName-input" defaultValue={props.plateform?.name} name="nameplateform" placeholder="ex: mon Plateform" required/>
                     </div>
                     <div className="grid gap-3">
                        <Label htmlFor="plateformEmail-input">Adresse e-mail associée</Label>
                        <Input id="plateformEmail-input" defaultValue={props.plateform?.name} name="email" placeholder="ex: plateform@exemple.com" required/>
                     </div>
                     <div className="grid gap-3">
                        <Label htmlFor="pwd">Mot de passe</Label>
                        <Textarea id="pwd" defaultValue={props.plateform?.description} placeholder="ex: Mon super mot de passe" name="pwd" />
                     </div>
                     <div className="grid gap-3">
                     <Label htmlFor="link-input">Url</Label>
                     <Input id="link-input" defaultValue={props.plateform?.url} name="urlplateform" placeholder="ex: https://exemple.com" required/>
                     </div>
                     <input type="text" hidden name="groupeplateform" defaultValue={props.id} />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                    <Button variant="outline">Annuler</Button>
                    </DialogClose>
                    <DialogClose asChild={false}>
                    <Button type="submit">Enregister</Button>
                    </DialogClose>
                    <DialogDescription>
                        🔒 Vos informations sont confidentielles et restent sécurisées.
                    </DialogDescription>
                  </DialogFooter>
               </form>
            </DialogContent>
      </Dialog>
   )
}