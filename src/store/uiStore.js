import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
      partialize: (state) => ({
        theme: state.theme, // Only persist the theme setting
      }),
    }
  )
);

// Function to apply theme class on initial load and when theme changes
export const applyTheme = () => {
  const currentTheme = useUiStore.getState().theme;
  const root = document.documentElement; // Get the <html> element
  if (currentTheme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

// Apply theme on initial load
applyTheme();

// Subscribe to theme changes to update the class
useUiStore.subscribe(
  (state) => state.theme,
  applyTheme // Call applyTheme whenever the theme state changes
);

export default useUiStore;
