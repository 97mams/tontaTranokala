import { n as api, r as authClient } from "./router-BK58jg0D.js";
import { r as Button } from "./navbar-Dvw6nZUM.js";
import { a as CardDescription, c as CardTitle, i as CardContent, n as Separator, o as CardFooter, r as Card, s as CardHeader } from "./input-DXaDnxNU.js";
import { n as Skeleton, t as AppShell } from "./app-shell-IPUggaEA.js";
import { Suspense } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
//#region src/routes/index.tsx?tsr-split=component
function IndexComponent() {
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsx(Suspense, {
		fallback: /* @__PURE__ */ jsx(UserCardSkeleton, {}),
		children: /* @__PURE__ */ jsx(UserCard, {})
	}) });
}
function UserCard() {
	const { data } = useSuspenseQuery(convexQuery(api.auth.getCurrentUser, {}));
	const user = data;
	if (!user) return /* @__PURE__ */ jsxs(Card, {
		className: "w-full max-w-sm",
		children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Non connecté" }), /* @__PURE__ */ jsx(CardDescription, { children: "Votre session a peut-être expiré." })] }), /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, {
			variant: "outline",
			className: "w-full",
			onClick: () => location.href = "/landing",
			children: "Retour à l'accueil"
		}) })]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto flex w-full max-w-2xl flex-col gap-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ jsxs("h1", {
				className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
				children: ["Bienvenue", user.name ? `, ${user.name}` : ""]
			}), /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground",
				children: "Vous êtes connecté. Retrouvez bientôt ici vos sites enregistrés et leurs informations."
			})]
		}), /* @__PURE__ */ jsxs(Card, {
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
						user.email
					] }), /* @__PURE__ */ jsxs("p", { children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: "Nom :"
						}),
						" ",
						user.name
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
		})]
	});
}
function UserCardSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto flex w-full max-w-2xl flex-col gap-4",
		children: [
			/* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-64" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-80" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-40 w-full rounded-xl" })
		]
	});
}
//#endregion
export { IndexComponent as component };
