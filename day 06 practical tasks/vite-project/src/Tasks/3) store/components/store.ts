import { create } from "zustand";

interface Product{
    id: number;
    title: string;
    image: string;
    price: number;
}

interface forCart{
    products: Product[]
    count: number;
    price: number;
    addProduct: (id: number, title: string, image: string, price: number) => void;
    deleteProduct: (id: number) => void;
}

export const Cart = create<forCart>(set => ({
    products: [],
    count: 0,
    price: 0,
    addProduct: (id, title, image, price) => set(state => ({
        products: [...state.products, {id: id, title: title, image: image, price: price}],
        count: state.count + 1,
        price: Number((state.price + price).toFixed(2))
    })),
    deleteProduct: (id) => set((state) => {
        const idx = state.products.findIndex((p) => p.id === id);
        if (idx === -1) return state;

        const newProducts = [...state.products];
        newProducts.splice(idx, 1);

        const newPrice = newProducts.reduce((sum, p) => sum + p.price, 0);

        return {
            products: newProducts,
            count: newProducts.length,
            price: Number(newPrice.toFixed(2)),
        }
    }),
}))