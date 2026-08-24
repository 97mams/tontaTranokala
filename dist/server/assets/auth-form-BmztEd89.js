import { r as authClient } from "./router-P2Yu57Gc.js";
import { n as cn, t as Button } from "./button-BWUHUpVr.js";
import { i as CardDescription, n as Card, o as CardHeader, r as CardContent, s as CardTitle } from "./separator-PT59Qpo1.js";
import { useMemo } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { useForm } from "@tanstack/react-form";
import { Input } from "@base-ui/react/input";
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
//#region src/components/ui/input.tsx
function Input$1({ className, type, ...props }) {
	return /* @__PURE__ */ jsx(Input, {
		type,
		"data-slot": "input",
		className: cn("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
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
				formApi.setErrorMap({ onSubmit: res.error.message ?? "Something went wrong" });
				return;
			}
			location.href = "/";
		}
	});
	return /* @__PURE__ */ jsxs(Card, {
		className: "w-full max-w-sm",
		children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, { children: mode === "signIn" ? "Sign in" : "Create account" }), /* @__PURE__ */ jsx(CardDescription, { children: mode === "signIn" ? "Enter your email and password to sign in." : "Fill in the fields below to create your account." })] }), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", {
			onSubmit: (e) => {
				e.preventDefault();
				form.handleSubmit();
			},
			children: /* @__PURE__ */ jsxs(FieldGroup, { children: [
				mode === "signUp" && /* @__PURE__ */ jsx(form.Field, {
					name: "name",
					validators: { onChange: ({ value }) => !value.trim() ? "Name is required" : void 0 },
					children: (field) => /* @__PURE__ */ jsxs(Field, {
						"data-invalid": !field.state.meta.isValid,
						children: [
							/* @__PURE__ */ jsx(FieldLabel, {
								htmlFor: field.name,
								children: "Name"
							}),
							/* @__PURE__ */ jsx(Input$1, {
								id: field.name,
								name: field.name,
								required: true,
								placeholder: "Jane Doe",
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
					validators: { onChange: ({ value }) => !value.trim() ? "Email is required" : !/^\S+@\S+\.\S+$/.test(value) ? "Enter a valid email" : void 0 },
					children: (field) => /* @__PURE__ */ jsxs(Field, {
						"data-invalid": !field.state.meta.isValid,
						children: [
							/* @__PURE__ */ jsx(FieldLabel, {
								htmlFor: field.name,
								children: "Email"
							}),
							/* @__PURE__ */ jsx(Input$1, {
								id: field.name,
								name: field.name,
								type: "email",
								required: true,
								placeholder: "jane@example.com",
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
					validators: { onChange: ({ value }) => !value ? "Password is required" : value.length < 8 ? "Password must be at least 8 characters" : void 0 },
					children: (field) => /* @__PURE__ */ jsxs(Field, {
						"data-invalid": !field.state.meta.isValid,
						children: [
							/* @__PURE__ */ jsx(FieldLabel, {
								htmlFor: field.name,
								children: "Password"
							}),
							/* @__PURE__ */ jsx(Input$1, {
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
							mode === "signUp" && /* @__PURE__ */ jsx(FieldDescription, { children: "At least 8 characters." }),
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
						children: isSubmitting ? "…" : mode === "signIn" ? "Sign in" : "Sign up"
					})] })
				})
			] })
		}) })]
	});
}
//#endregion
export { AuthForm as t };
