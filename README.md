# 93 Kitchen 2 — Figma Hi-Fi Website

**The only repository to edit/import from now on:** `raedzeidan/93-kitchen-2`.

Source of truth: [93Kitchen-new Figma Design](https://www.figma.com/design/1lyrLGHubD9KHHevKfPW4g/93Kitchen-new?node-id=0-1).

## Why earlier Figma Make publishing did not fix the UI

The old implementation was a generic customer storefront and generic admin table template, **not** a one-to-one implementation of the dozens of high-fidelity Figma screens. Replacing CSS and images cannot add missing markup/cards/flows. Also, the app imported UI code from a separate JS module, and remote-font loading was fragile; using multiple Make projects and copies of the source created uncertainty about which code actually got published.

This repository will contain a complete independent build, not an incremental changes-only overlay or a reference to another repository. **Do not copy only CSS files into the old Figma Make project.** Clone/import this repository as a project.

- Responsive RTL customer web experience, original Figma layout and design tokens.
- Customer menu, allergy filtering, cart, subscription plans, location popup, 4-week planner, identity/guest forms, review, two payment paths, account and history.
- Eight distinct restaurant dashboards: overview, orders, subscriptions, daily/weekly/monthly menu management, customers and messages, complaints, finance and permission matrix.
- Real original artwork/assets sourced from the approved Figma designs.
- Dedicated entry HTML, explicit Google Fonts Cairo load, and build identifier.

## Important

Frontend demos do not implement real authentication, payment, staff authorization, delivery verification or data persistence on a server. Data entry and previews in localStorage are UX prototypes, **not production**. Never rely on client-side permission checks to protect real customer/payment data.

## How to use in Figma Make

Use **Clone from GitHub** with `raedzeidan/93-kitchen-2` `main` as an entirely new source project. Run the preview and publish **that Make project** (not the older 93Kitchen2 deployment) after checking its build identifier. This avoids mixing old JS/CSS with a newer partial bundle.

Build stamp: `93K2-2026-11-22-01`.
