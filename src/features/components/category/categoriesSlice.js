import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    status:'idle',
    entities:[],
    error:null
}



export const fetchCategories = createAsyncThunk('categories/fetchCategories', async ()=>{
    const response = await fetch(`https://dummyjson.com/products/categories`)
    return await response.json()
})

const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchCategories.pending]:(state,action)=>{
            state.status = "loading";
        },
        [fetchCategories.fulfilled]:(state,action)=>{
            state.status = 'success';
            state.entities = action.payload;
        },
        [fetchCategories.rejected]:(state,action)=>{
            state.status = "failed";
            state.error = action.payload.error.message
        }
    }
})


export const categoriesSelector = state=>state.categories.entities;
export default categoriesSlice.reducer;