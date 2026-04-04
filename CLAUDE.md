# CLAUDE.md

## Project Overview

WAW Automobile — a Next.js mobile-first website for a German used car dealership. Built with TypeScript, React 19, and Tailwind CSS v4.

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — run ESLint

## Tech Stack

- Next.js 16, React 19, TypeScript 5
- Tailwind CSS v4 (PostCSS plugin)
- pnpm package manager
- Google Fonts: Anuphan (primary), Alumni Sans SC (secondary)

## Project Structure

- `src/app/` — Next.js app router (layout, page, globals.css)
- `src/components/` — reusable components (PascalCase)
- `src/components/sections/` — page sections (`Section[Name].tsx`)
- `public/images/` — static assets (SVGs, PNGs)

## Conventions

- All components are functional with hooks, TypeScript-typed props
- Client components use `"use client"` directive
- Tailwind utility classes inline (no CSS modules)
- Brand color: `--primary: #47af63`
- Mobile-first layout constrained to `max-w-[402px]`
- German language content (lang="de")
- Path alias: `@/*` → `./src/*`
- Always use named exports with `const` for components (e.g., `export const MyComponent = () => { ... }`), never default exports
- Component and file names should always be in English
- Name components with the general category first, then the specific variant (e.g., `CardService` not `ServiceCard`, `ButtonSubmit` not `SubmitButton`)
- Boolean variable names should start with `is`, `has`, `should`, `can`, or similar prefixes (e.g., `isOpen`, `hasError`, `shouldRender`)
- Use `interface` for component props, named `Props` if it's the only props interface in the file (e.g., `interface Props { ... }`)
