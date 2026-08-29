import { n as AuthForm, t as AuthHeader } from "./auth-header-Bhpyyvfd.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/register.tsx?tsr-split=component
function RegisterComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col",
		children: [/* @__PURE__ */ jsx(AuthHeader, {}), /* @__PURE__ */ jsxs("main", {
			className: "flex flex-1 flex-col items-center justify-center gap-4 px-6",
			children: [/* @__PURE__ */ jsx(AuthForm, { mode: "signUp" }), /* @__PURE__ */ jsx(Link, {
				to: "/login",
				className: "text-sm text-neutral-400 hover:text-neutral-200",
				children: "Déjà un compte ? Se connecter"
			})]
		})]
	});
}
//#endregion
export { RegisterComponent as component };
