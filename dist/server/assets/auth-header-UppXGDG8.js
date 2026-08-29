import { r as authClient } from "./router-Bii0rzs0.js";
import { i as cn, r as Button, t as Logo } from "./navbar-Dvw6nZUM.js";
import { a as CardDescription, c as CardTitle, i as CardContent, r as Card, s as CardHeader, t as Input } from "./input-DXaDnxNU.js";
import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { ArrowLeft } from "lucide-react";
import { useForm } from "@tanstack/react-form";
//#region src/components/ui/label.tsx
function Label({ className, ...props }) {
	return /* @__PURE__ */ jsx("label", {
		"data-slot": "label",
		className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
		...props
	});
}
//#endregion
//#region src/components/ui/field.tsx
function FieldGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "field-group",
		className: cn("group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4", className),
		...props
	});
}
var fieldVariants = cva("group/field flex w-full gap-2 data-[invalid=true]:text-destructive", {
	variants: { orientation: {
		vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
		horizontal: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
function Field({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"data-slot": "field",
		"data-orientation": orientation,
		className: cn(fieldVariants({ orientation }), className),
		...props
	});
}
function FieldLabel({ className, ...props }) {
	return /* @__PURE__ */ jsx(Label, {
		"data-slot": "field-label",
		className: cn("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 *:data-[slot=field]:p-2.5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col", className),
		...props
	});
}
function FieldDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("p", {
		"data-slot": "field-description",
		className: cn("text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className),
		...props
	});
}
function FieldError({ className, children, errors, ...props }) {
	const content = useMemo(() => {
		if (children) return children;
		if (!errors?.length) return null;
		const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];
		if (uniqueErrors.length == 1) return uniqueErrors[0]?.message;
		return /* @__PURE__ */ jsx("ul", {
			className: "ml-4 flex list-disc flex-col gap-1",
			children: uniqueErrors.map((error, index) => error?.message && /* @__PURE__ */ jsx("li", { children: error.message }, index))
		});
	}, [children, errors]);
	if (!content) return null;
	return /* @__PURE__ */ jsx("div", {
		role: "alert",
		"data-slot": "field-error",
		className: cn("text-sm font-normal text-destructive", className),
		...props,
		children: content
	});
}
//#endregion
//#region src/components/auth-form.tsx
function FieldErrors({ errors }) {
	const messages = errors.map((error) => typeof error === "string" ? error : error.message ?? "").filter(Boolean);
	if (messages.length === 0) return null;
	return /* @__PURE__ */ jsx(FieldError, { children: messages.join(", ") });
}
function AuthForm({ mode }) {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: ""
		},
		validators: { onSubmit: () => void 0 },
		onSubmit: async ({ value, formApi }) => {
			const res = mode === "signUp" ? await authClient.signUp.email(value) : await authClient.signIn.email({
				email: value.email,
				password: value.password
			});
			if (res.error) {
				formApi.setErrorMap({ onSubmit: res.error.message ?? "Une erreur est survenue" });
				return;
			}
			location.href = "/";
		}
	});
	return /* @__PURE__ */ jsxs(Card, {
		className: "w-full max-w-sm",
		children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, { children: mode === "signIn" ? "Se connecter" : "Créer un compte" }), /* @__PURE__ */ jsx(CardDescription, { children: mode === "signIn" ? "Saisissez votre email et votre mot de passe pour vous connecter." : "Remplissez les champs ci-dessous pour créer votre compte." })] }), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", {
			onSubmit: (e) => {
				e.preventDefault();
				form.handleSubmit();
			},
			children: /* @__PURE__ */ jsxs(FieldGroup, { children: [
				mode === "signUp" && /* @__PURE__ */ jsx(form.Field, {
					name: "name",
					validators: { onChange: ({ value }) => !value.trim() ? "Le nom est requis" : void 0 },
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
								placeholder: "Jean Dupont",
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
					name: "email",
					validators: { onChange: ({ value }) => !value.trim() ? "L'email est requis" : !/^\S+@\S+\.\S+$/.test(value) ? "Saisissez un email valide" : void 0 },
					children: (field) => /* @__PURE__ */ jsxs(Field, {
						"data-invalid": !field.state.meta.isValid,
						children: [
							/* @__PURE__ */ jsx(FieldLabel, {
								htmlFor: field.name,
								children: "Email"
							}),
							/* @__PURE__ */ jsx(Input, {
								id: field.name,
								name: field.name,
								type: "email",
								required: true,
								placeholder: "jean@exemple.com",
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
					name: "password",
					validators: { onChange: ({ value }) => !value ? "Le mot de passe est requis" : value.length < 8 ? "Le mot de passe doit contenir au moins 8 caractères" : void 0 },
					children: (field) => /* @__PURE__ */ jsxs(Field, {
						"data-invalid": !field.state.meta.isValid,
						children: [
							/* @__PURE__ */ jsx(FieldLabel, {
								htmlFor: field.name,
								children: "Mot de passe"
							}),
							/* @__PURE__ */ jsx(Input, {
								id: field.name,
								name: field.name,
								type: "password",
								required: true,
								minLength: 8,
								value: field.state.value,
								onBlur: field.handleBlur,
								onChange: (e) => field.handleChange(e.target.value),
								"aria-invalid": !field.state.meta.isValid
							}),
							mode === "signUp" && /* @__PURE__ */ jsx(FieldDescription, { children: "Au moins 8 caractères." }),
							/* @__PURE__ */ jsx(FieldErrors, { errors: field.state.meta.errors })
						]
					})
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
						children: isSubmitting ? "…" : mode === "signIn" ? "Se connecter" : "S'inscrire"
					})] })
				})
			] })
		}) })]
	});
}
//#endregion
//#region src/components/auth-header.tsx
function AuthHeader() {
	return /* @__PURE__ */ jsx("header", {
		className: "border-b border-neutral-800 bg-neutral-950/80 backdrop-blur",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6",
			children: [/* @__PURE__ */ jsx(Link, {
				to: "/landing",
				"aria-label": "Accueil TontaTranokala",
				children: /* @__PURE__ */ jsx(Logo, {})
			}), /* @__PURE__ */ jsxs(Link, {
				to: "/landing",
				className: "inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-foreground",
				children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }), "Accueil"]
			})]
		})
	});
}
//#endregion
export { AuthForm as n, AuthHeader as t };
