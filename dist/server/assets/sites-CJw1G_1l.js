import { n as api } from "./router-BK58jg0D.js";
import { r as Button } from "./navbar-Dvw6nZUM.js";
import { a as CardDescription, c as CardTitle, i as CardContent, r as Card, s as CardHeader, t as Input } from "./input-DXaDnxNU.js";
import { n as Skeleton, t as AppShell } from "./app-shell-IPUggaEA.js";
import { a as FieldLabel, i as FieldGroup, r as FieldError, t as Field } from "./field-CfcU4ISW.js";
import { Suspense, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { useMutation } from "convex/react";
import { Eye, EyeOff, Globe, KeyRound, Mail, Trash2, User } from "lucide-react";
import { useForm } from "@tanstack/react-form";
//#region src/components/website-form.tsx
function FieldErrors({ errors }) {
	const messages = errors.map((error) => typeof error === "string" ? error : error.message ?? "").filter(Boolean);
	if (messages.length === 0) return null;
	return /* @__PURE__ */ jsx(FieldError, { children: messages.join(", ") });
}
function WebsiteForm() {
	const queryClient = useQueryClient();
	const listKey = convexQuery(api.websites.list, {}).queryKey;
	const addWebsite = useMutation(api.websites.add);
	const form = useForm({
		defaultValues: {
			name: "",
			url: "",
			description: "",
			notes: "",
			loginEmail: "",
			loginUsername: "",
			loginPassword: "",
			loginUrl: ""
		},
		validators: { onSubmit: () => void 0 },
		onSubmit: async ({ value, formApi }) => {
			try {
				await addWebsite({
					name: value.name.trim(),
					url: value.url.trim(),
					description: value.description.trim() || null,
					notes: value.notes.trim() || null,
					loginEmail: value.loginEmail.trim() || null,
					loginUsername: value.loginUsername.trim() || null,
					loginPassword: value.loginPassword || null,
					loginUrl: value.loginUrl.trim() || null
				});
				formApi.reset();
				queryClient.invalidateQueries({ queryKey: listKey });
			} catch (error) {
				formApi.setErrorMap({ onSubmit: error instanceof Error ? error.message : "Une erreur est survenue" });
			}
		}
	});
	return /* @__PURE__ */ jsxs(Card, {
		className: "w-full",
		children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, { children: "Nouveau site" }), /* @__PURE__ */ jsx(CardDescription, { children: "Enregistrez un site web et ses informations de connexion." })] }), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", {
			onSubmit: (e) => {
				e.preventDefault();
				form.handleSubmit();
			},
			children: /* @__PURE__ */ jsxs(FieldGroup, { children: [
				/* @__PURE__ */ jsx(form.Field, {
					name: "name",
					validators: { onChange: ({ value }) => !value.trim() ? "Le nom est requis" : value.trim().length > 120 ? "Le nom est trop long (120 caractères max)" : void 0 },
					children: (field) => /* @__PURE__ */ jsxs(Field, {
						"data-invalid": !field.state.meta.isValid,
						children: [
							/* @__PURE__ */ jsx(FieldLabel, {
								htmlFor: field.name,
								children: "Nom"
							}),
							/* @__PURE__ */ jsx(Input, {
								id: field.name,
								name: field.name,
								required: true,
								placeholder: "OpenAI",
								value: field.state.value,
								onBlur: field.handleBlur,
								onChange: (e) => field.handleChange(e.target.value),
								"aria-invalid": !field.state.meta.isValid
							}),
							/* @__PURE__ */ jsx(FieldErrors, { errors: field.state.meta.errors })
						]
					})
				}),
				/* @__PURE__ */ jsx(form.Field, {
					name: "url",
					validators: { onChange: ({ value }) => {
						if (!value.trim()) return "L'URL est requise";
						try {
							const protocol = new URL(value.trim().startsWith("http") ? value.trim() : `https://${value.trim()}`).protocol;
							if (protocol !== "http:" && protocol !== "https:") return "L'URL doit commencer par http(s)://";
						} catch {
							return "Saisissez une URL valide";
						}
					} },
					children: (field) => /* @__PURE__ */ jsxs(Field, {
						"data-invalid": !field.state.meta.isValid,
						children: [
							/* @__PURE__ */ jsx(FieldLabel, {
								htmlFor: field.name,
								children: "URL"
							}),
							/* @__PURE__ */ jsx(Input, {
								id: field.name,
								name: field.name,
								required: true,
								type: "url",
								placeholder: "https://openai.com",
								value: field.state.value,
								onBlur: field.handleBlur,
								onChange: (e) => field.handleChange(e.target.value),
								"aria-invalid": !field.state.meta.isValid
							}),
							/* @__PURE__ */ jsx(FieldErrors, { errors: field.state.meta.errors })
						]
					})
				}),
				/* @__PURE__ */ jsx(form.Field, {
					name: "description",
					children: (field) => /* @__PURE__ */ jsxs(Field, { children: [/* @__PURE__ */ jsx(FieldLabel, {
						htmlFor: field.name,
						children: "Description (optionnel)"
					}), /* @__PURE__ */ jsx(Input, {
						id: field.name,
						name: field.name,
						placeholder: "À quoi sert ce site ?",
						value: field.state.value,
						onBlur: field.handleBlur,
						onChange: (e) => field.handleChange(e.target.value)
					})] })
				}),
				/* @__PURE__ */ jsx(form.Field, {
					name: "notes",
					children: (field) => /* @__PURE__ */ jsxs(Field, { children: [/* @__PURE__ */ jsx(FieldLabel, {
						htmlFor: field.name,
						children: "Notes (optionnel)"
					}), /* @__PURE__ */ jsx("textarea", {
						id: field.name,
						name: field.name,
						rows: 3,
						placeholder: "Informations utiles à retenir…",
						className: "w-full min-w-0 resize-y rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30",
						value: field.state.value,
						onBlur: field.handleBlur,
						onChange: (e) => field.handleChange(e.target.value)
					})] })
				}),
				/* @__PURE__ */ jsxs("fieldset", {
					className: "flex flex-col gap-4 rounded-lg border border-border p-4",
					children: [/* @__PURE__ */ jsx("legend", {
						className: "px-1 text-sm font-medium text-foreground",
						children: "Connexion (optionnel)"
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ jsx(form.Field, {
								name: "loginEmail",
								children: (field) => /* @__PURE__ */ jsxs(Field, { children: [/* @__PURE__ */ jsx(FieldLabel, {
									htmlFor: field.name,
									children: "Email"
								}), /* @__PURE__ */ jsx(Input, {
									id: field.name,
									name: field.name,
									type: "email",
									placeholder: "jean@exemple.com",
									value: field.state.value,
									onBlur: field.handleBlur,
									onChange: (e) => field.handleChange(e.target.value)
								})] })
							}),
							/* @__PURE__ */ jsx(form.Field, {
								name: "loginUsername",
								children: (field) => /* @__PURE__ */ jsxs(Field, { children: [/* @__PURE__ */ jsx(FieldLabel, {
									htmlFor: field.name,
									children: "Identifiant"
								}), /* @__PURE__ */ jsx(Input, {
									id: field.name,
									name: field.name,
									placeholder: "jeandupont",
									value: field.state.value,
									onBlur: field.handleBlur,
									onChange: (e) => field.handleChange(e.target.value)
								})] })
							}),
							/* @__PURE__ */ jsx(form.Field, {
								name: "loginPassword",
								children: (field) => /* @__PURE__ */ jsxs(Field, { children: [/* @__PURE__ */ jsx(FieldLabel, {
									htmlFor: field.name,
									children: "Mot de passe"
								}), /* @__PURE__ */ jsx(Input, {
									id: field.name,
									name: field.name,
									type: "password",
									placeholder: "••••••••",
									value: field.state.value,
									onBlur: field.handleBlur,
									onChange: (e) => field.handleChange(e.target.value)
								})] })
							}),
							/* @__PURE__ */ jsx(form.Field, {
								name: "loginUrl",
								children: (field) => /* @__PURE__ */ jsxs(Field, { children: [/* @__PURE__ */ jsx(FieldLabel, {
									htmlFor: field.name,
									children: "URL de connexion"
								}), /* @__PURE__ */ jsx(Input, {
									id: field.name,
									name: field.name,
									type: "url",
									placeholder: "https://openai.com/login",
									value: field.state.value,
									onBlur: field.handleBlur,
									onChange: (e) => field.handleChange(e.target.value)
								})] })
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx(form.Subscribe, {
					selector: (state) => ({
						canSubmit: state.canSubmit,
						isSubmitting: state.isSubmitting,
						submitError: state.errorMap.onSubmit
					}),
					children: ({ canSubmit, isSubmitting, submitError }) => /* @__PURE__ */ jsxs(Fragment, { children: [submitError && /* @__PURE__ */ jsx(FieldError, { children: submitError }), /* @__PURE__ */ jsx(Button, {
						type: "submit",
						disabled: !canSubmit || isSubmitting,
						children: isSubmitting ? "Enregistrement…" : "Enregistrer le site"
					})] })
				})
			] })
		}) })]
	});
}
//#endregion
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
				children: "Aucun site enregistré pour le moment. Ajoutez votre premier site avec le formulaire ci-dessus."
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
//#region src/routes/sites.tsx?tsr-split=component
function SitesComponent() {
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
					children: "Sites enregistrés"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground",
					children: "Ajoutez et retrouvez les sites web que vous souhaitez garder sous la main."
				})]
			}),
			/* @__PURE__ */ jsx(WebsiteForm, {}),
			/* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx(WebsiteListSkeleton, {}),
				children: /* @__PURE__ */ jsx(WebsiteList, {})
			})
		]
	}) });
}
//#endregion
export { SitesComponent as component };
