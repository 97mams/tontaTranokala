import { Suspense } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../convex/_generated/api";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/")({
  loader: async ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: "/login" });
    }
    const user = await context.queryClient.ensureQueryData(
      convexQuery(api.auth.getCurrentUser, {}),
    );
    if (!user) {
      throw redirect({ to: "/login" });
    }
  },
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Ndao</h1>
      <Suspense fallback={<UserCardSkeleton />}>
        <UserCard />
      </Suspense>
    </main>
  );
}

function UserCard() {
  const { data } = useSuspenseQuery(convexQuery(api.auth.getCurrentUser, {}));
  const user = data as {
    email: string;
    name: string;
    image?: string | null;
  } | null;

  if (!user) {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Not signed in</CardTitle>
          <CardDescription>Your session may have expired.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => (location.href = "/login")}
          >
            Go to sign in
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Welcome{user.name ? `, ${user.name}` : ""}</CardTitle>
        <CardDescription>You are signed in.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1 text-sm">
        <p>
          <span className="text-muted-foreground">Email:</span> {user.email}
        </p>
        <p>
          <span className="text-muted-foreground">Name:</span> {user.name}
        </p>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-4">
        <Separator />
        <Button
          variant="outline"
          onClick={async () => {
            await authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  location.href = "/login";
                },
              },
            });
          }}
        >
          Sign out
        </Button>
      </CardFooter>
    </Card>
  );
}

function UserCardSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Skeleton className="h-5 w-1/2" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-24 w-full rounded-xl" />
    </div>
  );
}
