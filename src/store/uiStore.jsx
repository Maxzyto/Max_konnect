import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * @typedef {Object} UiStoreState
 * @property {"light" | "dark"} theme
 * @property {() => void} toggleTheme
 * @property {(themeValue: "light" | "dark") => void} setTheme
 * @property {boolean} isMobileSidebarOpen
 * @property {() => void} toggleMobileSidebar
 * @property {() => void} closeMobileSidebar
 */

const useUiStore = create(
  persist(
    (set, get) => ({
      // --- Theme State ---
      theme: "light", // 'light' or 'dark'
      toggleTheme: () =>
        set({ theme: get().theme === "light" ? "dark" : "light" }),
      setTheme: (themeValue) => set({ theme: themeValue }), // Allow setting directly

      // --- Mobile Sidebar State ---
      isMobileSidebarOpen: false,
      toggleMobileSidebar: () =>
        set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
      closeMobileSidebar: () => set({ isMobileSidebarOpen: false }),
    }),
    {
      name: "ui-settings", // Unique name for storage
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme }), // Only persist the theme setting
    }
  )
);


const applyTheme = () => {
  const currentTheme = /** @type {"light" | "dark"} */ (useUiStore.getState().theme);
  const root = document.documentElement; // Get the <html> element
  if (currentTheme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

applyTheme();

// Subscribe to theme changes to update the class
useUiStore.subscribe((state) => {
  if (state.theme) {
    applyTheme(); // Call applyTheme whenever the theme state changes
  }
});

export default useUiStore;
