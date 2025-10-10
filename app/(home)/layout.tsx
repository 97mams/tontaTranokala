import { Footer } from "@/components/footer";
import { SignInButtonAction } from "@/components/sigInButtonAction";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { getUser } from "@/lib/auth-server";
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
      <header className="border-b-2 py-2 border-accent grid grid-cols-2">
        <div className="flex items-center pl-60 ">
          <Link href={"/"}>
            <Image width={30} height={30} alt="logo" src={"/tranokala.png"} />
          </Link>
        </div>
        <div className="flex justify-end gap-1  pr-60">
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
