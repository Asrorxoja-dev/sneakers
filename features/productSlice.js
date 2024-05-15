import { combineReducers, createSlice } from '@reduxjs/toolkit';


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
      state.totalItems = action.payload;
    },
  addItem: (state, action) => {
    const newItem = action.payload;
    const existingItem = state.products.find(item => item.id === newItem.id);

    if (existingItem) {
    
      existingItem.amount++;
    } else {
     
      state.products.push({ ...newItem, amount: 1 });
    }
    state.total = state.products.reduce((acc, item) => acc + item.amount, 0);
    state.subtotal = state.products.reduce((acc, item) => acc + item.price * item.amount, 0);
  
  },
    
    increaseAmount: (state, { payload }) => {
      const item = state.products.find((product) => product.id === payload);
      if (item) {
        item.amount += 1;
        productSlice.caseReducers.calculateTotal(state);
      }
    },
    
    decreaseAmount: (state, { payload }) => {
      const item = state.products.find((product) => product.id === payload);
      if (item) {
        item.amount -= 1;
        productSlice.caseReducers.calculateTotal(state);
      }
    },

   removeItem:(state, {payload})=>{
    productSlice.caseReducers.calculateTotal(state)
   },

   calculateTotal: (state) => {
    let price = 0;
    let total = 0;
  
    state.products.forEach((product) => {
      total += product.amount;
      price += product.amount * product.price;
    });
  
    state.price = price;
    state.total = total;
  },
  
  }
});


export const { addItem, decreaseAmount, increaseAmount, calculateTotal, removeItem, updateTotalItems } = productSlice.actions;


export default productSlice.reducer;
