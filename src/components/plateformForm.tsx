"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { caesarCipher } from "@/lib/utils";
import { Eye, EyeOff, Plus } from "lucide-react";
import { redirect, useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { formPlateformAction } from "../../server/plateform-action";
import { Textarea } from "./ui/textarea";

export type propsPlateform = {
  id: 0;
  name: "";
  description: "";
  url: "";
  email: "";
  password: "";
  type: "";
};

export function PlateformForm(props: {
  id: number;
  plateform?: propsPlateform;
}) {
  const [showPassword, setShowPassword] = useState(false);
  console.log("props:", props.plateform?.name);
  const defaultValuePassword = caesarCipher(
    props.plateform?.password || "",
    12,
    true
  );

  console.log("defaultValuePassword", props.plateform?.password);

  const params = useParams();
  const handlerSubmit = (formData: FormData) => {
    if (formData.get("id")) {
      formPlateformAction(formData).then((response) => {
        if (response.error) {
          toast.error("modification échouée");
        }
        if (response.success) {
          toast.success("Mise à jour réussie.");
          redirect("/plateform/" + params.plateformName);
        }
      });
    } else {
      formPlateformAction(formData).then((r) => {
        if (r.error) {
          throw new Error(r.message);
          toast.error("Échec de l'ajout du plateform");
        }
        if (r.success) {
          toast.success("Ajout réussir..");
          redirect("/plateform/" + params.plateformName);
        }
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Label>
          {props.plateform ? "" : "Ajouter"}
          <Button
            size={props.plateform ? "lg" : "sm"}
            variant={props.plateform ? "default" : "outline"}
          >
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
            {props.plateform
              ? "Vous pouvez modifier ce plateform."
              : "Vous pouvez ajouter plusieurs plateforms pour organiser vos projets."}
          </DialogDescription>
        </DialogHeader>
        <form action={handlerSubmit}>
          <div className="grid gap-4 my-2">
            <input
              type="number"
              name="id"
              hidden
              defaultValue={props.plateform?.id}
            />
            <div className="grid gap-3">
              <Label htmlFor="plateformName-input">Nom de la plateforme</Label>
              <Input
                id="plateformName-input"
                defaultValue={props.plateform?.name}
                name="nameplateform"
                placeholder="ex: mon Plateform"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="plateformEmail-input">
                Adresse e-mail associée
              </Label>
              <Input
                id="plateformEmail-input"
                defaultValue={props.plateform?.email}
                name="email"
                placeholder="ex: plateform@exemple.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="pwd-input">Mot de passe</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="ex: motdepasse"
                  defaultValue={defaultValuePassword}
                  required
                  name="pwd"
                  id="pwd-input"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-1"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                defaultValue={props.plateform?.description}
                placeholder="ex: votre description"
                name="description"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="link-input">Url</Label>
              <Input
                id="link-input"
                defaultValue={props.plateform?.url}
                name="urlplateform"
                placeholder="ex: https://exemple.com"
                required
              />
            </div>
            {/* id for group plateform */}
            <input
              type="text"
              hidden
              name="groupeplateform"
              defaultValue={props.id}
            />
          </div>
          <DialogDescription>
            🔒 Vos informations sont confidentielles et restent sécurisées.
          </DialogDescription>
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
  );
}
