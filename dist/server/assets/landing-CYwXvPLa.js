import { i as cn, n as Navbar, r as Button, t as Logo } from "./navbar-DZYvC_3D.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Bookmark, CircleCheck, Clock, Folder, FolderCheck, FolderClosed, FolderOpen, History, MousePointerClick, NotepadText, Pencil, Plus, Search, Sparkles, StickyNote } from "lucide-react";
//#region src/components/landing/website-card.tsx
function WebsiteCard({ website, className }) {
	return /* @__PURE__ */ jsxs("article", {
		className: cn("flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900/80 p-3.5 transition-colors hover:border-neutral-700", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: cn("flex size-9 shrink-0 items-center justify-center rounded-lg text-xs font-semibold text-neutral-100", website.tone),
				children: website.initials
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "truncate text-sm font-medium text-neutral-100",
							children: website.name
						}), /* @__PURE__ */ jsx("span", {
							className: "text-xs text-neutral-500",
							children: website.url
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-0.5 truncate text-xs text-neutral-400",
						children: website.description
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-2 flex flex-wrap gap-1.5",
						children: website.tags.map((tag) => /* @__PURE__ */ jsx("span", {
							className: "rounded-md border border-neutral-800 bg-neutral-800/50 px-1.5 py-0.5 text-[0.6875rem] text-neutral-400",
							children: tag
						}, tag))
					})
				]
			}),
			/* @__PURE__ */ jsx(Bookmark, { className: "mt-0.5 size-3.5 shrink-0 text-neutral-600" })
		]
	});
}
//#endregion
//#region src/components/landing/mock-data.ts
var mockWebsites = [
	{
		name: "GitHub",
		url: "github.com",
		description: "Projets de développement et dépôts.",
		tags: ["Développement", "Code"],
		initials: "GH",
		tone: "bg-neutral-700"
	},
	{
		name: "Notion",
		url: "notion.so",
		description: "Notes personnelles et planification de projets.",
		tags: ["Notes", "Planification"],
		initials: "NO",
		tone: "bg-neutral-600"
	},
	{
		name: "Figma",
		url: "figma.com",
		description: "Fichiers de design et prototypes.",
		tags: ["Design", "UI"],
		initials: "FG",
		tone: "bg-neutral-500"
	},
	{
		name: "LinkedIn",
		url: "linkedin.com",
		description: "Réseau professionnel et informations de carrière.",
		tags: ["Carrière", "Réseau"],
		initials: "LI",
		tone: "bg-neutral-800"
	},
	{
		name: "Stack Overflow",
		url: "stackoverflow.com",
		description: "Réponses et solutions pour les problèmes de code.",
		tags: ["Référence", "Code"],
		initials: "SO",
		tone: "bg-neutral-600"
	},
	{
		name: "Spotify",
		url: "spotify.com",
		description: "Playlists, podcasts et bibliothèque musicale.",
		tags: ["Musique", "Médias"],
		initials: "SP",
		tone: "bg-neutral-700"
	}
];
var popularWebsites = mockWebsites.slice(0, 4);
//#endregion
//#region src/components/landing/hero.tsx
function HeroVisual() {
	return /* @__PURE__ */ jsxs("div", {
		"aria-hidden": "true",
		className: "relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-2xl shadow-black/40",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1.5 border-b border-neutral-800 px-4 py-3",
			children: [
				/* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-neutral-700" }),
				/* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-neutral-700" }),
				/* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-neutral-700" }),
				/* @__PURE__ */ jsx("span", {
					className: "ml-3 hidden rounded-md border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-xs text-neutral-500 sm:block",
					children: "app.tontatranokala.com"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-3 p-4 sm:p-5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm font-medium text-foreground",
						children: "Sites enregistrés"
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-xs text-neutral-500",
						children: [popularWebsites.length, " de vos liens importants"]
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-neutral-500" }), /* @__PURE__ */ jsx("div", {
							className: "h-8 w-full rounded-lg border border-neutral-800 bg-neutral-950/60 pl-8 pr-3 text-left text-sm text-neutral-500 sm:w-52",
							children: "Rechercher…"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: popularWebsites.map((website) => /* @__PURE__ */ jsx(WebsiteCard, { website }, website.url))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-center rounded-xl border border-dashed border-neutral-800 py-2.5 text-xs text-neutral-500",
					children: [/* @__PURE__ */ jsx(Plus, { className: "mr-1.5 size-3.5" }), "Ajouter un autre site"]
				})
			]
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "home",
		className: "relative scroll-mt-16 overflow-hidden border-b border-neutral-800",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: "absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-20 sm:py-28",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center gap-5 text-center",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-300",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-3.5 text-neutral-400" }), "Votre organisateur de sites web personnel"]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "max-w-3xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl",
						children: "Gardez vos sites importants au même endroit."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "max-w-xl text-balance text-base text-neutral-400 sm:text-lg",
						children: "Enregistrez les sites sur lesquels vous comptez, stockez les informations qui comptent et retrouvez tout en quelques secondes."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-3 pt-2 sm:flex-row",
						children: [/* @__PURE__ */ jsxs(Button, {
							size: "lg",
							className: "gap-2 px-6",
							render: /* @__PURE__ */ jsx(Link, { to: "/register" }),
							children: ["Commencer", /* @__PURE__ */ jsx(ArrowRight, { "data-icon": "inline-end" })]
						}), /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "lg",
							className: "px-6",
							render: /* @__PURE__ */ jsx("a", { href: "#how-it-works" }),
							children: "En savoir plus"
						})]
					})
				]
			}), /* @__PURE__ */ jsx(HeroVisual, {})]
		})]
	});
}
//#endregion
//#region src/components/landing/problem.tsx
var problems = [
	"Les adresses importantes finissent par être oubliées",
	"Les sites utiles se perdent dans l'historique du navigateur",
	"Les informations sont dispersées un peu partout",
	"Vous perdez du temps à chercher le bon lien"
];
function Problem() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-neutral-800",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-6xl px-6 py-20 sm:py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-2xl flex-col items-center gap-4 text-center",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-3xl font-bold tracking-tight text-balance sm:text-4xl",
					children: "Trop de sites. Trop d'informations éparpillées."
				}), /* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground",
					children: "Vous utilisez des dizaines de sites chaque jour. Sans organisation, l'essentiel se perd et devient difficile à retrouver."
				})]
			}), /* @__PURE__ */ jsx("ul", {
				className: "mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2",
				children: problems.map((problem) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4",
					children: [/* @__PURE__ */ jsx(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-neutral-500" }), /* @__PURE__ */ jsx("span", {
						className: "text-sm text-neutral-300",
						children: problem
					})]
				}, problem))
			})]
		})
	});
}
//#endregion
//#region src/components/landing/solution.tsx
var points = [
	{
		icon: Folder,
		title: "Centralisé",
		description: "Tous vos sites importants vivent au même endroit."
	},
	{
		icon: NotepadText,
		title: "Avec ses informations",
		description: "Notes et détails restent attachés au site."
	},
	{
		icon: Search,
		title: "Accessible instantanément",
		description: "Recherchez et retrouvez tout en quelques secondes."
	}
];
function Solution() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-neutral-800",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-start gap-5",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-bold tracking-tight text-balance sm:text-4xl",
						children: "Tout ce qui compte, organisé en un seul endroit."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "max-w-md text-muted-foreground",
						children: "TontaTranokala garde vos sites et les informations associées ensemble, pour que rien ne se perde dans la masse des favoris."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "flex flex-col gap-4",
						children: points.map((point) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900",
								children: /* @__PURE__ */ jsx(point.icon, { className: "size-4 text-neutral-300" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm font-medium text-foreground",
								children: point.title
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-neutral-400",
								children: point.description
							})] })]
						}, point.title))
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ jsx(WebsiteCard, { website: mockWebsites[0] }),
					/* @__PURE__ */ jsxs("div", {
						className: "ml-6 rounded-xl border border-neutral-800 bg-neutral-900/80 p-3.5 sm:ml-10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(NotepadText, { className: "size-3.5 text-neutral-500" }), /* @__PURE__ */ jsx("p", {
								className: "text-xs font-medium text-neutral-300",
								children: "Notes"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1.5 text-xs leading-relaxed text-neutral-400",
							children: "Consulté chaque semaine — notes de réunion, liens du dépôt et historique de déploiement pour le sprint en cours."
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "ml-12 sm:ml-20",
						children: /* @__PURE__ */ jsx(WebsiteCard, { website: mockWebsites[1] })
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/landing/features.tsx
var features = [
	{
		icon: Bookmark,
		title: "Enregistrer les sites importants",
		description: "Enregistrez des adresses avec toutes les informations utiles."
	},
	{
		icon: Folder,
		title: "Organiser vos sites",
		description: "Gardez vos sites enregistrés organisés et faciles d'accès."
	},
	{
		icon: NotepadText,
		title: "Stocker les informations associées",
		description: "Gardez des notes utiles associées à chaque site."
	},
	{
		icon: Search,
		title: "Rechercher rapidement",
		description: "Retrouvez vos sites sans fouiller dans l'historique."
	},
	{
		icon: Pencil,
		title: "Modifier à tout moment",
		description: "Mettez à jour les informations quand vous le souhaitez."
	},
	{
		icon: History,
		title: "Conserver votre historique",
		description: "Accédez à vos sites et informations déjà enregistrés."
	}
];
function Features() {
	return /* @__PURE__ */ jsx("section", {
		id: "features",
		className: "scroll-mt-16 border-b border-neutral-800",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-6xl px-6 py-20 sm:py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-2xl flex-col items-center gap-4 text-center",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-3xl font-bold tracking-tight text-balance sm:text-4xl",
					children: "Tout ce qu'il faut pour rester organisé"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground",
					children: "Des outils simples pour enregistrer et retrouver vos sites sans effort."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: features.map((feature) => /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700 hover:bg-neutral-900",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "flex size-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900",
							children: /* @__PURE__ */ jsx(feature.icon, { className: "size-4 text-primary" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-semibold text-foreground",
							children: feature.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm leading-relaxed text-neutral-400",
							children: feature.description
						})
					]
				}, feature.title))
			})]
		})
	});
}
//#endregion
//#region src/components/landing/how-it-works.tsx
var steps = [
	{
		icon: Plus,
		step: "Étape 1",
		title: "Enregistrez",
		description: "Ajoutez un site et ses informations importantes en un clic."
	},
	{
		icon: FolderOpen,
		step: "Étape 2",
		title: "Organisez",
		description: "Gardez vos sites et informations dans un endroit centralisé."
	},
	{
		icon: MousePointerClick,
		step: "Étape 3",
		title: "Accédez",
		description: "Retrouvez vos informations dès que vous en avez besoin."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ jsx("section", {
		id: "how-it-works",
		className: "scroll-mt-16 border-b border-neutral-800",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-6xl px-6 py-20 sm:py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-2xl flex-col items-center gap-4 text-center",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-3xl font-bold tracking-tight text-balance sm:text-4xl",
					children: "Comment ça marche"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground",
					children: "Commencez en trois étapes simples."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-4 md:grid-cols-3",
				children: steps.map((item) => /* @__PURE__ */ jsxs("div", {
					className: "relative flex flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "flex size-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900",
								children: /* @__PURE__ */ jsx(item.icon, { className: "size-4 text-primary" })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-xs font-medium tracking-wide text-neutral-500 uppercase",
								children: item.step
							})]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-semibold text-foreground",
							children: item.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm leading-relaxed text-neutral-400",
							children: item.description
						})
					]
				}, item.title))
			})]
		})
	});
}
//#endregion
//#region src/components/landing/product-preview.tsx
var sidebarItems = [
	{
		icon: Bookmark,
		label: "Tous les sites",
		active: true
	},
	{
		icon: FolderClosed,
		label: "Collections"
	},
	{
		icon: NotepadText,
		label: "Notes"
	},
	{
		icon: History,
		label: "Historique"
	}
];
function ProductPreview() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-neutral-800",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-6xl px-6 py-20 sm:py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-2xl flex-col items-center gap-4 text-center",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-3xl font-bold tracking-tight text-balance sm:text-4xl",
					children: "Votre univers numérique en un coup d'œil"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground",
					children: "Un espace de travail clair pour les sites et informations dont vous dépendez."
				})]
			}), /* @__PURE__ */ jsxs("div", {
				"aria-hidden": "true",
				className: "mt-12 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-2xl shadow-black/40",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 border-b border-neutral-800 px-4 py-3",
					children: [
						/* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-neutral-700" }),
						/* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-neutral-700" }),
						/* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-neutral-700" }),
						/* @__PURE__ */ jsx("span", {
							className: "ml-3 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-xs text-neutral-500",
							children: "app.tontatranokala.com"
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex",
					children: [/* @__PURE__ */ jsx("div", {
						className: "hidden w-52 shrink-0 flex-col gap-1 border-r border-neutral-800 p-4 lg:flex",
						children: sidebarItems.map((item) => /* @__PURE__ */ jsxs("span", {
							className: item.active ? "flex items-center gap-2.5 rounded-lg bg-neutral-800/70 px-3 py-2 text-sm text-foreground" : "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-neutral-400",
							children: [/* @__PURE__ */ jsx(item.icon, { className: "size-4" }), item.label]
						}, item.label))
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1 p-4 sm:p-5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative mb-4",
							children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-500" }), /* @__PURE__ */ jsx("div", {
								className: "h-9 w-full rounded-lg border border-neutral-800 bg-neutral-950/60 pl-9 pr-3 text-left text-sm text-neutral-500",
								children: "Rechercher des sites…"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
							children: mockWebsites.map((website) => /* @__PURE__ */ jsx(WebsiteCard, { website }, website.url))
						})]
					})]
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/landing/benefits.tsx
var benefits = [
	{
		icon: FolderCheck,
		title: "Rester organisé",
		description: "Gardez vos sites importants dans un endroit centralisé."
	},
	{
		icon: Clock,
		title: "Gagner du temps",
		description: "Retrouvez vos sites instantanément au lieu de fouiller l'historique."
	},
	{
		icon: StickyNote,
		title: "Tout garder ensemble",
		description: "Stockez les détails utiles à côté des sites concernés."
	},
	{
		icon: MousePointerClick,
		title: "Accéder facilement",
		description: "Retrouvez vos sites importants quand vous en avez besoin."
	}
];
function Benefits() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-neutral-800",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-6xl px-6 py-20 sm:py-24",
			children: [/* @__PURE__ */ jsx("div", {
				className: "mx-auto flex max-w-2xl flex-col items-center gap-4 text-center",
				children: /* @__PURE__ */ jsx("h2", {
					className: "text-3xl font-bold tracking-tight text-balance sm:text-4xl",
					children: "Conçu pour vous simplifier la vie"
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: benefits.map((benefit) => /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "flex size-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900",
							children: /* @__PURE__ */ jsx(benefit.icon, { className: "size-4 text-primary" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-semibold text-foreground",
							children: benefit.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm leading-relaxed text-neutral-400",
							children: benefit.description
						})
					]
				}, benefit.title))
			})]
		})
	});
}
//#endregion
//#region src/components/landing/cta.tsx
function Cta() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-neutral-800",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-6xl px-6 py-20 sm:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 px-6 py-14 text-center sm:px-12",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl",
						children: "Commencez à organiser votre vie numérique dès aujourd'hui."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "max-w-md text-balance text-muted-foreground",
						children: "Gardez vos sites et informations importants organisés et faciles d'accès."
					}),
					/* @__PURE__ */ jsxs(Button, {
						size: "lg",
						className: "mt-4 gap-2 px-6",
						render: /* @__PURE__ */ jsx(Link, { to: "/register" }),
						children: ["Commencer gratuitement", /* @__PURE__ */ jsx(ArrowRight, { "data-icon": "inline-end" })]
					})
				]
			})
		})
	});
}
//#endregion
//#region src/components/landing/footer.tsx
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
var accountLinks = [{
	label: "Se connecter",
	to: "/login"
}, {
	label: "Créer un compte",
	to: "/register"
}];
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-6xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex max-w-xs flex-col gap-3",
					children: [/* @__PURE__ */ jsx(Logo, {}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-neutral-500",
						children: "Enregistrez, organisez et retrouvez rapidement les sites qui comptent pour vous."
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm font-medium text-foreground",
							children: "Produit"
						}), navLinks.map((link) => /* @__PURE__ */ jsx("a", {
							href: link.href,
							className: "text-sm text-neutral-500 transition-colors hover:text-foreground",
							children: link.label
						}, link.href))]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm font-medium text-foreground",
							children: "Compte"
						}), accountLinks.map((link) => /* @__PURE__ */ jsx(Link, {
							to: link.to,
							className: "text-sm text-neutral-500 transition-colors hover:text-foreground",
							children: link.label
						}, link.to))]
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-10 border-t border-neutral-800 pt-6 text-sm text-neutral-600",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" TontaTranokala. Tous droits réservés."
				]
			})]
		})
	});
}
//#endregion
//#region src/routes/landing.tsx?tsr-split=component
function LandingComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col overflow-x-hidden",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ jsx(Hero, {}),
					/* @__PURE__ */ jsx(Problem, {}),
					/* @__PURE__ */ jsx(Solution, {}),
					/* @__PURE__ */ jsx(ProductPreview, {}),
					/* @__PURE__ */ jsx(Features, {}),
					/* @__PURE__ */ jsx(HowItWorks, {}),
					/* @__PURE__ */ jsx(Benefits, {}),
					/* @__PURE__ */ jsx(Cta, {})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { LandingComponent as component };
