import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AppState {
  // Cart State
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  
  // User State
  user: User | null;
  setUser: (user: User | null) => void;
  
  // Filters State
  filters: {
    category: string;
    search: string;
    sortBy: string;
  };
  setFilters: (filters: Partial<AppState['filters']>) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      // Cart
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
              ),
            };
          }
          return { cart: [...state.cart, item] };
        }),
      removeFromCart: (itemId) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.id !== itemId),
        })),
      updateQuantity: (itemId, delta) =>
        set((state) => ({
          cart: state.cart.map((i) =>
            i.id === itemId ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
          ),
        })),
      clearCart: () => set({ cart: [] }),

      // User
      user: null,
      setUser: (user) => set({ user }),

      // Filters
      filters: {
        category: 'all',
        search: '',
        sortBy: 'newest',
      },
      setFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        })),
    }),
    {
      name: 'premium-app-storage',
      partialize: (state) => ({ cart: state.cart, user: state.user }), // Persist only cart and user
    }
  )
);
