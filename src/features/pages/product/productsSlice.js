import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'



const initialState = {
    status:'idle',
    entities:[],
    error:null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    const response = await fetch(`https://dummyjson.com/products`)
    return await response.json();
})

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchProducts.pending]:(state,action)=>{
            state.status = 'loading';
        },
        [fetchProducts.fulfilled]:(state,action)=>{
            state.status = 'success';
            state.entities = action.payload;
        },
        [fetchProducts.rejected]:(state,action)=>{
            state.status = 'failed';
            state.error = action.payload.error.message
        }
    }
})


export const productsSelector = state=>state.products.entities;
export default productsSlice.reducer;