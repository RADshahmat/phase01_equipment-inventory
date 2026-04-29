# React Auth Flow (TypeScript + Vite)

A simple authentication flow built with **React 18, TypeScript, Vite, and React Router**.
This project demonstrates how to implement a **login system with protected routes and persistent auth using localStorage**.

---

## Features

- Login with **email & password (mock validation)**
- Global auth state using **Context API**
- **Protected routes** using React Router (`<Outlet />`)
- **Persistent login** using `localStorage`
- Logout functionality
- Inline-styled UI (no external CSS framework)

---

## 📁 Project Structure

```
src/
 ├── main.tsx
 ├── App.tsx
 ├── context/
 │    └── AuthContext.tsx
 ├── pages/
 │    ├── Login.tsx
 │    ├── Dashboard.tsx
 ├── routes/
 │    └── ProtectedRoute.tsx
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/RADshahmat/phase01_static-equipment-inventory.git
cd phase01_static-equipment-inventory/success_checks_phase01/p1.2_React-auth-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open: `http://localhost:5173`

---

## Demo Credentials

```
Email: admin@test.com
Password: 1234
```

---

## Authentication Flow

### Login

- User enters **email & password**
- Credentials are validated (mock logic)
- On success:
  - User data is saved in `localStorage`
  - Global state (`AuthContext`) is updated
  - User is redirected to Dashboard

---

### Protected Route

- Uses a custom `ProtectedRoute` component
- If `user` exists → renders `<Outlet />`
- If not → redirects to `/login`

---

### Persistence

- On app load:
  - `localStorage` is checked
  - User state is initialized using `useState`

- This keeps the user logged in after refresh

---

### Logout

- Clears `localStorage`
- Resets user state
- Redirects back to login page

---

## Key Concepts Used

- React Hooks:
  - `useState`
  - `useContext`

- Context API (global auth state)
- React Router v6:
  - `<Routes>`
  - `<Route>`
  - `<Navigate>`
  - `<Outlet>`

- Local Storage for persistence
- Controlled form inputs

---

## Important Notes

- This is a **frontend-only mock authentication system**
- Password is **not secure** (hardcoded validation)
- No backend or JWT is used

---

## Future Improvements

- Integrate real backend (Node.js / Express)
- Implement JWT-based authentication
- Add form validation (e.g., email format, password rules)
- Replace inline styles with Tailwind CSS
- Add loading states and error handling
- Use TanStack Query for API state management

---

## Summary

This project demonstrates a **basic but realistic auth flow** used in many React applications:

- Login → Store user → Protect routes → Persist session → Logout

---

## 👨‍💻 Author

Built as part of learning **React 18 + TypeScript authentication patterns**.
