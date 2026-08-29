import { n as api, r as authClient } from "./router-CtdkhaJ7.js";
import { r as Button } from "./navbar-DZYvC_3D.js";
import { n as Skeleton, t as AppShell } from "./app-shell-8PrU-cCk.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, s as Separator, t as Card } from "./card-DBbE6TN0.js";
import { Suspense } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
//#region src/routes/user.tsx?tsr-split=component
function UserComponent() {
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
				children: "Mon compte"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground",
				children: "Vos informations de session et la gestion de votre compte."
			})]
		}), /* @__PURE__ */ jsx(Suspense, {
			fallback: /* @__PURE__ */ jsx(UserCardSkeleton, {}),
			children: /* @__PURE__ */ jsx(UserCard, {})
		})]
	}) });
}
function UserCard() {
	const { data } = useSuspenseQuery(convexQuery(api.auth.getCurrentUser, {}));
	const user = data;
	return /* @__PURE__ */ jsxs(Card, {
		className: "w-full",
		children: [
			/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Votre compte" }), /* @__PURE__ */ jsx(CardDescription, { children: "Les informations de votre session." })] }),
			/* @__PURE__ */ jsxs(CardContent, {
				className: "flex flex-col gap-1 text-sm",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: "Email :"
					}),
					" ",
					user?.email
				] }), /* @__PURE__ */ jsxs("p", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: "Nom :"
					}),
					" ",
					user?.name
				] })]
			}),
			/* @__PURE__ */ jsxs(CardFooter, {
				className: "flex-col items-stretch gap-4",
				children: [/* @__PURE__ */ jsx(Separator, {}), /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					onClick: async () => {
						await authClient.signOut({ fetchOptions: { onSuccess: () => {
							location.href = "/landing";
						} } });
					},
					children: "Se déconnecter"
				})]
			})
		]
	});
}
function UserCardSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex w-full flex-col gap-2 p-1",
		children: [
			/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-40" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-56" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-64" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-64" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-full" })
		]
	});
}
//#endregion
export { UserComponent as component };
