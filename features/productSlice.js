import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  value: 0,
  price: 0,
  total: 0
};

export const productSlice = createSlice({
  name: 'products', 
  initialState,
  reducers: {
    updateTotalItems(state, action) {
      state.total = action.payload;
    },

    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.amount++;
      } else {
        state.products.push({ ...newItem, amount: 1 });
      }
      calculateTotal(state);
    },
    
    increaseAmount(state, { payload }) {
      const item = state.products.find((product) => product.id === payload);
      if (item) {
        item.amount += 1;
        calculateTotal(state);
      }
    },
    
    decreaseAmount(state, { payload }) {
      const item = state.products.find((product) => product.id === payload);
      if (item && item.amount > 0) {
        item.amount -= 1;
        calculateTotal(state);
      }
    },

    removeItem(state, { payload }) {
      state.products = state.products.filter(item => item.id !== payload);
      calculateTotal(state);
    },
  }
});

export const { addItem, decreaseAmount, increaseAmount, removeItem, updateTotalItems } = productSlice.actions;

export default productSlice.reducer;

// Function to calculate total and subtotal
const calculateTotal = (state) => {
  let price = 0;
  let total = 0;

  state.products.forEach((product) => {
    total += product.amount;
    price += product.amount * product.price;
  });

  state.price = price;
  state.total = total;
};
