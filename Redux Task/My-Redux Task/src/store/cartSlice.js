import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
       // alert("Your Item Added to the cart");
      state.push(action.payload);
    },
    remove(state, action) {
        alert("Sure you want to remove from the cart?");
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;