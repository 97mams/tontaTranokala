# TontaTranokala — Landing Page Skill

## Role

You are working on the TontaTranokala project.

Your primary task is to design and implement a modern, polished, responsive landing page while preserving the existing application architecture.

The project already contains a working authentication system and backend infrastructure.

DO NOT rebuild the authentication system unless explicitly requested.

---

# 1. Project Context

Project name: TontaTranokala

Current stack:

- TanStack Start
- TanStack Router
- React
- TypeScript
- Convex
- Better Auth
- @convex-dev/better-auth
- @convex-dev/react-query
- TanStack Query
- Tailwind CSS
- shadcn/ui
- Sonner
- pnpm
- Hyprland/Linux development environment

The project already has:

- authentication
- Convex integration
- Better Auth integration
- application routing

The existing authentication architecture must be considered stable unless the user explicitly asks to modify it.

---

# 2. Main Objective

Build a professional landing page for TontaTranokala.

The landing page should:

- clearly explain what TontaTranokala does
- immediately communicate its main value proposition
- have a strong hero section
- provide clear calls to action
- explain the main features
- build trust
- be responsive
- work well on mobile, tablet and desktop
- support light/dark mode
- use the existing design system
- feel like a real production application rather than a template

Avoid generic AI-generated landing page designs.

The design should have a coherent visual identity.

---

# 3. Before Writing Code

Before modifying anything:

1. Inspect the repository structure.
2. Inspect package.json.
3. Inspect the existing route structure.
4. Inspect the existing __root.tsx.
5. Inspect existing Header and Footer components.
6. Inspect existing shadcn/ui components.
7. Inspect the existing theme configuration.
8. Inspect existing authentication routes.
9. Identify the current public route used for the landing page.
10. Reuse existing components whenever possible.

Do not blindly create new components.

---

# 4. Authentication Rules

Authentication already exists.

DO NOT:

- replace Better Auth
- replace Convex
- introduce another authentication library
- create another auth provider
- modify Convex authentication configuration
- create duplicate user tables
- mix @convex-dev/auth with @convex-dev/better-auth

The project uses:

@convex-dev/better-auth

The client authentication is based on:

better-auth/react

and:

@convex-dev/better-auth/client/plugins

Do not change this architecture for a landing page.

---

# 5. Convex Rules

Convex is already integrated.

Do not create new Convex mutations, queries or schemas unless the landing page genuinely requires backend functionality.

A static landing page should preferably require ZERO new Convex functions.

Do not modify:

- convex.config.ts
- Better Auth configuration
- auth.ts
- auth.config.ts

unless explicitly required.

---

# 6. Routing

Use TanStack Router conventions.

Before creating a route:

- inspect the existing routes
- determine whether the required route already exists
- avoid duplicate routes

The landing page should normally be a public route.

Do not introduce React Router.

Do not use Next.js routing APIs.

Do not use React Router APIs.

Use TanStack Router only.

---

# 7. UI Architecture

Prefer small reusable React components.

Recommended structure:

src/
├── components/
│   ├── landing/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── CTA.tsx
│   │   └── ...
│   ├── Header.tsx
│   └── Footer.tsx
└── routes/
    └── ...

Do not put the entire landing page into one huge component.

Each section should have a clear responsibility.

---

# 8. Design Direction

The landing page should feel:

- modern
- clean
- trustworthy
- professional
- slightly premium
- fast
- accessible

Avoid:

- excessive gradients
- excessive glassmorphism
- huge amounts of animation
- random floating blobs
- meaningless decorative elements
- excessive rounded cards
- generic "AI startup" aesthetics
- visual noise

Use whitespace intentionally.

Typography should create a clear hierarchy.

---

# 9. Landing Page Structure

Unless the user specifies another structure, use:

## Header

Include:

- logo / brand
- navigation
- authentication CTA
- responsive mobile navigation

The existing Header should be reused or extended rather than duplicated.

---

## Hero

The hero should contain:

- strong headline
- concise supporting paragraph
- primary CTA
- secondary CTA when useful
- visual/product preview if appropriate

The headline should explain the product rather than simply saying:

"Welcome to TontaTranokala".

Avoid meaningless marketing language.

---

## Social Proof / Trust

If appropriate:

- numbers
- benefits
- partner/customer indicators
- trust statements

Do not invent real customers, statistics or testimonials.

If no real data exists, omit fake social proof.

---

## Features

Present the most important product capabilities.

Use existing shadcn/ui components where appropriate.

Each feature should answer:

"What problem does this solve?"

Avoid feature lists that only describe technical implementation.

---

## How It Works

Explain the main user workflow in 3–4 steps.

Keep it simple.

---

## CTA

Finish with a strong call to action.

The CTA should lead to the existing registration/authentication route.

Do not create another authentication flow.

---

## Footer

Reuse the existing Footer component.

Do not create a second footer if one already exists.

---

# 10. Responsive Design

Mobile-first.

The landing page must work at:

- mobile
- tablet
- desktop
- large desktop

Check for:

- horizontal overflow
- broken navigation
- oversized text
- inaccessible buttons
- unreadable content
- excessive spacing

Do not solve responsiveness by hiding important content.

---

# 11. Accessibility

Follow basic accessibility rules.

Use:

- semantic HTML
- proper headings
- labels
- accessible buttons
- keyboard navigation
- sufficient contrast
- meaningful alt text for real images

Do not use divs as buttons.

Do not rely exclusively on color to communicate information.

---

# 12. Animations

Animations should be subtle and purposeful.

Prefer:

- opacity
- translate
- small scale
- hover transitions

Avoid:

- constant movement
- excessive parallax
- distracting animations
- animation that blocks interaction

Respect prefers-reduced-motion where practical.

---

# 13. Dependencies

Do not install new packages unless necessary.

Before installing a package:

1. Check package.json.
2. Check whether an existing dependency already solves the problem.
3. Prefer native CSS/Tailwind when possible.
4. Ask the user before adding a major dependency.

The package manager is:

pnpm

Do not use npm commands unless explicitly requested.

---

# 14. Existing Design System

Use the project's existing:

- Tailwind configuration
- CSS variables
- shadcn/ui components
- theme provider
- typography
- spacing conventions

Do not introduce an unrelated design system.

Do not hard-code an entirely separate color palette unless explicitly requested.

---

# 15. Icons

If icons are already available in the project, reuse them.

Do not install another icon library without checking the existing dependencies first.

Use icons to improve comprehension, not as decoration everywhere.

---

# 16. Images

Before adding external images:

- inspect whether the project already has assets
- prefer existing assets
- do not use copyrighted images without appropriate rights
- do not invent fake product screenshots

If a product mockup is needed and no real screenshot exists, create a UI representation using the project's components instead.

---

# 17. Code Quality

Use strict TypeScript.

Avoid:

- any
- unnecessary type assertions
- duplicated code
- giant components
- unused imports
- dead code
- console.log left in production code

Follow the project's existing naming conventions.

---

# 18. Do Not Break Existing Features

Before modifying shared components such as:

- Header
- Footer
- ThemeProvider
- Sidebar
- auth components
- root layout

inspect their existing usage.

A landing page change must not break:

- authentication
- dashboard
- Convex
- Better Auth
- theme switching
- existing routes

---

# 19. Validation

After implementing the landing page:

Run:

pnpm typecheck

if available.

Then run:

pnpm build

if available.

Also inspect the browser manually if possible.

Check:

- console errors
- hydration errors
- routing errors
- TypeScript errors
- responsive layout
- dark mode
- authentication links

Fix errors rather than hiding them.

---

# 20. Working Style

Do not make massive changes blindly.

Work incrementally:

1. inspect
2. plan
3. implement
4. verify
5. fix
6. polish

When modifying existing code, preserve unrelated functionality.

Explain important architectural decisions briefly.

---

# 21. Important Existing Architecture

The application currently uses:

ConvexBetterAuthProvider

with:

authClient

and:

ConvexQueryClient

Authentication is already connected through Better Auth and Convex.

The root layout contains authentication-aware rendering.

Do not replace this architecture when implementing the landing page.

---

# 22. Final Principle

The goal is not to produce "a beautiful AI-generated landing page".

The goal is to produce a landing page that looks like it belongs to TontaTranokala.

Every design decision should answer:

- What does TontaTranokala do?
- Who is it for?
- Why should the visitor care?
- What should the visitor do next?

Prioritize clarity, usability, consistency and maintainability over visual gimmicks.