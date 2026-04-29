## Running the Main Capstone Project

1. Clone the repository
   git clone https://github.com/RADshahmat/phase01_static-equipment-inventory.git
   cd phase01_static-equipment-inventory

2. Run Backend
   cd backend
   npm install
   npm run dev

   Backend runs on:

3. Run Frontend

Open a new terminal:

cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173

🧪 Running success_checks p1.2-React-auth-app (Standalone)

Each Success-checks is fully independent.

## React Auth App (Phase 1.2 Success Check)
cd succcess_checks_phase01/p1.2_React-auth-app
npm install
npm run dev

Runs on:

http://localhost:5174 (or next available port)

## Features:
Login form
AuthContext
Protected routes using <Outlet>
localStorage-based auth
📄 Running Proofs

success_checks are some small demonstrations and do not require full setup for all.

## Phase 1 — Foundations

### P1.1 TypeScript

- **Goal:** types, interfaces, generics, union/intersection, utility types (`Partial`, `Pick`, `Omit`, `Record`), narrowing.
- **Resources:** _TypeScript Handbook_ (official). _Total TypeScript_ Beginners Tutorial (free tier).
- **How InfraSight uses it:** every Node backend and both frontends are in TS. Main stack uses TS 4.9; CMS stack uses TS ~5.7–5.8. Each feature module carries its own `*.interface.ts` alongside services and repositories.
- **Success check:** in your Phase 0 capstone, add a `Device` type, a `LogEntry` type, and infer one of them from a schema. No `any`.

### P1.2 React 18

- **Goal:** components, JSX, props, state, hooks (`useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`), context, lifting state, forms, routing.
- **Resources:** _react.dev_ official tutorial (the new one, not the legacy docs). _Josh Comeau_ blog posts for effects.
- **How InfraSight uses it:** two frontends — an older React 18 + CRA Monitoring Dashboard and a newer React 19 + Vite CMS Admin Panel. Both use a `ProtectedRoute`-style pattern and an `AuthContext`.
- **Success check:** build a standalone app with a login form, a protected route that renders an `<Outlet>`, and a fake `AuthContext` that reads from `localStorage`.

### P1.3 Node.js runtime

- **Goal:** event loop, `require` vs ESM imports, `process.env`, streams at a conceptual level, `npm` + `package.json` + lockfiles.
- **Resources:** _Node.js docs — Getting Started_. _Node.js Design Patterns_ Ch. 1–2 (for the event loop).
- **How InfraSight uses it:** every backend runs Node 18. Some services mix CommonJS and ESM; others are strict ESM. Each service has its own `package.json` — there is no shared/workspace package.
- **Success check:** write a script that reads `.env`, hits an API, writes JSON. Run it under both strict-ESM and CommonJS configs — explain the differences.

### P1.4 SQL (PostgreSQL)

- **Goal:** `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `JOIN`s, `GROUP BY`, subqueries, indexes, primary/foreign keys, transactions.
- **Resources:** _PostgreSQL Tutorial_ (postgresqltutorial.com). _Use the Index, Luke!_ (free book — markus-winand.at).
- **How InfraSight uses it:** ~30 Postgres tables, **no ORM**. All SQL is raw, hand-written in repository classes. The largest table is an equipment-to-rack mapping table joined by most read paths. Each service opens its own connection pool.
- **Success check:** spin up a local Postgres container, create a schema with three related tables, write a three-way JOIN, add a supporting index, and explain its effect with `EXPLAIN`.

### 🛠️ Capstone — **Static Equipment Inventory**

A read-only single-page React + TS app that displays a list of servers and switches with filters by type and manufacturer.

- **Build:** local Postgres seeded by a Node script with ~50 rows of fake equipment. A Node CLI dumps rows to `public/equipment.json`. React + TS app fetches the JSON and renders a filterable table.
- **Deliverables:** `npm run seed` (Node + `pg`), `npm start` (CRA or Vite, your choice), filter by type + make, row-click opens a detail view.
- **Stretch:** live search by a free-text `tag` field.
- **Prepares you for:** InfraSight's Equipment list pages in the CMS Admin Panel.

---
