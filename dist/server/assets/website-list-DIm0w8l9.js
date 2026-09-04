import { n as api } from "./router-BD2KnyJz.js";
import { n as Skeleton } from "./app-shell-4b43-isD.js";
import { r as Button } from "./navbar-Cyj_Tx2Y.js";
import { a as CardHeader, n as CardContent, t as Card } from "./card-Cb5TNtmM.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { useMutation } from "convex/react";
import { Eye, EyeOff, Globe, KeyRound, Mail, Trash2, User } from "lucide-react";
//#region src/components/website-list.tsx
function toDisplayUrl(raw) {
	return raw.startsWith("http") ? raw : `https://${raw}`;
}
function PasswordValue({ password, loginUrl }) {
	const [shown, setShown] = useState(false);
	return /* @__PURE__ */ jsxs("li", {
		className: "flex items-center gap-2",
		children: [
			/* @__PURE__ */ jsx(KeyRound, { className: "size-3.5 shrink-0 text-muted-foreground" }),
			/* @__PURE__ */ jsx("span", {
				className: "text-sm",
				children: "Mot de passe\xA0:"
			}),
			/* @__PURE__ */ jsx("code", {
				className: "rounded bg-muted px-1.5 py-0.5 text-sm",
				children: shown ? password : "••••••••"
			}),
			/* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-6 px-1.5",
				type: "button",
				onClick: () => setShown((s) => !s),
				"aria-label": shown ? "Masquer le mot de passe" : "Afficher le mot de passe",
				children: shown ? /* @__PURE__ */ jsx(EyeOff, {}) : /* @__PURE__ */ jsx(Eye, {})
			}),
			loginUrl && /* @__PURE__ */ jsx("a", {
				href: toDisplayUrl(loginUrl),
				target: "_blank",
				rel: "noreferrer",
				className: "text-sm text-primary underline underline-offset-4 hover:text-primary/80",
				children: "Page de connexion"
			})
		]
	});
}
function WebsiteList() {
	const queryClient = useQueryClient();
	const listKey = convexQuery(api.websites.list, {}).queryKey;
	const { data } = useSuspenseQuery(convexQuery(api.websites.list, {}));
	const removeWebsite = useMutation(api.websites.remove);
	const handleDelete = async (id, name) => {
		if (!window.confirm(`Supprimer « ${name} » ?`)) return;
		await removeWebsite({ id });
		queryClient.invalidateQueries({ queryKey: listKey });
	};
	if (data.length === 0) return /* @__PURE__ */ jsx(Card, {
		className: "w-full",
		children: /* @__PURE__ */ jsxs(CardContent, {
			className: "flex flex-col items-center gap-2 py-10 text-center",
			children: [/* @__PURE__ */ jsx(Globe, { className: "size-8 text-muted-foreground" }), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: "Aucun site enregistré pour le moment. Cliquez sur «\xA0Ajouter un site\xA0» pour enregistrer votre premier site."
			})]
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: "flex w-full flex-col gap-3",
		children: data.map((website) => {
			const url = toDisplayUrl(website.url);
			const loginItems = [website.loginEmail && {
				icon: /* @__PURE__ */ jsx(Mail, { className: "size-3.5 shrink-0 text-muted-foreground" }),
				label: "Email",
				value: website.loginEmail
			}, website.loginUsername && {
				icon: /* @__PURE__ */ jsx(User, { className: "size-3.5 shrink-0 text-muted-foreground" }),
				label: "Identifiant",
				value: website.loginUsername
			}].filter(Boolean);
			return /* @__PURE__ */ jsxs(Card, {
				className: "w-full",
				children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "leading-snug font-semibold text-foreground",
								children: website.name
							}),
							/* @__PURE__ */ jsx("a", {
								href: url,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-0.5 inline-flex items-center gap-1 text-sm text-primary underline underline-offset-4 hover:text-primary/80",
								children: website.url
							}),
							website.description && /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: website.description
							})
						]
					}), /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-8 shrink-0 text-muted-foreground hover:text-destructive",
						type: "button",
						"aria-label": `Supprimer ${website.name}`,
						onClick: () => handleDelete(website._id, website.name),
						children: /* @__PURE__ */ jsx(Trash2, {})
					})]
				}) }), /* @__PURE__ */ jsxs(CardContent, {
					className: "flex flex-col gap-2",
					children: [website.notes && /* @__PURE__ */ jsx("p", {
						className: "whitespace-pre-wrap text-sm text-muted-foreground",
						children: website.notes
					}), website.loginPassword && /* @__PURE__ */ jsxs("ul", {
						className: "flex flex-col gap-1",
						children: [loginItems.map((item) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-2",
							children: [
								item.icon,
								/* @__PURE__ */ jsxs("span", {
									className: "text-sm",
									children: [item.label, "\xA0:"]
								}),
								/* @__PURE__ */ jsx("code", {
									className: "rounded bg-muted px-1.5 py-0.5 text-sm",
									children: item.value
								})
							]
						}, item.label)), /* @__PURE__ */ jsx(PasswordValue, {
							password: website.loginPassword,
							loginUrl: website.loginUrl
						})]
					})]
				})]
			}, website._id);
		})
	});
}
function WebsiteListSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex w-full flex-col gap-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex w-full flex-col gap-2 rounded-xl border border-input p-4",
			children: [
				/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-40" }),
				/* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-56" }),
				/* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-full" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex w-full flex-col gap-2 rounded-xl border border-input p-4",
			children: [
				/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-40" }),
				/* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-56" }),
				/* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-full" })
			]
		})]
	});
}
//#endregion
export { WebsiteListSkeleton as n, WebsiteList as t };
