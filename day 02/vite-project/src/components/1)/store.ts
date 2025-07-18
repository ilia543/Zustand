import { create } from "zustand";

interface Meals {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

interface Storestate{
    meals: Meals[];
    searchQuery: string;
    setMeals: (meals: Meals[]) => void;
    setSearchQuery: (query: string) => void;
}

export const useStore = create<Storestate>((set) => ({
    meals: [],
    searchQuery: '',
    setMeals: (meals: Meals[]) => set({meals}),
    setSearchQuery: (query: string) => set({searchQuery: query})
}));