# React + TypeScript + Tailwind CSS Starter

This project is a boilerplate for building modern web applications using **React**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Sreenidhi-Rajeshbabu/RockfallPredictionUI
cd RockfallPredictionUI
```

### 2. Install Dependencies
Make sure you have **Node.js (>= 16)** and **npm** or **yarn** installed.

```bash
# using npm
npm install
```

### 3. Run the Development Server
```bash
# using npm
npm run dev
```

The app should now be running at:  
👉 [http://localhost:5173](http://localhost:5173) (if using Vite)

---

## ⚙️ Configuration

### Tailwind Setup
Tailwind is already configured in:
- `tailwind.config.js`
- `postcss.config.js`
- `src/index.css`

Example usage:
```tsx
export default function Button() {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      Click Me
    </button>
  );
}
```

### TypeScript
TypeScript is pre-configured with sensible defaults (`tsconfig.json`).

---

## 🛠️ Available Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build production files
npm run preview   # Preview production build
npm run lint      # Run ESLint checks
```
