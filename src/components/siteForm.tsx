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
import { Plus, Upload } from "lucide-react";
import { redirect, useParams } from "next/navigation";
import { toast } from "sonner";
import { formSiteAction } from "../../server/form-action";
import { updateSite } from "../../server/site-action";
import { Textarea } from "./ui/textarea";

export type propsSite = {
  id: number;
  name: string;
  description: string;
  url: string;
  type: string;
};

type Props = {
  md?: boolean;
};

export function SiteForm(props: {
  id: number;
  site?: propsSite;
  isButton?: boolean;
}) {
  const params = useParams();
  const handlerSubmit = (formData: FormData) => {
    if (formData.get("id")) {
      updateSite(formData).then((response) => {
        if (response.error) {
          toast.error("modification échouée");
        }
        if (response.success) {
          toast.success("Mise à jour réussie.");
          redirect("/tranokala/site/" + params.siteName);
        }
      });
    } else {
      formSiteAction(formData).then((r) => {
        if (r.error) {
          toast.error("Échec de l'ajout du site");
        }
        if (r.success) {
          toast.success("Ajout réussir..");
          redirect("/tranokala/site/" + params.siteName);
        }
      });
    }
  };

  const Labeled: React.FC<Props> = ({ md = false }) => {
    return <span>{md ? "Ajout site" : <Plus />}</span>;
  };
  console.log("groupe id ito:", props.id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Label>
          {props.site || props.isButton ? "" : "Ajouter"}
          <Button
            size={props.isButton ? "default" : "sm"}
            variant={props.site ? "secondary" : "outline"}
          >
            {props.site ? <Upload /> : <Labeled md={props.isButton} />}
          </Button>
        </Label>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {props.site ? "Modifier site" : "Ajout site"}
          </DialogTitle>
          <DialogDescription>
            {props.site
              ? "Vous pouvez modifier ce site."
              : "Vous pouvez ajouter plusieurs sites pour organiser vos projets."}
          </DialogDescription>
        </DialogHeader>
        <form action={handlerSubmit}>
          <div className="grid gap-4 my-2">
            <div className="grid gap-3">
              <Label htmlFor="siteName-input">Nom site</Label>
              <Input
                id="siteName-input"
                defaultValue={props.site?.name}
                name="nameSite"
                placeholder="ex: installer Nextjs"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="desc-input">Description</Label>
              <Textarea
                id="desc-input"
                defaultValue={props.site?.description}
                placeholder="ex: Mon super site..."
                name="description"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="link-input">Url</Label>
              <Input
                id="link-input"
                defaultValue={props.site?.url}
                name="urlSite"
                placeholder="ex: https://exemple.com"
                required
              />
            </div>
            <input
              type="text"
              hidden
              name="groupeSite"
              defaultValue={String(props.id)}
            />
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
