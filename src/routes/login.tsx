import { Link, createFileRoute, redirect } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth-form";
import { AuthHeader } from "@/components/auth-header";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  component: LoginComponent,
});

function LoginComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <AuthHeader />
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
        <AuthForm mode="signIn" />
        <Link
          to="/register"
          className="text-sm text-neutral-400 hover:text-neutral-200"
        >
          Pas encore de compte ? Créer un compte
        </Link>
      </main>
    </div>
  );
}
