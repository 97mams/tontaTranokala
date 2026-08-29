import { n as api } from "./router-BD2KnyJz.js";
import { n as Skeleton, t as AppShell } from "./app-shell-4b43-isD.js";
import { n as CardContent, t as Card } from "./card-Cb5TNtmM.js";
import { Suspense } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { BookmarkPlus, History, Trash2 } from "lucide-react";
//#region src/components/history-list.tsx
function formatDate(timestamp) {
	return new Intl.DateTimeFormat("fr-FR", {
		dateStyle: "long",
		timeStyle: "short"
	}).format(new Date(timestamp));
}
function HistoryList() {
	const { data } = useSuspenseQuery(convexQuery(api.history.list, {}));
	if (data.length === 0) return /* @__PURE__ */ jsx(Card, {
		className: "w-full",
		children: /* @__PURE__ */ jsxs(CardContent, {
			className: "flex flex-col items-center gap-2 py-10 text-center",
			children: [/* @__PURE__ */ jsx(History, { className: "size-8 text-muted-foreground" }), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: "Aucune activité pour le moment. Vos ajouts et suppressions de sites apparaîtront ici."
			})]
		})
	});
	return /* @__PURE__ */ jsx("ol", {
		className: "flex w-full flex-col gap-5",
		children: data.map((entry) => {
			const added = entry.type === "site_added";
			return /* @__PURE__ */ jsxs("li", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: `mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full ${added ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`,
					children: added ? /* @__PURE__ */ jsx(BookmarkPlus, { className: "size-4" }) : /* @__PURE__ */ jsx(Trash2, { className: "size-4" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-foreground",
							children: [
								added ? "Vous avez ajouté" : "Vous avez supprimé",
								" ",
								/* @__PURE__ */ jsx("strong", {
									className: "font-semibold",
									children: entry.websiteName
								})
							]
						}),
						added && entry.websiteUrl && /* @__PURE__ */ jsx("a", {
							href: entry.websiteUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-primary underline underline-offset-4 hover:text-primary/80",
							children: entry.websiteUrl
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground",
							children: formatDate(entry._creationTime)
						})
					]
				})]
			}, entry._id);
		})
	});
}
function HistoryListSkeleton() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex w-full flex-col gap-5",
		children: [
			0,
			1,
			2
		].map((i) => /* @__PURE__ */ jsxs("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ jsx(Skeleton, { className: "size-8 rounded-full" }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-1 flex-col gap-1.5",
				children: [/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-56" }), /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-40" })]
			})]
		}, i))
	});
}
//#endregion
//#region src/routes/history.tsx?tsr-split=component
function HistoryComponent() {
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
				children: "Historique"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground",
				children: "L'activité de votre compte : sites ajoutés et supprimés."
			})]
		}), /* @__PURE__ */ jsx(Suspense, {
			fallback: /* @__PURE__ */ jsx(HistoryListSkeleton, {}),
			children: /* @__PURE__ */ jsx(HistoryList, {})
		})]
	}) });
}
//#endregion
export { HistoryComponent as component };
