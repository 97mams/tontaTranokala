"use client";

import { EllipsisVertical, Trash2, TriangleAlert } from "lucide-react";
import { toast } from "sonner";
import { deleteSite } from "../../server/site-action";
import { PlateformForm, propsPlateform } from "./plateformForm";
import { propsSite, SiteForm } from "./siteForm";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { plateformDeleteAction } from "../../server/plateform-action";

export function PlateformButtonAction(props: { id: number; data: any }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <EllipsisVertical />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-30">
        <div className="w-full flex justify-around">
          {props.data.type === "site" ? (
            <SiteForm id={props.id} site={props.data as propsSite} />
          ) : (
            <PlateformForm
              id={props.id}
              plateform={props.data as propsPlateform}
            />
          )}
          <DeleteCard id={props.id} />
        </div>
      </PopoverContent>
    </Popover>
  );
}

const DeleteCard = (props: { id: number }) => {
  const handleDeletePlateform = () => {
    plateformDeleteAction(props.id)
      .then((response) => {
        if (response.error) {
          toast.error("suppression échouée");
        }
        if (response.success) {
          toast.success("suppression réussie");
        }
      })
      .catch((error) => {
        throw new Error("Failed to delete: " + error.message);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"} size={"sm"}>
          <Trash2 />
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
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Non</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="submit"
              variant={"destructive"}
              onClick={handleDeletePlateform}
            >
              Oui
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
