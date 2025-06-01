import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
  },
  reducers: {
    toggleLike: (state, action) => {
      const product = action.payload;
      const exists = state.items.find(item => item.id === product.id);
      if (exists) {
        state.items = state.items.filter(item => item.id !== product.id);
      } else {
        state.items.push(product);
      }
    },
  },
});

export const { toggleLike } = wishlistSlice.actions;
export default wishlistSlice.reducer;
