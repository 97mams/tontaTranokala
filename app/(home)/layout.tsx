import { Footer } from "@/components/footer";
import { SignInButtonAction } from "@/components/sigInButtonAction";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { getUser } from "@/lib/auth-server";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  if (user) {
    redirect("/tranokala");
  }
  return (
    <div className="w-full h-screen">
      <header className="border-b-2 py-2 border-accent flex justify-between p-4  md:grid md:grid-cols-2">
        <div className="flex items-center pl-2 md:pl-60 ">
          <Link href={"/"}>
            <Image width={30} height={30} alt="logo" src={"/tranokala.png"} />
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/docs"}>Documentation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/auth/signin"}>Se connecter</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
        <div className="hidden md:flex justify-end gap-1 md:pr-60">
          <Link href={"/docs"}>
            <Button variant={"outline"}>Documentation</Button>
          </Link>
          <SignInButtonAction />
          <ModeToggle />
        </div>
      </header>
      {children}
      <Footer />
    </div>
  );
}
