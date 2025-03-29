import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + amount);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
