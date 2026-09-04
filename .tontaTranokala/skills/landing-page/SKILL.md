# TontaTranokala Landing Page

## Project Context

You are working on **TontaTranokala**, a web application designed to help users save, organize, and manage important websites along with their related information.

The application provides a centralized place where users can keep track of websites they use and quickly retrieve important information related to those websites.

Users can save a website with information such as:

* Website URL
* Website name
* Description
* Login-related information
* Notes
* Other useful details

The main purpose of TontaTranokala is to help users avoid losing track of important websites and information.

The application already has its core functionality and authentication implemented.

Your responsibility is **ONLY to design and build the landing page**.

---

# Important Scope Rule

Do not modify:

* Authentication logic
* Login system
* Registration system
* Database schema
* Backend logic
* API routes
* Existing authentication providers
* Environment variables
* Existing core application functionality

Do not rewrite working parts of the project.

Focus exclusively on the public landing page and its UI components.

Before modifying existing files, inspect the current project structure and existing design system.

---

# Product Description

TontaTranokala is a personal website organization platform.

The platform helps users:

* Save important websites
* Organize websites in one place
* Store useful information related to websites
* Keep notes associated with websites
* Quickly search previously saved websites
* Edit or delete saved entries
* Access a history of important websites and information

The central idea is:

> Keep your important websites and information organized in one place.

The landing page should communicate this concept clearly and quickly.

A visitor should understand within a few seconds what TontaTranokala does.

---

# Main Goal

Create a modern, professional, visually attractive, and responsive landing page.

The landing page should convince visitors that TontaTranokala is a useful tool for organizing their digital life.

The main message should be:

> Stop losing important websites and information. Keep everything organized in one place.

The landing page should encourage users to:

* Create an account
* Start organizing their websites
* Explore the application

---

# Design Direction

The design should feel:

* Modern
* Clean
* Organized
* Minimal
* Professional
* Trustworthy
* Productive

The visual design should communicate:

* Organization
* Simplicity
* Digital productivity
* Easy access
* Centralization

Avoid:

* Generic AI-generated SaaS layouts
* Excessive gradients
* Too many floating cards
* Excessive animations
* Too many colors
* Overloaded interfaces
* Large blocks of text

Prefer:

* Strong typography
* Clean spacing
* Clear hierarchy
* Subtle borders
* Modern cards
* Simple icons
* Meaningful visuals
* Subtle interactions

The landing page should feel polished enough for a real production product.

---

# Landing Page Structure

The page should include the following sections.

---

## 1. Navigation

Create a clean and responsive navigation bar.

Include:

* TontaTranokala logo
* Home
* Features
* How It Works

Include authentication actions using the existing application routes:

* Sign In
* Get Started

Do not modify authentication logic.

The primary call-to-action should be visually distinct.

The navigation must work correctly on mobile devices.

---

# 2. Hero Section

The hero section must immediately explain the product.

Suggested headline:

> Keep your important websites in one place.

Alternative:

> Organize your digital world.

Alternative:

> Never lose an important website again.

Supporting text:

TontaTranokala helps you save, organize, and quickly find important websites and their related information.

Example:

> Save your favorite and important websites, organize useful information, and access everything whenever you need it.

Primary CTA:

**Get Started**

Secondary CTA:

**Learn More**

The hero should include a visual representation of the product.

Possible concepts:

* A preview of the website management interface
* A collection of organized website cards
* A clean dashboard preview
* URLs and notes organized in a simple interface

The hero visual should help visitors understand the product without requiring a long explanation.

---

# 3. Problem Section

Introduce the problem that TontaTranokala solves.

Example concept:

People use many websites every day.

Over time, they may:

* Forget important URLs
* Lose useful websites
* Forget which information belongs to which platform
* Keep information scattered across multiple places
* Waste time searching through browser history

Create a concise section communicating this problem.

Avoid long paragraphs.

---

# 4. Solution Section

Introduce TontaTranokala as the solution.

Possible headline:

> Everything important, organized in one place.

Explain that users can keep their important websites and related information together.

The section should visually demonstrate how the application solves the problem.

Possible visual layout:

* Website card
* Website information
* Notes
* Organization
* Quick access

Focus on clarity.

---

# 5. Features Section

Create a visually attractive features section.

The main features are:

## Save Important Websites

Save website URLs together with useful information.

## Organize Your Websites

Keep your saved websites organized and easy to access.

## Store Related Information

Keep useful notes and information associated with each website.

## Search Quickly

Find previously saved websites without searching through browser history.

## Edit Anytime

Update website information whenever necessary.

## Keep Your History

Access previously saved websites and information.

Each feature should have:

* A simple icon
* A clear title
* A short description

Avoid excessive text.

---

# 6. How It Works

Create a simple three-step process.

## Step 1 — Save

Add a website and its important information.

## Step 2 — Organize

Keep your websites and information in one centralized place.

## Step 3 — Access

Find and retrieve your information whenever you need it.

The section should be easy to understand at a glance.

---

# 7. Product Preview

Create a visual preview of how the application could look.

This section should showcase concepts such as:

* Saved website cards
* Website names
* URLs
* Descriptions
* Notes
* Search functionality
* Organized information

Use realistic mock data.

Do not create backend functionality solely for the landing page.

The preview can be static.

Focus on making the product understandable.

---

# 8. Benefits Section

Explain the benefits of using TontaTranokala.

Possible benefits:

### Stay Organized

Keep important websites in one centralized place.

### Save Time

Quickly find websites instead of searching through browser history.

### Keep Information Together

Store useful details alongside the websites they belong to.

### Access Information Easily

Retrieve important websites whenever you need them.

Keep descriptions short and clear.

---

# 9. Final Call To Action

Create a strong section near the bottom of the page.

Suggested headline:

> Start organizing your digital life today.

Supporting text:

> Keep your important websites and information organized and easy to access.

Primary CTA:

**Get Started for Free**

The button should use the existing registration route.

Do not modify authentication.

---

# 10. Footer

Create a clean and minimal footer.

Include:

* TontaTranokala logo
* Short product description
* Navigation links
* Important links
* Copyright

Do not overload the footer.

---

# Responsive Design

The landing page MUST work correctly on:

* Mobile
* Tablet
* Laptop
* Desktop

Follow a mobile-first approach.

Pay special attention to:

* Navigation
* Hero section
* Product preview
* Feature grid
* Buttons
* Typography
* Spacing

Avoid horizontal scrolling.

On smaller screens:

* Stack content vertically when necessary.
* Ensure buttons remain easy to use.
* Keep text readable.
* Simplify complex layouts.

---

# Component Architecture

Create reusable components when appropriate.

Suggested structure:

```text
components/
└── landing/
    ├── navbar.tsx
    ├── hero.tsx
    ├── problem.tsx
    ├── solution.tsx
    ├── features.tsx
    ├── how-it-works.tsx
    ├── product-preview.tsx
    ├── benefits.tsx
    ├── cta.tsx
    └── footer.tsx
```

However:

Always inspect the existing project structure first.

Follow existing naming conventions.

Do not create unnecessary components.

---

# UI Components

Use the existing UI libraries and components already installed in the project.

Before installing a new dependency:

1. Inspect package.json.
2. Inspect existing UI components.
3. Reuse existing components when possible.

Do not install a new library unless it provides a clear benefit.

Avoid dependency bloat.

---

# Typography

Use typography to create a strong hierarchy.

The hero headline should be:

* Clear
* Confident
* Easy to understand

Section headings should clearly communicate the purpose of each section.

Body text should remain concise.

Avoid:

* Extremely small text
* Too many font sizes
* Long paragraphs
* Decorative text that does not communicate useful information

---

# Icons

Use icons sparingly.

Icons should support understanding.

Good icon categories include:

* Link
* Folder
* Search
* History
* Edit
* Notes
* Organization

Do not use icons as decoration without purpose.

---

# Product Mock Data

For the landing page, realistic static mock data can be used.

Example:

```text
GitHub
github.com
Development projects and repositories.

Notion
notion.so
Personal notes and project planning.

Figma
figma.com
Design files and prototypes.

LinkedIn
linkedin.com
Professional network and career information.
```

Mock data should make the product preview feel realistic.

Do not create unnecessary API calls or database queries for landing page demonstrations.

---

# Animations

Use subtle animations only.

Possible interactions:

* Card hover effects
* Button transitions
* Small fade-in effects
* Smooth navigation interactions

Avoid:

* Heavy animations
* Constant movement
* Slow page loading
* Distracting effects

Animations should improve the experience, not become the main attraction.

---

# Accessibility

Ensure:

* Semantic HTML
* Accessible navigation
* Proper button labels
* Good text contrast
* Keyboard navigation
* Meaningful alt text

Do not sacrifice accessibility for visual effects.

---

# Code Quality

Use:

* TypeScript
* Clear component names
* Reusable components
* Existing project conventions

Avoid:

* `any`
* Duplicated code
* Large monolithic components
* Unnecessary client-side state
* Unnecessary dependencies

---

# Implementation Workflow

When working on the landing page:

1. Inspect the existing project structure.
2. Identify the landing page route.
3. Inspect the existing design system.
4. Inspect available UI components.
5. Preserve authentication and application logic.
6. Build the landing page section by section.
7. Reuse existing components.
8. Ensure mobile responsiveness.
9. Check for TypeScript errors.
10. Check that no unrelated functionality was modified.

---

# Final Quality Checklist

Before finishing, verify:

* The product purpose is understandable within seconds.
* The hero clearly explains TontaTranokala.
* The page has strong calls-to-action.
* The features are clearly presented.
* The product preview makes sense.
* The design works on mobile.
* Components are reusable.
* Existing authentication was not modified.
* Backend functionality was not modified.
* No unnecessary dependencies were added.
* TypeScript errors are resolved.

---

# Core Principle

The landing page should communicate one simple idea:

> TontaTranokala helps you save, organize, and quickly find your important websites and information.

Every design and development decision should reinforce this idea.

Build a landing page that feels modern, useful, trustworthy, and ready for production.
