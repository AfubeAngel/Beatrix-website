import { create } from "zustand";

interface NavState {
  previousRoute: string | null;
  currentRoute: string | null;
  setRoute: (route: string) => void;
}

export const useNavigationStore = create<NavState>((set, get) => ({
  previousRoute: null,
  currentRoute: null,
  setRoute: (route) =>
    set({
      previousRoute: get().currentRoute,
      currentRoute: route,
    }),
}));
