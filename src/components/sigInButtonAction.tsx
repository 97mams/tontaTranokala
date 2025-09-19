"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function SiginButton() {
  const handlerCancle = () => {
    toast.error("Suppression annuler");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Se connecter</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle className="flex justify-center">
            <p>Authentification</p>
          </DialogTitle>
        </DialogHeader>
        <form>
          <Label>Email</Label>
          <Input type="email" id="email" />
          <Label>Mot de passe</Label>
          <Input type="password" id="password" />

          <Button variant="secondary" onClick={handlerCancle}>
            Connecter
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
