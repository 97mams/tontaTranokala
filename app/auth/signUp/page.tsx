import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { SignUpForm } from "./signup-form";

export default function SignUpPage() {
  return (
    <div>
      <div className="w-full fixed flex justify-start pt-4 pl-30">
        <Link href={"/"}>
          <Image src={"/tranokala.png"} alt="logo" width={30} height={30} />
        </Link>
      </div>
      <div className="min-h-screen flex flex-col items-center gap-4 justify-center bg-gradient-to-b from-gray-50 to-white p-6">
        <Card className="rounded-2xl shadow-lg">
          <CardContent>
            {/* Left */}
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-extrabold mb-2">
                  Créer un compte
                </h1>
                <p className="text-sm text-gray-600 mb-6">
                  Rejoignez la plateforme — enregistrez vos informations et
                  commencez.
                </p>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  <li>Sauvegarde sécurisée de vos données</li>
                  <li>Accès personnalisé à votre tableau de bord</li>
                </ul>
              </div>
              <SignUpForm />
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              Vous avez déjà un compte ?{" "}
              <Link href={"/auth/signin"} className="text-blue-500">
                Se connecter
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
