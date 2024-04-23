import React, { createContext, useContext, useReducer } from 'react';

// Loo uus kontekst
export const CartContext = createContext();

// Algseisund
const initialState = {
  cartItems: [],
};

// Redutseerija funktsioon
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Lisage toode ostukorvi
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      if (existingItem) {
        // Kui toode on juba ostukorvis, suurendage selle kogust
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === newItem.id ? { ...item, qty: item.qty + newItem.qty } : item
          ),
        };
      } else {
        // Kui toode ei ole ostukorvis, lisage see sinna
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }
    case 'REMOVE_FROM_CART':
      // Eemaldage toode ostukorvist
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== id),
      };
    default:
      return state;
  }
};

// CartProvider komponent
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Kohandatud kohandatud hook
export const useCart = () => useContext(CartContext);
