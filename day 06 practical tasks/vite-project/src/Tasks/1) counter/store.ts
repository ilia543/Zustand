import { create } from "zustand";
import { persist } from "zustand/middleware";


interface Count {
    count: number;
    increase: () => void;
    decrease: () => void;
    reset: () => void;
}

export const Counter = create(
    persist<Count>(
    (set) => ({
        count: 0,
        increase: () => set((state) => ({ count: state.count + 1 })),
        decrease: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set(() => ({count: 0}))
    }),
    {
        name: 'count'
    }
))