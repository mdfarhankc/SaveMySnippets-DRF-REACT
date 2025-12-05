import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types";

interface AuthState {
    access: string | null;
    refresh: string | null;
    authUser: User | null;
    login: (values: { access: string; refresh: string; authUser: User }) => void;
    logout: () => void;
    setAuth: (partial: { access?: string | null; refresh?: string | null; authUser?: User | null }) => void;
    setAuthUser: (user: User | null) => void;
}


export const useAuthStore = create<AuthState>()(
    persist((set) => ({
        access: null,
        refresh: null,
        authUser: null,
        login: ({ access, refresh, authUser }) => set({ access, refresh, authUser }),
        logout: () => set({ access: null, refresh: null, authUser: null }),
        setAuth: (partial) => set(partial),
        setAuthUser: (user) => set({ authUser: user }),
    }), {
        name: "auth-store",
    })
);