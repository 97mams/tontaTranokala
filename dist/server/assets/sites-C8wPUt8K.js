import { n as api } from "./router-BD2KnyJz.js";
import { t as AppShell } from "./app-shell-4b43-isD.js";
import { i as cn, r as Button } from "./navbar-Cyj_Tx2Y.js";
import { a as CardHeader, c as Input, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-Cb5TNtmM.js";
import { n as WebsiteListSkeleton, t as WebsiteList } from "./website-list-DIm0w8l9.js";
import { a as FieldLabel, i as FieldGroup, r as FieldError, t as Field } from "./field-DpCRw7r7.js";
import { Suspense, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useQueryClient } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { useMutation } from "convex/react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@base-ui/react/dialog";
import { useForm } from "@tanstack/react-form";
//#region src/components/ui/dialog.tsx
function Dialog$1({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		"data-slot": "dialog",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Portal, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Backdrop, {
		"data-slot": "dialog-overlay",
		className: cn("fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-starting-style:opacity-0 data-ending-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
	return /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(Dialog.Popup, {
		"data-slot": "dialog-content",
		className: cn("fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100%-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/10 transition duration-150 ease-in-out outline-none sm:max-w-lg data-starting-style:opacity-0 data-starting-style:scale-95 data-ending-style:opacity-0 data-ending-style:scale-95", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsxs(Dialog.Close, {
			"data-slot": "dialog-close",
			render: /* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				className: "absolute top-2 right-2",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ jsx(X, {}), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Fermer"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-2", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Title, {
		"data-slot": "dialog-title",
		className: cn("cn-font-heading text-base leading-none font-medium", className),
		...props
	});
}
//#endregion
//#region src/components/website-form.tsx
function FieldErrors({ errors }) {
	const messages = errors.map((error) => typeof error === "string" ? error : error.message ?? "").filter(Boolean);
	if (messages.length === 0) return null;
	return /* @__PURE__ */ jsx(FieldError, { children: messages.join(", ") });
}
function WebsiteForm({ onSubmitted }) {
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
				onSubmitted?.();
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
//#region src/routes/sites.tsx?tsr-split=component
function SitesComponent() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
						children: "Sites enregistrés"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground",
						children: "Retrouvez ici tous vos sites et leurs informations de connexion."
					})]
				}), /* @__PURE__ */ jsxs(Button, {
					className: "w-fit",
					onClick: () => setOpen(true),
					"aria-haspopup": "dialog",
					children: [/* @__PURE__ */ jsx(Plus, {}), "Ajouter un site"]
				})]
			}),
			/* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx(WebsiteListSkeleton, {}),
				children: /* @__PURE__ */ jsx(WebsiteList, {})
			}),
			/* @__PURE__ */ jsx(Dialog$1, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, {
					className: "sr-only",
					children: "Ajouter un site"
				}) }), /* @__PURE__ */ jsx(WebsiteForm, { onSubmitted: () => setOpen(false) })] })
			})
		]
	}) });
}
//#endregion
export { SitesComponent as component };
