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
    description: "Development projects and repositories.",
    tags: ["Development", "Code"],
    initials: "GH",
    tone: "bg-neutral-700",
  },
  {
    name: "Notion",
    url: "notion.so",
    description: "Personal notes and project planning.",
    tags: ["Notes", "Planning"],
    initials: "NO",
    tone: "bg-neutral-600",
  },
  {
    name: "Figma",
    url: "figma.com",
    description: "Design files and prototypes.",
    tags: ["Design", "UI"],
    initials: "FG",
    tone: "bg-neutral-500",
  },
  {
    name: "LinkedIn",
    url: "linkedin.com",
    description: "Professional network and career information.",
    tags: ["Career", "Network"],
    initials: "LI",
    tone: "bg-neutral-800",
  },
  {
    name: "Stack Overflow",
    url: "stackoverflow.com",
    description: "Answers and solutions for coding problems.",
    tags: ["Reference", "Code"],
    initials: "SO",
    tone: "bg-neutral-600",
  },
  {
    name: "Spotify",
    url: "spotify.com",
    description: "Playlists, podcasts and personal music library.",
    tags: ["Music", "Media"],
    initials: "SP",
    tone: "bg-neutral-700",
  },
];

export const popularWebsites = mockWebsites.slice(0, 4);