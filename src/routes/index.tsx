import { createFileRoute } from "@tanstack/react-router";
import { api } from "../../convex/_generated/api";
import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
    component: () => {
      const currentUser = useSuspenseQuery(
        convexQuery(api.auth.getCurrentUser, {})
      );

      return (
        <div>
          <h1>Welcome to the Home Page</h1>
          {currentUser ? (
            <p>Hello!</p>
          ) : (
            <p>You are not logged in.</p>
          )}
        </div>
      );
    },
  loader: async ({ context }) => {
    await Promise.all([
      context.queryClient.ensureQueryData(
        convexQuery(api.auth.getCurrentUser, {})
      ),
      // Load multiple queries in parallel if needed
    ]);
  },
});