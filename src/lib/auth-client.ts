import { createAuthClient } from "better-auth/react";
import { useRouter } from "next/navigation";
export const authClient = createAuthClient({});

const router = useRouter();

export const { signUp, signIn, signOut } = authClient;

await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/signin");
    },
    onError: (error) => {
      console.error("Sign out error:", error);
    },
  },
});
