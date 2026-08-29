import { r as authClient } from "./router-CtdkhaJ7.js";
import { r as Button, t as Logo } from "./navbar-DZYvC_3D.js";
import { a as CardHeader, c as Input, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-DBbE6TN0.js";
import { a as FieldLabel, i as FieldGroup, n as FieldDescription, r as FieldError, t as Field } from "./field-xud54hxL.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft } from "lucide-react";
import { useForm } from "@tanstack/react-form";
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
