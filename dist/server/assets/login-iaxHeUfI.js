import { n as AuthForm, t as AuthHeader } from "./auth-header-Bhpyyvfd.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/login.tsx?tsr-split=component
function LoginComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col",
		children: [/* @__PURE__ */ jsx(AuthHeader, {}), /* @__PURE__ */ jsxs("main", {
			className: "flex flex-1 flex-col items-center justify-center gap-4 px-6",
			children: [/* @__PURE__ */ jsx(AuthForm, { mode: "signIn" }), /* @__PURE__ */ jsx(Link, {
				to: "/register",
				className: "text-sm text-neutral-400 hover:text-neutral-200",
				children: "Pas encore de compte ? Créer un compte"
			})]
		})]
	});
}
//#endregion
export { LoginComponent as component };
