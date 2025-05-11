import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types";

interface AuthState {
    access: string | null;
    refresh: string | null;
    user: User | null;
    login: (values: { access: string; refresh: string; user: User }) => void;
    logout: () => void;
}


export const useAuthStore = create<AuthState>()(
    persist((set) => ({
        access: null,
        refresh: null,
        user: null,
        login: ({ access, refresh, user }) => set({ access: access, refresh: refresh, user }),
        logout: () => set({ access: null, refresh: null, user: null }),
    }), {
        name: "auth-store",
    })
);