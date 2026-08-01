import { createServerFn } from "@tanstack/react-start";
import { fetchAuthMutation } from "@/lib/auth-server";
import { api } from "../../convex/_generated/api";

export const updatePassword = createServerFn({ method: "POST" }).handler(
  async ({ data: { currentPassword, newPassword } }) => {
    await fetchAuthMutation(api.users.updatePassword, {
      currentPassword,
      newPassword,
    });
  }
);