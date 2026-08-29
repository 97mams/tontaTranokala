import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { Bookmark, Menu, X } from "lucide-react";
import { Button } from "@base-ui/react/button";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button$1({ className, variant = "default", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region src/components/landing/navbar.tsx
var navLinks = [
	{
		label: "Accueil",
		href: "#home"
	},
	{
		label: "Fonctionnalités",
		href: "#features"
	},
	{
		label: "Comment ça marche",
		href: "#how-it-works"
	}
];
function Logo({ className, hideText = false }) {
	return /* @__PURE__ */ jsxs("span", {
		className: cn("flex items-center gap-2", className),
		children: [/* @__PURE__ */ jsx("span", {
			className: "flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground",
			children: /* @__PURE__ */ jsx(Bookmark, { className: "size-4" })
		}), !hideText && /* @__PURE__ */ jsx("span", {
			className: "text-sm font-semibold tracking-tight text-foreground",
			children: "TontaTranokala"
		})]
	});
}
function Navbar() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur",
		children: [/* @__PURE__ */ jsxs("nav", {
			"aria-label": "Navigation principale",
			className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/landing",
					"aria-label": "Accueil TontaTranokala",
					children: /* @__PURE__ */ jsx(Logo, {})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden items-center gap-1 md:flex",
					children: navLinks.map((link) => /* @__PURE__ */ jsx("a", {
						href: link.href,
						className: "rounded-lg px-3 py-2 text-sm text-neutral-400 transition-colors hover:text-foreground",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden items-center gap-2 md:flex",
					children: [/* @__PURE__ */ jsx(Button$1, {
						variant: "ghost",
						size: "sm",
						render: /* @__PURE__ */ jsx(Link, { to: "/login" }),
						children: "Se connecter"
					}), /* @__PURE__ */ jsx(Button$1, {
						size: "sm",
						render: /* @__PURE__ */ jsx(Link, { to: "/register" }),
						children: "Commencer"
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-label": open ? "Fermer le menu" : "Ouvrir le menu",
					"aria-expanded": open,
					"aria-controls": "mobile-menu",
					onClick: () => setOpen((value) => !value),
					className: "flex size-9 items-center justify-center rounded-lg border border-neutral-800 text-neutral-300 transition-colors hover:bg-neutral-900 md:hidden",
					children: open ? /* @__PURE__ */ jsx(X, { className: "size-4" }) : /* @__PURE__ */ jsx(Menu, { className: "size-4" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			id: "mobile-menu",
			className: "border-t border-neutral-800 bg-neutral-950/95 px-6 py-4 md:hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-1",
				children: [
					navLinks.map((link) => /* @__PURE__ */ jsx("a", {
						href: link.href,
						onClick: () => setOpen(false),
						className: "rounded-lg px-3 py-2.5 text-sm text-neutral-300 transition-colors hover:bg-neutral-900 hover:text-foreground",
						children: link.label
					}, link.href)),
					/* @__PURE__ */ jsx("div", { className: "my-2 border-t border-neutral-800" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-2 px-3",
						children: [/* @__PURE__ */ jsx(Button$1, {
							variant: "outline",
							className: "w-full",
							render: /* @__PURE__ */ jsx(Link, { to: "/login" }),
							children: "Se connecter"
						}), /* @__PURE__ */ jsx(Button$1, {
							className: "w-full",
							render: /* @__PURE__ */ jsx(Link, { to: "/register" }),
							children: "Commencer"
						})]
					})
				]
			})
		})]
	});
}
//#endregion
export { cn as i, Navbar as n, Button$1 as r, Logo as t };
