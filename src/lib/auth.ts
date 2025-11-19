import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  trustedOrigins: ["http://localhost:3000", "http://localhost:3001"],
  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),
  session: {
    expiresIn: 60 * 60 * 24 * 1, //1 day
    updateAge: 60 * 60,
  },
  emailAndPassword: {
    enabled: true,
  },
});
