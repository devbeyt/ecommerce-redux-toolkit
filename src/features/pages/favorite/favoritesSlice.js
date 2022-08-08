import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    entities:[],
    total:0,
}


const favoritesSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{}
})





export default favoritesSlice.reducer;