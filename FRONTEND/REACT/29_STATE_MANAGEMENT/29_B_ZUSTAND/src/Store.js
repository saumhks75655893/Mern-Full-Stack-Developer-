import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
const useMyStore = create(
  devtools(
    persist(
      (set, get) => ({
        count: 1,
        name: "himanshu kumar",
        increment: () => {
          set((state) => ({
            count: state.count + 1,
          }));
        },
        capitalize: () => {
          let { name } = get();
          set({
            name: name[0].toUpperCase() + name.slice(1),
          });
        },
      }),
      { name: "MyStore", storage: createJSONStorage(() => sessionStorage) },
    ),
  ),
);

export default useMyStore;
