import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'



export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    const response = await fetch(`https://fakestoreapi.com/products`)
    return await response.json()
})


const initialState = {
    status:'idle',
    entities:[],
    error:null
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        searchByProductName:(state,action)=>{
            const filterBySearch = state.entities.filter(product=>product.title.includes(action.payload))
            console.log(filterBySearch)
            if(filterBySearch){
                state.entities = filterBySearch;
            }
                
        }
    },
    extraReducers:{
        [fetchProducts.pending]:(state,action)=>{
            state.status = "loading";
        },
        [fetchProducts.fulfilled]:(state,action)=>{
            state.status = 'success';
            state.entities = action.payload;
        },
        [fetchProducts.rejected]:(state,action)=>{
            state.status = "failed";
            state.error = action.payload.error.message
        }
    }
})


export const productsSelector = state=>state.products.entities;
export const {searchByProductName} = productsSlice.actions;
export default productsSlice.reducer;