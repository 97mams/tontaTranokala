"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { signIn } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Checkbox } from "./ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const signupSchema = z.object({
  email: z.string().email({ message: "Adresse e-mail invalide." }),
  password: z.string().min(4, {
    message: "Le mot de passe doit comporter au moins 6 caractères.",
  }),
});

export const SignInButtonAction = () => {
  const [showPassword, setShowPassword] = useState<CheckedState>(false);
  const router = useRouter();
  const [isPending, setIsPending] = useState<boolean>(false);
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handlerSubmit = async (values: z.infer<typeof signupSchema>) => {
    setIsPending(true);
    await signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: () => {
          router.push("/tranokala");
        },
        onError: (error) => {
          toast.error(error.error.message);
        },
      }
    );
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handlerSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="vous@exemple.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-row items-center space-x-3 space-y-0">
              <Checkbox
                checked={showPassword}
                onCheckedChange={(checked) => {
                  setShowPassword(checked);
                }}
              />
              <Label>Voire le mot de passe</Label>
            </div>
            <Button variant="default" className="w-full">
              {isPending ? <Loader className="animate-spin" /> : "Connecter"}
            </Button>
          </form>
        </Form>
        <p className="text-xs text-gray-400 mt-2">
          Pas encore de compte ?{" "}
          <a href="/auth/signUp" className="text-indigo-400 hover:underline">
            Inscris-toi
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
};
