import { t as Button } from "./button-BWUHUpVr.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Gauge, ShieldCheck, Sparkles, Zap } from "lucide-react";
//#region src/routes/landing.tsx?tsr-split=component
var features = [
	{
		icon: Zap,
		title: "Lightning fast",
		description: "Built on TanStack Start with SSR and streaming for instant page loads."
	},
	{
		icon: ShieldCheck,
		title: "Secure by default",
		description: "Authentication powered by Better Auth with sessions stored in Convex."
	},
	{
		icon: Gauge,
		title: "Realtime backend",
		description: "Convex gives you a reactive database without writing any server code."
	}
];
function LandingComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ jsx("header", {
				className: "sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/landing",
						className: "text-lg font-bold tracking-tight",
						children: "Ndao"
					}), /* @__PURE__ */ jsxs("nav", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							render: /* @__PURE__ */ jsx(Link, { to: "/login" }),
							children: "Sign in"
						}), /* @__PURE__ */ jsx(Button, {
							size: "sm",
							render: /* @__PURE__ */ jsx(Link, { to: "/register" }),
							children: "Get started"
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ jsxs("section", {
						className: "mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-300",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-3.5" }), "Now in early access"]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl",
								children: [
									"Ship your next idea",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-primary",
										children: "in record time"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "max-w-xl text-balance text-neutral-400",
								children: "A modern full-stack starter with type-safe routing, realtime data and authentication baked in. Focus on your product, not the glue."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center justify-center gap-3",
								children: [/* @__PURE__ */ jsxs(Button, {
									size: "lg",
									render: /* @__PURE__ */ jsx(Link, { to: "/register" }),
									children: ["Create an account", /* @__PURE__ */ jsx(ArrowRight, {})]
								}), /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "lg",
									render: /* @__PURE__ */ jsx(Link, { to: "/login" }),
									children: "Sign in"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsx("section", {
						className: "mx-auto grid w-full max-w-5xl gap-6 px-6 pb-24 sm:grid-cols-3",
						children: features.map((feature) => /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-6",
							children: [
								/* @__PURE__ */ jsx(feature.icon, { className: "size-5 text-primary" }),
								/* @__PURE__ */ jsx("h2", {
									className: "font-semibold",
									children: feature.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-neutral-400",
									children: feature.description
								})
							]
						}, feature.title))
					}),
					/* @__PURE__ */ jsx("section", {
						className: "border-t border-neutral-800 bg-neutral-900/50",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-20 text-center",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "text-2xl font-bold tracking-tight sm:text-3xl",
									children: "Ready to get started?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "max-w-md text-neutral-400",
									children: "Join today and see how fast you can go from zero to production."
								}),
								/* @__PURE__ */ jsxs(Button, {
									size: "lg",
									render: /* @__PURE__ */ jsx(Link, { to: "/register" }),
									children: ["Get started free", /* @__PURE__ */ jsx(ArrowRight, {})]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t border-neutral-800 py-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto w-full max-w-5xl px-6 text-sm text-neutral-500",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Ndao. All rights reserved."
					]
				})
			})
		]
	});
}
//#endregion
export { LandingComponent as component };
