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
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { formGroupAction } from "../../server/form-action";
import { Switch } from "./ui/switch";

export function GroupeSiteForm() {
  const handlerSubmit = (formatData: FormData) => {
    formGroupAction(formatData).then((respose) => {
      if (respose.error) {
        console.error(respose.message);
        toast.error("vérifier le champs ..");
      }
      if (respose.success) {
        toast.success("Ajout réussir..");
        redirect("/site/" + respose.data);
      }
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Nouvelle groupe</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajout groupe</DialogTitle>
          <DialogDescription>
            Entrez le nom du groupe que vous voulez ajouter.
          </DialogDescription>
        </DialogHeader>
        <form action={handlerSubmit}>
          <div className="grid gap-4 my-2">
            <div className="grid gap-3">
              <Label htmlFor="title">Titre</Label>
              <Input
                id="title"
                name="title"
                placeholder="ex: Nextjs"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" name="type" />
              <Label htmlFor="airplane-mode">
                Activez seulement si c’est une plateforme, pas un simple site
              </Label>
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
  );
}
