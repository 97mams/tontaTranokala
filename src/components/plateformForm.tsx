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
import { Eye, EyeOff, Plus, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  formPlateformAction,
  updatePlateformAction,
} from "../../server/plateform-action";
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

type Props = {
  md?: boolean;
};

export function PlateformForm(props: {
  id: number;
  plateform?: propsPlateform;
  isButton?: boolean;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const defaultValuePassword = caesarCipher(
    props.plateform?.password || "",
    12,
    true
  );

  const handlerSubmit = (formData: FormData) => {
    if (formData.get("id")) {
      updatePlateformAction(formData).then((response) => {
        if (response.error) {
          toast.error("modification échouée");
        }
        if (response.success) {
          toast.success("Mise à jour réussie.");
        }
      });
    } else {
      formPlateformAction(formData).then((r) => {
        if (r.error) {
          toast.error("Échec de l'ajout du plateform");
          throw new Error(r.message);
        }
        if (r.success) {
          toast.success("Ajout réussir..");
        }
      });
    }
  };

  const Labeled: React.FC<Props> = ({ md }) => {
    return <span>{md ? "Ajout plateform" : <Plus />}</span>;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Label>
          {props.plateform || props.isButton ? "" : "Ajouter"}
          <Button
            size={props.isButton ? "default" : "sm"}
            variant={props.plateform ? "secondary" : "outline"}
          >
            {props.plateform ? <Upload /> : <Labeled md={props.isButton} />}
          </Button>
        </Label>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {props.plateform
              ? "Modifier la plateforme"
              : "Ajouter la plateforme"}
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
                placeholder="ex: ma Plateforme"
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
                placeholder="ex: plateforme@exemple.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="pwd-input">Mot de passe (facultative)</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="ex: motdepasse"
                  defaultValue={defaultValuePassword}
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
            <DialogClose asChild>
              <Button type="submit">Enregister</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
