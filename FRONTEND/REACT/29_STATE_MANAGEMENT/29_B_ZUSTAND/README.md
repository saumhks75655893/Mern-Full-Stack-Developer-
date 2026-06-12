# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# # Store.js — explained
This project uses a small Zustand store defined in src/Store.js. Below is a concise explanation of every import, variable, and component in that file.

# # Imports

create (from "zustand"): factory that creates the store hook (returns a hook like useMyStore).
persist, devtools, createJSONStorage (from "zustand/middleware"):
persist: enables saving/restoring state to persistent storage.
devtools: connects the store to Redux DevTools for inspection/time-travel.
createJSONStorage: wraps a storage backend (localStorage/sessionStorage) to handle JSON serialization.
Store hook

# export default useMyStore:
useMyStore is the hook you import and call in components:
const count = useMyStore(s => s.count)
const increment = useMyStore(s => s.increment)
Middleware composition

# The store is created using devtools(persist(...)):
persist((set, get) => ({ ... }), { name: "MyStore", storage: createJSONStorage(() => sessionStorage) })
name: storage key "MyStore" used in sessionStorage.
storage: uses sessionStorage, so persisted state survives reloads but is cleared when the tab/window closes.
devtools wraps the persisted store for better debugging in development.
State values and actions (inside the state factory)

# count: 1
initial numeric state. Access via useMyStore(s => s.count).
name: "himanshu kumar"
initial string state. Access via useMyStore(s => s.name).
increment: () => set(state => ({ count: state.count + 1 }))
action to increment count. Call from components: const inc = useMyStore(s => s.increment); inc();
capitalize: () => { let { name } = get(); set({ name: name[0].toUpperCase() + name.slice(1) }) }
action that capitalizes the first character of name.
Implementation uses get() to read current state and set() to update it.
Note: this will throw if name is empty; consider adding a guard (if (!name) return).
Persistence notes

Only serializable state (count, name) is saved to sessionStorage under key "MyStore". Functions (actions) are recreated when the store initializes and are not stored in sessionStorage.
To persist across browser restarts use localStorage (createJSONStorage(() => localStorage)).
To avoid persisting certain fields use persist's partialize option.
Quick suggestions

Add guard in capitalize to avoid errors with empty name.
Use partialize to control what gets persisted.
Keep devtools in development only if desired.