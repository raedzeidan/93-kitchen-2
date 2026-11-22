# 93 Kitchen 2 — Complete Figma Hi-Fi implementation

**Source of truth:** [93Kitchen-new (Figma Design)](https://www.figma.com/design/1lyrLGHubD9KHHevKfPW4g/93Kitchen-new?node-id=0-1).

**Use this repository only:** [raedzeidan/93-kitchen-2](https://github.com/raedzeidan/93-kitchen-2).

This is a **self-contained website project**, not a CSS patch bundle. Do not paste only its CSS or image files into an older Figma Make project. Create a fresh Figma Make project by using **Clone from GitHub** and selecting this repository `main`.

## Root cause of earlier missing screens

The earlier React/Vite repository included a generic customer storefront, a single `dashboard()` renderer whose menu, subscriptions, complaints, finance and employee permissions screens shared the **same simple table template**, and a long CSS override. Copying styles and imagery never created the absent dashboards, cards, permissions, scheduling controls or workflows.

This revision includes:

- Homepage at Figma desktop layout: centered transparent hero, real menu images, four meal cards, 3 subscription cards, delivery coverage, chef/photo split About panel, reviews, FAQs and footer.
- Full menu with nine photographed products and categorization, allergies, cart and guest checkout.
- Customer subscriptions: verify area, monthly/trial plans, four-week 20-meal planner, sign in/sign up/guest details, review, CliQ/restaurant payment selection, pending/success states, account/order history.
- Distinct restaurant dashboard sections matching Figma: **overview** (4 KPIs, orders, alerts, quick actions), **orders** (KPIs, table, selected order), **subscriptions** (KPIs, table, updates), **menu** (daily/weekly/monthly schedule, day cards, table, edit/publish), **customers** (KPIs, directory, chat and customer file), **complaints** (KPIs, case follow-up), **finance** (KPIs, transactions and revenue channels) and **permissions** (employee directory and 7×4 interactive permission grid).
- White administrative canvas, 255px right sidebar, rounded clean cards, original green/orange tokens, responsive design and hover/focus states.
- **Cairo** loaded in `index.html` and explicitly applied to every text input, menu and heading. Figma font size examples: homepage hero 34px, section headings 26px, dashboard page titles 27px.
- Build identification: `93K2-2026-11-22-01`.

## Figma Make — import the correct project

1. Open Figma Make and create a **new Make file**.
2. Choose **Clone from GitHub** and select `raedzeidan/93-kitchen-2`, branch `main`.
3. Verify the preview contains: 4 homepage meal cards, 3 subscription cards, all 8 admin sidebar entries, and menu scheduler + permission matrix.
4. Publish **this** Make project, rather than republishing your older Figma Make file which may still have stale or mixed code.
5. In browser developer tools: `document.documentElement.dataset.build` must read `93K2-2026-11-22-01`. If it is absent, the published site is running the wrong build.

**Important:** Importing a repo and uploading individual files are different operations. If Figma Make is using an existing older project, replacing a couple files might leave its app component or CSS overrides in place. Only a clean clone from this repo establishes a reproducible source of truth.

## Project structure

```
index.html               Cairo font + metadata + build marker
src/main.tsx             React entry
src/App.tsx              Application mount
src/site/app.ts          All client and employee views / interactions
src/site/styles.css      Complete Hi-Fi and dashboard design styling
public/assets/          Original Figma art / photos
scripts/verify.mjs      Static project integrity QA
package.json, pnpm-lock.yaml, vite.config.ts, tsconfig.json
```

## Run / QA

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm dev
```

Static code checks can confirm required screens, images and route declarations; **they cannot prove screenshot pixel-parity**. Browser QA is still needed after import and publication.

## Integration / safety

This is a **front-end prototype**. Hardcoded prices, employees, order and customer records are UI examples, not live records. LocalStorage is not a secure database. Never treat demo sign-in, customer profile data, role checkboxes, reference QR or CliQ buttons as production payments, authorization or financial reconciliation. Integrate an authenticated server-side API, real store menu, coverage/fees, product rules, payment confirmations, customer data, staff RBAC and audit logging before accepting real orders.
