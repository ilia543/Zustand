import { create } from "zustand";

interface RecipeStore {
    recipes: Recipe[];
    addRecipe: (recipe:Recipe) => void;
    removeRecipe: (id: number) => void;
}

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
}

export const useStore = create<RecipeStore>((set) => ({
    recipes: [],
    addRecipe: (recipe) => set(state => ({recipes: [...state.recipes, recipe]})),
    removeRecipe: (id) => set(state => ({recipes: state.recipes.filter(el => el.id !== id)}))
}));