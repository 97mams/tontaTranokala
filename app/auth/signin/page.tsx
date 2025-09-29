"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const signupSchema = z.object({
  email: z.string().email({ message: "Adresse e-mail invalide." }),
  password: z.string().min(4, {
    message: "Le mot de passe doit comporter au moins 6 caractères.",
  }),
});
export default function SignInPage() {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
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
          setIsPending(false);
          toast.error(error.error.message);
        },
      }
    );
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-xl">
        <CardHeader>
          <CardTitle>
            <h1 className="text-center">Authentification</h1>
          </CardTitle>
          <CardContent>
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
                        <Input placeholder="you@example.com" {...field} />
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
                      setShowPassword(checked === true);
                    }}
                  />
                  <Label>Voire le mot de passe</Label>
                </div>

                <Button variant="default" className="w-full">
                  {isPending ? (
                    <Loader className="animate-spin" />
                  ) : (
                    "Connecter"
                  )}
                </Button>
              </form>
            </Form>
            <p className="text-xs text-gray-400 mt-2">
              Pas encore de compte ?{" "}
              <a
                href="/auth/signUp"
                className="text-indigo-400 hover:underline"
              >
                Inscris-toi
              </a>
            </p>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
