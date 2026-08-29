import { t as AuthForm } from "./auth-form-DY7eOKuo.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/register.tsx?tsr-split=component
function RegisterComponent() {
	return /* @__PURE__ */ jsxs("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-4 px-6",
		children: [/* @__PURE__ */ jsx(AuthForm, { mode: "signUp" }), /* @__PURE__ */ jsx(Link, {
			to: "/login",
			className: "text-sm text-neutral-400 hover:text-neutral-200",
			children: "Already have an account? Sign in"
		})]
	});
}
//#endregion
export { RegisterComponent as component };
