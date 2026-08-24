import { Link, createFileRoute, redirect } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth-form";

export const Route = createFileRoute("/register")({
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  component: RegisterComponent,
});

function RegisterComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
      <AuthForm mode="signUp" />
      <Link
        to="/login"
        className="text-sm text-neutral-400 hover:text-neutral-200"
      >
        Already have an account? Sign in
      </Link>
    </main>
  );
}
