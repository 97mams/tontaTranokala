import { n as api, r as authClient } from "./router-Ez0irVsg.js";
import { n as cn, t as Button } from "./button-BWUHUpVr.js";
import { a as CardFooter, i as CardDescription, n as Card, o as CardHeader, r as CardContent, s as CardTitle, t as Separator } from "./separator-PT59Qpo1.js";
import { Suspense } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
//#region src/components/ui/skeleton.tsx
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "skeleton",
		className: cn("animate-pulse rounded-md bg-muted", className),
		...props
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function IndexComponent() {
	return /* @__PURE__ */ jsxs("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-6 px-6",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-3xl font-extrabold tracking-tight",
			children: "Ndao"
		}), /* @__PURE__ */ jsx(Suspense, {
			fallback: /* @__PURE__ */ jsx(UserCardSkeleton, {}),
			children: /* @__PURE__ */ jsx(UserCard, {})
		})]
	});
}
function UserCard() {
	const { data } = useSuspenseQuery(convexQuery(api.auth.getCurrentUser, {}));
	const user = data;
	if (!user) return /* @__PURE__ */ jsxs(Card, {
		className: "w-full max-w-sm",
		children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Not signed in" }), /* @__PURE__ */ jsx(CardDescription, { children: "Your session may have expired." })] }), /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, {
			variant: "outline",
			className: "w-full",
			onClick: () => location.href = "/login",
			children: "Go to sign in"
		}) })]
	});
	return /* @__PURE__ */ jsxs(Card, {
		className: "w-full max-w-sm",
		children: [
			/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsxs(CardTitle, { children: ["Welcome", user.name ? `, ${user.name}` : ""] }), /* @__PURE__ */ jsx(CardDescription, { children: "You are signed in." })] }),
			/* @__PURE__ */ jsxs(CardContent, {
				className: "flex flex-col gap-1 text-sm",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: "Email:"
					}),
					" ",
					user.email
				] }), /* @__PURE__ */ jsxs("p", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: "Name:"
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
							location.href = "/login";
						} } });
					},
					children: "Sign out"
				})]
			})
		]
	});
}
function UserCardSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex w-full max-w-sm flex-col gap-2",
		children: [
			/* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-1/2" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-2/3" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-24 w-full rounded-xl" })
		]
	});
}
//#endregion
export { IndexComponent as component };
