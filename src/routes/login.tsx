import { Link, createFileRoute, redirect } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth-form";

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
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
      <AuthForm mode="signIn" />
      <Link
        to="/register"
        className="text-sm text-neutral-400 hover:text-neutral-200"
      >
        Pas de compte ? Créer un
      </Link>
    </main>
  );
}
