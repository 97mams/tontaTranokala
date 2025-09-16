import { Card, CardContent } from "@/components/ui/card";
import { SignUpForm } from "./sigup-form";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-6">
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-extrabold mb-2">Créer un compte</h1>
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
        </CardContent>
      </Card>
    </div>
  );
}
