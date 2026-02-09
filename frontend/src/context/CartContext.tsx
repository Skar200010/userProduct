import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
    productId: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
    stock: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: Omit<CartItem, "quantity">) => {
        setCart((prev) => {
            const existing = prev.find(
                (p) => p.productId === item.productId
            );

            if (existing) {
                if (existing.quantity >= existing.stock) {
                    return prev;
                }

                return prev.map((p) =>
                    p.productId === item.productId
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            }

            return [...prev, { ...item, quantity: 1 }];
        });
    };


    const updateQuantity = (productId: number, quantity: number) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.productId !== productId) return item;

                if (quantity < 1) return item;
                if (quantity > item.stock) return item;

                return { ...item, quantity };
            })
        );
    };


    const removeFromCart = (productId: number) => {
        setCart((prev) =>
            prev.filter((p) => p.productId !== productId)
        );
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
};
