import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { CartState, CartAction, CartItem } from '../types';

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newItems;
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
      );

      if (existingItemIndex > -1) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity;
      } else {
        newItems = [...state.items, action.payload];
      }
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };

    case 'REMOVE_ITEM':
      newItems = state.items.filter(
        item => !(item.id === action.payload.id && item.selectedSize === action.payload.size)
      );
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };

    case 'UPDATE_QUANTITY':
      newItems = state.items.map(item => {
        if (item.id === action.payload.id && item.selectedSize === action.payload.size) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

interface CartContextType extends CartState {
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('rove_cart');
      return savedCart ? JSON.parse(savedCart) : initialState;
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem('rove_cart', JSON.stringify(state));
  }, [state]);

  const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (id: string, size: string) => dispatch({ type: 'REMOVE_ITEM', payload: { id, size } });
  const updateQuantity = (id: string, size: string, quantity: number) => 
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, size, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
