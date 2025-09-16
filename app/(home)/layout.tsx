import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="treu" enableSystem={true}>
      <div className="w-full h-screen">
        <header className="border-b-2 py-2 border-accent grid grid-cols-2">
          <div className="flex items-center pl-60 ">
            <Link href={"/"}>
              <Image width={30} height={30} alt="logo" src={"/tranokala.png"} />
            </Link>
          </div>
          <div className="flex justify-end gap-1  pr-60">
            <Link href={"/auth/signUp"}>
              <Button variant={"secondary"}>S'inscrire</Button>
            </Link>
            <ModeToggle />
          </div>
        </header>
        {children}
      </div>
    </ThemeProvider>
  );
}
