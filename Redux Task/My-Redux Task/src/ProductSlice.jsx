import {createSlice} from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
    name : 'Product',
    initialState: 0,
    reducers: {
        increment: (state)=> state + 1,
        decrement: (state)=> state -1,
        reset:()=>0, 
    }
});

export const {increment, decrement, reset} = ProductSlice.actions;
export default ProductSlice.reducer;