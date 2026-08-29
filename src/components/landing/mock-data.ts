export interface MockWebsite {
  name: string;
  url: string;
  description: string;
  tags: string[];
  initials: string;
  tone: string;
}

export const mockWebsites: MockWebsite[] = [
  {
    name: "GitHub",
    url: "github.com",
    description: "Projets de développement et dépôts.",
    tags: ["Développement", "Code"],
    initials: "GH",
    tone: "bg-neutral-700",
  },
  {
    name: "Notion",
    url: "notion.so",
    description: "Notes personnelles et planification de projets.",
    tags: ["Notes", "Planification"],
    initials: "NO",
    tone: "bg-neutral-600",
  },
  {
    name: "Figma",
    url: "figma.com",
    description: "Fichiers de design et prototypes.",
    tags: ["Design", "UI"],
    initials: "FG",
    tone: "bg-neutral-500",
  },
  {
    name: "LinkedIn",
    url: "linkedin.com",
    description: "Réseau professionnel et informations de carrière.",
    tags: ["Carrière", "Réseau"],
    initials: "LI",
    tone: "bg-neutral-800",
  },
  {
    name: "Stack Overflow",
    url: "stackoverflow.com",
    description: "Réponses et solutions pour les problèmes de code.",
    tags: ["Référence", "Code"],
    initials: "SO",
    tone: "bg-neutral-600",
  },
  {
    name: "Spotify",
    url: "spotify.com",
    description: "Playlists, podcasts et bibliothèque musicale.",
    tags: ["Musique", "Médias"],
    initials: "SP",
    tone: "bg-neutral-700",
  },
];

export const popularWebsites = mockWebsites.slice(0, 4);