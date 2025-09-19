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
        <form className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" id="email" />
          </div>
          <div className="space-y-2">
            <Label>Mot de passe</Label>
            <Input type="password" id="password" />
          </div>

          <Button
            variant="secondary"
            className="w-full"
            onClick={handlerCancle}
          >
            Connecter
          </Button>
        </form>
        <p className="text-xs text-gray-400 mt-2">
          Pas encore de compte ?{" "}
          <a href="#" className="text-indigo-400 hover:underline">
            Inscris-toi
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
}
