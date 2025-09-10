"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { caesarCipher } from "@/lib/utils";
import { Check, Copy, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SiteButtonActions } from "./siteButtonActions";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function CardListPlateform(props: {
  id: number;
  name: string;
  email: string;
  password: string;
  description: string;
  url: string;
  type: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const { isCopied: copyEmail, copyToClipboard: clicboardEmail } =
    useCopyToClipboard();
  const { isCopied: copyPwd, copyToClipboard: clicboardPwd } =
    useCopyToClipboard();

  const handleCopyMail = (copy: string) => clicboardEmail(copy);
  const handleCopyPwd = (copy: string) => clicboardPwd(copy);
  const formatPassword = caesarCipher(props.password, 12, true);

  return (
    <div className="my-8 mb-22">
      <div className="w-full flex justify-between">
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={props.url}
              target="_blank"
              className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 flex hover:before:content-['#'] hover:before:text-muted-foreground before:text-transparent before:content-['#'] before:mr-2"
            >
              {props.name}
            </Link>
          </TooltipTrigger>
          <TooltipContent>Ouvrir {props.name}</TooltipContent>
        </Tooltip>
        <SiteButtonActions id={props.id} data={props} />
      </div>
      <div className="pl-4">
        <p className="text-muted-foreground text-sm mb-8 capitalize">
          {props.description}
        </p>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Adresse mail associée
        </h4>
        <p className="text-muted-foreground text-sm">
          Identifiant associé à la plateforme
        </p>
        <div className="relative my-4">
          <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
            {props.email}
          </pre>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              handleCopyMail(props.email);
            }}
            className="absolute top-2 right-2 h-8 w-8 p-0"
          >
            {copyEmail ? (
              <Check className="w-3 h-3" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </Button>
        </div>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Mot de passe
        </h4>
        <p className="text-muted-foreground text-sm">
          Conservez-le en sécurité, vous pouvez l’afficher ou le copier.
        </p>
        <div className="relative my-4">
          <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
            <input
              type={showPassword ? "text" : "password"}
              defaultValue={formatPassword}
            />
          </pre>
          <div className="absolute top-2 right-2 h-8 p-0 flex gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                handleCopyPwd(formatPassword);
              }}
            >
              {copyPwd ? (
                <Check className="w-3 h-3" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
