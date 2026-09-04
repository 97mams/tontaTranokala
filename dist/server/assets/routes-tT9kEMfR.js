import { n as api } from "./router-BD2KnyJz.js";
import { n as Skeleton, t as AppShell } from "./app-shell-4b43-isD.js";
import { n as WebsiteListSkeleton, t as WebsiteList } from "./website-list-DIm0w8l9.js";
import { Suspense } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
//#region src/routes/index.tsx?tsr-split=component
function IndexComponent() {
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsx(Suspense, {
		fallback: /* @__PURE__ */ jsx(HomeSkeleton, {}),
		children: /* @__PURE__ */ jsx(HomeContent, {})
	}) });
}
function HomeContent() {
	const { data } = useSuspenseQuery(convexQuery(api.auth.getCurrentUser, {}));
	const user = data;
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ jsxs("h1", {
				className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
				children: ["Bienvenue", user?.name ? `, ${user.name}` : ""]
			}), /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground",
				children: "Retrouvez ici vos sites enregistrés et leurs informations."
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-lg font-semibold tracking-tight text-foreground sm:text-xl",
					children: "Vos sites enregistrés"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground",
					children: "Tous les sites que vous avez ajoutés, avec leurs informations."
				})]
			}), /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx(WebsiteListSkeleton, {}),
				children: /* @__PURE__ */ jsx(WebsiteList, {})
			})]
		})]
	});
}
function HomeSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6",
		children: [
			/* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-64" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-80" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-48" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-40 w-full rounded-xl" }),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-40 w-full rounded-xl" })
		]
	});
}
//#endregion
export { IndexComponent as component };
